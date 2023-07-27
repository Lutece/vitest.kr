import{_ as s,j as n,k as a,V as p}from"./chunks/framework.cf42e605.js";const B=JSON.parse('{"title":"assertType","description":"","frontmatter":{},"headers":[],"relativePath":"api/assert-type.md","filePath":"api/assert-type.md","lastUpdated":1673880843000}'),l={name:"api/assert-type.md"},o=p(`<h1 id="asserttype" tabindex="-1">assertType <a class="header-anchor" href="#asserttype" aria-label="Permalink to &quot;assertType&quot;">​</a></h1><ul><li><strong>Type:</strong> <code>&lt;T&gt;(value: T): void</code></li></ul><p>You can use this function as an alternative for <a href="/api/expect-typeof.html"><code>expectTypeOf</code></a> to easily assert that the argument type is equal to the generic provided.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">assertType</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">vitest</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">function</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">concat</span><span style="color:#666666;">(</span><span style="color:#BD976A;">a</span><span style="color:#666666;">: </span><span style="color:#5DA994;">string</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">b</span><span style="color:#666666;">: </span><span style="color:#5DA994;">string</span><span style="color:#666666;">):</span><span style="color:#DBD7CAEE;"> </span><span style="color:#5DA994;">string</span></span>
<span class="line"><span style="color:#CB7676;">function</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">concat</span><span style="color:#666666;">(</span><span style="color:#BD976A;">a</span><span style="color:#666666;">: </span><span style="color:#5DA994;">number</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">b</span><span style="color:#666666;">: </span><span style="color:#5DA994;">number</span><span style="color:#666666;">):</span><span style="color:#DBD7CAEE;"> </span><span style="color:#5DA994;">number</span></span>
<span class="line"><span style="color:#CB7676;">function</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">concat</span><span style="color:#666666;">(</span><span style="color:#BD976A;">a</span><span style="color:#666666;">: </span><span style="color:#5DA994;">string</span><span style="color:#666666;"> | </span><span style="color:#5DA994;">number</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">b</span><span style="color:#666666;">: </span><span style="color:#5DA994;">string</span><span style="color:#666666;"> | </span><span style="color:#5DA994;">number</span><span style="color:#666666;">):</span><span style="color:#DBD7CAEE;"> </span><span style="color:#5DA994;">string</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">|</span><span style="color:#DBD7CAEE;"> </span><span style="color:#5DA994;">number</span></span>
<span class="line"></span>
<span class="line"><span style="color:#80A665;">assertType</span><span style="color:#666666;">&lt;</span><span style="color:#5DA994;">string</span><span style="color:#666666;">&gt;(</span><span style="color:#BD976A;">concat</span><span style="color:#DBD7CAEE;">(</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">a</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">b</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;">)</span></span>
<span class="line"><span style="color:#80A665;">assertType</span><span style="color:#666666;">&lt;</span><span style="color:#5DA994;">number</span><span style="color:#666666;">&gt;(</span><span style="color:#BD976A;">concat</span><span style="color:#DBD7CAEE;">(1</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> 2</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;">)</span></span>
<span class="line"><span style="color:#758575DD;">// @ts-expect-error wrong types</span></span>
<span class="line"><span style="color:#80A665;">assertType</span><span style="color:#666666;">(</span><span style="color:#BD976A;">concat</span><span style="color:#DBD7CAEE;">(</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">a</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> 2</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;">)</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">assertType</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">vitest</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#59873A;">concat</span><span style="color:#999999;">(</span><span style="color:#B07D48;">a</span><span style="color:#999999;">: </span><span style="color:#2E8F82;">string</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">b</span><span style="color:#999999;">: </span><span style="color:#2E8F82;">string</span><span style="color:#999999;">):</span><span style="color:#393A34;"> </span><span style="color:#2E8F82;">string</span></span>
<span class="line"><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#59873A;">concat</span><span style="color:#999999;">(</span><span style="color:#B07D48;">a</span><span style="color:#999999;">: </span><span style="color:#2E8F82;">number</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">b</span><span style="color:#999999;">: </span><span style="color:#2E8F82;">number</span><span style="color:#999999;">):</span><span style="color:#393A34;"> </span><span style="color:#2E8F82;">number</span></span>
<span class="line"><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#59873A;">concat</span><span style="color:#999999;">(</span><span style="color:#B07D48;">a</span><span style="color:#999999;">: </span><span style="color:#2E8F82;">string</span><span style="color:#999999;"> | </span><span style="color:#2E8F82;">number</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">b</span><span style="color:#999999;">: </span><span style="color:#2E8F82;">string</span><span style="color:#999999;"> | </span><span style="color:#2E8F82;">number</span><span style="color:#999999;">):</span><span style="color:#393A34;"> </span><span style="color:#2E8F82;">string</span><span style="color:#393A34;"> </span><span style="color:#999999;">|</span><span style="color:#393A34;"> </span><span style="color:#2E8F82;">number</span></span>
<span class="line"></span>
<span class="line"><span style="color:#59873A;">assertType</span><span style="color:#999999;">&lt;</span><span style="color:#2E8F82;">string</span><span style="color:#999999;">&gt;(</span><span style="color:#B07D48;">concat</span><span style="color:#393A34;">(</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">a</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">b</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">)</span><span style="color:#393A34;">)</span></span>
<span class="line"><span style="color:#59873A;">assertType</span><span style="color:#999999;">&lt;</span><span style="color:#2E8F82;">number</span><span style="color:#999999;">&gt;(</span><span style="color:#B07D48;">concat</span><span style="color:#393A34;">(1</span><span style="color:#999999;">,</span><span style="color:#393A34;"> 2</span><span style="color:#999999;">)</span><span style="color:#393A34;">)</span></span>
<span class="line"><span style="color:#A0ADA0;">// @ts-expect-error wrong types</span></span>
<span class="line"><span style="color:#59873A;">assertType</span><span style="color:#999999;">(</span><span style="color:#B07D48;">concat</span><span style="color:#393A34;">(</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">a</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> 2</span><span style="color:#999999;">)</span><span style="color:#393A34;">)</span></span></code></pre></div>`,4),e=[o];function t(r,c,y,A,D,i){return n(),a("div",null,e)}const C=s(l,[["render",t]]);export{B as __pageData,C as default};
