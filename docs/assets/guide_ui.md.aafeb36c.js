import{_ as a,j as t,k as o,V as s,C as e}from"./chunks/framework.cf42e605.js";const m=JSON.parse('{"title":"Vitest UI | Guide","description":"","frontmatter":{"title":"Vitest UI | Guide"},"headers":[],"relativePath":"guide/ui.md","filePath":"guide/ui.md","lastUpdated":1683105824000}'),n={name:"guide/ui.md"},p=s('<h1 id="vitest-ui" tabindex="-1">Vitest UI <a class="header-anchor" href="#vitest-ui" aria-label="Permalink to &quot;Vitest UI&quot;">​</a></h1><p>Powered by Vite, Vitest also has a dev server under the hood when running the tests. This allows Vitest to provide a beautiful UI to view and interact with your tests. The Vitest UI is optional, so you&#39;ll need to install it with:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#80A665;">npm</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">i</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">-D</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">@vitest/ui</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#59873A;">npm</span><span style="color:#393A34;"> </span><span style="color:#B56959;">i</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">-D</span><span style="color:#393A34;"> </span><span style="color:#B56959;">@vitest/ui</span></span></code></pre></div><p>Then you can start the tests with UI by passing the <code>--ui</code> flag:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#80A665;">vitest</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">--ui</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#59873A;">vitest</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">--ui</span></span></code></pre></div><p>Then you can visit the Vitest UI at <a href="http://localhost:51204/__vitest__/"><code>http://localhost:51204/__vitest__/</code></a></p>',6),l=e("img",{alt:"Vitest UI","img-light":"",src:"https://user-images.githubusercontent.com/11247099/171992267-5cae2fa0-b927-400a-8eb1-da776974cb61.png"},null,-1),c=e("img",{alt:"Vitest UI","img-dark":"",src:"https://user-images.githubusercontent.com/11247099/171992272-7c6057e2-80c3-4b17-a7b6-0ac28e5a5e0b.png"},null,-1),i=s(`<p>Since Vitest 0.26.0, UI can also be used as a reporter. Use <code>&#39;html&#39;</code> reporter in your Vitest configuration to generate HTML output and preview the results of your tests:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#758575DD;">// vitest.config.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">default</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#666666;">  </span><span style="color:#B8A965;">test</span><span style="color:#666666;">: {</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#B8A965;">reporters</span><span style="color:#666666;">: [</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">html</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">]</span></span>
<span class="line"><span style="color:#666666;">  }</span></span>
<span class="line"><span style="color:#666666;">}</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">// vitest.config.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">default</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#998418;">test</span><span style="color:#999999;">: {</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#998418;">reporters</span><span style="color:#999999;">: [</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">html</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">]</span></span>
<span class="line"><span style="color:#999999;">  }</span></span>
<span class="line"><span style="color:#999999;">}</span></span></code></pre></div><p>Since Vitest 0.31.0, you can check your coverage report in Vitest UI: check <a href="/guide/coverage.html#vitest-ui">Vitest UI Coverage</a> for more details.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>If you still want to see how your tests are running in real time in the terminal, don&#39;t forget to add <code>default</code> reporter to <code>reporters</code> option: <code>[&#39;default&#39;, &#39;html&#39;]</code>.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>To preview your HTML report, you can use <a href="https://vitejs.dev/guide/cli.html#vite-preview" target="_blank" rel="noreferrer">vite preview</a> command:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#80A665;">npx</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">vite</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">preview</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">--outDir</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">./html</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#59873A;">npx</span><span style="color:#393A34;"> </span><span style="color:#B56959;">vite</span><span style="color:#393A34;"> </span><span style="color:#B56959;">preview</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">--outDir</span><span style="color:#393A34;"> </span><span style="color:#B56959;">./html</span></span></code></pre></div><p>You can configure output with <a href="/config/#outputfile"><code>outputFile</code></a> config option. You need to specify <code>.html</code> path there. For example, <code>./html/index.html</code> is the default value.</p></div>`,5),r=[p,l,c,i];function d(y,u,h,v,g,_){return t(),o("div",null,r)}const D=a(n,[["render",d]]);export{m as __pageData,D as default};
