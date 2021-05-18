(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{159:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),c=(a(0),a(217)),i={title:"JavaScript\u3067\u540c\u671f\u7684\u306await/sleep/delay\u95a2\u6570\u3092\u4f5c\u308b",description:"\u3042\u308a\u305d\u3046\u3067\u306a\u3044\u5f85\u3064\uff08wait/sleep/delay\uff09\u51e6\u7406\u306e\u4f5c\u308a\u65b9\u3002Promise\u30c1\u30a7\u30fc\u30f3\u3068\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3067\u306e\u8868\u73fe\u306b\u3064\u3044\u3066\u3082\u89e3\u8aac\u3057\u307e\u3057\u305f\u3002",keywords:["javascript wait","javascript sleep \u540c\u671f","javascript wait \u540c\u671f","wait javascript","js wait","javascript sleep","promise wait","javascript wait sleep","javascript delay","await wait javascript","nodejs","filesystem","javascript","wait","sleep","delay"],createdAt:new Date("2019-06-12T22:59:00.000Z"),updatedAt:new Date("2020-04-11T22:50:00.000Z")},o={unversionedId:"javascript/wait",id:"javascript/wait",isDocsHomePage:!1,title:"JavaScript\u3067\u540c\u671f\u7684\u306await/sleep/delay\u95a2\u6570\u3092\u4f5c\u308b",description:"\u3042\u308a\u305d\u3046\u3067\u306a\u3044\u5f85\u3064\uff08wait/sleep/delay\uff09\u51e6\u7406\u306e\u4f5c\u308a\u65b9\u3002Promise\u30c1\u30a7\u30fc\u30f3\u3068\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3067\u306e\u8868\u73fe\u306b\u3064\u3044\u3066\u3082\u89e3\u8aac\u3057\u307e\u3057\u305f\u3002",source:"@site/docs/javascript/wait.md",slug:"/javascript/wait",permalink:"/docs/javascript/wait",editUrl:"https://github.com/Himenon/himenon.github.io/edit/default/docs/javascript/wait.md",version:"current",sidebar:"someSidebar",previous:{title:"viz.js\u3092React\u3092\u5229\u7528\u3059\u308b",permalink:"/docs/javascript/vizjs-with-react"},next:{title:"yarn install\u304c\u9045\u3044\u539f\u56e0\u306e\u8abf\u67fb\u65b9\u6cd5",permalink:"/docs/javascript/yarn-add-slow"}},l=[{value:"\u30d6\u30e9\u30a6\u30b6\u306eDevTools\u306b\u30b3\u30d4\u30fc\uff06\u30da\u30fc\u30b9\u30c8\u3067\u304d\u308b\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9",id:"\u30d6\u30e9\u30a6\u30b6\u306edevtools\u306b\u30b3\u30d4\u30fc\uff06\u30da\u30fc\u30b9\u30c8\u3067\u304d\u308b\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9",children:[{value:"\u52d5\u4f5c\u78ba\u8a8d",id:"\u52d5\u4f5c\u78ba\u8a8d",children:[]}]},{value:"\u89e3\u8aac",id:"\u89e3\u8aac",children:[{value:"\u88dc\u984c1. Promise\u30c1\u30a7\u30fc\u30f3\u3067\u9045\u5ef6\u51e6\u7406\u3092\u8a18\u8ff0\u3059\u308b",id:"\u88dc\u984c1-promise\u30c1\u30a7\u30fc\u30f3\u3067\u9045\u5ef6\u51e6\u7406\u3092\u8a18\u8ff0\u3059\u308b",children:[]},{value:"\u88dc\u984c2. Promise\u3082async/await\u3082\u4f7f\u308f\u305a\u306b\u9045\u5ef6\u51e6\u7406\u3092\u8a18\u8ff0\u3059\u308b",id:"\u88dc\u984c2-promise\u3082asyncawait\u3082\u4f7f\u308f\u305a\u306b\u9045\u5ef6\u51e6\u7406\u3092\u8a18\u8ff0\u3059\u308b",children:[]}]},{value:"\u3082\u3046\u5c11\u3057\u89e3\u8aac",id:"\u3082\u3046\u5c11\u3057\u89e3\u8aac",children:[{value:"\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u306e\u304a\u3055\u3089\u3044",id:"\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u306e\u304a\u3055\u3089\u3044",children:[]},{value:"\u9045\u5ef6\u95a2\u6570\u3092\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3067\u8868\u73fe\u3059\u308b",id:"\u9045\u5ef6\u95a2\u6570\u3092\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3067\u8868\u73fe\u3059\u308b",children:[]}]},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]}],s={rightToc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"\u30d6\u30e9\u30a6\u30b6\u306edevtools\u306b\u30b3\u30d4\u30fc\uff06\u30da\u30fc\u30b9\u30c8\u3067\u304d\u308b\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9"},"\u30d6\u30e9\u30a6\u30b6\u306eDevTools\u306b\u30b3\u30d4\u30fc\uff06\u30da\u30fc\u30b9\u30c8\u3067\u304d\u308b\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9"),Object(c.b)("p",null,"\u52d5\u4f5c\u78ba\u8a8d\u306f\u3001async/await\u304c\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308bGoogle Chrome\u63a8\u5968\u3067\u3059\u3002\n1\u884c\u3067\u66f8\u304f\u3068\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const wait = async (ms) => new Promise(resolve => setTimeout(resolve, ms));\n")),Object(c.b)("p",null,"\u5c55\u958b\u578b\u306f\u3053\u3046\u306a\u308a\u307e\u3059\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const wait = async (ms) => {\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      resolve(); // setTimeout\u306e\u7b2c\u4e00\u5f15\u6570\u306e\u95a2\u6570\u3068\u3057\u3066\u7c21\u7565\u5316\u3067\u304d\u308b\n    }, ms)\n  });\n}\n")),Object(c.b)("h3",{id:"\u52d5\u4f5c\u78ba\u8a8d"},"\u52d5\u4f5c\u78ba\u8a8d"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const main = async () => {\n  console.log(new Date());\n  await wait(5000); // 5\u79d2\u5f85\u3064\n  console.log(new Date());\n};\n\nawait main();\n")),Object(c.b)("h2",{id:"\u89e3\u8aac"},"\u89e3\u8aac"),Object(c.b)("p",null,"\u8a00\u8449\u4e0a\u306e\u8868\u73fe\u3068\u3057\u3066\u306f\u3001",Object(c.b)("inlineCode",{parentName:"p"},"wait"),"\u95a2\u6570\u304c\u5b9f\u884c\u3055\u308c\u308b\u3068Promise\u3092\u751f\u6210\u3057\u3001\u6307\u5b9a\u3057\u305f\u79d2\u6570\u5f8c\u306b\u89e3\u6c7a\uff08resolve\uff09\u3055\u308c\u308b\u306e\u3092\u540c\u671f\u7684\u306b\uff08\u547c\u3073\u51fa\u3057\u5074\u3067",Object(c.b)("inlineCode",{parentName:"p"},"await"),"\u3092\u3064\u3051\u308b\uff09\u5f85\u3064\u3053\u3068\u3067\u9045\u5ef6\u95a2\u6570\u3092\u5b9f\u88c5\u3057\u3066\u3044\u307e\u3059\u3002"),Object(c.b)("h3",{id:"\u88dc\u984c1-promise\u30c1\u30a7\u30fc\u30f3\u3067\u9045\u5ef6\u51e6\u7406\u3092\u8a18\u8ff0\u3059\u308b"},"\u88dc\u984c1. Promise\u30c1\u30a7\u30fc\u30f3\u3067\u9045\u5ef6\u51e6\u7406\u3092\u8a18\u8ff0\u3059\u308b"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"async/await"),"\u3092\u5229\u7528\u305b\u305a\u306bPromise\u3060\u3051\u3092\u5229\u7528\u3057\u3066\u51e6\u7406\u3092\u5f85\u6a5f\u3055\u305b\u307e\u3046\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"console.log(new Date);\nconst ms = 5000;\nnew Promise((resolve) => {\n  setTimeout(() => {\n    resolve();\n  }, ms)\n}).then(() => {\n  console.log(new Date);\n});\n")),Object(c.b)("h3",{id:"\u88dc\u984c2-promise\u3082asyncawait\u3082\u4f7f\u308f\u305a\u306b\u9045\u5ef6\u51e6\u7406\u3092\u8a18\u8ff0\u3059\u308b"},"\u88dc\u984c2. Promise\u3082async/await\u3082\u4f7f\u308f\u305a\u306b\u9045\u5ef6\u51e6\u7406\u3092\u8a18\u8ff0\u3059\u308b"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"console.log(new Date);\nconst ms = 5000;\nsetTimeout(() => {\n  console.log(new Date);\n}, ms);\n")),Object(c.b)("h2",{id:"\u3082\u3046\u5c11\u3057\u89e3\u8aac"},"\u3082\u3046\u5c11\u3057\u89e3\u8aac"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"async/await"),"\u3068",Object(c.b)("inlineCode",{parentName:"p"},"Promise"),"\u3092\u77e5\u3089\u306a\u3044\u5834\u5408\u3001\u88dc\u984c2\u306e\u3088\u3046\u306a\u30b3\u30fc\u30c9\u3092\u66f8\u304f\u3053\u3068\u306b\u306a\u308b\u3067\u3057\u3087\u3046\u3002\n\u3053\u308c\u306f\u3053\u308c\u3067\u826f\u3044\u306e\u3067\u3059\u304c\u3001\u9045\u5ef6\u51e6\u7406\u3092\u3064\u306a\u3052\u3066\u66f8\u304d\u305f\u3044\u5834\u5408\u306b\u7834\u7dbb\u3057\u307e\u3059\u3002\n\u4fd7\u79f0\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u5730\u7344\u3068\u547c\u79f0\u3057\u307e\u3059\u3002"),Object(c.b)("h3",{id:"\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u306e\u304a\u3055\u3089\u3044"},"\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u306e\u304a\u3055\u3089\u3044"),Object(c.b)("p",null,"\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\uff08callback\uff09\u306e\u304a\u3055\u3089\u3044\u3092\u7c21\u5358\u306b\u3057\u3066\u304a\u304f\u3068\u3001\u5f15\u6570\u306b\u95a2\u6570\u3092\u6e21\u3057\u3001\u95a2\u6570\u306e\u5b9f\u884c\u30bf\u30a4\u30df\u30f3\u30b0\u3092\u59d4\u306d\u308b\u51e6\u7406\u65b9\u6cd5\u3067\u3059\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'const playGame = () => {\n  console.log("\u30b2\u30fc\u30e0\u3059\u308b");\n}\n\nconst goHome = (callback) => {\n  console.log("\u5e30\u5b85\u3057\u305f");\n  callback(); // "\u5e30\u5b85\u3057\u305f"\u3042\u3068\u306b`callback`\u3092\u5b9f\u884c\u3059\u308b\u3002callback\u306b\u3064\u3044\u3066\u306f\u77e5\u3089\u306a\u3044\u3002\n}\n\ngoHome(playGame); // callback\u3068\u3057\u3066"\u30b2\u30fc\u30e0\u3092\u3059\u308b"\u51e6\u7406\u3092\u6e21\u3059\n')),Object(c.b)("p",null,"\u3053\u306e\u30b3\u30fc\u30c9\u3092\u30d6\u30e9\u30a6\u30b6\u3067\u8cbc\u308a\u4ed8\u3051\u3066\u5b9f\u884c\u3059\u308b\u3068"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"\u5e30\u5b85\u3057\u305f\n\u30b2\u30fc\u30e0\u3059\u308b\n")),Object(c.b)("p",null,"\u3068\u51fa\u529b\u3055\u308c\u307e\u3059\u3002"),Object(c.b)("h3",{id:"\u9045\u5ef6\u95a2\u6570\u3092\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3067\u8868\u73fe\u3059\u308b"},"\u9045\u5ef6\u95a2\u6570\u3092\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3067\u8868\u73fe\u3059\u308b"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const wait = (ms, callback) => {\n  setTimeout(() => {\n    callback(); // \u6307\u5b9a`ms`\u5f8c\u306b\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3092\u5b9f\u884c\u3059\u308b\n  }, ms);\n}\n")),Object(c.b)("p",null,'\u30d1\u30c3\u30c8\u898b\u826f\u3055\u305d\u3046\u3067\u3059\u3002\u305d\u308c\u3067\u306f\u30011\u79d2\u5f8c\u306b"A"\u3001\u305d\u306e2\u79d2\u5f8c\u306b"b"\u3001\u305d\u306e3\u79d2\u5f8c\u306b"c"\u3092\u51fa\u529b\u3055\u305b\u308b\u51e6\u7406\u3092\u66f8\u304f\u3068'),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'console.log("start");\nwait(1000, () => {\n  console.log("A");\n  wait(2000, () => {\n    console.log("B");\n    wait(3000, () => {\n      console.log("C");\n    });\n  });\n});\n')),Object(c.b)("p",null,"\u3068\u306a\u308a\u307e\u3059\u3002\u30d4\u30f3\u3068\u304f\u308b\u307e\u3067\u3058\u3063\u304f\u308a\u3068\u89b3\u5bdf\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002\u51e6\u7406\u304c\u3069\u3093\u3069\u3093\u5897\u3048\u308b\u305f\u3073\u306b\u968e\u5c64\uff08\u30b3\u30fc\u30c9\u30d6\u30ed\u30c3\u30af\u306e\u30cd\u30b9\u30c8\uff09\u304c\u6df1\u304f\u306a\u308a\u307e\u3059\u3002\n\u3053\u308c\u306f\u6d41\u77f3\u306b\u53ef\u8aad\u6027\u304c\u4f4e\u304f\u306a\u308b\u305f\u3081\u3001",Object(c.b)("inlineCode",{parentName:"p"},"Promise"),"\u3084",Object(c.b)("inlineCode",{parentName:"p"},"async/await"),"\u304c\u767a\u5c55\u3057\u3066\u3044\u304d\u307e\u3057\u305f\uff08\u30c1\u30e7\u30c3\u30c8\u96d1\uff09\u3002"),Object(c.b)("p",null,"\u9577\u304f\u306a\u3063\u3066\u3057\u307e\u3063\u305f\u306e\u3067\u3053\u3053\u307e\u3067\u306b\u3057\u307e\u3059\u3002"),Object(c.b)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise"}),"Promise ","-"," JavaScript ","|"," MDN")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"http://azu.github.io/promises-book/#race-delay-timeout"}),"http://azu.github.io/promises-book/#race-delay-timeout"))))}p.isMDXComponent=!0},217:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(a),m=n,j=b["".concat(i,".").concat(m)]||b[m]||u[m]||c;return a?r.a.createElement(j,o(o({ref:t},s),{},{components:a})):r.a.createElement(j,o({ref:t},s))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<c;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);