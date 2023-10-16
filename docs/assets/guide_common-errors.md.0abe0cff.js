import{_ as s,j as a,k as n,V as o}from"./chunks/framework.8939a477.js";const m=JSON.parse('{"title":"Common Errors","description":"","frontmatter":{},"headers":[],"relativePath":"guide/common-errors.md","filePath":"guide/common-errors.md","lastUpdated":1690470465000}'),e={name:"guide/common-errors.md"},l=o(`<h1 id="common-errors" tabindex="-1">Common Errors <a class="header-anchor" href="#common-errors" aria-label="Permalink to &quot;Common Errors&quot;">​</a></h1><h2 id="cannot-find-module-relative-path" tabindex="-1">Cannot find module &#39;./relative-path&#39; <a class="header-anchor" href="#cannot-find-module-relative-path" aria-label="Permalink to &quot;Cannot find module &#39;./relative-path&#39;&quot;">​</a></h2><p>If you receive an error that module cannot be found, it might mean several different things:</p><ul><li><ol><li>You misspelled the path. Make sure the path is correct.</li></ol></li><li><ol start="2"><li>It&#39;s possible that your rely on <code>baseUrl</code> in your <code>tsconfig.json</code>. Vite doesn&#39;t take into account <code>tsconfig.json</code> by default, so you might need to install <a href="https://www.npmjs.com/package/vite-tsconfig-paths" target="_blank" rel="noreferrer"><code>vite-tsconfig-paths</code></a> yourself, if you rely on this behaviour.</li></ol></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">defineConfig</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">vitest/config</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">tsconfigPaths</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">vite-tsconfig-paths</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">default</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">defineConfig</span><span style="color:#666666;">({</span></span>
<span class="line"><span style="color:#666666;">  </span><span style="color:#B8A965;">plugins</span><span style="color:#666666;">: [</span><span style="color:#80A665;">tsconfigPaths</span><span style="color:#666666;">()]</span></span>
<span class="line"><span style="color:#666666;">})</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">defineConfig</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">vitest/config</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">tsconfigPaths</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">vite-tsconfig-paths</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">default</span><span style="color:#393A34;"> </span><span style="color:#59873A;">defineConfig</span><span style="color:#999999;">({</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#998418;">plugins</span><span style="color:#999999;">: [</span><span style="color:#59873A;">tsconfigPaths</span><span style="color:#999999;">()]</span></span>
<span class="line"><span style="color:#999999;">})</span></span></code></pre></div><p>Or rewrite your path to not be relative to root:</p><div class="language-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#FDAEB7;">- import helpers from &#39;src/helpers&#39;</span></span>
<span class="line"><span style="color:#85E89D;">+ import helpers from &#39;../src/helpers&#39;</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#B31D28;">- import helpers from &#39;src/helpers&#39;</span></span>
<span class="line"><span style="color:#22863A;">+ import helpers from &#39;../src/helpers&#39;</span></span></code></pre></div><ul><li><ol start="3"><li>Make sure you don&#39;t have relative <a href="/vitest.kr/config/#alias">aliases</a>. Vite treats them as relative to the file where the import is instead of the root.</li></ol></li></ul><div class="language-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#DBD7CAEE;">import { defineConfig } from &#39;vitest/config&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">export default defineConfig({</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  test: {</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    alias: {</span></span>
<span class="line"><span style="color:#FDAEB7;">-     &#39;@/&#39;: &#39;./src/&#39;,</span></span>
<span class="line"><span style="color:#85E89D;">+     &#39;@/&#39;: new URL(&#39;./src/&#39;, i<wbr>mport.meta.url).pathname,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    }</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  }</span></span>
<span class="line"><span style="color:#DBD7CAEE;">})</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#393A34;">import { defineConfig } from &#39;vitest/config&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">export default defineConfig({</span></span>
<span class="line"><span style="color:#393A34;">  test: {</span></span>
<span class="line"><span style="color:#393A34;">    alias: {</span></span>
<span class="line"><span style="color:#B31D28;">-     &#39;@/&#39;: &#39;./src/&#39;,</span></span>
<span class="line"><span style="color:#22863A;">+     &#39;@/&#39;: new URL(&#39;./src/&#39;, i<wbr>mport.meta.url).pathname,</span></span>
<span class="line"><span style="color:#393A34;">    }</span></span>
<span class="line"><span style="color:#393A34;">  }</span></span>
<span class="line"><span style="color:#393A34;">})</span></span></code></pre></div>`,9),p=[l];function t(r,c,i,y,d,f){return a(),n("div",null,p)}const D=s(e,[["render",t]]);export{m as __pageData,D as default};
