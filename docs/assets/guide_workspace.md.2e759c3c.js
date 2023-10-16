import{_ as o}from"./chunks/NonProjectOption.a40e03a3.js";import{_ as p,j as e,k as l,C as s,p as n,L as t,V as c}from"./chunks/framework.8939a477.js";const w=JSON.parse('{"title":"Workspace","description":"","frontmatter":{},"headers":[],"relativePath":"guide/workspace.md","filePath":"guide/workspace.md","lastUpdated":1690470465000}'),r={name:"guide/workspace.md"},i=c(`<h1 id="workspace" tabindex="-1">Workspace <a class="header-anchor" href="#workspace" aria-label="Permalink to &quot;Workspace&quot;">​</a></h1><p>Vitest provides built-in support for monorepositories through a workspace configuration file. You can create a workspace to define your project&#39;s setups.</p><h2 id="defining-a-workspace" tabindex="-1">Defining a workspace <a class="header-anchor" href="#defining-a-workspace" aria-label="Permalink to &quot;Defining a workspace&quot;">​</a></h2><p>A workspace should have a <code>vitest.workspace</code> or <code>vitest.projects</code> file in its root (in the same folder as your config file if you have one). Vitest supports <code>ts</code>/<code>js</code>/<code>json</code> extensions for this file.</p><p>Workspace configuration file should have a default export with a list of files or glob patterns referencing your projects. For example, if you have a folder with your projects named <code>packages</code>, you can define a workspace with this config file:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-ufcvm" id="tab-R4w9bDP" checked="checked"><label for="tab-R4w9bDP">vitest.workspace.ts</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">default</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">[</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">packages/*</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"><span style="color:#666666;">]</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">default</span><span style="color:#393A34;"> </span><span style="color:#999999;">[</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">packages/*</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"><span style="color:#999999;">]</span></span></code></pre></div></div></div><p>Vitest will consider every folder in <code>packages</code> as a separate project even if it doesn&#39;t have a config file inside.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Vitest will not consider the root config as a workspace project (so it will not run tests specified in <code>include</code>) unless it is specified in this config.</p></div><p>You can also reference projects with their config files:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-Mzdac" id="tab-CBpE9wC" checked="checked"><label for="tab-CBpE9wC">vitest.workspace.ts</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">default</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">[</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">packages/*/vitest.config.{e2e,unit}.ts</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"><span style="color:#666666;">]</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">default</span><span style="color:#393A34;"> </span><span style="color:#999999;">[</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">packages/*/vitest.config.{e2e,unit}.ts</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"><span style="color:#999999;">]</span></span></code></pre></div></div></div><p>This pattern will only include projects with <code>vitest.config</code> file that includes <code>e2e</code> and <code>unit</code> before the extension.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>If you are referencing filenames with glob pattern, make sure your config file starts with <code>vite.config</code> or <code>vitest.config</code>. Otherwise Vitest will skip it.</p></div><p>You can also define projects with inline config. Workspace file supports using both syntaxes at the same time.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group--qqXK" id="tab-Na1AFUH" checked="checked"><label for="tab-Na1AFUH">vitest.workspace.ts</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">defineWorkspace</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">vitest/config</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;">// defineWorkspace provides a nice type hinting DX</span></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">default</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">defineWorkspace</span><span style="color:#666666;">([</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">packages/*</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#758575DD;">// add &quot;extends&quot; to merge two configs together</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#B8A965;">extends</span><span style="color:#666666;">: </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">./vite.config.js</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#B8A965;">test</span><span style="color:#666666;">: {</span></span>
<span class="line"><span style="color:#666666;">      </span><span style="color:#B8A965;">include</span><span style="color:#666666;">: [</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">tests/**/*.{browser}.test.{ts,js}</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">],</span></span>
<span class="line"><span style="color:#666666;">      </span><span style="color:#758575DD;">// it is recommended to define a name when using inline configs</span></span>
<span class="line"><span style="color:#666666;">      </span><span style="color:#B8A965;">name</span><span style="color:#666666;">: </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">happy-dom</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#666666;">      </span><span style="color:#B8A965;">environment</span><span style="color:#666666;">: </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">happy-dom</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#666666;">    }</span></span>
<span class="line"><span style="color:#666666;">  },</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#B8A965;">test</span><span style="color:#666666;">: {</span></span>
<span class="line"><span style="color:#666666;">      </span><span style="color:#B8A965;">include</span><span style="color:#666666;">: [</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">tests/**/*.{node}.test.{ts,js}</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">],</span></span>
<span class="line"><span style="color:#666666;">      </span><span style="color:#B8A965;">name</span><span style="color:#666666;">: </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">node</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#666666;">      </span><span style="color:#B8A965;">environment</span><span style="color:#666666;">: </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">node</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#666666;">    }</span></span>
<span class="line"><span style="color:#666666;">  }</span></span>
<span class="line"><span style="color:#666666;">])</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">defineWorkspace</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">vitest/config</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">// defineWorkspace provides a nice type hinting DX</span></span>
<span class="line"><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">default</span><span style="color:#393A34;"> </span><span style="color:#59873A;">defineWorkspace</span><span style="color:#999999;">([</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">packages/*</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#A0ADA0;">// add &quot;extends&quot; to merge two configs together</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#998418;">extends</span><span style="color:#999999;">: </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">./vite.config.js</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#998418;">test</span><span style="color:#999999;">: {</span></span>
<span class="line"><span style="color:#999999;">      </span><span style="color:#998418;">include</span><span style="color:#999999;">: [</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">tests/**/*.{browser}.test.{ts,js}</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">],</span></span>
<span class="line"><span style="color:#999999;">      </span><span style="color:#A0ADA0;">// it is recommended to define a name when using inline configs</span></span>
<span class="line"><span style="color:#999999;">      </span><span style="color:#998418;">name</span><span style="color:#999999;">: </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">happy-dom</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#999999;">      </span><span style="color:#998418;">environment</span><span style="color:#999999;">: </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">happy-dom</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#999999;">    }</span></span>
<span class="line"><span style="color:#999999;">  },</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#998418;">test</span><span style="color:#999999;">: {</span></span>
<span class="line"><span style="color:#999999;">      </span><span style="color:#998418;">include</span><span style="color:#999999;">: [</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">tests/**/*.{node}.test.{ts,js}</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">],</span></span>
<span class="line"><span style="color:#999999;">      </span><span style="color:#998418;">name</span><span style="color:#999999;">: </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">node</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#999999;">      </span><span style="color:#998418;">environment</span><span style="color:#999999;">: </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">node</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#999999;">    }</span></span>
<span class="line"><span style="color:#999999;">  }</span></span>
<span class="line"><span style="color:#999999;">])</span></span></code></pre></div></div></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>All projects should have unique names. Otherwise, Vitest will throw an error. If you do not provide a name inside the inline config, Vitest will assign a number. If you don&#39;t provide a name inside a project config defined with glob syntax, Vitest will use the directory name by default.</p></div><p>If you don&#39;t rely on inline configs, you can just create a small json file in your root directory:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-3yaCw" id="tab-PpSK9f9" checked="checked"><label for="tab-PpSK9f9">vitest.workspace.json</label></div><div class="blocks"><div class="language-json vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#666666;">[</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">packages/*</span><span style="color:#C98A7D99;">&quot;</span></span>
<span class="line"><span style="color:#666666;">]</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#999999;">[</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">packages/*</span><span style="color:#B5695999;">&quot;</span></span>
<span class="line"><span style="color:#999999;">]</span></span></code></pre></div></div></div><p>Workspace projects don&#39;t support all configuration properties. For better type safety, use <code>defineProject</code> instead of <code>defineConfig</code> method inside project configuration files:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-w133N" id="tab-6e9LTnj" checked="checked"><label for="tab-6e9LTnj">packages/a/vitest.config.ts</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">defineProject</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">vitest/config</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">default</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">defineProject</span><span style="color:#666666;">({</span></span>
<span class="line"><span style="color:#666666;">  </span><span style="color:#B8A965;">test</span><span style="color:#666666;">: {</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#B8A965;">environment</span><span style="color:#666666;">: </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">jsdom</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#758575DD;">// &quot;reporters&quot; is not supported in a project config,</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#758575DD;">// so it will show an error</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#B8A965;">reporters</span><span style="color:#666666;">: [</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">json</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">]</span></span>
<span class="line"><span style="color:#666666;">  }</span></span>
<span class="line"><span style="color:#666666;">})</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">defineProject</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">vitest/config</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">default</span><span style="color:#393A34;"> </span><span style="color:#59873A;">defineProject</span><span style="color:#999999;">({</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#998418;">test</span><span style="color:#999999;">: {</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#998418;">environment</span><span style="color:#999999;">: </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">jsdom</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#A0ADA0;">// &quot;reporters&quot; is not supported in a project config,</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#A0ADA0;">// so it will show an error</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#998418;">reporters</span><span style="color:#999999;">: [</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">json</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">]</span></span>
<span class="line"><span style="color:#999999;">  }</span></span>
<span class="line"><span style="color:#999999;">})</span></span></code></pre></div></div></div><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;Configuration&quot;">​</a></h2><p>None of the configuration options are inherited from the root-level config file. You can create a shared config file and merge it with the project config yourself:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-CBXA5" id="tab-7S3BFpV" checked="checked"><label for="tab-7S3BFpV">packages/a/vitest.config.ts</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">defineProject</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">mergeConfig</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">vitest/config</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">configShared</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">../vitest.shared.js</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">default</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">mergeConfig</span><span style="color:#666666;">(</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#BD976A;">configShared</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#80A665;">defineProject</span><span style="color:#666666;">({</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#B8A965;">test</span><span style="color:#666666;">: {</span></span>
<span class="line"><span style="color:#666666;">      </span><span style="color:#B8A965;">environment</span><span style="color:#666666;">: </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">jsdom</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#666666;">    }</span></span>
<span class="line"><span style="color:#666666;">  })</span></span>
<span class="line"><span style="color:#666666;">)</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">defineProject</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">mergeConfig</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">vitest/config</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">configShared</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">../vitest.shared.js</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">default</span><span style="color:#393A34;"> </span><span style="color:#59873A;">mergeConfig</span><span style="color:#999999;">(</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B07D48;">configShared</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#59873A;">defineProject</span><span style="color:#999999;">({</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#998418;">test</span><span style="color:#999999;">: {</span></span>
<span class="line"><span style="color:#999999;">      </span><span style="color:#998418;">environment</span><span style="color:#999999;">: </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">jsdom</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#999999;">    }</span></span>
<span class="line"><span style="color:#999999;">  })</span></span>
<span class="line"><span style="color:#999999;">)</span></span></code></pre></div></div></div><p>Also, some of the configuration options are not allowed in a project config. Most notably:</p><ul><li><code>coverage</code>: coverage is done for the whole workspace</li><li><code>reporters</code>: only root-level reporters can be supported</li><li><code>resolveSnapshotPath</code>: only root-level resolver is respected</li><li>all other options that don&#39;t affect test runners</li></ul>`,24),y={class:"tip custom-block"},d=s("p",{class:"custom-block-title"},"TIP",-1),f=s("a",{href:"/vitest.kr/config/"},'"Config"',-1),A=s("h2",{id:"coverage",tabindex:"-1"},[n("Coverage "),s("a",{class:"header-anchor",href:"#coverage","aria-label":'Permalink to "Coverage"'},"​")],-1),v=s("p",null,[n("Coverage for workspace projects works out of the box. But if you have "),s("a",{href:"/vitest.kr/config/#coverage-all"},[s("code",null,"all")]),n(" option enabled and use non-conventional extensions in some of your projects, you will need to have a plugin that handles this extension in your root configuration file.")],-1),D=s("p",null,"For example, if you have a package that uses Vue files and it has its own config file, but some of the files are not imported in your tests, coverage will fail trying to analyze the usage of unused files, because it relies on the root configuration rather than project configuration.",-1);function u(g,h,B,C,m,k){const a=o;return e(),l("div",null,[i,s("div",y,[d,s("p",null,[n("All configuration options that are not supported inside a project config have "),t(a),n(" sign next them in "),f,n(" page.")])]),A,v,D])}const j=p(r,[["render",u]]);export{w as __pageData,j as default};
