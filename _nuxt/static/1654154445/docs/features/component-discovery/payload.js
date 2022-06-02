__NUXT_JSONP__("/docs/features/component-discovery", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN){return {data:[{page:{key:"content:en:docs:3.features:9.component-discovery.md",generatedAt:new Date(1654154472342),mtime:new Date(1654154472334),slug:"component-discovery",title:"Component Discovery",position:"999900030009",to:"\u002Fdocs\u002Ffeatures\u002Fcomponent-discovery",draft:J,page:C,language:"en",description:"By default, Nuxt is configured to cover most use cases. This default configuration can be overwritten with the nuxt.config.js file.",category:"features",img:"\u002Fdocs\u002Fcomponents.png",imgAlt:"nuxt components module",empty:J,excerpt:void 0,body:{raw:"---\ntitle: Component Discovery\ndescription: By default, Nuxt is configured to cover most use cases. This default configuration can be overwritten with the nuxt.config.js file.\ncategory: features\nimg: \u002Fdocs\u002Fcomponents.png\nimgAlt: nuxt components module\n---\n\n## Enabling Auto-Discovery\n\nStarting from `v2.13`, Nuxt can auto import your components when used in your templates. To activate this feature, set `components: true` in your configuration:\n\n```js{}[nuxt.config.js]\nexport default {\n  components: true\n}\n```\n\n::alert{type=\"info\"}\nCheck out [how to configure component auto-discovery](\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-components#advanced).\n::\n\n## Using Components\n\nOnce you create your components in the components directory they will then be available throughout your app without the need to import them.\n\n```bash\n| components\u002F\n--| TheHeader.vue\n--| TheFooter.vue\n```\n\n```html{}[layouts\u002Fdefault.vue]\n\u003Ctemplate\u003E\n  \u003Cdiv\u003E\n    \u003CTheHeader \u002F\u003E\n    \u003CNuxt \u002F\u003E\n    \u003CTheFooter \u002F\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Ftemplate\u003E\n```\n\n::alert{type=\"info\"}\nSee [live demo](https:\u002F\u002Fcodesandbox.io\u002Fs\u002Fnuxt-components-cou9k) or [video example](https:\u002F\u002Fwww.youtube.com\u002Fwatch?v=lQ8OBrgVVr8).\n::\n\n## Component Names\n\nIf you have components in nested directories such as:\n\n```bash\n| components\u002F\n--| base\u002F\n----| foo\u002F\n------| Button.vue\n```\n\nThe component name will be based on its own path directory and filename. Therefore, the component will be:\n\n```html\n\u003CBaseFooButton \u002F\u003E\n```\n\n::alert\nFor clarity, it is recommend that the component file name matches its name. (So, in the example above, you could rename `Button.vue` to be `BaseFooButton.vue`.)\n::\n\nIf you want to use a custom directory structure that should not be part of the component name, you can explicitly specify these directories:\n\n```bash\n| components\u002F\n--| base\u002F\n----| foo\u002F\n------| Button.vue\n```\n\n```bash{}[nuxt.config.js]\ncomponents: {\n  dirs: [\n    '~\u002Fcomponents',\n    '~\u002Fcomponents\u002Fbase'\n  ]\n}\n```\n\nAnd now in your template you can use `FooButton` instead of `BaseFooButton`.\n\n```html{}[pages\u002Findex.vue]\n\u003CFooButton \u002F\u003E\n```\n\n::alert{type=\"info\"}\nConsider naming your components and directories following the [Vue Style Guide](https:\u002F\u002Fvuejs.org\u002Fv2\u002Fstyle-guide\u002F).\n::\n\n## Dynamic Imports\n\nTo dynamically import a component (also known as lazy-loading a component) all you need to do is add the `Lazy` prefix to the component name.\n\n```html{}[layouts\u002Fdefault.vue]\n\u003Ctemplate\u003E\n  \u003Cdiv\u003E\n    \u003CTheHeader \u002F\u003E\n    \u003CNuxt \u002F\u003E\n    \u003CLazyTheFooter \u002F\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Ftemplate\u003E\n```\n\nThis is particularly useful if the component is not always needed. By using the `Lazy` prefix you can delay loading the component code until the right moment, which can be helpful for optimizing your JavaScript bundle size.\n\n```html{}[pages\u002Findex.vue]\n\u003Ctemplate\u003E\n  \u003Cdiv\u003E\n    \u003Ch1\u003EMountains\u003C\u002Fh1\u003E\n    \u003CLazyMountainsList v-if=\"show\" \u002F\u003E\n    \u003Cbutton v-if=\"!show\" @click=\"show = true\"\u003EShow List\u003C\u002Fbutton\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Ftemplate\u003E\n\n\u003Cscript\u003E\nexport default {\n  data() {\n    return {\n      show: false\n    }\n  }\n}\n\u003C\u002Fscript\u003E\n```\n\n## Cheatsheet\n\n:modal{src=\"img\" alt=\"imgAlt\"}\n",ast:{type:"root",children:[{type:b,tag:D,props:{id:ab},children:[{type:b,tag:s,props:{href:"#enabling-auto-discovery"},children:[{type:a,value:ac}]}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"Starting from "},{type:b,tag:w,props:{},children:[{type:a,value:"v2.13"}]},{type:a,value:", Nuxt can auto import your components when used in your templates. To activate this feature, set "},{type:b,tag:w,props:{},children:[{type:a,value:"components: true"}]},{type:a,value:" in your configuration:"}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:b,tag:c,props:{className:[y]},children:[{type:a,value:ad}]},{type:b,tag:p,props:{className:[q,"language-js"]},children:[{type:b,tag:r,props:{},children:[{type:b,tag:c,props:{className:[d,E,K]},children:[{type:a,value:ae}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,E,K]},children:[{type:a,value:af}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]},{type:a,value:"\n  components"},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ag}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,ah]},children:[{type:a,value:"true"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:L,props:{type:O},children:[{type:b,tag:l,props:{},children:[{type:a,value:"Check out "},{type:b,tag:s,props:{href:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-components#advanced"},children:[{type:a,value:"how to configure component auto-discovery"}]},{type:a,value:M}]}]},{type:a,value:g},{type:b,tag:D,props:{id:ai},children:[{type:b,tag:s,props:{href:"#using-components"},children:[{type:a,value:aj}]}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"Once you create your components in the components directory they will then be available throughout your app without the need to import them."}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:b,tag:p,props:{className:[q,N]},children:[{type:b,tag:r,props:{},children:[{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:n}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:n}]},{type:a,value:" TheHeader.vue\n--"},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:n}]},{type:a,value:" TheFooter.vue\n"}]}]}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:b,tag:c,props:{className:[y]},children:[{type:a,value:ak}]},{type:b,tag:p,props:{className:[q,H]},children:[{type:b,tag:r,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:al}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:am}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"TheFooter"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:L,props:{type:O},children:[{type:b,tag:l,props:{},children:[{type:a,value:"See "},{type:b,tag:s,props:{href:"https:\u002F\u002Fcodesandbox.io\u002Fs\u002Fnuxt-components-cou9k",rel:[Q,R,S],target:T},children:[{type:a,value:"live demo"}]},{type:a,value:" or "},{type:b,tag:s,props:{href:"https:\u002F\u002Fwww.youtube.com\u002Fwatch?v=lQ8OBrgVVr8",rel:[Q,R,S],target:T},children:[{type:a,value:"video example"}]},{type:a,value:M}]}]},{type:a,value:g},{type:b,tag:D,props:{id:an},children:[{type:b,tag:s,props:{href:"#component-names"},children:[{type:a,value:ao}]}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"If you have components in nested directories such as:"}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:b,tag:p,props:{className:[q,N]},children:[{type:b,tag:r,props:{},children:[{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:n}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:n}]},{type:a,value:ap},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:n}]},{type:a,value:aq},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:n}]},{type:a,value:ar}]}]}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"The component name will be based on its own path directory and filename. Therefore, the component will be:"}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:b,tag:p,props:{className:[q,H]},children:[{type:b,tag:r,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:as}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:L,props:{},children:[{type:b,tag:l,props:{},children:[{type:a,value:"For clarity, it is recommend that the component file name matches its name. (So, in the example above, you could rename "},{type:b,tag:w,props:{},children:[{type:a,value:"Button.vue"}]},{type:a,value:" to be "},{type:b,tag:w,props:{},children:[{type:a,value:"BaseFooButton.vue"}]},{type:a,value:".)"}]}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"If you want to use a custom directory structure that should not be part of the component name, you can explicitly specify these directories:"}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:b,tag:p,props:{className:[q,N]},children:[{type:b,tag:r,props:{},children:[{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:n}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:n}]},{type:a,value:ap},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:n}]},{type:a,value:aq},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:n}]},{type:a,value:ar}]}]}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:b,tag:c,props:{className:[y]},children:[{type:a,value:ad}]},{type:b,tag:p,props:{className:[q,N]},children:[{type:b,tag:r,props:{},children:[{type:a,value:"components: "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]},{type:a,value:"\n  dirs: "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"["}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,at]},children:[{type:a,value:"'~\u002Fcomponents'"}]},{type:a,value:",\n    "},{type:b,tag:c,props:{className:[d,at]},children:[{type:a,value:"'~\u002Fcomponents\u002Fbase'"}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"]"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"And now in your template you can use "},{type:b,tag:w,props:{},children:[{type:a,value:au}]},{type:a,value:" instead of "},{type:b,tag:w,props:{},children:[{type:a,value:as}]},{type:a,value:M}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:b,tag:c,props:{className:[y]},children:[{type:a,value:av}]},{type:b,tag:p,props:{className:[q,H]},children:[{type:b,tag:r,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:au}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:L,props:{type:O},children:[{type:b,tag:l,props:{},children:[{type:a,value:"Consider naming your components and directories following the "},{type:b,tag:s,props:{href:"https:\u002F\u002Fvuejs.org\u002Fv2\u002Fstyle-guide\u002F",rel:[Q,R,S],target:T},children:[{type:a,value:"Vue Style Guide"}]},{type:a,value:M}]}]},{type:a,value:g},{type:b,tag:D,props:{id:aw},children:[{type:b,tag:s,props:{href:"#dynamic-imports"},children:[{type:a,value:ax}]}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"To dynamically import a component (also known as lazy-loading a component) all you need to do is add the "},{type:b,tag:w,props:{},children:[{type:a,value:ay}]},{type:a,value:" prefix to the component name."}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:b,tag:c,props:{className:[y]},children:[{type:a,value:ak}]},{type:b,tag:p,props:{className:[q,H]},children:[{type:b,tag:r,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:al}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:am}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"LazyTheFooter"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"This is particularly useful if the component is not always needed. By using the "},{type:b,tag:w,props:{},children:[{type:a,value:ay}]},{type:a,value:" prefix you can delay loading the component code until the right moment, which can be helpful for optimizing your JavaScript bundle size."}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:b,tag:c,props:{className:[y]},children:[{type:a,value:av}]},{type:b,tag:p,props:{className:[q,H]},children:[{type:b,tag:r,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:az}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"Mountains"},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:az}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"LazyMountainsList"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,U]},children:[{type:a,value:aA}]},{type:b,tag:c,props:{className:[d,V]},children:[{type:b,tag:c,props:{className:[d,e,W]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:"show"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:aB}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,U]},children:[{type:a,value:aA}]},{type:b,tag:c,props:{className:[d,V]},children:[{type:b,tag:c,props:{className:[d,e,W]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:"!show"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,U]},children:[{type:a,value:"@click"}]},{type:b,tag:c,props:{className:[d,V]},children:[{type:b,tag:c,props:{className:[d,e,W]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:"show = true"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"Show List"},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:aB}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"\n\n"},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:b,tag:c,props:{className:[d,Y]},children:[{type:b,tag:c,props:{className:[d,"language-javascript"]},children:[{type:a,value:g},{type:b,tag:c,props:{className:[d,E,K]},children:[{type:a,value:ae}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,E,K]},children:[{type:a,value:af}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,"function"]},children:[{type:a,value:"data"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"("}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:")"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,E,"control-flow"]},children:[{type:a,value:"return"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]},{type:a,value:"\n      show"},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ag}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,ah]},children:[{type:a,value:"false"}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:g}]}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:D,props:{id:aC},children:[{type:b,tag:s,props:{href:"#cheatsheet"},children:[{type:a,value:aD}]}]},{type:a,value:g},{type:b,tag:"modal",props:{":alt":"imgAlt",":src":"img"},children:[]}]},toc:{title:I,searchDepth:x,depth:x,links:[{id:ab,depth:x,text:ac},{id:ai,depth:x,text:aj},{id:an,depth:x,text:ao},{id:aw,depth:x,text:ax},{id:aC,depth:x,text:aD}]}},template:"Docs"},templateOptions:{header:C,footer:C,aside:C,asideClass:I,fluid:J,banner:C},_img:{"/_ipx/https://github.com/nazarepiedady.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd5c785.png","/_ipx/https://github.com/wheredidhugo.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F952ed3.png","/_ipx/https://github.com/smarroufin.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc9abac.png","/_ipx/https://github.com/clemcode.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F77339c.png","/_ipx/https://github.com/SpencerCooley.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fb3bb68.png","/_ipx/https://github.com/zatorck.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F66bdcf.png","/_ipx/https://github.com/MajesticString.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fb50564.png","/_ipx/https://github.com/kazupon.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd6247a.png","/_ipx/https://github.com/danielroe.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0786f3.png","/_ipx/https://github.com/owlnai.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0340f1.png","/_ipx/https://github.com/HyunseungLee-Travis.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa79a1d.png","/_ipx/https://github.com/Atinux.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe847b9.png","/_ipx/https://github.com/alexchopin.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F2c01a3.png","/_ipx/https://github.com/pi0.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F368a8d.png","/_ipx/https://github.com/dosstx.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F7486d8.png","/_ipx/https://github.com/Mosaab-Emam.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Feeb249.png","/_ipx/https://github.com/suruaku.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F97788f.png","/_ipx/https://github.com/bloodf.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F372791.png","/_ipx/https://github.com/Chukwuemeka-Mba.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0ed25e.png","/_ipx/https://github.com/YoonHan.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F866eec.png","/_ipx/https://github.com/eltociear.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0a4949.png","/_ipx/https://github.com/azizurrahmaan.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F879caa.png","/_ipx/https://github.com/Ayouli.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa827f5.png","/_ipx/https://github.com/fhinkel.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F26e625.png","/_ipx/https://github.com/felipesuri.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa2c3fe.png","/_ipx/https://github.com/ChristopheCVB.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fbe1aa1.png","/_ipx/https://github.com/literakl.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F496416.png","/_ipx/https://github.com/trizotti.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fff04b5.png","/_ipx/https://github.com/pilotkid.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F48fe7a.png","/_ipx/https://github.com/blupdew.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Ff00d82.png","/_ipx/https://github.com/iLuVue.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0a82d8.png","/_ipx/https://github.com/shekeg.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0bf9bc.png","/_ipx/https://github.com/LukaszFormela.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F61a24f.png","/_ipx/https://github.com/HZooly.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0de44d.png","/_ipx/https://github.com/KareemDa.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc79dfa.png","/_ipx/https://github.com/vencho-mdp.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe17244.png","/_ipx/https://github.com/rannien.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe08048.png","/_ipx/https://github.com/mercs600.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd7cb9b.png","/_ipx/https://github.com/iamnbutler.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0219e9.png","/_ipx/https://github.com/SandraRodgers.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F87a47f.png","/_ipx/https://github.com/iamarpitpatidar.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc302c1.png","/_ipx/https://github.com/mkuehn.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fb2c5d4.png","/_ipx/https://github.com/duboiss.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd9412d.png","/_ipx/https://github.com/jtlindsey.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F7eb268.png","/_ipx/https://github.com/syagawa.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F42da1b.png","/_ipx/https://github.com/Mxime.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fbdcb89.png","/_ipx/https://github.com/karuhi.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F45bedd.png","/_ipx/https://github.com/alpower.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F483f8e.png","/_ipx/https://github.com/Flosciante.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa088da.png","/_ipx/https://github.com/quanghm27.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F44d54c.png"}}],fetch:{"AppLayout:0":{headerLinks:[{title:"Home",slug:aE,to:aE},{title:aF,items:[{title:"Tutorials",slug:"tutorials",subtitle:I,to:"\u002Ftutorials",icon:"tutorials.svg",color:Z},{title:"API docs",subtitle:I,slug:aG,to:_,icon:"examples.svg",color:Z},{title:"Integrations",subtitle:I,slug:aG,to:_,icon:"docs.svg",color:Z}]},{title:"Pricing",slug:"pricing",to:"\u002Fpricing"}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:"\u002Fpartners"},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:aF,items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:_},{title:"Examples",to:"\u002Fexamples"},{title:"Deployments",to:"\u002Fdeployments"},{title:$,href:aa},{title:"Modules",href:"https:\u002F\u002Fmodules.nuxtjs.org"},{title:"Releases",to:"\u002Freleases"},{title:"Showcases",to:"\u002Fshowcases"},{title:"Themes",to:"\u002Fthemes"}]}],showCookieBanner:J},"AsideBottom:0":{lastRelease:aH,masterCoursesLink:{title:$,subtitle:aI,href:aa,icon:aJ,color:aK}},"AsideBottom:1":{lastRelease:aH,masterCoursesLink:{title:$,subtitle:aI,href:aa,icon:aJ,color:aK}},"Docs:0":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxtjs.org",prev:{slug:"nuxt-components",to:"\u002Fdocs\u002Ffeatures\u002Fnuxt-components",title:"Built-in Components"},next:{slug:"transitions",to:"\u002Fdocs\u002Ffeatures\u002Ftransitions",title:"Transitions"}},"EditOnGithub:0":{link:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxtjs.org\u002Fedit\u002Fmain\u002Fcontent\u002Fen\u002Fdocs\u002F3.features\u002F9.component-discovery.md",contributors:[{name:"Nazaré da Piedade",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F31008635?u=db0d466a654b2a0f0f1e8308d7736ec4c3d3a887&v=4",login:"nazarepiedady"},{name:"Hugo",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F24863815?u=5e6388fb0a448419c0d88ba401e4b96eea5f88ab&v=4",login:"wheredidhugo"},{name:"Sylvain Marroufin",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7547335?u=e8e9429d55aa562ded7903ed3779fb498509f9ee&v=4",login:"smarroufin"},{name:"Clément Ollivier",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1439623?u=674a9e28e5bab7c584058d5be3e86117d5c16d64&v=4",login:"clemcode"},{name:"Spencer Cooley",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F488199?u=471f139a2721f4687dcf2f52b88f79c2545f9914&v=4",login:"SpencerCooley"},{name:"Piotr Zatorski",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F11573475?u=24122d5ed7cd6c7dcc76655df582f7811b8e9c55&v=4",login:"zatorck"},{name:"Harry Allen",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F66224939?u=90861df46160ee532cb2480e1c02e80167dd02fb&v=4",login:"MajesticString"},{name:"kazuya kawaguchi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F72989?u=d333c3048e3d6f8ed2a476a3564dba1fa5288b86&v=4",login:"kazupon"},{name:"Daniel Roe",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F28706372?u=4a401a8a0f03e301ab349d6ecf5d4df0225f0cc5&v=4",login:"danielroe"},{name:"Unai Mengual",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F20427094?u=a6404d8c18f09f0ea3bd95d35e714642101c65e6&v=4",login:"owlnai"},{name:"Hyunseung Lee",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F78584173?u=ecda4b0e60455e4a4e0de35beebfea487a5526b3&v=4",login:"HyunseungLee-Travis"},{name:"Sébastien Chopin",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F904724?u=c6c29f476e8aced6f47a2edcf057f83ceaeddade&v=4",login:"Atinux"},{name:"Alexandre Chopin",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F4084277?u=c10146f9baefc15a35c85e5605fd7b5f4ce129ca&v=4",login:"alexchopin"},{name:"pooya parsa",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F5158436?u=f9301fddd9642fab997eab88f939a0adbcb6094a&v=4",login:"pi0"},{name:"Nick Medrano",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6342102?v=4",login:"dosstx"},{name:"Mosaab Emam",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F26435307?u=4a016b818a339a40c5c4d6cc16e972b0895ae5a7&v=4",login:"Mosaab-Emam"},{name:"Iljs Путлер Капут",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F43464534?u=dff53bc8827a0246cf9a65d32205eb79fad726f7&v=4",login:"suruaku"},{name:"Heitor Ramon Ribeiro",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1626923?u=68d2d99a4d0f54558f77ac63d437c59024fad23c&v=4",login:"bloodf"},{name:"Nero",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F76162087?u=4831a2646217fb46b3d61d2a5fc6ac748da6b46b&v=4",login:"Chukwuemeka-Mba"},{name:"Yoon Han",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F8861810?u=e79476cee8e746305da2bd38d497cd952e90eb09&v=4",login:"YoonHan"},{name:"Ikko Ashimine",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F22633385?u=29190f6c8aed91fa9574b064a9995f1e49944acf&v=4",login:"eltociear"},{name:"FamCodings",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F47059124?u=da54487c754dcf47639eb129714e318f75056dde&v=4",login:"azizurrahmaan"},{name:aL,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F64593523?u=951854d785aab570caa37383a691c421dbdb12c1&v=4",login:aL},{name:"F. Hinkelmann",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F101553?u=ba04735186648afde39087bcc13d86e44c232a76&v=4",login:"fhinkel"},{name:aM,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F50281523?u=ff701a533e123e47961d0f2cf81b4081990c9d38&v=4",login:aM},{name:"Christophe Carvalho Vilas-Boas",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F946345?v=4",login:"ChristopheCVB"},{name:"Leoš Literák",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6383287?u=2f32f5447b0d317b7a16b3a70711e8eb4e6fff05&v=4",login:"literakl"},{name:"Trizotti",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F26180773?u=d8c9871560516c287e38c14a5ebbfddf0ed3efd1&v=4",login:"trizotti"},{name:"Marcello Bachechi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6385285?u=b2b9c6a7781171bdb1b98d9c25d23deaddaac4f5&v=4",login:"pilotkid"},{name:"Rodolphe",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7911262?u=20458afd5138c7815635922bf67c3fb5b3a02d70&v=4",login:"blupdew"},{name:"Thomas Underwood",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F75150197?u=37b67f4610e955622eb06c7043643c433a31db01&v=4",login:"iLuVue"},{name:"Shek Evgeniy",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F34533417?v=4",login:"shekeg"},{name:"Lukasz Formela",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F39266504?u=6cf0ad79b52b3f6fb12f0e25218ffb9da95b6cf4&v=4",login:"LukaszFormela"},{name:"Hugo Torzuoli",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7328625?u=227635090b531c5e0ae13a81b5e1129cfeeb2f5b&v=4",login:"HZooly"},{name:"Kareem Dabbeet",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F42810389?u=618ea45a53bdd708c7382c52ad25bd1af2c3e53f&v=4",login:"KareemDa"},{name:"tramplay",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F65968861?u=72bcdf905cf1e310bb5c0dfd53bc689e81d555f9&v=4",login:"vencho-mdp"},{name:"verebelyicsaba",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F2854597?u=0921782d1bb9ac671c8366b4c24a874e04556d0a&v=4",login:"rannien"},{name:"Adam",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7935392?u=78bb022a2f1d92ec39318aa8581d98169a0a1238&v=4",login:"mercs600"},{name:"Nate Butler",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1714999?u=2e194390963db335b878d385e82007faf14009f8&v=4",login:"iamnbutler"},{name:"Sandra Rodgers",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F45321563?u=f97fdd01635a6ba630e27ab9c8f23383e92ae4c9&v=4",login:"SandraRodgers"},{name:"Arpit Patidar",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F44097148?u=35746725bec61a2d2ae36dcbbeeca2fcb38f1bef&v=4",login:"iamarpitpatidar"},{name:"Matthew Kuehn",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1794897?u=65cc59dbe22893a8d27936a208a124f35db538a5&v=4",login:"mkuehn"},{name:"Steven DUBOIS",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F29716703?v=4",login:"duboiss"},{name:"Travis Lindsey",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7409277?u=e208e954de1d5cb9ac7fdc8a85e1a15b4a1213e0&v=4",login:"jtlindsey"},{name:aN,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F10936660?u=396523726509caa34a0153f14082d05fc3f47a19&v=4",login:aN},{name:"Maxime",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F3755401?u=09be999610c9d656c29f8c770eff92e9d0e6929a&v=4",login:"Mxime"},{name:"かる",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F15998572?u=aeb6d62f2e09dc96ee632a258b5a798418e49bee&v=4",login:"karuhi"},{name:"Al Power",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F858646?u=c35be09afa4ed838c91a1b2abb5db4362564522e&v=4",login:"alpower"},{name:"Florent Delerue",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6696789?u=0305b5aa4a18f1032e7c258dbbff319ad54a6fba&v=4",login:"Flosciante"},{name:"quanghm",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F28060255?u=f2a1e2ca2a40f078ca2e0b4d6e6a470170f0cf7e&v=4",login:"quanghm27"}]},_lazyComponents:new Set(["ProseParagraph","HomeHero","SugerMainImg","SectionContentItem","SugerHomeFeatures","SugerHomeImg","SugerHomeText","SugerHomeProduct","SugerHomeCommunity","SugerHomeLearnGuides","SugerHomeTextList","SugerHomePricing","SugerHomeFooterImg","SugerHomeFooterCooperation","PageHero","SupportCard","SupportContainer","ProseA","ProseH3","ProseCodeInline","ProseLi","ProseUl","ProseStrong","ProseBlockquote","ProseCode","ProseH2","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","PartnersBottomHero","PartnersSection","ShowcasesBottomHero","ShowcasesListing","VideoPlayer","ProseImg","CodeGroup","Alert","ThemesList","ProseEm","ProseOl","ProseH4","ProseH1","ProseHr","List","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","Sandbox","AppButton","BaseAlert","Link"])},mutations:[]}}("text","element","span","token","punctuation","tag","\n"," ","\u003C","\u003E","operator","prose-paragraph","\n    ","|","prose-code","pre","line-numbers","code","prose-a","\n  ","\u002F\u003E","\u003C\u002F","prose-code-inline",2,"filename","template","div","\"",true,"prose-h2","keyword","{","}","language-html","",false,"module","alert",".","language-bash","info"," components\u002F\n--","nofollow","noopener","noreferrer","_blank","attr-name","attr-value","attr-equals","=","script","bg-indigo","\u002Fdocs","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","enabling-auto-discovery","Enabling Auto-Discovery","nuxt.config.js","export","default",":","boolean","using-components","Using Components","layouts\u002Fdefault.vue","TheHeader","Nuxt","component-names","Component Names"," base\u002F\n----"," foo\u002F\n------"," Button.vue\n","BaseFooButton","string","FooButton","pages\u002Findex.vue","dynamic-imports","Dynamic Imports","Lazy","h1","v-if","button","cheatsheet","Cheatsheet","\u002F","Resources","docs","v2.15.8","Learn more with experts","master-courses.svg","bg-green-800","Ayouli","felipesuri","syagawa")));