(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{215:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return j}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),p=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),d=p(n),O=r,j=d["".concat(b,".").concat(O)]||d[O]||u[O]||c;return n?a.a.createElement(j,i(i({ref:t},o),{},{components:n})):a.a.createElement(j,i({ref:t},o))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,b=new Array(c);b[0]=O;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,b[1]=i;for(var o=2;o<c;o++)b[o]=n[o];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),c=(n(0),n(215)),b={title:"\u9759\u7684\u30b5\u30a4\u30c8\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc\u306e\u9078\u5b9a\u6642\u306b\u8003\u3048\u308b\u3053\u3068",description:"\u69d8\u3005\u306a\u9759\u7684\u30b5\u30a4\u30c8\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc\u306e\u4e2d\u304b\u3089\u81ea\u5206\u306b\u3042\u3063\u305f\u9759\u7684\u30b5\u30a4\u30c8\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc\u3092\u3069\u3046\u3084\u3063\u3066\u63a2\u3059\u306e\u304b\u8003\u3048\u3066\u307f\u305f\u3002",keywords:["static site generator","\u9759\u7684\u30b5\u30a4\u30c8\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc","\u6280\u8853\u9078\u5b9a"],createdAt:new Date("2018-02-14T02:24:48.000Z"),updatedAt:new Date("2019-05-21T11:22:01.000Z")},i={permalink:"/blog/static-site-generator",editUrl:"https://github.com/Himenon/himenon.github.io/edit/develop/blog/blog/static-site-generator.md",source:"@site/blog/static-site-generator.md",description:"\u69d8\u3005\u306a\u9759\u7684\u30b5\u30a4\u30c8\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc\u306e\u4e2d\u304b\u3089\u81ea\u5206\u306b\u3042\u3063\u305f\u9759\u7684\u30b5\u30a4\u30c8\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc\u3092\u3069\u3046\u3084\u3063\u3066\u63a2\u3059\u306e\u304b\u8003\u3048\u3066\u307f\u305f\u3002",date:"2020-12-11T10:41:11.579Z",tags:[],title:"\u9759\u7684\u30b5\u30a4\u30c8\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc\u306e\u9078\u5b9a\u6642\u306b\u8003\u3048\u308b\u3053\u3068",readingTime:.825,truncated:!0,nextItem:{title:"\u30b3\u30f3\u30c6\u30ca\u30fc\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u4f5c\u6210\u6642\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u6210\u9577\u8a2d\u8a08\u306e\u8003\u5bdf",permalink:"/blog/container-app-directory-management-consideration"}},l=[{value:"\u74b0\u5883\u69cb\u7bc9/\u6a5f\u80fd\u9762",id:"\u74b0\u5883\u69cb\u7bc9\u6a5f\u80fd\u9762",children:[{value:"\u74b0\u5883\u69cb\u7bc9",id:"\u74b0\u5883\u69cb\u7bc9",children:[]},{value:"Live reload",id:"live-reload",children:[]},{value:"Build",id:"build",children:[]},{value:"Deploy",id:"deploy",children:[]}]},{value:"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u69cb\u6210\u3001\u30d5\u30a1\u30a4\u30eb\u7ba1\u7406",id:"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u69cb\u6210\u3001\u30d5\u30a1\u30a4\u30eb\u7ba1\u7406",children:[{value:"\u753b\u50cf\u3084PDF\u3068\u3044\u3063\u305f\u30e1\u30c7\u30a3\u30a2\u306f\u3069\u3053\u304b\u3089\u8aad\u307f\u8fbc\u307f\u8fbc\u3081\u308b\u304b\uff1f",id:"\u753b\u50cf\u3084pdf\u3068\u3044\u3063\u305f\u30e1\u30c7\u30a3\u30a2\u306f\u3069\u3053\u304b\u3089\u8aad\u307f\u8fbc\u307f\u8fbc\u3081\u308b\u304b\uff1f",children:[]}]},{value:"\u62e1\u5f35\u6a5f\u80fd",id:"\u62e1\u5f35\u6a5f\u80fd",children:[{value:"Syntax Highlight / Code Highlight",id:"syntax-highlight--code-highlight",children:[]},{value:"\u30b5\u30a4\u30c8\u5185\u691c\u7d22\u6a5f\u80fd",id:"\u30b5\u30a4\u30c8\u5185\u691c\u7d22\u6a5f\u80fd",children:[]},{value:"\u30bf\u30b0",id:"\u30bf\u30b0",children:[]},{value:"\u65e5\u4ed8",id:"\u65e5\u4ed8",children:[]},{value:"Markdown\u306eExtension",id:"markdown\u306eextension",children:[]},{value:"reStructuredText\u306b\u3064\u3044\u3066",id:"restructuredtext\u306b\u3064\u3044\u3066",children:[]}]},{value:"\u30d5\u30a9\u30f3\u30c8",id:"\u30d5\u30a9\u30f3\u30c8",children:[]},{value:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3",id:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3",children:[]},{value:"\u6700\u5f8c\u306b",id:"\u6700\u5f8c\u306b",children:[]}],o={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.staticgen.com/"}),"StaticGen"),"\u3068\u3044\u3046\u30b5\u30a4\u30c8\u3067\u3044\u308d\u3044\u308d\u3068\u7d39\u4ecb\u3055\u308c\u3066\u3044\u307e\u3059\u306d\u3002"),Object(c.b)("p",null,"\u597d\u307f\u306e\u3082\u306e\u3092\u9078\u3076\u3068\u826f\u3044\u306e\u3067\u3059\u304c\u3001\u901a\u5e38\u306e\u30d6\u30ed\u30b0\u3068\u9055\u3044\u3001\u904b\u7528\u306b\u624b\u9593\u304c\u304b\u304b\u308a\u307e\u3059\u3002\n\u500b\u4eba\u7684\u306b\u3001Jekyll\u3001Pelican\u3001Middleman\u3001Sphinx\u3001MkDocs\uff08\u5f53\u30b5\u30a4\u30c8\uff09\u3092\u4f7f\u3063\u3066\u307f\u3066\n\u3069\u3046\u3044\u3046\u8003\u3048\u65b9\u3067\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc\u3092\u9078\u3076\u304b\u6c17\u306e\u5411\u304f\u307e\u307e\u66f8\u3044\u3066\u307f\u3088\u3046\u3068\u601d\u3044\u307e\u3059\u3002"),Object(c.b)("h2",{id:"\u74b0\u5883\u69cb\u7bc9\u6a5f\u80fd\u9762"},"\u74b0\u5883\u69cb\u7bc9/\u6a5f\u80fd\u9762"),Object(c.b)("p",null,"\u6b21\u306e4\u3064\u304c\u5186\u6ed1\u306b\u4f7f\u7528\u3067\u304d\u306a\u3044\u3001\u3082\u3057\u304f\u306f\u5b9f\u884c\u3067\u304d\u306a\u3044\u3001\u3088\u3046\u306a\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u306f\n\u66f8\u304f\u30b3\u30b9\u30c8\u3092\u9ad8\u304f\u3059\u308b\u3060\u3051\u306a\u306e\u3067\u5229\u7528\u3057\u306a\u3044\u307b\u3046\u304c\u826f\u3044\u3068\u601d\u3044\u307e\u3059\u3002"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"\u9805\u76ee"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"\u5229\u7528\u76ee\u7684\u30fb\u5185\u5bb9"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("strong",{parentName:"td"},"\u74b0\u5883\u69cb\u7bc9")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u306a\u3069")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("strong",{parentName:"td"},"Hot reload")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u81ea\u52d5\u66f4\u65b0")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("strong",{parentName:"td"},"Build")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u30b5\u30a4\u30c8\u306e\u30b8\u30a7\u30cd\u30ec\u30fc\u30c8")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("strong",{parentName:"td"},"Deploy")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u30b5\u30a4\u30c8\u306e\u30db\u30b9\u30c6\u30a3\u30f3\u30b0")))),Object(c.b)("p",null,"\u307e\u305f\u3001\u3053\u308c\u3092\u62e1\u5f35\u6a5f\u80fd\u3092\u4f7f\u3063\u3066\u5b9f\u73fe\u3067\u304d\u308b\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u306f\u500b\u4eba\u7684\u306b\u306f\u4eca\u73fe\u5728\u907f\u3051\u3066\u3044\u307e\u3059\u3002\n\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u52d5\u304f\u3063\u3066\u3084\u306f\u308a\u7d20\u6674\u3089\u3057\u3044\u3067\u3059\u3002"),Object(c.b)("h3",{id:"\u74b0\u5883\u69cb\u7bc9"},"\u74b0\u5883\u69cb\u7bc9"),Object(c.b)("p",null,"\u30b5\u30a4\u30c8\u306e\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u304c\u4f9d\u5b58\u3057\u3066\u3044\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u3084\u30e2\u30b8\u30e5\u30fc\u30eb\u304c\u3001\n\u81ea\u5206\u306b\u3068\u3063\u3066\u4e0d\u89aa\u5207\u306a\u3082\u306e\u3001\u308f\u304b\u308a\u306b\u304f\u3044\u3082\u306e\u306f\u907f\u3051\u307e\u3057\u3087\u3046\u3002\n\u672c\u6765\u306e\u76ee\u7684\u306f",Object(c.b)("strong",{parentName:"p"},"\u6587\u7ae0\u3092\u66f8\u304f\u3053\u3068"),"\u3067\u3059\u3002\n\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u306e\u4f9d\u5b58\u95a2\u4fc2\u3092\u89e3\u6c7a\u3059\u308b\u3053\u3068\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002"),Object(c.b)("p",null,"\u307e\u305f\u3001OSS\u306a\u3069\u3067\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u4ed6\u306e\u4eba\u304c\u66f8\u304d\u63db\u3048\u308b\u5834\u5408\u304c\u3042\u308b\u5834\u5408\u3001\u30e1\u30f3\u30c6\u30ca\u30b9\u3057\u3084\u3059\u3044\u3088\u3046\u306b\u30b3\u30de\u30f3\u30c91\u3064\u3067\u7acb\u3061\u4e0a\u304c\u308b\u3088\u3046\u306b\u3057\u3066\u304a\u304f\u3079\u304d\u3067\u3059\u3002\nCirlcle CI\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8(",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/circleci/circleci-docs"}),"circleci/circleci-docs"),")\u3092\u4fee\u6b63\u3057\u305f\u3068\u304d\u306f\u3061\u3087\u3063\u3068\u611f\u52d5\u3057\u307e\u3057\u305f\u3002\u306a\u305c\u306a\u3089\u3070\u3001",Object(c.b)("inlineCode",{parentName:"p"},"docker-compose up"),"\u306e\u307f\u3067\u81ea\u5206\u306e\u74b0\u5883\u306b\u51fa\u6765\u4e0a\u304c\u3063\u305f\u304b\u3089\u3067\u3059\u3002\n\u3068\u3066\u3082\u5c0f\u3055\u306a\u4fee\u6b63\u3067\u3057\u305f\u304c\u3001\u3053\u306e\u304a\u9670\u3067\u30b9\u30e0\u30fc\u30ba\u306b\u30b3\u30f3\u30c8\u30ea\u30d3\u30e5\u30fc\u30c8\u3067\u304d\u3001\u3068\u3066\u3082\u5370\u8c61\u7684\u3060\u3063\u305f\u306e\u3092\u899a\u3048\u3066\u3044\u307e\u3059\u3002"),Object(c.b)("h3",{id:"live-reload"},"Live reload"),Object(c.b)("p",null,"\u5f8c\u307b\u3069\u51fa\u3066\u304d\u307e\u3059\u304c\u3001\u30b7\u30f3\u30bf\u30c3\u30af\u30b9\u30cf\u30a4\u30e9\u30a4\u30c8\u306a\u3069\u306e\u78ba\u8a8d\u3084\u3001\u6728\u69cb\u9020\u306e\u78ba\u8a8d\u3001\u30ea\u30f3\u30af\u304c\u6b63\u3057\u304f\u914d\u7f6e\u3055\u308c\u3066\u3044\u308b\u304b\u66f8\u304f\u306b\u3059\u308b\u6642\u306b\u975e\u5e38\u306b\u5927\u5207\u3067\u3059\u3002\u4e9b\u7d30\u306a\u4e8b\u306f\u5168\u4f53\u3092\u898b\u3066\u521d\u3081\u3066\u5206\u304b\u308b\u3053\u3068\u3082\u3042\u308b\u306e\u3067\u5e38\u306b\u78ba\u8a8d\u3067\u304d\u308b\u3088\u3046\u306a\u74b0\u5883\u304c\u6574\u3063\u3066\u3044\u308b\u65b9\u304c\u671b\u307e\u3057\u3044\u3067\u3057\u3087\u3046\u3002"),Object(c.b)("h3",{id:"build"},"Build"),Object(c.b)("p",null,"\u305f\u307e\u306b\u3042\u308b\u306e\u3067\u3059\u304c\u3001live reload\u3067\u898b\u3066\u3044\u308b\u3068\u304d\u306f\u6b63\u5e38\u306b\u52d5\u3044\u3066\u3044\u308b\u3051\u308c\u3069\u3001Build\u3059\u308b\u3068\u304d\u306b\u30a8\u30e9\u30fc\u304c\u51fa\u3066\u3064\u307e\u3065\u304f\u3001\u306a\u3093\u3068\u4e8b\u304c\u3042\u308a\u307e\u3059\u3002\n\u3055\u304f\u3063\u3068Build\u3067\u304d\u308b\u3088\u3046\u306a\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u304c\u671b\u307e\u3057\u3044\u3067\u3059\u3002"),Object(c.b)("h3",{id:"deploy"},"Deploy"),Object(c.b)("p",null,"\u6700\u8fd1\u3060\u3068\u3001",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.netlify.com/"}),"netlify.com"),"\u306b\u30db\u30b9\u30c6\u30a3\u30f3\u30b0\u3059\u308b\u306e\u304c\u4e3b\u6d41\u306b\u306a\u3063\u3066\u304d\u305f\u3067\u3057\u3087\u3046\u304b\u3002\n\u50d5\u304c\u77e5\u3063\u3066\u3044\u308bnetlify\u306f\u7121\u6599\u3067\u8a8d\u8a3c\u3064\u3051\u3066\u304f\u308c\u305f\u6642\u4ee3\u3082\u3082\u3042\u3063\u305f\u306e\u3067\u3059\u304c\u3001\u4eca\u306f\u7d50\u69cb\u304a\u91d1\u53d6\u308a\u307e\u3059\u306d\u3002\u3002\u3002\n\u8131\u7dda\u3057\u3066\u3057\u307e\u3057\u307e\u3057\u305f\u3002\n\u4e00\u822c\u516c\u958b\u30d9\u30fc\u30b9\u3060\u3068\u3001github\u304bnetlify\u5f53\u305f\u308a\u306b\u30db\u30b9\u30c6\u30a3\u30f3\u30b0\u3059\u308b\u304b\u3068\u601d\u3044\u307e\u3059\u3002\nnetlify\u306b\u30db\u30b9\u30c6\u30a3\u30f3\u30b0\u3059\u308b\u306a\u3089\u3070\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u308b\u3082\u306e\u3092\u9078\u3073\u307e\u3057\u3087\u3046\u3002\ngithub\u3060\u3068\u3001travis\u56de\u3057\u3066\u3082\u826f\u3044\u306e\u3067\u3059\u304c\u3001",Object(c.b)("inlineCode",{parentName:"p"},"docs/"),"\u914d\u4e0b\u306b\u751f\u6210\u3057\u3066\u304a\u3051\u3070\u826f\u3044\u306e\u3067\u3001\n\u751f\u6210\u5834\u6240\u3092\u8a2d\u5b9a\u3067\u3055\u304f\u3063\u3068\u5207\u308a\u66ff\u3048\u3089\u308c\u308b\u3088\u3046\u306a\u3082\u306e\u3092\u9078\u3093\u3060\u307b\u3046\u304c\u826f\u3044\u3067\u3057\u3087\u3046\u3002"),Object(c.b)("p",null,"\u5c11\u3057\u9032\u3093\u3060\u3053\u3068\u3092\u3059\u308b\u3068\u3001\u8a8d\u8a3c\uff08Basic\u8a8d\u8a3c\u3084\u3001",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/bitly/oauth2_proxy"}),"oauth2_proxy"),"\uff09\u3092\u304b\u3051\u305f\u3044\u304c\u3001\u30b3\u30b9\u30c8\u3092\u6291\u3048\u305f\u3044\u5834\u5408\u306f",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://devcenter.heroku.com/articles/container-registry-and-runtime"}),"Heroku Container Registry"),"\u306a\u3069\u3092\u4f7f\u3046\u3068\u7d4c\u6e08\u7684\u304b\u3068\u601d\u3044\u307e\u3059\u3002"),Object(c.b)("h2",{id:"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u69cb\u6210\u3001\u30d5\u30a1\u30a4\u30eb\u7ba1\u7406"},"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u69cb\u6210\u3001\u30d5\u30a1\u30a4\u30eb\u7ba1\u7406"),Object(c.b)("p",null,"\u6587\u7ae0\u3092\u66f8\u304d\u305f\u3044\u3060\u3051\u306a\u306e\u306b\u3001CSS\u3068\u304bJavaScript\u3068\u304b\u3001\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3068\u304b\u304c\u30b4\u30cb\u30e7\u30b4\u30cb\u30e7\u3042\u308b\u306e\u306f\u3001\u76ee\u306e\u6bd2\u3067\u3059\u3002\n\u305d\u308c\u3068\u3001\u3064\u3044\u3064\u3044\u4e2d\u8eab\u3092\u3044\u3058\u308a\u305f\u304f\u306a\u3063\u3066\u3057\u307e\u3046\u306e\u3067\u3001\u6975\u529b\u7121\u3044\u65b9\u304c\u826f\u3044\u3067\u3059\u3002"),Object(c.b)("h3",{id:"\u753b\u50cf\u3084pdf\u3068\u3044\u3063\u305f\u30e1\u30c7\u30a3\u30a2\u306f\u3069\u3053\u304b\u3089\u8aad\u307f\u8fbc\u307f\u8fbc\u3081\u308b\u304b\uff1f"},"\u753b\u50cf\u3084PDF\u3068\u3044\u3063\u305f\u30e1\u30c7\u30a3\u30a2\u306f\u3069\u3053\u304b\u3089\u8aad\u307f\u8fbc\u307f\u8fbc\u3081\u308b\u304b\uff1f"),Object(c.b)("p",null,"(\u500b\u4eba\u7684\u306a)\u7d50\u8ad6\u304b\u3089\u5148\u306b\u3044\u3044\u307e\u3059\u3002\n\u9759\u7684\u30b5\u30a4\u30c8\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u3092\u4f7f\u7528\u3057\u3066\u753b\u50cf\u3092\u914d\u7f6e\u3057\u305f\u308a\u3059\u308b\u5834\u5408\u3001\n\u6587\u7ae0\u3092\u8a18\u8ff0\u3057\u3066\u3044\u308bMarkdown\u306e\u30d5\u30a1\u30a4\u30eb\u3068\u540c\u3058\u968e\u5c64\u304b\u3001\u6df1\u6398\u308a\u304c\u53ef\u80fd\u306a\u968e\u5c64\u306b\u30e1\u30c7\u30a3\u30a2\u304c\n\u914d\u7f6e\u3067\u304d\u305f\u307b\u3046\u304c\u3088\u3044\u3067\u3059\u3002"),Object(c.b)("p",null,"\u7406\u7531\u306f\u672c\u5f53\u306b\u5358\u7d14\u3067\u3001\u5225\u306e\u30b5\u30a4\u30c8\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u306b\u79fb\u884c\u3057\u305f\u5834\u5408\u3084\u3001\u30e1\u30c7\u30a3\u30a2\u306e\u5dee\u3057\u66ff\u3048\u3092\u884c\u3046\u6642\u306b\u3001\n\u3069\u308c\u3060\u3051\u65e9\u304f\u3067\u304d\u308b\u304b\u3001\u3092\u8003\u3048\u305f\u6642\u306bMarkdown\u5185\u306b\u66f8\u304b\u308c\u3066\u3044\u308b\u76f8\u5bfe\u30d1\u30b9\u3068\u5b9f\u969b\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u76f8\u5bfe\u30d1\u30b9\u304c\n\u4e00\u81f4\u3057\u3066\u3044\u308b\u65b9\u304c\u5727\u5012\u7684\u306b\u79fb\u690d\u6027\u304c\u9ad8\u3044\u3067\u3059\u3002"),Object(c.b)("h4",{id:"good"},"Good"),Object(c.b)("p",null,"\u4f8b\u3048\u3070\u3001\u6b21\u306e\u3088\u3046\u306b\u30d5\u30a1\u30a4\u30eb\u69cb\u6210\u304c\u3042\u3063\u305f\u3068\u304d\u3001hello.md\u5185\u3067\u753b\u50cf\u3092\u547c\u3073\u51fa\u3057\u305f\u3044\u5834\u5408\u304c\u3042\u308b\u3068\u3057\u307e\u3059\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"hello.md\nmedia/image.png\n")),Object(c.b)("p",null,"\u3044\u307e\u3001\u3053\u3053\u3067\u63a8\u3057\u3066\u3044\u308b\u53c2\u7167\u65b9\u6cd5\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u76f8\u5bfe\u30d1\u30b9\u3067\u547c\u3073\u51fa\u305b\u308b\u65b9\u6cd5\u3067\u3059\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-markdown"}),"![image](media/image.png)\n![image](./media/image.png)\n")),Object(c.b)("h4",{id:"bad"},"Bad"),Object(c.b)("p",null,"Bad\u306a\u30d1\u30bf\u30fc\u30f3\u306f\u6b21\u306e\u3088\u3046\u306a\u69cb\u6210\u3067\u3059\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"src/docs/hello.md\n   /assets/img/image.png\n")),Object(c.b)("p",null,"Markdown\u4e2d\u306e\u8a18\u8ff0\u306f\u6b21\u306e\u3088\u3046\u306b\u66f8\u304d\u307e\u3059\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-markdown"}),"![image](/img/image.png)\n")),Object(c.b)("p",null,"\u3053\u306e\u3088\u3046\u306a\u5834\u5408\u306f\u6700\u60aa\u3067\u3059\u3002\u30eb\u30fc\u30c8\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u304b\u3089\u59cb\u307e\u3063\u3066\u3044\u308b\u5834\u5408\u306f\u30b5\u30a4\u30c8\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u306e\u30db\u30b9\u30c6\u30a3\u30f3\u30b0\u306e\u90fd\u5408\u3092\u62bc\u3057\u4ed8\u3051\u3089\u308c\u3066\u3044\u308b\u305f\u3081\u3001\u6587\u7ae0\u3092\u66f8\u304f\u59a8\u3052\u306b\u306a\u308a\u307e\u3059\u3002\n\u7ba1\u7406\u304c\u5927\u5909\u3067\u3059\u3002"),Object(c.b)("p",null,"\u30e2\u30c1\u30d9\u30fc\u30b7\u30e7\u30f3\u3092\u4e0b\u3052\u308b\u539f\u56e0\u306b\u306a\u308b\u306e\u3067\u3001\u3053\u306e\u3088\u3046\u306a\u30b5\u30a4\u30c8\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u3092\u9078\u3076\u306e\u306f\u907f\u3051\u305f\u307b\u3046\u304c\u826f\u3044\u3067\u3057\u3087\u3046\u3002"),Object(c.b)("h2",{id:"\u62e1\u5f35\u6a5f\u80fd"},"\u62e1\u5f35\u6a5f\u80fd"),Object(c.b)("p",null,"\u3069\u3093\u306a\u62e1\u5f35\u6a5f\u80fd\u3067\u3082\u30011\u5206\u4ee5\u5185\u306b\u8ffd\u52a0\u3067\u304d\u308b\u3082\u306e\u30fb\u4ed5\u7d44\u307f\u3067\u3042\u308b\u65b9\u304c\u3044\u3044\u3002\n\u3060\u3063\u3066\u3001\u62e1\u5f35\u6a5f\u80fd\u306e\u305f\u3081\u306b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u8aad\u307f\u3060\u3059\u3068\u3001\u8131\u7dda\u3057\u3061\u3083\u3046\u3082\u306e\u3002"),Object(c.b)("h3",{id:"syntax-highlight--code-highlight"},"Syntax Highlight / Code Highlight"),Object(c.b)("p",null,"\u7279\u306b\u3001\u30a8\u30f3\u30b8\u30cb\u30a2\u306a\u3089\u3001\u30b3\u30fc\u30c9\u3092\u66f8\u304f\u306e\u3067\u30b3\u30fc\u30c9\u30cf\u30a4\u30e9\u30a4\u30c8\n(",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://highlightjs.org/"}),"highlight.js"),", ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"http://prismjs.com/"}),"prismjs"),"\u3042\u305f\u308a\uff1f\uff09\u304c\u5f8c\u304b\u3089\u3068\u3066\u3082\u7c21\u5358\u306a\u8a2d\u5b9a\u3067\u5c0e\u5165\u3067\u304d\u308b\u3068\u5b09\u3057\u3044\u3068\u601d\u3046\u3002\n\u307e\u305f\u3001\u30c6\u30fc\u30de\u306e\u8272\u3082\u7c21\u5358\u306b\u5909\u3048\u3089\u308c\u308b\u3082\u306e\u3092\u63a2\u3057\u305f\u307b\u3046\u304c\u826f\u3044\u3002"),Object(c.b)("h3",{id:"\u30b5\u30a4\u30c8\u5185\u691c\u7d22\u6a5f\u80fd"},"\u30b5\u30a4\u30c8\u5185\u691c\u7d22\u6a5f\u80fd"),Object(c.b)("p",null,"\u6280\u8853\u7684\u306a\u30d6\u30ed\u30b0\u3092\u66f8\u3044\u305f\u308a\u3001\u30e1\u30e2\u4ee3\u308f\u308a\u306b\u3059\u308b\u306a\u3089\u691c\u7d22\u6a5f\u80fd\u306f\u5fc5\u9808\u3060\u3068\u601d\u3046\u3002\n\u3042\u308b\u3082\u306e\u3092\u63a2\u3057\u305f\u307b\u3046\u304c\u826f\u3044\u3002"),Object(c.b)("h3",{id:"\u30bf\u30b0"},"\u30bf\u30b0"),Object(c.b)("p",null,"\u3042\u308b\u306b\u8d8a\u3057\u305f\u3053\u3068\u306f\u306a\u3044\u3068\u601d\u3046\u304c\u3001\u500b\u4eba\u7684\u306b\u306f\u306a\u304f\u3066\u3082\u826f\u3044\u3068\u601d\u3063\u3066\u3044\u308b\u3002\n\uff08SEO\u7684\u306b\u306f\u3042\u3063\u305f\u307b\u3046\u304c\u826f\u3044\u306e\u304b\u3082\u3057\u308c\u306a\u3044\u3051\u308c\u3069\uff09\n\u7406\u7531\u306f\u5358\u7d14\u3067\u3001\u7ba1\u7406\u304c\u5927\u5909\u3060\u304b\u3089\u3067\u3059\u3002\u9759\u7684\u30b5\u30a4\u30c8\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u306e\u6027\u8cea\u4e0a\u3001\u5168\u3066\u81ea\u5206\u3067\u66f8\u3044\u3066\u3044\u304f\u306e\u3067\u3059\u3002\n\u3044\u3061\u3044\u3061\u3001\u3069\u3093\u306a\u30bf\u30b0\u3092\u4ed8\u3051\u308b\u304b\u3092\u8003\u3048\u308b\u3088\u308a\u3001\u3069\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u4e0b\u306b\u3053\u306e\u6587\u7ae0\u3092\u914d\u7f6e\u3057\u3088\u3046\u304b\u3001\n\u3092\u8003\u3048\u305f\u307b\u3046\u304c\u3088\u3063\u307d\u3069\u5927\u5207\u3067\u3059\u3002"),Object(c.b)("p",null,"\u9577\u304f\u9759\u7684\u30b5\u30a4\u30c8\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u3092\u5229\u7528\u3057\u3066\u3044\u304f\u306a\u3089\u3070\u3001\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u5207\u308a\u65b9\u3092\u9577\u304f\u898b\u636e\u3048\u3066\u69cb\u7bc9\u3057\u305f\u65b9\u304c\u3044\u3044\u3002\n\u307e\u305f\u3001\u4ee3\u66ff\u306e\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u306f\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306eURI\u304c\u30b5\u30a4\u30c8\u306eURL\u306b\u53cd\u6620\u3055\u308c\u308b\u306e\u3067\u3001\u305d\u3053\u307e\u3067\u9811\u5f35\u3063\u3066\u30bf\u30b0\u3092\u3064\u3051\u306a\u304f\u3066\u3082\u3044\u3044\u3067\u3057\u3087\u3046\u3002"),Object(c.b)("p",null,"\u30bf\u30b0\u3067\u691c\u7d22\u3059\u308b\u3050\u3089\u3044\u3060\u3063\u305f\u3089\u3001\u30b5\u30a4\u30c8\u5185\u691c\u7d22\u304c\u3057\u3063\u304b\u308a\u3068\u3057\u305f\u3082\u306e\u3092\u63a2\u3057\u305f\u307b\u3046\u304c\u3088\u3063\u307d\u3069\u30de\u30b7\u3067\u3059\u3002"),Object(c.b)("h3",{id:"\u65e5\u4ed8"},"\u65e5\u4ed8"),Object(c.b)("p",null,"\u65e5\u4ed8\u306f\u975e\u5e38\u306b\u5927\u4e8b\u3067\u3059\u3002Google\u306b\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u3055\u308c\u308b\u65e5\u4ed8\u306e\u306fMarkup\u3055\u308c\u305f\u3082\u306e\u3058\u3083\u306a\u3044\u306e\u3067\u3001\u305d\u3053\u306f\u6c17\u306b\u3057\u306a\u304f\u3066\u3044\u3044\u3093\u3067\u3059\u304c\u3001\u30b5\u30a4\u30c8\u5185\u306b\u306f\u6d41\u77f3\u306b\u8868\u793a\u3057\u305f\u3044\u3067\u3059\u3088\u306d\u3002\n\u304c\u3001\u304b\u306a\u308a\u306e\u30b5\u30a4\u30c8\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u304c\u624b\u52d5\u3067\u3064\u3051\u3066\u3044\u304f\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002"),Object(c.b)("p",null,"\u500b\u4eba\u7684\u306b\u306f\u3001git\u306e\u30b3\u30df\u30c3\u30c8\u30ed\u30b0\u3060\u3063\u305f\u308a\u3001\u30d5\u30a1\u30a4\u30eb\u306e\u4f5c\u6210\u65e5\u3068\u66f4\u65b0\u65e5\u304b\u3089\u81ea\u52d5\u7684\u306b\u53d6\u5f97\u3057\u3066\u3001\u30d3\u30eb\u30c9\u6642\u306b\u81ea\u52d5\u7684\u306b\u5165\u529b\u3057\u3066\u304f\u308c\u308b\u3068\u3001\u305d\u306e\u7ba1\u7406\u5de5\u6570\u304c\u6e1b\u308b\u306e\u3067\u975e\u5e38\u306b\u697d\u3067\u3059\u3002\u307e\u3060\u3001\u305d\u306e\u3088\u3046\u306a\u62e1\u5f35\u6a5f\u80fd\u306b\u51fa\u4f1a\u3063\u3066\u3044\u306a\u3044\u306e\u3067\u3001\u5b9f\u306f\u3042\u308b\u3088\u3001\u306a\u3093\u3066\u3042\u308c\u3070\u6559\u3048\u3066\u304f\u3060\u3055\u3044\u3002"),Object(c.b)("h3",{id:"markdown\u306eextension"},"Markdown\u306eExtension"),Object(c.b)("p",null,"\u500b\u4eba\u7684\u306b\u306f\u3001",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facelessuser/pymdown-extensions"}),"pymdown-extensions"),"\u304c\u597d\u307f\u3060(",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://pypi.python.org/pypi/pymdown-extensions"}),"pypi"),", ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://facelessuser.github.io/pymdown-extensions/"}),"Document"),")\u3002\u3053\u306e\u62e1\u5f35\u6a5f\u80fd\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306fmkdocs\u3067\u4f5c\u6210\u3055\u308c\u3066\u3044\u308b\u3002\u8d85\u30af\u30fc\u30eb\u306a\u30c6\u30fc\u30de\u306e",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://squidfunk.github.io/mkdocs-material/"}),"Material for MkDocs"),"\u3092\u5229\u7528\u3057\u3066\u3044\u308b\u3002\n",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://squidfunk.github.io/mkdocs-material/extensions/admonition/"}),"Extensions"),"\u304c\u7d20\u6674\u3089\u3057\u3044\u306e\u3067\u305c\u3072\u898b\u3066\u6b32\u3057\u3044(mkdocs\u306e\u30b9\u30c6\u30de)\u3002"),Object(c.b)("p",null,"\u305f\u3060\u3001Markdown\u306e\u62e1\u5f35\u6a5f\u80fd\u3092\u5165\u308c\u308b\u3068\u3001\u305d\u308c\u4ee5\u5916\u306e\u30c4\u30fc\u30eb\u3067\u306f\u518d\u73fe\u3067\u304d\u306a\u3044\u306a\u3069\u306e\u4e0d\u5177\u5408\u3082\u751f\u3058\u3066\u3057\u307e\u3046\u3002\n\u3057\u304b\u3057\u3001",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facelessuser/pymdown-extensions"}),"pymdown-extensions"),"\u306e\u8a18\u6cd5\u304c\u72ec\u7279\u304b\u3068\u8a00\u308f\u308c\u308b\u3068\u305d\u3046\u3067\u3082\u306a\u304f\u3001reStructuredText\u3067\u898b\u3089\u308c\u308b\u3088\u3046\u306a\u30c7\u30a3\u30ec\u30af\u30c6\u30a3\u30d6\u3092Markdown\u306b\u843d\u3068\u3057\u8fbc\u3093\u3060\u5f62\u306b\u306a\u3063\u3066\u3044\u308b\u3002"),Object(c.b)("h3",{id:"restructuredtext\u306b\u3064\u3044\u3066"},"reStructuredText\u306b\u3064\u3044\u3066"),Object(c.b)("p",null,"\u5927\u5b66\u6642\u4ee3\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306f",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.sphinx-doc.org/ja/stable/"}),"Sphinx"),"\u3067\u66f8\u3044\u3066\u304d\u307e\u3057\u305f\u3002\n\u7406\u7531\u306f\u5358\u7d14\u3067\u3001TeX\u3092\u4f7f\u3063\u3066\u3044\u308b\u3001\u304b\u3064\u7814\u7a76\u5ba4\u5185\u306e\u30b5\u30fc\u30d0\u30fc\u306b\u30a6\u30a7\u30d6\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3068\u3057\u3066\u30db\u30b9\u30c6\u30a3\u30f3\u30b0\u3059\u308b\u3053\u3068\u3067\u8ab0\u3082\u304c\u7c21\u5358\u306b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u305f\u3081\u3067\u3059\u3002\n\u96fb\u5b50\u6a5f\u5668\u3092\u6301\u3061\u8fbc\u3081\u306a\u3044\u3088\u3046\u306a\u5834\u6240\u306f\u7d19\u3067\u5370\u5237\u3059\u308b\u5fc5\u8981\u3082\u3042\u3063\u305f\u305f\u3081\u3001Sphinx\u306ePDF\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u6a5f\u80fd\u306b\u306f\u3060\u3044\u3076\u52a9\u3051\u3089\u308c\u307e\u3057\u305f\u3002\nTeX\u3067\u6570\u5f0f\u3092\u639b\u3051\u308b\u3068\u3053\u308d\u304b\u3089\u3082\u975e\u5e38\u306b\u5f79\u306b\u305f\u3061\u307e\u3057\u305f\u3002"),Object(c.b)("p",null,"\u7279\u306b\u3001\u30c7\u30a3\u30ec\u30af\u30c6\u30a3\u30d6\u304c\u512a\u79c0\u3067\u3001\u5f8c\u304b\u3089class\u3092\u3064\u3051\u305f\u308a\u3001\u753b\u50cf\u306e\u30b5\u30a4\u30ba\u5909\u66f4\u3057\u305f\u308a\u3067\u304d\u3001\n\u76ee\u6b21\u30c4\u30ea\u30fc\u3084\u3001",Object(c.b)("inlineCode",{parentName:"p"},"include"),"\u3067\u30d5\u30a1\u30a4\u30eb\u3092\u5206\u5272\u3067\u304d\u308b\u3068\u3053\u308d\u3082\u975e\u5e38\u306b\u6d3b\u8e8d\u3057\u307e\u3057\u305f\u3002"),Object(c.b)("p",null,"\u3060\u3051\u308c\u3069\u3082\u3001\u6700\u8fd1\u306e\u30a8\u30c7\u30a3\u30bf\u30fc\u3067\u306fMarkdown\u306e\u30b5\u30dd\u30fc\u30c8\u304c\u4e3b\u6d41\u3067\u3001",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"http://docs.sphinx-users.jp/rest.html"}),"reStructuredText"),"\u306e\u8a18\u6cd5\u3067\u66f8\u3044\u3066\u3044\u308b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306f\u3001\u3061\u3087\u3063\u3068\uff08\u6570\u5e74\uff09\u524dPython\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u7cfb\u3050\u3089\u3044\u3057\u304b\u898b\u306a\u3044\u3002"),Object(c.b)("p",null,"\u4f7f\u3044\u52dd\u624b\u306e\u9762\u304b\u3089\u3057\u3066\u3082Markdown\u306e\u307b\u3046\u304c\u4fbf\u5229\u3060\u3063\u305f\u305f\u3081\u3001\nPyPI\u7528\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u66f8\u304f\u4ee5\u5916\u3067\u306f\u3001\u6700\u8fd1\u3067\u306f\u306a\u304b\u306a\u304b\u4f7f\u3063\u3066\u3044\u307e\u305b\u3093\u3002"),Object(c.b)("h2",{id:"\u30d5\u30a9\u30f3\u30c8"},"\u30d5\u30a9\u30f3\u30c8"),Object(c.b)("p",null,"\u30c6\u30fc\u30de\u5358\u4f4d\u3067\u30d5\u30a9\u30f3\u30c8\u304c\u6c7a\u307e\u3063\u3066\u3044\u308b\u3082\u306e\u304c\u591a\u3044\u3067\u3059\u304c\u3001\u81ea\u5206\u306e\u6c17\u306b\u884c\u3063\u305f\u30d5\u30a9\u30f3\u30c8\u3092\u9078\u3073\u307e\u3057\u3087\u3046\u3002"),Object(c.b)("p",null,"\u79c1\u500b\u4eba\u3068\u3057\u3066\u306f\u3001\u5358\u7d14\u306b",Object(c.b)("strong",{parentName:"p"},"\u8aad\u3081\u308b"),"\u30d5\u30a9\u30f3\u30c8\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002"),Object(c.b)("h2",{id:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3"},"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3"),Object(c.b)("p",null,"\u51dd\u3063\u305f\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306b\u306f\u4e0d\u8981\u3068\u601d\u3063\u3066\u3044\u307e\u3059\u3002\nWEB\u306e\u60c5\u5831\u306f\u6d41\u3057\u3066\u898b\u308b\u3082\u306e\u3067\u3059\u304b\u3089\u3001\u3055\u3063\u3055\u3068\u5207\u308a\u66ff\u308f\u3063\u3066\u76ee\u7684\u306e\u60c5\u5831\u3055\u3048\u5f97\u3089\u308c\u308c\u3070\u3088\u3044\u3067\u3059\u3002"),Object(c.b)("h2",{id:"\u6700\u5f8c\u306b"},"\u6700\u5f8c\u306b"),Object(c.b)("p",null,"\u3053\u306e\u30b5\u30a4\u30c8\u3001iframe\u3067\u69cb\u6210\u3055\u308c\u3066\u3044\u307e\u3059\u3002SPA\u306e\u30c7\u30d0\u30c3\u30b0\u30e2\u30fc\u30c9\u3058\u3083\u306a\u3044\u3067\u3059\u3088\uff1f"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/gristlabs/mkdocs-windmill"}),"gristlabs/mkdocs-windmill"))),Object(c.b)("p",null,"\u3053\u3046\u3044\u3046\u306e\u3001\u5acc\u3044\u3058\u3083\u306a\u3044\u3067\u3059\u3002\u3080\u3057\u308d\u597d\u304d\u3067\u3059\u3002"))}p.isMDXComponent=!0}}]);