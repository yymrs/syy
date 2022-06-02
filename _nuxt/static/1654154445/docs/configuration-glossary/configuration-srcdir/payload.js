__NUXT_JSONP__("/docs/configuration-glossary/configuration-srcdir", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq){return {data:[{page:{key:"content:en:docs:5.configuration-glossary:29.configuration-srcdir.md",generatedAt:new Date(1654154469802),mtime:new Date(1654154469796),slug:"configuration-srcdir",title:"The srcDir Property",position:"999900050029",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-srcdir",draft:t,page:r,language:"en",navigation:{title:A},description:F,menu:A,category:"configuration-glossary",empty:t,excerpt:void 0,body:{raw:"---\ntitle: The srcDir Property\nnavigation.title: srcDir\ndescription: Define the source directory of your Nuxt application.\nmenu: srcDir\ncategory: configuration-glossary\n---\n# The srcDir property\n\nDefine the source directory of your Nuxt application.\n\n---\n\n- Type: `String`\n- Default: [rootDir value](\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-rootdir)\n\nIf a relative path is specified it will be relative to the `rootDir`.\n\nExample 1: Prerequisites:\n\n```js{}[nuxt.config.js]\nexport default {\n  srcDir: 'client\u002F'\n}\n```\n\n```js{}[package.json]\n  \"script\": {\n    \"dev\": \"yarn nuxt\"\n  }\n```\n\nworks with the following folder structure (note that nuxt.config is listed in the app directory)\n\n```bash\n-| app\u002F\n---| node_modules\u002F\n---| nuxt.config.js\n---| package.json\n---| client\u002F\n------| assets\u002F\n------| components\u002F\n------| layouts\u002F\n------| middleware\u002F\n------| pages\u002F\n------| plugins\u002F\n------| static\u002F\n------| store\u002F\n```\n\nExample 2:\n\nInstead of example 1 you can also move the nuxt.config into your `client` folder. In this case you only need to specify `client` as the `rootDir` and you can leave `srcDir` empty:\n\nPrerequisites:\n\n```js{}[nuxt.config.js]\nexport default {\n  srcDir: '' \u002F\u002F or just remove it\n}\n```\n\n```js{}[package.json]\n  \"script\": {\n    \"dev\": \"yarn nuxt client\" \u002F\u002F this sets client as the rootDir\n  }\n```\n\nworks with the following folder structure (note that nuxt.config is listed in the client directory)\n\n```bash\n-| app\u002F\n---| node_modules\u002F\n---| package.json\n---| client\u002F\n------| nuxt.config.js\n------| assets\u002F\n------| components\u002F\n------| layouts\u002F\n------| middleware\u002F\n------| pages\u002F\n------| plugins\u002F\n------| static\u002F\n------| store\u002F\n```\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"the-srcdir-property"},children:[{type:a,value:"The srcDir property"}]},{type:a,value:f},{type:b,tag:i,props:{class:"d-heading-description"},children:[{type:a,value:F}]},{type:a,value:f},{type:b,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:f},{type:b,tag:"prose-ul",props:{},children:[{type:a,value:f},{type:b,tag:G,props:{},children:[{type:a,value:f},{type:a,value:"Type: "},{type:b,tag:l,props:{},children:[{type:a,value:"String"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:G,props:{},children:[{type:a,value:f},{type:a,value:"Default: "},{type:b,tag:"prose-a",props:{href:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-rootdir"},children:[{type:a,value:"rootDir value"}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"If a relative path is specified it will be relative to the "},{type:b,tag:l,props:{},children:[{type:a,value:H}]},{type:a,value:"."}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"Example 1: Prerequisites:"}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[u]},children:[{type:a,value:I}]},{type:b,tag:n,props:{className:[o,v]},children:[{type:b,tag:p,props:{},children:[{type:b,tag:c,props:{className:[d,w,x]},children:[{type:a,value:J}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,w,x]},children:[{type:a,value:K}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:y}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"'client\u002F'"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:z}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[u]},children:[{type:a,value:M}]},{type:b,tag:n,props:{className:[o,v]},children:[{type:b,tag:p,props:{},children:[{type:a,value:N},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:y}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"\"yarn nuxt\""}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:z}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"works with the following folder structure (note that nuxt.config is listed in the app directory)"}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:b,tag:n,props:{className:[o,S]},children:[{type:b,tag:p,props:{},children:[{type:a,value:T},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:" nuxt.config.js\n---"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:Z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:$},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:ad}]}]}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"Example 2:"}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"Instead of example 1 you can also move the nuxt.config into your "},{type:b,tag:l,props:{},children:[{type:a,value:ae}]},{type:a,value:" folder. In this case you only need to specify "},{type:b,tag:l,props:{},children:[{type:a,value:ae}]},{type:a,value:" as the "},{type:b,tag:l,props:{},children:[{type:a,value:H}]},{type:a,value:" and you can leave "},{type:b,tag:l,props:{},children:[{type:a,value:A}]},{type:a,value:" empty:"}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"Prerequisites:"}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[u]},children:[{type:a,value:I}]},{type:b,tag:n,props:{className:[o,v]},children:[{type:b,tag:p,props:{},children:[{type:b,tag:c,props:{className:[d,w,x]},children:[{type:a,value:J}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,w,x]},children:[{type:a,value:K}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:y}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"''"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,af]},children:[{type:a,value:"\u002F\u002F or just remove it"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:z}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[u]},children:[{type:a,value:M}]},{type:b,tag:n,props:{className:[o,v]},children:[{type:b,tag:p,props:{},children:[{type:a,value:N},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:y}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"\"yarn nuxt client\""}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,af]},children:[{type:a,value:"\u002F\u002F this sets client as the rootDir"}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:z}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"works with the following folder structure (note that nuxt.config is listed in the client directory)"}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:b,tag:n,props:{className:[o,S]},children:[{type:b,tag:p,props:{},children:[{type:a,value:T},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:" nuxt.config.js\n------"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:Z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:$},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:ad}]}]}]}]},toc:{title:s,searchDepth:ag,depth:ag,links:[]}},template:"Docs"},templateOptions:{header:r,footer:r,aside:r,asideClass:s,fluid:t,banner:r},_img:{"/_ipx/https://github.com/nazarepiedady.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd5c785.png","/_ipx/https://github.com/wheredidhugo.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F952ed3.png","/_ipx/https://github.com/smarroufin.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc9abac.png","/_ipx/https://github.com/clemcode.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F77339c.png","/_ipx/https://github.com/SpencerCooley.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fb3bb68.png","/_ipx/https://github.com/zatorck.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F66bdcf.png","/_ipx/https://github.com/MajesticString.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fb50564.png","/_ipx/https://github.com/kazupon.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd6247a.png","/_ipx/https://github.com/danielroe.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0786f3.png","/_ipx/https://github.com/owlnai.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0340f1.png","/_ipx/https://github.com/HyunseungLee-Travis.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa79a1d.png","/_ipx/https://github.com/Atinux.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe847b9.png","/_ipx/https://github.com/alexchopin.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F2c01a3.png","/_ipx/https://github.com/pi0.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F368a8d.png","/_ipx/https://github.com/dosstx.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F7486d8.png","/_ipx/https://github.com/Mosaab-Emam.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Feeb249.png","/_ipx/https://github.com/suruaku.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F97788f.png","/_ipx/https://github.com/bloodf.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F372791.png","/_ipx/https://github.com/Chukwuemeka-Mba.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0ed25e.png","/_ipx/https://github.com/YoonHan.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F866eec.png","/_ipx/https://github.com/eltociear.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0a4949.png","/_ipx/https://github.com/azizurrahmaan.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F879caa.png","/_ipx/https://github.com/Ayouli.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa827f5.png","/_ipx/https://github.com/fhinkel.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F26e625.png","/_ipx/https://github.com/felipesuri.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa2c3fe.png","/_ipx/https://github.com/ChristopheCVB.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fbe1aa1.png","/_ipx/https://github.com/literakl.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F496416.png","/_ipx/https://github.com/trizotti.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fff04b5.png","/_ipx/https://github.com/pilotkid.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F48fe7a.png","/_ipx/https://github.com/blupdew.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Ff00d82.png","/_ipx/https://github.com/iLuVue.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0a82d8.png","/_ipx/https://github.com/shekeg.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0bf9bc.png","/_ipx/https://github.com/LukaszFormela.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F61a24f.png","/_ipx/https://github.com/HZooly.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0de44d.png","/_ipx/https://github.com/KareemDa.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc79dfa.png","/_ipx/https://github.com/vencho-mdp.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe17244.png","/_ipx/https://github.com/rannien.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe08048.png","/_ipx/https://github.com/mercs600.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd7cb9b.png","/_ipx/https://github.com/iamnbutler.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0219e9.png","/_ipx/https://github.com/SandraRodgers.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F87a47f.png","/_ipx/https://github.com/iamarpitpatidar.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc302c1.png","/_ipx/https://github.com/mkuehn.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fb2c5d4.png","/_ipx/https://github.com/duboiss.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd9412d.png","/_ipx/https://github.com/jtlindsey.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F7eb268.png","/_ipx/https://github.com/syagawa.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F42da1b.png","/_ipx/https://github.com/Mxime.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fbdcb89.png","/_ipx/https://github.com/karuhi.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F45bedd.png","/_ipx/https://github.com/alpower.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F483f8e.png","/_ipx/https://github.com/Flosciante.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa088da.png","/_ipx/https://github.com/quanghm27.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F44d54c.png"}}],fetch:{"AppLayout:0":{headerLinks:[{title:"Home",slug:ah,to:ah},{title:ai,items:[{title:"Tutorials",slug:"tutorials",subtitle:s,to:"\u002Ftutorials",icon:"tutorials.svg",color:B},{title:"API docs",subtitle:s,slug:aj,to:C,icon:"examples.svg",color:B},{title:"Integrations",subtitle:s,slug:aj,to:C,icon:"docs.svg",color:B}]},{title:"Pricing",slug:"pricing",to:"\u002Fpricing"}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:"\u002Fpartners"},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:ai,items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:C},{title:"Examples",to:"\u002Fexamples"},{title:"Deployments",to:"\u002Fdeployments"},{title:D,href:E},{title:"Modules",href:"https:\u002F\u002Fmodules.nuxtjs.org"},{title:"Releases",to:"\u002Freleases"},{title:"Showcases",to:"\u002Fshowcases"},{title:"Themes",to:"\u002Fthemes"}]}],showCookieBanner:t},"AsideBottom:0":{lastRelease:ak,masterCoursesLink:{title:D,subtitle:al,href:E,icon:am,color:an}},"AsideBottom:1":{lastRelease:ak,masterCoursesLink:{title:D,subtitle:al,href:E,icon:am,color:an}},"Docs:0":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxtjs.org",prev:{slug:"configuration-servermiddleware",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-servermiddleware",title:"The serverMiddleware Property"},next:{slug:"configuration-ssr",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-ssr",title:"The ssr Property"}},"EditOnGithub:0":{link:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxtjs.org\u002Fedit\u002Fmain\u002Fcontent\u002Fen\u002Fdocs\u002F5.configuration-glossary\u002F29.configuration-srcdir.md",contributors:[{name:"Nazaré da Piedade",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F31008635?u=db0d466a654b2a0f0f1e8308d7736ec4c3d3a887&v=4",login:"nazarepiedady"},{name:"Hugo",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F24863815?u=5e6388fb0a448419c0d88ba401e4b96eea5f88ab&v=4",login:"wheredidhugo"},{name:"Sylvain Marroufin",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7547335?u=e8e9429d55aa562ded7903ed3779fb498509f9ee&v=4",login:"smarroufin"},{name:"Clément Ollivier",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1439623?u=674a9e28e5bab7c584058d5be3e86117d5c16d64&v=4",login:"clemcode"},{name:"Spencer Cooley",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F488199?u=471f139a2721f4687dcf2f52b88f79c2545f9914&v=4",login:"SpencerCooley"},{name:"Piotr Zatorski",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F11573475?u=24122d5ed7cd6c7dcc76655df582f7811b8e9c55&v=4",login:"zatorck"},{name:"Harry Allen",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F66224939?u=90861df46160ee532cb2480e1c02e80167dd02fb&v=4",login:"MajesticString"},{name:"kazuya kawaguchi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F72989?u=d333c3048e3d6f8ed2a476a3564dba1fa5288b86&v=4",login:"kazupon"},{name:"Daniel Roe",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F28706372?u=4a401a8a0f03e301ab349d6ecf5d4df0225f0cc5&v=4",login:"danielroe"},{name:"Unai Mengual",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F20427094?u=a6404d8c18f09f0ea3bd95d35e714642101c65e6&v=4",login:"owlnai"},{name:"Hyunseung Lee",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F78584173?u=ecda4b0e60455e4a4e0de35beebfea487a5526b3&v=4",login:"HyunseungLee-Travis"},{name:"Sébastien Chopin",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F904724?u=c6c29f476e8aced6f47a2edcf057f83ceaeddade&v=4",login:"Atinux"},{name:"Alexandre Chopin",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F4084277?u=c10146f9baefc15a35c85e5605fd7b5f4ce129ca&v=4",login:"alexchopin"},{name:"pooya parsa",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F5158436?u=f9301fddd9642fab997eab88f939a0adbcb6094a&v=4",login:"pi0"},{name:"Nick Medrano",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6342102?v=4",login:"dosstx"},{name:"Mosaab Emam",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F26435307?u=4a016b818a339a40c5c4d6cc16e972b0895ae5a7&v=4",login:"Mosaab-Emam"},{name:"Iljs Путлер Капут",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F43464534?u=dff53bc8827a0246cf9a65d32205eb79fad726f7&v=4",login:"suruaku"},{name:"Heitor Ramon Ribeiro",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1626923?u=68d2d99a4d0f54558f77ac63d437c59024fad23c&v=4",login:"bloodf"},{name:"Nero",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F76162087?u=4831a2646217fb46b3d61d2a5fc6ac748da6b46b&v=4",login:"Chukwuemeka-Mba"},{name:"Yoon Han",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F8861810?u=e79476cee8e746305da2bd38d497cd952e90eb09&v=4",login:"YoonHan"},{name:"Ikko Ashimine",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F22633385?u=29190f6c8aed91fa9574b064a9995f1e49944acf&v=4",login:"eltociear"},{name:"FamCodings",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F47059124?u=da54487c754dcf47639eb129714e318f75056dde&v=4",login:"azizurrahmaan"},{name:ao,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F64593523?u=951854d785aab570caa37383a691c421dbdb12c1&v=4",login:ao},{name:"F. Hinkelmann",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F101553?u=ba04735186648afde39087bcc13d86e44c232a76&v=4",login:"fhinkel"},{name:ap,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F50281523?u=ff701a533e123e47961d0f2cf81b4081990c9d38&v=4",login:ap},{name:"Christophe Carvalho Vilas-Boas",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F946345?v=4",login:"ChristopheCVB"},{name:"Leoš Literák",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6383287?u=2f32f5447b0d317b7a16b3a70711e8eb4e6fff05&v=4",login:"literakl"},{name:"Trizotti",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F26180773?u=d8c9871560516c287e38c14a5ebbfddf0ed3efd1&v=4",login:"trizotti"},{name:"Marcello Bachechi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6385285?u=b2b9c6a7781171bdb1b98d9c25d23deaddaac4f5&v=4",login:"pilotkid"},{name:"Rodolphe",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7911262?u=20458afd5138c7815635922bf67c3fb5b3a02d70&v=4",login:"blupdew"},{name:"Thomas Underwood",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F75150197?u=37b67f4610e955622eb06c7043643c433a31db01&v=4",login:"iLuVue"},{name:"Shek Evgeniy",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F34533417?v=4",login:"shekeg"},{name:"Lukasz Formela",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F39266504?u=6cf0ad79b52b3f6fb12f0e25218ffb9da95b6cf4&v=4",login:"LukaszFormela"},{name:"Hugo Torzuoli",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7328625?u=227635090b531c5e0ae13a81b5e1129cfeeb2f5b&v=4",login:"HZooly"},{name:"Kareem Dabbeet",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F42810389?u=618ea45a53bdd708c7382c52ad25bd1af2c3e53f&v=4",login:"KareemDa"},{name:"tramplay",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F65968861?u=72bcdf905cf1e310bb5c0dfd53bc689e81d555f9&v=4",login:"vencho-mdp"},{name:"verebelyicsaba",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F2854597?u=0921782d1bb9ac671c8366b4c24a874e04556d0a&v=4",login:"rannien"},{name:"Adam",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7935392?u=78bb022a2f1d92ec39318aa8581d98169a0a1238&v=4",login:"mercs600"},{name:"Nate Butler",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1714999?u=2e194390963db335b878d385e82007faf14009f8&v=4",login:"iamnbutler"},{name:"Sandra Rodgers",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F45321563?u=f97fdd01635a6ba630e27ab9c8f23383e92ae4c9&v=4",login:"SandraRodgers"},{name:"Arpit Patidar",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F44097148?u=35746725bec61a2d2ae36dcbbeeca2fcb38f1bef&v=4",login:"iamarpitpatidar"},{name:"Matthew Kuehn",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1794897?u=65cc59dbe22893a8d27936a208a124f35db538a5&v=4",login:"mkuehn"},{name:"Steven DUBOIS",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F29716703?v=4",login:"duboiss"},{name:"Travis Lindsey",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7409277?u=e208e954de1d5cb9ac7fdc8a85e1a15b4a1213e0&v=4",login:"jtlindsey"},{name:aq,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F10936660?u=396523726509caa34a0153f14082d05fc3f47a19&v=4",login:aq},{name:"Maxime",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F3755401?u=09be999610c9d656c29f8c770eff92e9d0e6929a&v=4",login:"Mxime"},{name:"かる",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F15998572?u=aeb6d62f2e09dc96ee632a258b5a798418e49bee&v=4",login:"karuhi"},{name:"Al Power",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F858646?u=c35be09afa4ed838c91a1b2abb5db4362564522e&v=4",login:"alpower"},{name:"Florent Delerue",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6696789?u=0305b5aa4a18f1032e7c258dbbff319ad54a6fba&v=4",login:"Flosciante"},{name:"quanghm",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F28060255?u=f2a1e2ca2a40f078ca2e0b4d6e6a470170f0cf7e&v=4",login:"quanghm27"}]},_lazyComponents:new Set(["ProseParagraph","HomeHero","SugerMainImg","SectionContentItem","SugerHomeFeatures","SugerHomeImg","SugerHomeText","SugerHomeProduct","SugerHomeCommunity","SugerHomeLearnGuides","SugerHomeTextList","SugerHomePricing","SugerHomeFooterImg","SugerHomeFooterCooperation","PageHero","SupportCard","SupportContainer","ProseA","ProseH3","ProseCodeInline","ProseLi","ProseUl","ProseStrong","ProseBlockquote","ProseCode","ProseH2","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","PartnersBottomHero","PartnersSection","ShowcasesBottomHero","ShowcasesListing","VideoPlayer","ProseImg","CodeGroup","Alert","ThemesList","ProseEm","ProseOl","ProseH4","ProseH1","ProseHr","List","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","Sandbox","AppButton","BaseAlert","Link"])},mutations:[]}}("text","element","span","token","operator","\n","|"," ","prose-paragraph","punctuation","string","prose-code-inline","prose-code","pre","line-numbers","code",":",true,"",false,"filename","language-js","keyword","module","{","}","srcDir","bg-indigo","\u002Fdocs","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","Define the source directory of your Nuxt application.","prose-li","rootDir","nuxt.config.js","export","default","\n  srcDir","package.json","  ","\"script\"","\n    ","\"dev\"","\n  ","language-bash","-"," app\u002F\n---"," node_modules\u002F\n---"," package.json\n---"," client\u002F\n------"," assets\u002F\n------"," components\u002F\n------"," layouts\u002F\n------"," middleware\u002F\n------"," pages\u002F\n------"," plugins\u002F\n------"," static\u002F\n------"," store\u002F\n","client","comment",2,"\u002F","Resources","docs","v2.15.8","Learn more with experts","master-courses.svg","bg-green-800","Ayouli","felipesuri","syagawa")));