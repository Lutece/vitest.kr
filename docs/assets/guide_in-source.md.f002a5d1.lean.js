import{_ as l,j as p,k as o,V as a,C as s,p as n}from"./chunks/framework.cf42e605.js";const C=JSON.parse('{"title":"In-source testing | Guide","description":"","frontmatter":{"title":"In-source testing | Guide"},"headers":[],"relativePath":"guide/in-source.md","filePath":"guide/in-source.md","lastUpdated":1658645283000}'),e={name:"guide/in-source.md"},t=a("",14),c=s("details",{mt4:""},[s("summary",{"text-xl":""},"unbuild"),s("div",{class:"language-diff vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"diff"),s("pre",{class:"shiki vitesse-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"// build.config.ts")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"import { defineBuildConfig } from 'unbuild'")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"export default defineBuildConfig({")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#85E89D"}},"+ replace: {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#85E89D"}},[n("+   'i"),s("wbr"),n("mport.meta.vitest': 'undefined',")])]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#85E89D"}},"+ },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  // other options")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"})")])])]),s("pre",{class:"shiki vitesse-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"// build.config.ts")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"import { defineBuildConfig } from 'unbuild'")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"export default defineBuildConfig({")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#22863A"}},"+ replace: {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#22863A"}},[n("+   'i"),s("wbr"),n("mport.meta.vitest': 'undefined',")])]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#22863A"}},"+ },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  // other options")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"})")])])])]),s("p",null,[n("Learn more: "),s("a",{href:"https://github.com/unjs/unbuild",target:"_blank"},"unbuild")])],-1),r=s("details",{my2:""},[s("summary",{"text-xl":""},"rollup"),s("div",{class:"language-diff vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"diff"),s("pre",{class:"shiki vitesse-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"// rollup.config.js")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#85E89D"}},"+ import replace from '@rollup/plugin-replace'")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"export default {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  plugins: [")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#85E89D"}},"+   replace({")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#85E89D"}},[n("+     'i"),s("wbr"),n("mport.meta.vitest': 'undefined',")])]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#85E89D"}},"+   })")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  ],")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  // other options")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"}")])])]),s("pre",{class:"shiki vitesse-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"// rollup.config.js")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#22863A"}},"+ import replace from '@rollup/plugin-replace'")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"export default {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  plugins: [")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#22863A"}},"+   replace({")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#22863A"}},[n("+     'i"),s("wbr"),n("mport.meta.vitest': 'undefined',")])]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#22863A"}},"+   })")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  ],")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  // other options")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"}")])])])]),s("p",null,[n("Learn more: "),s("a",{href:"https://rollupjs.org/",target:"_blank"},"rollup")])],-1),i=a("",8),y=[t,c,r,i];function d(A,D,u,E,f,B){return p(),o("div",null,y)}const g=l(e,[["render",d]]);export{C as __pageData,g as default};
