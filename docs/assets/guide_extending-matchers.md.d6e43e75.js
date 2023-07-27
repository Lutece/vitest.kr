import{_ as s,j as n,k as a,V as o}from"./chunks/framework.cf42e605.js";const h=JSON.parse('{"title":"Extending Matchers | Guide","description":"","frontmatter":{"title":"Extending Matchers | Guide"},"headers":[],"relativePath":"guide/extending-matchers.md","filePath":"guide/extending-matchers.md","lastUpdated":1687257877000}'),l={name:"guide/extending-matchers.md"},p=o(`<h1 id="extending-matchers" tabindex="-1">Extending Matchers <a class="header-anchor" href="#extending-matchers" aria-label="Permalink to &quot;Extending Matchers&quot;">​</a></h1><p>Since Vitest is compatible with both Chai and Jest, you can use either the <code>chai.use</code> API or <code>expect.extend</code>, whichever you prefer.</p><p>This guide will explore extending matchers with <code>expect.extend</code>. If you are interested in Chai&#39;s API, check <a href="https://www.chaijs.com/guide/plugins/" target="_blank" rel="noreferrer">their guide</a>.</p><p>To extend default matchers, call <code>expect.extend</code> with an object containing your matchers.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#BD976A;">expect</span><span style="color:#666666;">.</span><span style="color:#80A665;">extend</span><span style="color:#666666;">({</span></span>
<span class="line"><span style="color:#666666;">  </span><span style="color:#80A665;">toBeFoo</span><span style="color:#666666;">(</span><span style="color:#BD976A;">received</span><span style="color:#666666;">, </span><span style="color:#BD976A;">expected</span><span style="color:#666666;">) {</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#CB7676;">const </span><span style="color:#666666;">{</span><span style="color:#CB7676;"> </span><span style="color:#BD976A;">isNot</span><span style="color:#CB7676;"> </span><span style="color:#666666;">}</span><span style="color:#CB7676;"> </span><span style="color:#666666;">=</span><span style="color:#CB7676;"> </span><span style="color:#C99076;">this</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#4D9375;">return</span><span style="color:#666666;"> {</span></span>
<span class="line"><span style="color:#666666;">      </span><span style="color:#758575DD;">// do not alter your &quot;pass&quot; based on isNot. Vitest does it for you</span></span>
<span class="line"><span style="color:#666666;">      </span><span style="color:#B8A965;">pass</span><span style="color:#666666;">: </span><span style="color:#BD976A;">received</span><span style="color:#666666;"> </span><span style="color:#CB7676;">===</span><span style="color:#666666;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">foo</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#666666;">      </span><span style="color:#80A665;">message</span><span style="color:#666666;">: () =&gt; </span><span style="color:#C98A7D99;">\`</span><span style="color:#666666;">\${</span><span style="color:#C98A7D;">received</span><span style="color:#666666;">}</span><span style="color:#C98A7D;"> is</span><span style="color:#666666;">\${</span><span style="color:#C98A7D;">isNot </span><span style="color:#CB7676;">?</span><span style="color:#C98A7D;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;"> not</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;"> </span><span style="color:#CB7676;">:</span><span style="color:#C98A7D;"> </span><span style="color:#C98A7D99;">&#39;&#39;</span><span style="color:#666666;">}</span><span style="color:#C98A7D;"> foo</span><span style="color:#C98A7D99;">\`</span></span>
<span class="line"><span style="color:#666666;">    }</span></span>
<span class="line"><span style="color:#666666;">  }</span></span>
<span class="line"><span style="color:#666666;">})</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#B07D48;">expect</span><span style="color:#999999;">.</span><span style="color:#59873A;">extend</span><span style="color:#999999;">({</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#59873A;">toBeFoo</span><span style="color:#999999;">(</span><span style="color:#B07D48;">received</span><span style="color:#999999;">, </span><span style="color:#B07D48;">expected</span><span style="color:#999999;">) {</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#AB5959;">const </span><span style="color:#999999;">{</span><span style="color:#AB5959;"> </span><span style="color:#B07D48;">isNot</span><span style="color:#AB5959;"> </span><span style="color:#999999;">}</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;"> </span><span style="color:#A65E2B;">this</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#1E754F;">return</span><span style="color:#999999;"> {</span></span>
<span class="line"><span style="color:#999999;">      </span><span style="color:#A0ADA0;">// do not alter your &quot;pass&quot; based on isNot. Vitest does it for you</span></span>
<span class="line"><span style="color:#999999;">      </span><span style="color:#998418;">pass</span><span style="color:#999999;">: </span><span style="color:#B07D48;">received</span><span style="color:#999999;"> </span><span style="color:#AB5959;">===</span><span style="color:#999999;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">foo</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#999999;">      </span><span style="color:#59873A;">message</span><span style="color:#999999;">: () =&gt; </span><span style="color:#B5695999;">\`</span><span style="color:#999999;">\${</span><span style="color:#B56959;">received</span><span style="color:#999999;">}</span><span style="color:#B56959;"> is</span><span style="color:#999999;">\${</span><span style="color:#B56959;">isNot </span><span style="color:#AB5959;">?</span><span style="color:#B56959;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;"> not</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;"> </span><span style="color:#AB5959;">:</span><span style="color:#B56959;"> </span><span style="color:#B5695999;">&#39;&#39;</span><span style="color:#999999;">}</span><span style="color:#B56959;"> foo</span><span style="color:#B5695999;">\`</span></span>
<span class="line"><span style="color:#999999;">    }</span></span>
<span class="line"><span style="color:#999999;">  }</span></span>
<span class="line"><span style="color:#999999;">})</span></span></code></pre></div><p>If you are using TypeScript, since Vitest 0.31.0 you can extend default <code>Assertion</code> interface in an ambient declaration file (e.g: <code>vitest.d.ts</code>) with the code below:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">type</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">Assertion</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">AsymmetricMatchersContaining</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">vitest</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">interface</span><span style="color:#DBD7CAEE;"> </span><span style="color:#5DA994;">CustomMatchers</span><span style="color:#666666;">&lt;</span><span style="color:#5DA994;">R</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#5DA994;">unknown</span><span style="color:#666666;">&gt;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#80A665;">toBeFoo</span><span style="color:#666666;">():</span><span style="color:#DBD7CAEE;"> </span><span style="color:#5DA994;">R</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">declare</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">module</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">vitest</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#CB7676;">interface</span><span style="color:#DBD7CAEE;"> </span><span style="color:#5DA994;">Assertion</span><span style="color:#666666;">&lt;</span><span style="color:#5DA994;">T</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#5DA994;">any</span><span style="color:#666666;">&gt;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">extends</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">CustomMatchers</span><span style="color:#666666;">&lt;</span><span style="color:#5DA994;">T</span><span style="color:#666666;">&gt;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{}</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#CB7676;">interface</span><span style="color:#DBD7CAEE;"> </span><span style="color:#5DA994;">AsymmetricMatchersContaining</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">extends</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">CustomMatchers</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{}</span></span>
<span class="line"><span style="color:#666666;">}</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">type</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">Assertion</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">AsymmetricMatchersContaining</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">vitest</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">interface</span><span style="color:#393A34;"> </span><span style="color:#2E8F82;">CustomMatchers</span><span style="color:#999999;">&lt;</span><span style="color:#2E8F82;">R</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#2E8F82;">unknown</span><span style="color:#999999;">&gt;</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#59873A;">toBeFoo</span><span style="color:#999999;">():</span><span style="color:#393A34;"> </span><span style="color:#2E8F82;">R</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">declare</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">module</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">vitest</span><span style="color:#B5695999;">&#39;</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#AB5959;">interface</span><span style="color:#393A34;"> </span><span style="color:#2E8F82;">Assertion</span><span style="color:#999999;">&lt;</span><span style="color:#2E8F82;">T</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#2E8F82;">any</span><span style="color:#999999;">&gt;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">extends</span><span style="color:#393A34;"> </span><span style="color:#59873A;">CustomMatchers</span><span style="color:#999999;">&lt;</span><span style="color:#2E8F82;">T</span><span style="color:#999999;">&gt;</span><span style="color:#393A34;"> </span><span style="color:#999999;">{}</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#AB5959;">interface</span><span style="color:#393A34;"> </span><span style="color:#2E8F82;">AsymmetricMatchersContaining</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">extends</span><span style="color:#393A34;"> </span><span style="color:#59873A;">CustomMatchers</span><span style="color:#393A34;"> </span><span style="color:#999999;">{}</span></span>
<span class="line"><span style="color:#999999;">}</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Don&#39;t forget to include the ambient declaration file in your <code>tsconfig.json</code>.</p></div><p>The return value of a matcher should be compatible with the following interface:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vitesse-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#CB7676;">interface</span><span style="color:#DBD7CAEE;"> </span><span style="color:#5DA994;">MatcherResult</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#BD976A;">pass</span><span style="color:#666666;">: </span><span style="color:#5DA994;">boolean</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#80A665;">message</span><span style="color:#666666;">: () =&gt; </span><span style="color:#5DA994;">string</span></span>
<span class="line"><span style="color:#666666;">  </span><span style="color:#758575DD;">// If you pass these, they will automatically appear inside a diff when</span></span>
<span class="line"><span style="color:#666666;">  </span><span style="color:#758575DD;">// the matcher does not pass, so you don&#39;t need to print the diff yourself</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#BD976A;">actual</span><span style="color:#CB7676;">?</span><span style="color:#666666;">: </span><span style="color:#5DA994;">unknown</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#BD976A;">expected</span><span style="color:#CB7676;">?</span><span style="color:#666666;">: </span><span style="color:#5DA994;">unknown</span></span>
<span class="line"><span style="color:#666666;">}</span></span></code></pre><pre class="shiki vitesse-light has-diff vp-code-light"><code><span class="line"><span style="color:#AB5959;">interface</span><span style="color:#393A34;"> </span><span style="color:#2E8F82;">MatcherResult</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B07D48;">pass</span><span style="color:#999999;">: </span><span style="color:#2E8F82;">boolean</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#59873A;">message</span><span style="color:#999999;">: () =&gt; </span><span style="color:#2E8F82;">string</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#A0ADA0;">// If you pass these, they will automatically appear inside a diff when</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#A0ADA0;">// the matcher does not pass, so you don&#39;t need to print the diff yourself</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B07D48;">actual</span><span style="color:#AB5959;">?</span><span style="color:#999999;">: </span><span style="color:#2E8F82;">unknown</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B07D48;">expected</span><span style="color:#AB5959;">?</span><span style="color:#999999;">: </span><span style="color:#2E8F82;">unknown</span></span>
<span class="line"><span style="color:#999999;">}</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>If you create an asynchronous matcher, don&#39;t forget to <code>await</code> the result (<code>await expect(&#39;foo&#39;).toBeFoo()</code>) in the test itself.</p></div><p>The first argument inside a matcher&#39;s function is the received value (the one inside <code>expect(received)</code>). The rest are arguments passed directly to the matcher.</p><p>Matcher function have access to <code>this</code> context with the following properties:</p><ul><li><p><code>isNot</code></p><p>Returns true, if matcher was called on <code>not</code> (<code>expect(received).not.toBeFoo()</code>).</p></li><li><p><code>promise</code></p><p>If matcher was called on <code>resolved/rejected</code>, this value will contain the name of modifier. Otherwise, it will be an empty string.</p></li><li><p><code>equals</code></p><p>This is a utility function that allows you to compare two values. It will return <code>true</code> if values are equal, <code>false</code> otherwise. This function is used internally for almost every matcher. It supports objects with asymmetric matchers by default.</p></li><li><p><code>utils</code></p><p>This contains a set of utility functions that you can use to display messages.</p></li></ul><p><code>this</code> context also contains information about the current test. You can also get it by calling <code>expect.getState()</code>. The most useful properties are:</p><ul><li><p><code>currentTestName</code></p><p>Full name of the current test (including describe block).</p></li><li><p><code>testPath</code></p><p>Path to the current test.</p></li></ul>`,16),e=[p];function t(c,r,y,i,d,A){return n(),a("div",null,e)}const u=s(l,[["render",t]]);export{h as __pageData,u as default};
