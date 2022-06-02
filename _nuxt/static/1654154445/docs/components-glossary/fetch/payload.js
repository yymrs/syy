__NUXT_JSONP__("/docs/components-glossary/fetch", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF){return {data:[{page:{key:"content:en:docs:7.components-glossary:1.fetch.md",generatedAt:new Date(1654154460586),mtime:new Date(1654154460582),slug:k,title:"The Fetch Hook",position:"999900070001",to:"\u002Fdocs\u002Fcomponents-glossary\u002Ffetch",draft:C,page:y,language:"en",description:"The fetch hook is for fetching data asynchronously. It is called on server-side when rendering the route, and on client-side when navigating.",navigation:{title:"Fetch Hook"},category:"components-glossary",empty:C,excerpt:void 0,body:{raw:"---\ntitle: The Fetch Hook\ndescription: The fetch hook is for fetching data asynchronously. It is called on server-side when rendering the route, and on client-side when navigating.\nnavigation:\n  title: Fetch Hook\ncategory: components-glossary\n---\n# The Fetch hook\n\nThe `fetch` hook is for fetching data asynchronously. It is called on server-side when rendering the route, and on client-side when navigating.\n\n---\n\n## Nuxt \u003E= 2.12\n\nNuxt `v2.12` introduces a new hook called `fetch` which you can use **in any of your Vue components**. Use fetch every time you need to get **asynchronous** data. `fetch` is called on server-side when rendering the route, and on client-side when navigating.\n\nIt exposes `$fetchState` at the component level:\n\n- `$fetchState.pending`: `Boolean`, allows you to display a placeholder when `fetch` is being called _on client-side_.\n- `$fetchState.error`: `null` or `Error`, allows you to display an error message\n- `$fetchState.timestamp`: `Integer`, is a timestamp of the last fetch, useful for caching with `keep-alive`\n\nIf you want to call the `fetch` hook from your template use:\n\n```html\n\u003Cbutton @click=\"$fetch\"\u003ERefresh\u003C\u002Fbutton\u003E\n```\n\nor component method:\n\n```javascript\n\u002F\u002F from component methods in script section\nexport default {\n  methods: {\n    refresh() {\n      this.$fetch()\n    }\n  }\n}\n```\n\nYou can access the Nuxt [context](\u002Fdocs\u002Finternals-glossary\u002Fcontext) within the fetch hook using `this.$nuxt.context`.\n\n### Options\n\n- `fetchOnServer`: `Boolean` or `Function` (default: `true`), call `fetch()` when server-rendering the page\n- `fetchKey`: `String` or `Function` (defaults to the component scope ID or component name), a key (or a function that produces a unique key) that identifies the result of this component's fetch (available on Nuxt 2.15+) [More information available in original PR](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxt.js\u002Fpull\u002F8466).\n- `fetchDelay`: `Integer` (default: `200`), set the minimum executing time in milliseconds (to avoid quick flashes)\n\nWhen `fetchOnServer` is `false` or returns `false`, `fetch` will be called only on client-side and `$fetchState.pending` will return `true` when server-rendering the component.\n\n```html\n\u003Cscript\u003E\n  export default {\n    data() {\n      return {\n        posts: []\n      }\n    },\n    async fetch() {\n      this.posts = await this.$http.$get('https:\u002F\u002Fapi.nuxtjs.dev\u002Fposts')\n    },\n    fetchOnServer: false,\n    \u002F\u002F multiple components can return the same `fetchKey` and Nuxt will track them both separately\n    fetchKey: 'site-sidebar',\n    \u002F\u002F alternatively, for more control, a function can be passed with access to the component instance\n    \u002F\u002F It will be called in `created` and must not depend on fetched data\n    fetchKey(getCounter) {\n      \u002F\u002F getCounter is a method that can be called to get the next number in a sequence\n      \u002F\u002F as part of generating a unique fetchKey.\n      return this.someOtherData + getCounter('sidebar')\n    }\n  }\n\u003C\u002Fscript\u003E\n```\n\n::alert{type=\"next\"}\nFor more info on the Fetch Hook checkout the [data fetching](\u002Fdocs\u002Ffeatures\u002Fdata-fetching) chapter of our Features book\n::\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"the-fetch-hook"},children:[{type:a,value:"The Fetch hook"}]},{type:a,value:f},{type:b,tag:l,props:{class:"d-heading-description"},children:[{type:a,value:"The "},{type:b,tag:g,props:{},children:[{type:a,value:k}]},{type:a,value:" hook is for fetching data asynchronously. It is called on server-side when rendering the route, and on client-side when navigating."}]},{type:a,value:f},{type:b,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:f},{type:b,tag:"prose-h2",props:{id:X},children:[{type:b,tag:z,props:{href:"#nuxt--212"},children:[{type:a,value:Y}]}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:"Nuxt "},{type:b,tag:g,props:{},children:[{type:a,value:"v2.12"}]},{type:a,value:" introduces a new hook called "},{type:b,tag:g,props:{},children:[{type:a,value:k}]},{type:a,value:" which you can use "},{type:b,tag:Z,props:{},children:[{type:a,value:"in any of your Vue components"}]},{type:a,value:". Use fetch every time you need to get "},{type:b,tag:Z,props:{},children:[{type:a,value:"asynchronous"}]},{type:a,value:" data. "},{type:b,tag:g,props:{},children:[{type:a,value:k}]},{type:a,value:" is called on server-side when rendering the route, and on client-side when navigating."}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:"It exposes "},{type:b,tag:g,props:{},children:[{type:a,value:"$fetchState"}]},{type:a,value:" at the component level:"}]},{type:a,value:f},{type:b,tag:_,props:{},children:[{type:a,value:f},{type:b,tag:u,props:{},children:[{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:$}]},{type:a,value:v},{type:b,tag:g,props:{},children:[{type:a,value:aa}]},{type:a,value:", allows you to display a placeholder when "},{type:b,tag:g,props:{},children:[{type:a,value:k}]},{type:a,value:" is being called "},{type:b,tag:"prose-em",props:{},children:[{type:a,value:"on client-side"}]},{type:a,value:m},{type:a,value:f}]},{type:a,value:f},{type:b,tag:u,props:{},children:[{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"$fetchState.error"}]},{type:a,value:v},{type:b,tag:g,props:{},children:[{type:a,value:"null"}]},{type:a,value:I},{type:b,tag:g,props:{},children:[{type:a,value:"Error"}]},{type:a,value:", allows you to display an error message"},{type:a,value:f}]},{type:a,value:f},{type:b,tag:u,props:{},children:[{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"$fetchState.timestamp"}]},{type:a,value:v},{type:b,tag:g,props:{},children:[{type:a,value:ab}]},{type:a,value:", is a timestamp of the last fetch, useful for caching with "},{type:b,tag:g,props:{},children:[{type:a,value:"keep-alive"}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:"If you want to call the "},{type:b,tag:g,props:{},children:[{type:a,value:k}]},{type:a,value:" hook from your template use:"}]},{type:a,value:f},{type:b,tag:J,props:{},children:[{type:b,tag:K,props:{className:[L,ac]},children:[{type:b,tag:M,props:{},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ad}]},{type:a,value:ae}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,"attr-name"]},children:[{type:a,value:"@click"}]},{type:b,tag:c,props:{className:[d,"attr-value"]},children:[{type:b,tag:c,props:{className:[d,e,"attr-equals"]},children:[{type:a,value:af}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ag}]},{type:a,value:ah},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ag}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]}]},{type:a,value:"Refresh"},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ai}]},{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:"or component method:"}]},{type:a,value:f},{type:b,tag:J,props:{},children:[{type:b,tag:K,props:{className:[L,aj]},children:[{type:b,tag:M,props:{},children:[{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"\u002F\u002F from component methods in script section"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i,E]},children:[{type:a,value:ak}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i,E]},children:[{type:a,value:al}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:"\n  methods"},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:F}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"refresh"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,am,q,A]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:"You can access the Nuxt "},{type:b,tag:z,props:{href:"\u002Fdocs\u002Finternals-glossary\u002Fcontext"},children:[{type:a,value:"context"}]},{type:a,value:" within the fetch hook using "},{type:b,tag:g,props:{},children:[{type:a,value:"this.$nuxt.context"}]},{type:a,value:m}]},{type:a,value:f},{type:b,tag:"prose-h3",props:{id:an},children:[{type:b,tag:z,props:{href:"#options"},children:[{type:a,value:ao}]}]},{type:a,value:f},{type:b,tag:_,props:{},children:[{type:a,value:f},{type:b,tag:u,props:{},children:[{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:ap}]},{type:a,value:v},{type:b,tag:g,props:{},children:[{type:a,value:aa}]},{type:a,value:I},{type:b,tag:g,props:{},children:[{type:a,value:aq}]},{type:a,value:ar},{type:b,tag:g,props:{},children:[{type:a,value:as}]},{type:a,value:"), call "},{type:b,tag:g,props:{},children:[{type:a,value:"fetch()"}]},{type:a,value:" when server-rendering the page"},{type:a,value:f}]},{type:a,value:f},{type:b,tag:u,props:{},children:[{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:at}]},{type:a,value:v},{type:b,tag:g,props:{},children:[{type:a,value:"String"}]},{type:a,value:I},{type:b,tag:g,props:{},children:[{type:a,value:aq}]},{type:a,value:" (defaults to the component scope ID or component name), a key (or a function that produces a unique key) that identifies the result of this component's fetch (available on Nuxt 2.15+) "},{type:b,tag:z,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxt.js\u002Fpull\u002F8466",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"More information available in original PR"}]},{type:a,value:m},{type:a,value:f}]},{type:a,value:f},{type:b,tag:u,props:{},children:[{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"fetchDelay"}]},{type:a,value:v},{type:b,tag:g,props:{},children:[{type:a,value:ab}]},{type:a,value:ar},{type:b,tag:g,props:{},children:[{type:a,value:"200"}]},{type:a,value:"), set the minimum executing time in milliseconds (to avoid quick flashes)"},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:"When "},{type:b,tag:g,props:{},children:[{type:a,value:ap}]},{type:a,value:" is "},{type:b,tag:g,props:{},children:[{type:a,value:O}]},{type:a,value:" or returns "},{type:b,tag:g,props:{},children:[{type:a,value:O}]},{type:a,value:", "},{type:b,tag:g,props:{},children:[{type:a,value:k}]},{type:a,value:" will be called only on client-side and "},{type:b,tag:g,props:{},children:[{type:a,value:$}]},{type:a,value:" will return "},{type:b,tag:g,props:{},children:[{type:a,value:as}]},{type:a,value:" when server-rendering the component."}]},{type:a,value:f},{type:b,tag:J,props:{},children:[{type:b,tag:K,props:{className:[L,ac]},children:[{type:b,tag:M,props:{},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ad}]},{type:a,value:P}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]}]},{type:b,tag:c,props:{className:[d,P]},children:[{type:b,tag:c,props:{className:[d,aj]},children:[{type:a,value:N},{type:b,tag:c,props:{className:[d,i,E]},children:[{type:a,value:ak}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i,E]},children:[{type:a,value:al}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"data"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,i,Q]},children:[{type:a,value:au}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:"\n        posts"},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:F}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"["}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"]"}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"async"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"posts"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:af}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i,Q]},children:[{type:a,value:"await"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"$http"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,am,q,A]},children:[{type:a,value:"$get"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,R]},children:[{type:a,value:"'https:\u002F\u002Fapi.nuxtjs.dev\u002Fposts'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:a,value:"\n    fetchOnServer"},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:F}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,"boolean"]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"\u002F\u002F multiple components can return the same `fetchKey` and Nuxt will track them both separately"}]},{type:a,value:"\n    fetchKey"},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:F}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,R]},children:[{type:a,value:"'site-sidebar'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"\u002F\u002F alternatively, for more control, a function can be passed with access to the component instance"}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"\u002F\u002F It will be called in `created` and must not depend on fetched data"}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:at}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,"parameter"]},children:[{type:a,value:av}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"\u002F\u002F getCounter is a method that can be called to get the next number in a sequence"}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"\u002F\u002F as part of generating a unique fetchKey."}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,i,Q]},children:[{type:a,value:au}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"someOtherData"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:"+"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:av}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,R]},children:[{type:a,value:"'sidebar'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:f}]}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ai}]},{type:a,value:P}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:"alert",props:{type:"next"},children:[{type:b,tag:l,props:{},children:[{type:a,value:"For more info on the Fetch Hook checkout the "},{type:b,tag:z,props:{href:"\u002Fdocs\u002Ffeatures\u002Fdata-fetching"},children:[{type:a,value:"data fetching"}]},{type:a,value:" chapter of our Features book"}]}]}]},toc:{title:B,searchDepth:S,depth:S,links:[{id:X,depth:S,text:Y,children:[{id:an,depth:3,text:ao}]}]}},template:"Docs"},templateOptions:{header:y,footer:y,aside:y,asideClass:B,fluid:C,banner:y},_img:{"/_ipx/https://github.com/nazarepiedady.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd5c785.png","/_ipx/https://github.com/wheredidhugo.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F952ed3.png","/_ipx/https://github.com/smarroufin.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc9abac.png","/_ipx/https://github.com/clemcode.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F77339c.png","/_ipx/https://github.com/SpencerCooley.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fb3bb68.png","/_ipx/https://github.com/zatorck.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F66bdcf.png","/_ipx/https://github.com/MajesticString.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fb50564.png","/_ipx/https://github.com/kazupon.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd6247a.png","/_ipx/https://github.com/danielroe.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0786f3.png","/_ipx/https://github.com/owlnai.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0340f1.png","/_ipx/https://github.com/HyunseungLee-Travis.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa79a1d.png","/_ipx/https://github.com/Atinux.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe847b9.png","/_ipx/https://github.com/alexchopin.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F2c01a3.png","/_ipx/https://github.com/pi0.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F368a8d.png","/_ipx/https://github.com/dosstx.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F7486d8.png","/_ipx/https://github.com/Mosaab-Emam.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Feeb249.png","/_ipx/https://github.com/suruaku.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F97788f.png","/_ipx/https://github.com/bloodf.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F372791.png","/_ipx/https://github.com/Chukwuemeka-Mba.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0ed25e.png","/_ipx/https://github.com/YoonHan.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F866eec.png","/_ipx/https://github.com/eltociear.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0a4949.png","/_ipx/https://github.com/azizurrahmaan.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F879caa.png","/_ipx/https://github.com/Ayouli.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa827f5.png","/_ipx/https://github.com/fhinkel.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F26e625.png","/_ipx/https://github.com/felipesuri.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa2c3fe.png","/_ipx/https://github.com/ChristopheCVB.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fbe1aa1.png","/_ipx/https://github.com/literakl.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F496416.png","/_ipx/https://github.com/trizotti.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fff04b5.png","/_ipx/https://github.com/pilotkid.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F48fe7a.png","/_ipx/https://github.com/blupdew.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Ff00d82.png","/_ipx/https://github.com/iLuVue.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0a82d8.png","/_ipx/https://github.com/shekeg.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0bf9bc.png","/_ipx/https://github.com/LukaszFormela.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F61a24f.png","/_ipx/https://github.com/HZooly.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0de44d.png","/_ipx/https://github.com/KareemDa.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc79dfa.png","/_ipx/https://github.com/vencho-mdp.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe17244.png","/_ipx/https://github.com/rannien.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe08048.png","/_ipx/https://github.com/mercs600.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd7cb9b.png","/_ipx/https://github.com/iamnbutler.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0219e9.png","/_ipx/https://github.com/SandraRodgers.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F87a47f.png","/_ipx/https://github.com/iamarpitpatidar.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc302c1.png","/_ipx/https://github.com/mkuehn.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fb2c5d4.png","/_ipx/https://github.com/duboiss.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd9412d.png","/_ipx/https://github.com/jtlindsey.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F7eb268.png","/_ipx/https://github.com/syagawa.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F42da1b.png","/_ipx/https://github.com/Mxime.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fbdcb89.png","/_ipx/https://github.com/karuhi.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F45bedd.png","/_ipx/https://github.com/alpower.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F483f8e.png","/_ipx/https://github.com/Flosciante.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa088da.png","/_ipx/https://github.com/quanghm27.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F44d54c.png"}}],fetch:{"AppLayout:0":{headerLinks:[{title:"Home",slug:aw,to:aw},{title:ax,items:[{title:"Tutorials",slug:"tutorials",subtitle:B,to:"\u002Ftutorials",icon:"tutorials.svg",color:T},{title:"API docs",subtitle:B,slug:ay,to:U,icon:"examples.svg",color:T},{title:"Integrations",subtitle:B,slug:ay,to:U,icon:"docs.svg",color:T}]},{title:"Pricing",slug:"pricing",to:"\u002Fpricing"}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:"\u002Fpartners"},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:ax,items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:U},{title:"Examples",to:"\u002Fexamples"},{title:"Deployments",to:"\u002Fdeployments"},{title:V,href:W},{title:"Modules",href:"https:\u002F\u002Fmodules.nuxtjs.org"},{title:"Releases",to:"\u002Freleases"},{title:"Showcases",to:"\u002Fshowcases"},{title:"Themes",to:"\u002Fthemes"}]}],showCookieBanner:C},"AsideBottom:0":{lastRelease:az,masterCoursesLink:{title:V,subtitle:aA,href:W,icon:aB,color:aC}},"AsideBottom:1":{lastRelease:az,masterCoursesLink:{title:V,subtitle:aA,href:W,icon:aB,color:aC}},"Docs:0":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxtjs.org",prev:{slug:"pentest-tools",to:"\u002Fcase-studies\u002Fpentest-tools",title:"Pentest Tools"},next:{slug:"layouts",to:"\u002Fexamples\u002Fmiscellaneous\u002Flayouts",title:"Layouts"}},"EditOnGithub:0":{link:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxtjs.org\u002Fedit\u002Fmain\u002Fcontent\u002Fen\u002Fdocs\u002F7.components-glossary\u002F1.fetch.md",contributors:[{name:"Nazaré da Piedade",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F31008635?u=db0d466a654b2a0f0f1e8308d7736ec4c3d3a887&v=4",login:"nazarepiedady"},{name:"Hugo",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F24863815?u=5e6388fb0a448419c0d88ba401e4b96eea5f88ab&v=4",login:"wheredidhugo"},{name:"Sylvain Marroufin",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7547335?u=e8e9429d55aa562ded7903ed3779fb498509f9ee&v=4",login:"smarroufin"},{name:"Clément Ollivier",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1439623?u=674a9e28e5bab7c584058d5be3e86117d5c16d64&v=4",login:"clemcode"},{name:"Spencer Cooley",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F488199?u=471f139a2721f4687dcf2f52b88f79c2545f9914&v=4",login:"SpencerCooley"},{name:"Piotr Zatorski",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F11573475?u=24122d5ed7cd6c7dcc76655df582f7811b8e9c55&v=4",login:"zatorck"},{name:"Harry Allen",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F66224939?u=90861df46160ee532cb2480e1c02e80167dd02fb&v=4",login:"MajesticString"},{name:"kazuya kawaguchi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F72989?u=d333c3048e3d6f8ed2a476a3564dba1fa5288b86&v=4",login:"kazupon"},{name:"Daniel Roe",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F28706372?u=4a401a8a0f03e301ab349d6ecf5d4df0225f0cc5&v=4",login:"danielroe"},{name:"Unai Mengual",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F20427094?u=a6404d8c18f09f0ea3bd95d35e714642101c65e6&v=4",login:"owlnai"},{name:"Hyunseung Lee",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F78584173?u=ecda4b0e60455e4a4e0de35beebfea487a5526b3&v=4",login:"HyunseungLee-Travis"},{name:"Sébastien Chopin",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F904724?u=c6c29f476e8aced6f47a2edcf057f83ceaeddade&v=4",login:"Atinux"},{name:"Alexandre Chopin",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F4084277?u=c10146f9baefc15a35c85e5605fd7b5f4ce129ca&v=4",login:"alexchopin"},{name:"pooya parsa",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F5158436?u=f9301fddd9642fab997eab88f939a0adbcb6094a&v=4",login:"pi0"},{name:"Nick Medrano",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6342102?v=4",login:"dosstx"},{name:"Mosaab Emam",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F26435307?u=4a016b818a339a40c5c4d6cc16e972b0895ae5a7&v=4",login:"Mosaab-Emam"},{name:"Iljs Путлер Капут",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F43464534?u=dff53bc8827a0246cf9a65d32205eb79fad726f7&v=4",login:"suruaku"},{name:"Heitor Ramon Ribeiro",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1626923?u=68d2d99a4d0f54558f77ac63d437c59024fad23c&v=4",login:"bloodf"},{name:"Nero",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F76162087?u=4831a2646217fb46b3d61d2a5fc6ac748da6b46b&v=4",login:"Chukwuemeka-Mba"},{name:"Yoon Han",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F8861810?u=e79476cee8e746305da2bd38d497cd952e90eb09&v=4",login:"YoonHan"},{name:"Ikko Ashimine",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F22633385?u=29190f6c8aed91fa9574b064a9995f1e49944acf&v=4",login:"eltociear"},{name:"FamCodings",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F47059124?u=da54487c754dcf47639eb129714e318f75056dde&v=4",login:"azizurrahmaan"},{name:aD,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F64593523?u=951854d785aab570caa37383a691c421dbdb12c1&v=4",login:aD},{name:"F. Hinkelmann",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F101553?u=ba04735186648afde39087bcc13d86e44c232a76&v=4",login:"fhinkel"},{name:aE,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F50281523?u=ff701a533e123e47961d0f2cf81b4081990c9d38&v=4",login:aE},{name:"Christophe Carvalho Vilas-Boas",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F946345?v=4",login:"ChristopheCVB"},{name:"Leoš Literák",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6383287?u=2f32f5447b0d317b7a16b3a70711e8eb4e6fff05&v=4",login:"literakl"},{name:"Trizotti",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F26180773?u=d8c9871560516c287e38c14a5ebbfddf0ed3efd1&v=4",login:"trizotti"},{name:"Marcello Bachechi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6385285?u=b2b9c6a7781171bdb1b98d9c25d23deaddaac4f5&v=4",login:"pilotkid"},{name:"Rodolphe",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7911262?u=20458afd5138c7815635922bf67c3fb5b3a02d70&v=4",login:"blupdew"},{name:"Thomas Underwood",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F75150197?u=37b67f4610e955622eb06c7043643c433a31db01&v=4",login:"iLuVue"},{name:"Shek Evgeniy",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F34533417?v=4",login:"shekeg"},{name:"Lukasz Formela",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F39266504?u=6cf0ad79b52b3f6fb12f0e25218ffb9da95b6cf4&v=4",login:"LukaszFormela"},{name:"Hugo Torzuoli",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7328625?u=227635090b531c5e0ae13a81b5e1129cfeeb2f5b&v=4",login:"HZooly"},{name:"Kareem Dabbeet",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F42810389?u=618ea45a53bdd708c7382c52ad25bd1af2c3e53f&v=4",login:"KareemDa"},{name:"tramplay",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F65968861?u=72bcdf905cf1e310bb5c0dfd53bc689e81d555f9&v=4",login:"vencho-mdp"},{name:"verebelyicsaba",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F2854597?u=0921782d1bb9ac671c8366b4c24a874e04556d0a&v=4",login:"rannien"},{name:"Adam",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7935392?u=78bb022a2f1d92ec39318aa8581d98169a0a1238&v=4",login:"mercs600"},{name:"Nate Butler",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1714999?u=2e194390963db335b878d385e82007faf14009f8&v=4",login:"iamnbutler"},{name:"Sandra Rodgers",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F45321563?u=f97fdd01635a6ba630e27ab9c8f23383e92ae4c9&v=4",login:"SandraRodgers"},{name:"Arpit Patidar",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F44097148?u=35746725bec61a2d2ae36dcbbeeca2fcb38f1bef&v=4",login:"iamarpitpatidar"},{name:"Matthew Kuehn",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1794897?u=65cc59dbe22893a8d27936a208a124f35db538a5&v=4",login:"mkuehn"},{name:"Steven DUBOIS",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F29716703?v=4",login:"duboiss"},{name:"Travis Lindsey",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7409277?u=e208e954de1d5cb9ac7fdc8a85e1a15b4a1213e0&v=4",login:"jtlindsey"},{name:aF,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F10936660?u=396523726509caa34a0153f14082d05fc3f47a19&v=4",login:aF},{name:"Maxime",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F3755401?u=09be999610c9d656c29f8c770eff92e9d0e6929a&v=4",login:"Mxime"},{name:"かる",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F15998572?u=aeb6d62f2e09dc96ee632a258b5a798418e49bee&v=4",login:"karuhi"},{name:"Al Power",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F858646?u=c35be09afa4ed838c91a1b2abb5db4362564522e&v=4",login:"alpower"},{name:"Florent Delerue",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6696789?u=0305b5aa4a18f1032e7c258dbbff319ad54a6fba&v=4",login:"Flosciante"},{name:"quanghm",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F28060255?u=f2a1e2ca2a40f078ca2e0b4d6e6a470170f0cf7e&v=4",login:"quanghm27"}]},_lazyComponents:new Set(["ProseParagraph","HomeHero","SugerMainImg","SectionContentItem","SugerHomeFeatures","SugerHomeImg","SugerHomeText","SugerHomeProduct","SugerHomeCommunity","SugerHomeLearnGuides","SugerHomeTextList","SugerHomePricing","SugerHomeFooterImg","SugerHomeFooterCooperation","PageHero","SupportCard","SupportContainer","ProseA","ProseH3","ProseCodeInline","ProseLi","ProseUl","ProseStrong","ProseBlockquote","ProseCode","ProseH2","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","PartnersBottomHero","PartnersSection","ShowcasesBottomHero","ShowcasesListing","VideoPlayer","ProseImg","CodeGroup","Alert","ThemesList","ProseEm","ProseOl","ProseH4","ProseH1","ProseHr","List","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","Sandbox","AppButton"])},mutations:[]}}("text","element","span","token","punctuation","\n","prose-code-inline"," ","keyword","\n    ","fetch","prose-paragraph",".","tag","{","}","function","(",")","\n      ","prose-li",": ","comment","operator",true,"prose-a","property-access","",false,"\u003E","module",":","this",","," or ","prose-code","pre","line-numbers","code","\n  ","false","script","control-flow","string",2,"bg-indigo","\u002Fdocs","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","nuxt--212","Nuxt \u003E= 2.12","prose-strong","prose-ul","$fetchState.pending","Boolean","Integer","language-html","\u003C","button","=","\"","$fetch","\u003C\u002F","language-javascript","export","default","method","options","Options","fetchOnServer","Function"," (default: ","true","fetchKey","return","getCounter","\u002F","Resources","docs","v2.15.8","Learn more with experts","master-courses.svg","bg-green-800","Ayouli","felipesuri","syagawa")));