import { createClient } from '@vitest/ws-client'
import type { ResolvedConfig } from 'vitest'
import type { CancelReason, VitestRunner } from '@vitest/runner'
import { createBrowserRunner } from './runner'
import { importId } from './utils'
import { setupConsoleLogSpy } from './logger'
import { createSafeRpc, rpc, rpcDone } from './rpc'
import { setupDialogsSpy } from './dialog'
import { BrowserSnapshotEnvironment } from './snapshot'
import { VitestBrowserClientMocker } from './mocker'

export const PORT = import.meta.hot ? '51204' : location.port
export const HOST = [location.hostname, PORT].filter(Boolean).join(':')
export const ENTRY_URL = `${
  location.protocol === 'https:' ? 'wss:' : 'ws:'
}//${HOST}/__vitest_api__`

let config: ResolvedConfig | undefined
let runner: VitestRunner | undefined
const browserHashMap = new Map<string, [test: boolean, timestamp: string]>()

const url = new URL(location.href)
const testId = url.searchParams.get('id') || 'unknown'

function getQueryPaths() {
  return url.searchParams.getAll('path')
}

let setCancel = (_: CancelReason) => {}
const onCancel = new Promise<CancelReason>((resolve) => {
  setCancel = resolve
})

export const client = createClient(ENTRY_URL, {
  handlers: {
    onCancel: setCancel,
  },
})

const ws = client.ws

async function loadConfig() {
  let retries = 5
  do {
    try {
      await new Promise(resolve => setTimeout(resolve, 150))
      config = await client.rpc.getConfig()
      return
    }
    catch (_) {
      // just ignore
    }
  }
  while (--retries > 0)

  throw new Error('cannot load configuration after 5 retries')
}

ws.addEventListener('open', async () => {
  await loadConfig()

  const { getSafeTimers } = await importId('vitest/utils') as typeof import('vitest/utils')
  const safeRpc = createSafeRpc(client, getSafeTimers)

  // @ts-expect-error untyped global for internal use
  globalThis.__vitest_browser__ = true
  // @ts-expect-error mocking vitest apis
  globalThis.__vitest_worker__ = {
    config,
    browserHashMap,
    // @ts-expect-error untyped global for internal use
    moduleCache: globalThis.__vi_module_cache__,
    rpc: client.rpc,
    safeRpc,
    durations: {
      environment: 0,
      prepare: 0,
    },
  }
  // @ts-expect-error mocking vitest apis
  globalThis.__vitest_mocker__ = new VitestBrowserClientMocker()

  const paths = getQueryPaths()

  const iFrame = document.getElementById('vitest-ui') as HTMLIFrameElement
  iFrame.setAttribute('src', '/__vitest__/')

  await setupConsoleLogSpy()
  setupDialogsSpy()
  await runTests(paths, config!)
})

async function runTests(paths: string[], config: ResolvedConfig) {
  // need to import it before any other import, otherwise Vite optimizer will hang
  const viteClientPath = '/@vite/client'
  await import(viteClientPath)

  const {
    startTests,
    setupCommonEnv,
    takeCoverageInsideWorker,
  } = await importId('vitest/browser') as typeof import('vitest/browser')

  const executor = {
    executeId: (id: string) => importId(id),
  }

  if (!runner) {
    const { VitestTestRunner } = await importId('vitest/runners') as typeof import('vitest/runners')
    const BrowserRunner = createBrowserRunner(VitestTestRunner, { takeCoverage: () => takeCoverageInsideWorker(config.coverage, executor) })
    runner = new BrowserRunner({ config, browserHashMap })
  }

  onCancel.then((reason) => {
    runner?.onCancel?.(reason)
  })

  if (!config.snapshotOptions.snapshotEnvironment)
    config.snapshotOptions.snapshotEnvironment = new BrowserSnapshotEnvironment()

  try {
    await setupCommonEnv(config)
    const files = paths.map((path) => {
      return (`${config.root}/${path}`).replace(/\/+/g, '/')
    })

    const now = `${new Date().getTime()}`
    files.forEach(i => browserHashMap.set(i, [true, now]))

    for (const file of files)
      await startTests([file], runner)
  }
  finally {
    await rpcDone()
    await rpc().onDone(testId)
  }
}
