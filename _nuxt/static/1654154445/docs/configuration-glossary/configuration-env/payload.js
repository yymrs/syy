__NUXT_JSONP__("/docs/configuration-glossary/configuration-env", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax){return {data:[{page:{key:"content:en:docs:5.configuration-glossary:9.configuration-env.md",generatedAt:new Date(1654154466323),mtime:new Date(1654154466315),slug:"configuration-env",title:U,position:"999900050009",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-env",draft:u,page:q,language:"en",navigation:{title:k},description:V,menu:k,category:"configuration-glossary",empty:u,excerpt:void 0,body:{raw:"---\ntitle: The env property\nnavigation.title: env\ndescription: Share environment variables between client and server.\nmenu: env\ncategory: configuration-glossary\n---\n\n# The env property\n\nShare environment variables between client and server.\n\n---\n\n- Type: `Object`\n\n\u003E Nuxt lets you create environment variables client side, also to be shared from server side.\n\nThe env property defines environment variables that should be available on the client side. They can be assigned using server side environment variables, the [dotenv module](https:\u002F\u002Fgithub.com\u002Fnuxt-community\u002Fdotenv-module) ones or similar.\n\n::alert\nFor nuxt versions \u003E 2.12+, in cases where environment variables are required at runtime (not build time) it is recommended to replace the `env` property with [runtimeConfig properties](\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-runtime-config): `publicRuntimeConfig` and `privateRuntimeConfig`. \n\u003Cbr\u003E\nLearn more with our tutorial about [moving from @nuxtjs\u002Fdotenv to runtime config](\u002Ftutorials\u002Fmoving-from-nuxtjs-dotenv-to-runtime-config\u002F).\n::\n\n**Make sure to read about `process.env` and `process.env == {}` below for better troubleshooting.**\n\n```js{}[nuxt.config.js]\nexport default {\n  env: {\n    baseUrl: process.env.BASE_URL || 'http:\u002F\u002Flocalhost:3000'\n  }\n}\n```\n\nThis lets you create a `baseUrl` property that will be equal to the `BASE_URL` server side environment variable if available or defined. If not, `baseUrl` in client side will be equal to `'http:\u002F\u002Flocalhost:3000'`. The server side variable BASE_URL is therefore copied to the client side via the `env` property in the `nuxt.config.js`. Alternatively, the other value is defined (http:\u002F\u002Flocalhost:3000).\n\nThen, I can access my `baseUrl` variable in 2 ways:\n\n1. Via `process.env.baseUrl`.\n2. Via `context.env.baseUrl`, see [context API](\u002Fdocs\u002Finternals-glossary\u002Fcontext).\n\nYou can use the `env` property for giving a public token for example.\n\nFor the example above, we can use it to configure [axios](https:\u002F\u002Fgithub.com\u002Fmzabriskie\u002Faxios).\n\n```js{}[plugins\u002Faxios.js]\nimport axios from 'axios'\n\nexport default axios.create({\n  baseURL: process.env.baseUrl\n})\n```\n\nThen, in your pages, you can import axios like this: `import axios from '~\u002Fplugins\u002Faxios'`\n\n## Automatic injection of environment variables\n\nIf you define environment variables starting with `NUXT_ENV_` in the build phase (e.g. `NUXT_ENV_COOL_WORD=freezing nuxt build` or `SET NUXT_ENV_COOL_WORD=freezing & nuxt build` for the Windows console, they'll be automatically injected into the process environment. Be aware that they'll potentially take precedence over defined variables in your `nuxt.config.js` with the same name.\n\n## process.env == {}\n\nNote that Nuxt uses webpack's `definePlugin` to define the environmental variable. This means that the actual `process` or `process.env` from Node.js is neither available nor defined. Each of the `env` properties defined in nuxt.config.js is individually mapped to `process.env.xxxx` and converted during compilation.\n\nMeaning, `console.log(process.env)` will output `{}` but `console.log(process.env.your_var)` will still output your value. When webpack compiles your code, it replaces all instances of `process.env.your_var` with the value you've set it to, e.g.: `env.test = 'testing123'`. If you use `process.env.test` in your code somewhere, it is actually translated to 'testing123'.\n\nbefore\n\n```js\nif (process.env.test == 'testing123')\n```\n\nafter\n\n```js\nif ('testing123' == 'testing123')\n```\n\n## serverMiddleware\n\nAs [serverMiddleware](\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-servermiddleware) is decoupled from the main Nuxt build, `env` variables defined in `nuxt.config.js` are not available there.\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"the-env-property"},children:[{type:a,value:U}]},{type:a,value:e},{type:b,tag:h,props:{class:"d-heading-description"},children:[{type:a,value:V}]},{type:a,value:e},{type:b,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:e},{type:b,tag:"prose-ul",props:{},children:[{type:a,value:e},{type:b,tag:C,props:{},children:[{type:a,value:e},{type:a,value:"Type: "},{type:b,tag:f,props:{},children:[{type:a,value:"Object"}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:"prose-blockquote",props:{},children:[{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Nuxt lets you create environment variables client side, also to be shared from server side."}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"The env property defines environment variables that should be available on the client side. They can be assigned using server side environment variables, the "},{type:b,tag:l,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt-community\u002Fdotenv-module",rel:[D,E,F],target:G},children:[{type:a,value:"dotenv module"}]},{type:a,value:" ones or similar."}]},{type:a,value:e},{type:b,tag:"alert",props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:"For nuxt versions \u003E 2.12+, in cases where environment variables are required at runtime (not build time) it is recommended to replace the "},{type:b,tag:f,props:{},children:[{type:a,value:k}]},{type:a,value:" property with "},{type:b,tag:l,props:{href:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-runtime-config"},children:[{type:a,value:"runtimeConfig properties"}]},{type:a,value:": "},{type:b,tag:f,props:{},children:[{type:a,value:"publicRuntimeConfig"}]},{type:a,value:W},{type:b,tag:f,props:{},children:[{type:a,value:"privateRuntimeConfig"}]},{type:a,value:".\n"},{type:b,tag:"br",props:{},children:[]},{type:a,value:"\nLearn more with our tutorial about "},{type:b,tag:l,props:{href:"\u002Ftutorials\u002Fmoving-from-nuxtjs-dotenv-to-runtime-config\u002F"},children:[{type:a,value:"moving from @nuxtjs\u002Fdotenv to runtime config"}]},{type:a,value:j}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:b,tag:"prose-strong",props:{},children:[{type:a,value:"Make sure to read about "},{type:b,tag:f,props:{},children:[{type:a,value:X}]},{type:a,value:W},{type:b,tag:f,props:{},children:[{type:a,value:H}]},{type:a,value:" below for better troubleshooting."}]}]},{type:a,value:e},{type:b,tag:v,props:{},children:[{type:b,tag:c,props:{className:[Y]},children:[{type:a,value:w}]},{type:b,tag:x,props:{className:[y,z]},children:[{type:b,tag:A,props:{},children:[{type:b,tag:c,props:{className:[d,m,n]},children:[{type:a,value:Z}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,m,n]},children:[{type:a,value:_}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:I}]},{type:a,value:"\n  env"},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:J}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:I}]},{type:a,value:"\n    baseUrl"},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:J}]},{type:a,value:$},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,"constant"]},children:[{type:a,value:aa}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"||"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:ab}]},{type:a,value:"\n  "},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:K}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:K}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"This lets you create a "},{type:b,tag:f,props:{},children:[{type:a,value:B}]},{type:a,value:" property that will be equal to the "},{type:b,tag:f,props:{},children:[{type:a,value:aa}]},{type:a,value:" server side environment variable if available or defined. If not, "},{type:b,tag:f,props:{},children:[{type:a,value:B}]},{type:a,value:" in client side will be equal to "},{type:b,tag:f,props:{},children:[{type:a,value:ab}]},{type:a,value:". The server side variable BASE_URL is therefore copied to the client side via the "},{type:b,tag:f,props:{},children:[{type:a,value:k}]},{type:a,value:" property in the "},{type:b,tag:f,props:{},children:[{type:a,value:w}]},{type:a,value:". Alternatively, the other value is defined ("},{type:b,tag:l,props:{href:ac,rel:[D,E,F],target:G},children:[{type:a,value:ac}]},{type:a,value:")."}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Then, I can access my "},{type:b,tag:f,props:{},children:[{type:a,value:B}]},{type:a,value:" variable in 2 ways:"}]},{type:a,value:e},{type:b,tag:"prose-ol",props:{},children:[{type:a,value:e},{type:b,tag:C,props:{},children:[{type:a,value:e},{type:a,value:ad},{type:b,tag:f,props:{},children:[{type:a,value:"process.env.baseUrl"}]},{type:a,value:j},{type:a,value:e}]},{type:a,value:e},{type:b,tag:C,props:{},children:[{type:a,value:e},{type:a,value:ad},{type:b,tag:f,props:{},children:[{type:a,value:"context.env.baseUrl"}]},{type:a,value:", see "},{type:b,tag:l,props:{href:"\u002Fdocs\u002Finternals-glossary\u002Fcontext"},children:[{type:a,value:"context API"}]},{type:a,value:j},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"You can use the "},{type:b,tag:f,props:{},children:[{type:a,value:k}]},{type:a,value:" property for giving a public token for example."}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"For the example above, we can use it to configure "},{type:b,tag:l,props:{href:"https:\u002F\u002Fgithub.com\u002Fmzabriskie\u002Faxios",rel:[D,E,F],target:G},children:[{type:a,value:ae}]},{type:a,value:j}]},{type:a,value:e},{type:b,tag:v,props:{},children:[{type:b,tag:c,props:{className:[Y]},children:[{type:a,value:"plugins\u002Faxios.js"}]},{type:b,tag:x,props:{className:[y,z]},children:[{type:b,tag:A,props:{},children:[{type:b,tag:c,props:{className:[d,m,n]},children:[{type:a,value:"import"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,"imports"]},children:[{type:a,value:ae}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,m,n]},children:[{type:a,value:"from"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"'axios'"}]},{type:a,value:"\n\n"},{type:b,tag:c,props:{className:[d,m,n]},children:[{type:a,value:Z}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,m,n]},children:[{type:a,value:_}]},{type:a,value:" axios"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,"method","function",p]},children:[{type:a,value:"create"}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:I}]},{type:a,value:"\n  baseURL"},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:J}]},{type:a,value:$},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:B}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:M}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Then, in your pages, you can import axios like this: "},{type:b,tag:f,props:{},children:[{type:a,value:"import axios from '~\u002Fplugins\u002Faxios'"}]}]},{type:a,value:e},{type:b,tag:N,props:{id:af},children:[{type:b,tag:l,props:{href:"#automatic-injection-of-environment-variables"},children:[{type:a,value:ag}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"If you define environment variables starting with "},{type:b,tag:f,props:{},children:[{type:a,value:"NUXT_ENV_"}]},{type:a,value:" in the build phase (e.g. "},{type:b,tag:f,props:{},children:[{type:a,value:"NUXT_ENV_COOL_WORD=freezing nuxt build"}]},{type:a,value:ah},{type:b,tag:f,props:{},children:[{type:a,value:"SET NUXT_ENV_COOL_WORD=freezing & nuxt build"}]},{type:a,value:" for the Windows console, they'll be automatically injected into the process environment. Be aware that they'll potentially take precedence over defined variables in your "},{type:b,tag:f,props:{},children:[{type:a,value:w}]},{type:a,value:" with the same name."}]},{type:a,value:e},{type:b,tag:N,props:{id:ai},children:[{type:b,tag:l,props:{href:"#processenv--"},children:[{type:a,value:H}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Note that Nuxt uses webpack's "},{type:b,tag:f,props:{},children:[{type:a,value:"definePlugin"}]},{type:a,value:" to define the environmental variable. This means that the actual "},{type:b,tag:f,props:{},children:[{type:a,value:aj}]},{type:a,value:ah},{type:b,tag:f,props:{},children:[{type:a,value:X}]},{type:a,value:" from Node.js is neither available nor defined. Each of the "},{type:b,tag:f,props:{},children:[{type:a,value:k}]},{type:a,value:" properties defined in nuxt.config.js is individually mapped to "},{type:b,tag:f,props:{},children:[{type:a,value:"process.env.xxxx"}]},{type:a,value:" and converted during compilation."}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Meaning, "},{type:b,tag:f,props:{},children:[{type:a,value:"console.log(process.env)"}]},{type:a,value:" will output "},{type:b,tag:f,props:{},children:[{type:a,value:"{}"}]},{type:a,value:" but "},{type:b,tag:f,props:{},children:[{type:a,value:"console.log(process.env.your_var)"}]},{type:a,value:" will still output your value. When webpack compiles your code, it replaces all instances of "},{type:b,tag:f,props:{},children:[{type:a,value:"process.env.your_var"}]},{type:a,value:" with the value you've set it to, e.g.: "},{type:b,tag:f,props:{},children:[{type:a,value:"env.test = 'testing123'"}]},{type:a,value:". If you use "},{type:b,tag:f,props:{},children:[{type:a,value:"process.env.test"}]},{type:a,value:" in your code somewhere, it is actually translated to 'testing123'."}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"before"}]},{type:a,value:e},{type:b,tag:v,props:{},children:[{type:b,tag:x,props:{className:[y,z]},children:[{type:b,tag:A,props:{},children:[{type:b,tag:c,props:{className:[d,m,ak]},children:[{type:a,value:al}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:L}]},{type:a,value:aj},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"test"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:am}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:M}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"after"}]},{type:a,value:e},{type:b,tag:v,props:{},children:[{type:b,tag:x,props:{className:[y,z]},children:[{type:b,tag:A,props:{},children:[{type:b,tag:c,props:{className:[d,m,ak]},children:[{type:a,value:al}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:O}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:am}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:M}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:N,props:{id:an},children:[{type:b,tag:l,props:{href:"#servermiddleware"},children:[{type:a,value:P}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"As "},{type:b,tag:l,props:{href:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-servermiddleware"},children:[{type:a,value:P}]},{type:a,value:" is decoupled from the main Nuxt build, "},{type:b,tag:f,props:{},children:[{type:a,value:k}]},{type:a,value:" variables defined in "},{type:b,tag:f,props:{},children:[{type:a,value:w}]},{type:a,value:" are not available there."}]}]},toc:{title:s,searchDepth:t,depth:t,links:[{id:af,depth:t,text:ag},{id:ai,depth:t,text:H},{id:an,depth:t,text:P}]}},template:"Docs"},templateOptions:{header:q,footer:q,aside:q,asideClass:s,fluid:u,banner:q},_img:{"/_ipx/https://github.com/nazarepiedady.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd5c785.png","/_ipx/https://github.com/wheredidhugo.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F952ed3.png","/_ipx/https://github.com/smarroufin.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc9abac.png","/_ipx/https://github.com/clemcode.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F77339c.png","/_ipx/https://github.com/SpencerCooley.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fb3bb68.png","/_ipx/https://github.com/zatorck.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F66bdcf.png","/_ipx/https://github.com/MajesticString.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fb50564.png","/_ipx/https://github.com/kazupon.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd6247a.png","/_ipx/https://github.com/danielroe.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0786f3.png","/_ipx/https://github.com/owlnai.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0340f1.png","/_ipx/https://github.com/HyunseungLee-Travis.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa79a1d.png","/_ipx/https://github.com/Atinux.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe847b9.png","/_ipx/https://github.com/alexchopin.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F2c01a3.png","/_ipx/https://github.com/pi0.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F368a8d.png","/_ipx/https://github.com/dosstx.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F7486d8.png","/_ipx/https://github.com/Mosaab-Emam.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Feeb249.png","/_ipx/https://github.com/suruaku.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F97788f.png","/_ipx/https://github.com/bloodf.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F372791.png","/_ipx/https://github.com/Chukwuemeka-Mba.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0ed25e.png","/_ipx/https://github.com/YoonHan.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F866eec.png","/_ipx/https://github.com/eltociear.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0a4949.png","/_ipx/https://github.com/azizurrahmaan.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F879caa.png","/_ipx/https://github.com/Ayouli.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa827f5.png","/_ipx/https://github.com/fhinkel.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F26e625.png","/_ipx/https://github.com/felipesuri.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa2c3fe.png","/_ipx/https://github.com/ChristopheCVB.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fbe1aa1.png","/_ipx/https://github.com/literakl.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F496416.png","/_ipx/https://github.com/trizotti.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fff04b5.png","/_ipx/https://github.com/pilotkid.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F48fe7a.png","/_ipx/https://github.com/blupdew.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Ff00d82.png","/_ipx/https://github.com/iLuVue.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0a82d8.png","/_ipx/https://github.com/shekeg.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0bf9bc.png","/_ipx/https://github.com/LukaszFormela.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F61a24f.png","/_ipx/https://github.com/HZooly.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0de44d.png","/_ipx/https://github.com/KareemDa.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc79dfa.png","/_ipx/https://github.com/vencho-mdp.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe17244.png","/_ipx/https://github.com/rannien.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe08048.png","/_ipx/https://github.com/mercs600.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd7cb9b.png","/_ipx/https://github.com/iamnbutler.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0219e9.png","/_ipx/https://github.com/SandraRodgers.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F87a47f.png","/_ipx/https://github.com/iamarpitpatidar.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc302c1.png","/_ipx/https://github.com/mkuehn.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fb2c5d4.png","/_ipx/https://github.com/duboiss.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd9412d.png","/_ipx/https://github.com/jtlindsey.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F7eb268.png","/_ipx/https://github.com/syagawa.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F42da1b.png","/_ipx/https://github.com/Mxime.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fbdcb89.png","/_ipx/https://github.com/karuhi.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F45bedd.png","/_ipx/https://github.com/alpower.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F483f8e.png","/_ipx/https://github.com/Flosciante.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa088da.png","/_ipx/https://github.com/quanghm27.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F44d54c.png"}}],fetch:{"AppLayout:0":{headerLinks:[{title:"Home",slug:ao,to:ao},{title:ap,items:[{title:"Tutorials",slug:"tutorials",subtitle:s,to:"\u002Ftutorials",icon:"tutorials.svg",color:Q},{title:"API docs",subtitle:s,slug:aq,to:R,icon:"examples.svg",color:Q},{title:"Integrations",subtitle:s,slug:aq,to:R,icon:"docs.svg",color:Q}]},{title:"Pricing",slug:"pricing",to:"\u002Fpricing"}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:"\u002Fpartners"},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:ap,items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:R},{title:"Examples",to:"\u002Fexamples"},{title:"Deployments",to:"\u002Fdeployments"},{title:S,href:T},{title:"Modules",href:"https:\u002F\u002Fmodules.nuxtjs.org"},{title:"Releases",to:"\u002Freleases"},{title:"Showcases",to:"\u002Fshowcases"},{title:"Themes",to:"\u002Fthemes"}]}],showCookieBanner:u},"AsideBottom:0":{lastRelease:ar,masterCoursesLink:{title:S,subtitle:as,href:T,icon:at,color:au}},"AsideBottom:1":{lastRelease:ar,masterCoursesLink:{title:S,subtitle:as,href:T,icon:at,color:au}},"Docs:0":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxtjs.org",prev:{slug:"configuration-dir",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-dir",title:"The dir Property"},next:{slug:"configuration-extend-plugins",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-extend-plugins",title:"The extendPlugins Property"}},"EditOnGithub:0":{link:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxtjs.org\u002Fedit\u002Fmain\u002Fcontent\u002Fen\u002Fdocs\u002F5.configuration-glossary\u002F9.configuration-env.md",contributors:[{name:"Nazaré da Piedade",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F31008635?u=db0d466a654b2a0f0f1e8308d7736ec4c3d3a887&v=4",login:"nazarepiedady"},{name:"Hugo",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F24863815?u=5e6388fb0a448419c0d88ba401e4b96eea5f88ab&v=4",login:"wheredidhugo"},{name:"Sylvain Marroufin",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7547335?u=e8e9429d55aa562ded7903ed3779fb498509f9ee&v=4",login:"smarroufin"},{name:"Clément Ollivier",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1439623?u=674a9e28e5bab7c584058d5be3e86117d5c16d64&v=4",login:"clemcode"},{name:"Spencer Cooley",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F488199?u=471f139a2721f4687dcf2f52b88f79c2545f9914&v=4",login:"SpencerCooley"},{name:"Piotr Zatorski",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F11573475?u=24122d5ed7cd6c7dcc76655df582f7811b8e9c55&v=4",login:"zatorck"},{name:"Harry Allen",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F66224939?u=90861df46160ee532cb2480e1c02e80167dd02fb&v=4",login:"MajesticString"},{name:"kazuya kawaguchi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F72989?u=d333c3048e3d6f8ed2a476a3564dba1fa5288b86&v=4",login:"kazupon"},{name:"Daniel Roe",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F28706372?u=4a401a8a0f03e301ab349d6ecf5d4df0225f0cc5&v=4",login:"danielroe"},{name:"Unai Mengual",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F20427094?u=a6404d8c18f09f0ea3bd95d35e714642101c65e6&v=4",login:"owlnai"},{name:"Hyunseung Lee",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F78584173?u=ecda4b0e60455e4a4e0de35beebfea487a5526b3&v=4",login:"HyunseungLee-Travis"},{name:"Sébastien Chopin",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F904724?u=c6c29f476e8aced6f47a2edcf057f83ceaeddade&v=4",login:"Atinux"},{name:"Alexandre Chopin",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F4084277?u=c10146f9baefc15a35c85e5605fd7b5f4ce129ca&v=4",login:"alexchopin"},{name:"pooya parsa",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F5158436?u=f9301fddd9642fab997eab88f939a0adbcb6094a&v=4",login:"pi0"},{name:"Nick Medrano",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6342102?v=4",login:"dosstx"},{name:"Mosaab Emam",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F26435307?u=4a016b818a339a40c5c4d6cc16e972b0895ae5a7&v=4",login:"Mosaab-Emam"},{name:"Iljs Путлер Капут",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F43464534?u=dff53bc8827a0246cf9a65d32205eb79fad726f7&v=4",login:"suruaku"},{name:"Heitor Ramon Ribeiro",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1626923?u=68d2d99a4d0f54558f77ac63d437c59024fad23c&v=4",login:"bloodf"},{name:"Nero",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F76162087?u=4831a2646217fb46b3d61d2a5fc6ac748da6b46b&v=4",login:"Chukwuemeka-Mba"},{name:"Yoon Han",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F8861810?u=e79476cee8e746305da2bd38d497cd952e90eb09&v=4",login:"YoonHan"},{name:"Ikko Ashimine",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F22633385?u=29190f6c8aed91fa9574b064a9995f1e49944acf&v=4",login:"eltociear"},{name:"FamCodings",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F47059124?u=da54487c754dcf47639eb129714e318f75056dde&v=4",login:"azizurrahmaan"},{name:av,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F64593523?u=951854d785aab570caa37383a691c421dbdb12c1&v=4",login:av},{name:"F. Hinkelmann",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F101553?u=ba04735186648afde39087bcc13d86e44c232a76&v=4",login:"fhinkel"},{name:aw,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F50281523?u=ff701a533e123e47961d0f2cf81b4081990c9d38&v=4",login:aw},{name:"Christophe Carvalho Vilas-Boas",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F946345?v=4",login:"ChristopheCVB"},{name:"Leoš Literák",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6383287?u=2f32f5447b0d317b7a16b3a70711e8eb4e6fff05&v=4",login:"literakl"},{name:"Trizotti",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F26180773?u=d8c9871560516c287e38c14a5ebbfddf0ed3efd1&v=4",login:"trizotti"},{name:"Marcello Bachechi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6385285?u=b2b9c6a7781171bdb1b98d9c25d23deaddaac4f5&v=4",login:"pilotkid"},{name:"Rodolphe",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7911262?u=20458afd5138c7815635922bf67c3fb5b3a02d70&v=4",login:"blupdew"},{name:"Thomas Underwood",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F75150197?u=37b67f4610e955622eb06c7043643c433a31db01&v=4",login:"iLuVue"},{name:"Shek Evgeniy",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F34533417?v=4",login:"shekeg"},{name:"Lukasz Formela",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F39266504?u=6cf0ad79b52b3f6fb12f0e25218ffb9da95b6cf4&v=4",login:"LukaszFormela"},{name:"Hugo Torzuoli",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7328625?u=227635090b531c5e0ae13a81b5e1129cfeeb2f5b&v=4",login:"HZooly"},{name:"Kareem Dabbeet",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F42810389?u=618ea45a53bdd708c7382c52ad25bd1af2c3e53f&v=4",login:"KareemDa"},{name:"tramplay",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F65968861?u=72bcdf905cf1e310bb5c0dfd53bc689e81d555f9&v=4",login:"vencho-mdp"},{name:"verebelyicsaba",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F2854597?u=0921782d1bb9ac671c8366b4c24a874e04556d0a&v=4",login:"rannien"},{name:"Adam",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7935392?u=78bb022a2f1d92ec39318aa8581d98169a0a1238&v=4",login:"mercs600"},{name:"Nate Butler",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1714999?u=2e194390963db335b878d385e82007faf14009f8&v=4",login:"iamnbutler"},{name:"Sandra Rodgers",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F45321563?u=f97fdd01635a6ba630e27ab9c8f23383e92ae4c9&v=4",login:"SandraRodgers"},{name:"Arpit Patidar",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F44097148?u=35746725bec61a2d2ae36dcbbeeca2fcb38f1bef&v=4",login:"iamarpitpatidar"},{name:"Matthew Kuehn",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1794897?u=65cc59dbe22893a8d27936a208a124f35db538a5&v=4",login:"mkuehn"},{name:"Steven DUBOIS",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F29716703?v=4",login:"duboiss"},{name:"Travis Lindsey",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7409277?u=e208e954de1d5cb9ac7fdc8a85e1a15b4a1213e0&v=4",login:"jtlindsey"},{name:ax,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F10936660?u=396523726509caa34a0153f14082d05fc3f47a19&v=4",login:ax},{name:"Maxime",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F3755401?u=09be999610c9d656c29f8c770eff92e9d0e6929a&v=4",login:"Mxime"},{name:"かる",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F15998572?u=aeb6d62f2e09dc96ee632a258b5a798418e49bee&v=4",login:"karuhi"},{name:"Al Power",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F858646?u=c35be09afa4ed838c91a1b2abb5db4362564522e&v=4",login:"alpower"},{name:"Florent Delerue",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6696789?u=0305b5aa4a18f1032e7c258dbbff319ad54a6fba&v=4",login:"Flosciante"},{name:"quanghm",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F28060255?u=f2a1e2ca2a40f078ca2e0b4d6e6a470170f0cf7e&v=4",login:"quanghm27"}]},_lazyComponents:new Set(["ProseParagraph","HomeHero","SugerMainImg","SectionContentItem","SugerHomeFeatures","SugerHomeImg","SugerHomeText","SugerHomeProduct","SugerHomeCommunity","SugerHomeLearnGuides","SugerHomeTextList","SugerHomePricing","SugerHomeFooterImg","SugerHomeFooterCooperation","PageHero","SupportCard","SupportContainer","ProseA","ProseH3","ProseCodeInline","ProseLi","ProseUl","ProseStrong","ProseBlockquote","ProseCode","ProseH2","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","PartnersBottomHero","PartnersSection","ShowcasesBottomHero","ShowcasesListing","VideoPlayer","ProseImg","CodeGroup","Alert","ThemesList","ProseEm","ProseOl","ProseH4","ProseH1","ProseHr","List","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","Sandbox","AppButton","BaseAlert","Link"])},mutations:[]}}("text","element","span","token","\n","prose-code-inline","punctuation","prose-paragraph"," ",".","env","prose-a","keyword","module","operator","property-access",true,"string","",2,false,"prose-code","nuxt.config.js","pre","language-js","line-numbers","code","baseUrl","prose-li","nofollow","noopener","noreferrer","_blank","process.env == {}","{",":","}","(",")","prose-h2","'testing123'","serverMiddleware","bg-indigo","\u002Fdocs","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","The env property","Share environment variables between client and server."," and ","process.env","filename","export","default"," process","BASE_URL","'http:\u002F\u002Flocalhost:3000'","http:\u002F\u002Flocalhost:3000","Via ","axios","automatic-injection-of-environment-variables","Automatic injection of environment variables"," or ","processenv--","process","control-flow","if","==","servermiddleware","\u002F","Resources","docs","v2.15.8","Learn more with experts","master-courses.svg","bg-green-800","Ayouli","felipesuri","syagawa")));