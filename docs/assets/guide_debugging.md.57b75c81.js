import{_ as s,j as n,k as o,V as a}from"./chunks/framework.8939a477.js";const D=JSON.parse('{"title":"Debugging | Guide","description":"","frontmatter":{"title":"Debugging | Guide"},"headers":[],"relativePath":"guide/debugging.md","filePath":"guide/debugging.md","lastUpdated":1690470465000}'),l={name:"guide/debugging.md"},p=a(`<h1 id="debugging" tabindex="-1">Debugging <a class="header-anchor" href="#debugging" aria-label="Permalink to &quot;Debugging&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>When debugging tests you might want to use <code>--test-timeout</code> CLI argument to prevent tests from timing out when stopping at breakpoints.</p></div><h2 id="vscode" tabindex="-1">VSCode <a class="header-anchor" href="#vscode" aria-label="Permalink to &quot;VSCode&quot;">​</a></h2><p>Quick way to debug tests in VSCode is via <code>JavaScript Debug Terminal</code>. Open a new <code>JavaScript Debug Terminal</code> and run <code>npm run test</code> or <code>vitest</code> directly. <em>this works with any code ran in Node, so will work with most JS testing frameworks</em></p><p><img src="https://user-images.githubusercontent.com/5594348/212169143-72bf39ce-f763-48f5-822a-0c8b2e6a8484.png" alt="image"></p><p>You can also add a dedicated launch configuration to debug a test file in VSCode:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#758575DD;">// For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#B8A965;">version</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">0.2.0</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#B8A965;">configurations</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">[</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#B8A965;">type</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">node</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#B8A965;">request</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">launch</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#B8A965;">name</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">Debug Current Test File</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#B8A965;">autoAttachChildProcesses</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">true</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#B8A965;">skipFiles</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">[</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">&lt;node_internals&gt;/**</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">**/node_modules/**</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">],</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#B8A965;">program</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">\${workspaceRoot}/node_modules/vitest/vitest.mjs</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#B8A965;">args</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">[</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">run</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">\${relativeFile}</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">],</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#B8A965;">smartStep</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">true</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#B8A965;">console</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">integratedTerminal</span><span style="color:#C98A7D99;">&quot;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">]</span></span>
<span class="line"><span style="color:#666666;">}</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#A0ADA0;">// For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B5695999;">&quot;</span><span style="color:#998418;">version</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">0.2.0</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B5695999;">&quot;</span><span style="color:#998418;">configurations</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">[</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B5695999;">&quot;</span><span style="color:#998418;">type</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">node</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B5695999;">&quot;</span><span style="color:#998418;">request</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">launch</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B5695999;">&quot;</span><span style="color:#998418;">name</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">Debug Current Test File</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B5695999;">&quot;</span><span style="color:#998418;">autoAttachChildProcesses</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">true</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B5695999;">&quot;</span><span style="color:#998418;">skipFiles</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">[</span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">&lt;node_internals&gt;/**</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">**/node_modules/**</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">],</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B5695999;">&quot;</span><span style="color:#998418;">program</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">\${workspaceRoot}/node_modules/vitest/vitest.mjs</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B5695999;">&quot;</span><span style="color:#998418;">args</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">[</span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">run</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">\${relativeFile}</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">],</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B5695999;">&quot;</span><span style="color:#998418;">smartStep</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">true</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B5695999;">&quot;</span><span style="color:#998418;">console</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">integratedTerminal</span><span style="color:#B5695999;">&quot;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">]</span></span>
<span class="line"><span style="color:#999999;">}</span></span></code></pre></div><p>Then in the debug tab, ensure &#39;Debug Current Test File&#39; is selected. You can then open the test file you want to debug and press F5 to start debugging.</p><h2 id="intellij-idea" tabindex="-1">IntelliJ IDEA <a class="header-anchor" href="#intellij-idea" aria-label="Permalink to &quot;IntelliJ IDEA&quot;">​</a></h2><p>Create a &#39;Node.js&#39; run configuration. Use the following settings to run all tests in debug mode:</p><table><thead><tr><th>Setting</th><th>Value</th></tr></thead><tbody><tr><td>Working directory</td><td>/path/to/your-project-root</td></tr><tr><td>JavaScript file</td><td>./node_modules/vitest/vitest.mjs</td></tr><tr><td>Application parameters</td><td>run --threads false</td></tr></tbody></table><p>Then run this configuration in debug mode. The IDE will stop at JS/TS breakpoints set in the editor.</p><h2 id="node-inspector-e-g-chrome-devtools" tabindex="-1">Node Inspector, e.g. Chrome DevTools <a class="header-anchor" href="#node-inspector-e-g-chrome-devtools" aria-label="Permalink to &quot;Node Inspector, e.g. Chrome DevTools&quot;">​</a></h2><p>Vitest also supports debugging tests without IDEs. However this requires that tests are not run parallel. Use one of the following commands to launch Vitest.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#758575DD;"># To run in a single worker</span></span>
<span class="line"><span style="color:#80A665;">vitest</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">--inspect-brk</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">--single-thread</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># To run in a child process</span></span>
<span class="line"><span style="color:#80A665;">vitest</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">--inspect-brk</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">--no-threads</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># To run in a single worker</span></span>
<span class="line"><span style="color:#59873A;">vitest</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">--inspect-brk</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">--single-thread</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># To run in a child process</span></span>
<span class="line"><span style="color:#59873A;">vitest</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">--inspect-brk</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">--no-threads</span></span></code></pre></div><p>Once Vitest starts it will stop execution and waits for you to open developer tools that can connect to <a href="https://nodejs.org/en/docs/guides/debugging-getting-started/" target="_blank" rel="noreferrer">NodeJS inspector</a>. You can use Chrome DevTools for this by opening <code>chrome://inspect</code> on browser.</p><p>In watch mode you can keep the debugger open during test re-runs by using the <code>--single-thread --isolate false</code> options.</p>`,17),e=[p];function t(r,c,y,i,u,d){return n(),o("div",null,e)}const g=s(l,[["render",t]]);export{D as __pageData,g as default};
