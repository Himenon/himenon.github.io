(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var i=n(3),o=n(8),r=(n(0),n(197)),a={title:"Server Side Rendering (SSR)\u3092\u5229\u7528\u3057\u305fReact\u306eSPA\u306b\u304a\u3051\u308bGoogle Optimize\u306eAB\u30c6\u30b9\u30c8\u306e\u5b9f\u88c5\u65b9\u6cd5",keywords:["gtag.js\u3067Google Optimize\u3092\u5229\u7528\u3059\u308b","google optimize","React","expressjs","SSR","Server Side Rendering"],description:"Google Optimize\u3092React\u306eServer Side Rendering\u3068\u3068\u3082\u306b\u5229\u7528\u3059\u308b"},l={unversionedId:"google-optimize/how-to-implement-google-optimize-ab-testing-in-react-spa-using-server-side-rendering",id:"google-optimize/how-to-implement-google-optimize-ab-testing-in-react-spa-using-server-side-rendering",isDocsHomePage:!1,title:"Server Side Rendering (SSR)\u3092\u5229\u7528\u3057\u305fReact\u306eSPA\u306b\u304a\u3051\u308bGoogle Optimize\u306eAB\u30c6\u30b9\u30c8\u306e\u5b9f\u88c5\u65b9\u6cd5",description:"Google Optimize\u3092React\u306eServer Side Rendering\u3068\u3068\u3082\u306b\u5229\u7528\u3059\u308b",source:"@site/docs/google-optimize/how-to-implement-google-optimize-ab-testing-in-react-spa-using-server-side-rendering.md",slug:"/google-optimize/how-to-implement-google-optimize-ab-testing-in-react-spa-using-server-side-rendering",permalink:"/docs/google-optimize/how-to-implement-google-optimize-ab-testing-in-react-spa-using-server-side-rendering",editUrl:"https://github.com/Himenon/himenon.github.io/edit/default/docs/google-optimize/how-to-implement-google-optimize-ab-testing-in-react-spa-using-server-side-rendering.md",version:"current",sidebar:"someSidebar",previous:{title:"Google Optimize\u3068Google Analytics\u3092\u5229\u7528\u3057\u305f\u52b9\u679c\u6e2c\u5b9a\u304c\u884c\u3048\u308b\u6761\u4ef6",permalink:"/docs/google-optimize/requirements-for-measuring-effectiveness-with-google-optimize-and-google-analytics"},next:{title:"Docker\u3067\u5229\u7528\u3059\u308b\u30b3\u30de\u30f3\u30c9\u4f8b",permalink:"/docs/docker/command"}},c=[{value:"\u4e8b\u524d\u6e96\u5099",id:"\u4e8b\u524d\u6e96\u5099",children:[]},{value:"\u5b9f\u88c5",id:"\u5b9f\u88c5",children:[{value:"\u5b9f\u88c5\u3059\u3079\u304d\u9805\u76ee",id:"\u5b9f\u88c5\u3059\u3079\u304d\u9805\u76ee",children:[]},{value:"<code>gtag.js</code>\u3067 Google Optimize \u306e\u30c6\u30b9\u30c8\u30b1\u30fc\u30b9\u3092\u8a2d\u5b9a\u3059\u308b",id:"gtagjs\u3067-google-optimize-\u306e\u30c6\u30b9\u30c8\u30b1\u30fc\u30b9\u3092\u8a2d\u5b9a\u3059\u308b",children:[]},{value:"<code>analytics.js</code>\u3067\u30c6\u30b9\u30c8\u30d1\u30bf\u30fc\u30f3\u3092\u5831\u544a\u3059\u308b\u306e\u306f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306b\u3042\u308b",id:"analyticsjs\u3067\u30c6\u30b9\u30c8\u30d1\u30bf\u30fc\u30f3\u3092\u5831\u544a\u3059\u308b\u306e\u306f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306b\u3042\u308b",children:[]},{value:"\u52d5\u4f5c\u78ba\u8a8d\u3059\u308b",id:"\u52d5\u4f5c\u78ba\u8a8d\u3059\u308b",children:[]}]},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]}],p={rightToc:c};function s(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u3053\u3053\u3067\u7d39\u4ecb\u3059\u308b\u306e\u306f",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://developers.google.com/optimize/devguides/experiments?hl=ja"}),"\u30b5\u30fc\u30d0\u30fc\u30b5\u30a4\u30c9 \u30c6\u30b9\u30c8"),"\u3068\u3057\u3066\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u5316\u3055\u308c\u3066\u3044\u308b\u5185\u5bb9\u3092 React \u3067\u66f8\u304d\u8d77\u3053\u3057\u305f\u3082\u306e\u3067\u3042\u308b\u3002"),Object(r.b)("h2",{id:"\u4e8b\u524d\u6e96\u5099"},"\u4e8b\u524d\u6e96\u5099"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Google Optimize \u306e\u30b3\u30f3\u30c6\u30ca ID"),Object(r.b)("li",{parentName:"ul"},"Google Analytics \u306e\u30c6\u30b9\u30c8 ID")),Object(r.b)("h2",{id:"\u5b9f\u88c5"},"\u5b9f\u88c5"),Object(r.b)("p",null,"\u4ee5\u4e0b\u306e\u6280\u8853\u30b9\u30bf\u30c3\u30af\u3067\u518d\u73fe\u3059\u308b"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"express"),Object(r.b)("li",{parentName:"ul"},"React")),Object(r.b)("h3",{id:"\u5b9f\u88c5\u3059\u3079\u304d\u9805\u76ee"},"\u5b9f\u88c5\u3059\u3079\u304d\u9805\u76ee"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u30b5\u30fc\u30d0\u30fc\u30b5\u30a4\u30c9")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"AB \u30c6\u30b9\u30c8\u306e\u30bf\u30fc\u30b2\u30c3\u30c8\u521d\u3081\u3066\u6d41\u5165\u3057\u305f\u3068\u304d\u3001A/B/n \u306e\u30c6\u30b9\u30c8\u30b1\u30fc\u30b9\u306e\u3044\u305a\u308c\u304b\u306b\u5272\u308a\u5f53\u3066\u308b"),Object(r.b)("li",{parentName:"ol"},"\u30bf\u30fc\u30b2\u30c3\u30c8\u306e AB \u30c6\u30b9\u30c8\u3092 2 \u56de\u76ee\u4ee5\u964d\u6d41\u5165\u3057\u305f\u3068\u304d\u306b\u524d\u56de\u306e\u30c6\u30b9\u30c8\u30b1\u30fc\u30b9 \b \u306b\u5272\u308a\u5f53\u3066\u3089\u308c\u308b\u3088\u3046\u306b\u72b6\u614b\u3092\u5fa9\u5143\u3059\u308b"),Object(r.b)("li",{parentName:"ol"},"\u5fa9\u5143\u3057\u305f\u30c6\u30b9\u30c8\u30b1\u30fc\u30b9\u306e\u60c5\u5831\u304c\u6b63\u3057\u3044\u60c5\u5831\u304b\u78ba\u8a8d\u3057\u3001\u6b63\u3057\u304f\u306a\u3044\u5834\u5408\u306f\u7834\u68c4\u3057\u3001\u518d\u5ea6\u5272\u308a\u5f53\u3066\u308b"),Object(r.b)("li",{parentName:"ol"},"AB \u30c6\u30b9\u30c8\u671f\u9593\u5916\u306b\u30bf\u30fc\u30b2\u30c3\u30c8\u304c\u6d41\u5165\u3057\u3066\u304d\u305f\u3068\u304d\u3001\u3069\u306e\u30c6\u30b9\u30c8\u30b1\u30fc\u30b9\u306b\u3082\u5272\u308a\u5f53\u3066\u3089\u308c\u306a\u3044\u3088\u3046\u306b\u3059\u308b\u3002\u3082\u3057\u304f\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u306b\u3059\u308b\u3002"),Object(r.b)("li",{parentName:"ol"},"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b5\u30a4\u30c9\u306b\u5272\u308a\u5f53\u3066\u3089\u308c\u305f\u30c6\u30b9\u30c8\u30b1\u30fc\u30b9\u306e\u60c5\u5831\u3092\u4f1d\u3048\u308b")),Object(r.b)("p",null,Object(r.b)("img",{alt:"cookie\u3067\u30ea\u30b9\u30c8\u30a2\u3059\u308b\u30d1\u30bf\u30fc\u30f3",src:n(258).default})),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b5\u30a4\u30c9")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"analytics.js"),"\u3082\u3057\u304f\u306f",Object(r.b)("inlineCode",{parentName:"li"},"gtag.js"),"\u3067\u5272\u308a\u5f53\u3066\u3089\u308c\u305f\u30c6\u30b9\u30c8\u30b1\u30fc\u30b9\u306e\u60c5\u5831\u3092\u30bb\u30c3\u30c8\u3059\u308b"),Object(r.b)("li",{parentName:"ul"},"Google Optimize \u306e Container ID \u3092\u30bb\u30c3\u30c8\u3059\u308b")),Object(r.b)("h3",{id:"gtagjs\u3067-google-optimize-\u306e\u30c6\u30b9\u30c8\u30b1\u30fc\u30b9\u3092\u8a2d\u5b9a\u3059\u308b"},Object(r.b)("inlineCode",{parentName:"h3"},"gtag.js"),"\u3067 Google Optimize \u306e\u30c6\u30b9\u30c8\u30b1\u30fc\u30b9\u3092\u8a2d\u5b9a\u3059\u308b"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-html"}),'<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag() {\n    dataLayer.push(arguments);\n  }\n  gtag("js", new Date());\n  gtag("config", "UA-...", {\n    optimize_id: "OPT-...", // https://support.google.com/optimize/answer/7513085?hl=ja\n    send_page_view: true, // https://support.google.com/optimize/answer/7513085?hl=ja\n    /**\n     * @see https://support.google.com/optimize/thread/36142685?hl=en&msgid=36785067\n     * @see https://stackoverflow.com/questions/50686295/gtag-js-optmize-server-side-implementation-not-working\n     */\n    experiments: [\n      {\n        id: "TEST_ID",\n        variant: 1,\n      },\n    ],\n  });\n<\/script>\n')),Object(r.b)("p",null,"gtag.js \u3067 Google Optimize \u306e\u30a8\u30af\u30b9\u30da\u30ea\u30a8\u30f3\u30b9\u306e\u60c5\u5831\u3092\u30bb\u30c3\u30c8\u3059\u308b\u65b9\u6cd5\u306f\u3001\u516c\u5f0f\u306e\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u3067\u306a\u304b\u306a\u304b\u898b\u5f53\u305f\u3089\u306a\u3044\u304c\u3001\u6c17\u5408\u3067\u63a2\u3059\u3068 StackOverflow \u3068 Support \u306b\u5b58\u5728\u3057\u305f\u3002"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://support.google.com/optimize/thread/36142685?hl=en&msgid=36785067"}),"https://support.google.com/optimize/thread/36142685?hl=en&msgid=36785067")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://stackoverflow.com/questions/50686295/gtag-js-optmize-server-side-implementation-not-working"}),"https://stackoverflow.com/questions/50686295/gtag-js-optmize-server-side-implementation-not-working"))),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"@types/gtag.js"),"\u306e\u578b\u60c5\u5831\u306b\u660e\u78ba\u306b\u5b58\u5728\u3057\u306a\u3044\u304c\u3001",Object(r.b)("inlineCode",{parentName:"p"},'gtag("config", "UA-", [CONFIG])'),"\u306e\u7b2c\u4e09\u5f15\u6570\u306f\u6b21\u306e\u3088\u3046\u306a\u578b\u3067\u62e1\u5f35\u53ef\u80fd\u3067\u3042\u308b\u3002"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"interface Config {\n  optimize_id?: string;\n  send_page_view?: boolean; // default: true\n  experiments?: {\n    id: string;\n    variant: number;\n  }[];\n}\n")),Object(r.b)("h3",{id:"analyticsjs\u3067\u30c6\u30b9\u30c8\u30d1\u30bf\u30fc\u30f3\u3092\u5831\u544a\u3059\u308b\u306e\u306f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306b\u3042\u308b"},Object(r.b)("inlineCode",{parentName:"h3"},"analytics.js"),"\u3067\u30c6\u30b9\u30c8\u30d1\u30bf\u30fc\u30f3\u3092\u5831\u544a\u3059\u308b\u306e\u306f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306b\u3042\u308b"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://developers.google.com/optimize/devguides/experiments?hl=ja"}),"https://developers.google.com/optimize/devguides/experiments?hl=ja"))),Object(r.b)("h3",{id:"\u52d5\u4f5c\u78ba\u8a8d\u3059\u308b"},"\u52d5\u4f5c\u78ba\u8a8d\u3059\u308b"),Object(r.b)("h4",{id:"\u30b5\u30fc\u30d0\u30fc\u306e\u6e96\u5099"},"\u30b5\u30fc\u30d0\u30fc\u306e\u6e96\u5099"),Object(r.b)("p",null,"Google Optimize \u306f Cookie \u3092\u5229\u7528\u3057\u3066\u6a5f\u80fd\u3092\u63d0\u4f9b\u3059\u308b\u305f\u3081\u3001\u30ed\u30fc\u30ab\u30eb\u30db\u30b9\u30c8\u3067\u884c\u3046\u52d5\u4f5c\u78ba\u8a8d\u3092\u884c\u3046\u5834\u5408\u306f\u3001\n",Object(r.b)("inlineCode",{parentName:"p"},"/etc/hosts"),"\u3092\u66f8\u304d\u63db\u3048\u3066\u3001\u9069\u5f53\u306a\u30c9\u30e1\u30a4\u30f3\u3067 Optimize \u3092\u8abf\u6574\u3059\u308b\u3068\u826f\u3044\u3002\u5224\u5b9a\u3067\u304d\u308b\u3088\u3046\u306b\u6307\u5b9a\u3057\u3066\u304f\u3068\u826f\u3044\u3002"),Object(r.b)("p",null,"\u307e\u305f\u3001\u7c21\u6613\u306b\u4ed6\u306e\u30e6\u30fc\u30b6\u30fc\u306a\u3069\u306b\u52d5\u4f5c\u78ba\u8a8d\u3057\u3066\u3082\u3089\u3044\u305f\u3044\u5834\u5408\u306f\u3001",Object(r.b)("inlineCode",{parentName:"p"},"ngrok"),"\u3084",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"../infrastructure/how-to-use-inlets"}),Object(r.b)("inlineCode",{parentName:"a"},"inlets")),"\u3092\u5229\u7528\u3059\u308b\u3068\u3088\u3044\u3002"),Object(r.b)("h4",{id:"\u30c6\u30b9\u30c8\u30b1\u30fc\u30b9\u304cga\u306b\u9001\u4fe1\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b"},"\u30c6\u30b9\u30c8\u30b1\u30fc\u30b9\u304c",Object(r.b)("inlineCode",{parentName:"h4"},"GA"),"\u306b\u9001\u4fe1\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b"),Object(r.b)("p",null,"\u8a08\u6e2c\u3059\u308b",Object(r.b)("inlineCode",{parentName:"p"},"onClick"),"\u306a\u3069\u3092\u9069\u5f53\u306b\u7528\u610f\u3057\u3001GA \u4e0a\u306b\u9001\u4fe1\u3059\u308b\u3068\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306b",Object(r.b)("inlineCode",{parentName:"p"},"exp"),"\u304c QueryString Params \u3068\u3057\u3066\u9001\u4fe1\u3055\u308c\u3066\u3044\u308c\u3070\u6210\u529f\u3060\u3002"),Object(r.b)("p",null,Object(r.b)("img",{alt:"exp\u304c\u9001\u4fe1\u3055\u308c\u3066\u3044\u308b\u3053\u3068",src:n(259).default})),Object(r.b)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/Himenon/google-optimize-react-ssr-sample"}),"\u53c2\u8003\u5b9f\u88c5 - Himenon/google-optimize-react-ssr-sample"))))}s.isMDXComponent=!0},197:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var i=n(0),o=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(n),m=i,u=b["".concat(a,".").concat(m)]||b[m]||g[m]||r;return n?o.a.createElement(u,l(l({ref:t},p),{},{components:n})):o.a.createElement(u,l({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<r;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},258:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/ab-test-restore-cookie-flow-b484e6b3bae34f90ce692ed3b0d61c33.svg"},259:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/google-optimize-exp-sample-81d47b528c6a279cbfc968edcf4a89bf.png"}}]);