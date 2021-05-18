(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{124:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),a=(r(0),r(217)),c={title:"TypeScript\u3067Error\u3092\u62e1\u5f35\u3057\u3066\u72ec\u81ea\u306eException\u3092\u51fa\u529b\u3059\u308b",description:"\u72ec\u81ea\u306e\u30a8\u30e9\u30fc\u306e\u540d\u524d\u3092\u751f\u6210\u3059\u308b\u65b9\u6cd5\u3092\u7d39\u4ecb\u3002",keywords:["Exception","Error","\u62e1\u5f35","\u72ec\u81ea"],createdAt:"2020-12-23 15:00",updatedAt:"2020-12-23 15:00"},i={unversionedId:"typescript/extend-error",id:"typescript/extend-error",isDocsHomePage:!1,title:"TypeScript\u3067Error\u3092\u62e1\u5f35\u3057\u3066\u72ec\u81ea\u306eException\u3092\u51fa\u529b\u3059\u308b",description:"\u72ec\u81ea\u306e\u30a8\u30e9\u30fc\u306e\u540d\u524d\u3092\u751f\u6210\u3059\u308b\u65b9\u6cd5\u3092\u7d39\u4ecb\u3002",source:"@site/docs/typescript/extend-error.md",slug:"/typescript/extend-error",permalink:"/docs/typescript/extend-error",editUrl:"https://github.com/Himenon/himenon.github.io/edit/default/docs/typescript/extend-error.md",version:"current",sidebar:"someSidebar",previous:{title:"yarn install\u3092\u30aa\u30d5\u30e9\u30a4\u30f3\u3067\u884c\u3046\u3068\u304d\u306e\u7ba1\u7406\u65b9\u6cd5",permalink:"/docs/javascript/yarn-offline-install"},next:{title:"TypeScript\u3067\u975e\u540c\u671f/\u540c\u671f\u95a2\u6570\u306ewrapper\u95a2\u6570\u3092\u5b9a\u7fa9\u3059\u308b",permalink:"/docs/typescript/wrapper-async-or-sync-function"}},p=[{value:"\u5b9f\u88c5",id:"\u5b9f\u88c5",children:[]},{value:"\u53c2\u8003\u6587\u732e",id:"\u53c2\u8003\u6587\u732e",children:[]}],s={rightToc:p};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u5b9f\u88c5"},"\u5b9f\u88c5"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"abstract class BaseError extends Error {\n  constructor(message: string) {\n    super(message);\n    Object.setPrototypeOf(this, new.target.prototype);\n  }\n}\n\nexport class MyError extends BaseError {}\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"BaseError"),"\u3092\u7d99\u627f\u3059\u308b\u3053\u3068\u3067\u91cf\u7523\u3067\u304d\u308b\u3002"),Object(a.b)("h2",{id:"\u53c2\u8003\u6587\u732e"},"\u53c2\u8003\u6587\u732e"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript"}),"What's a good way to extend Error in JavaScript?")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://teratail.com/questions/114258"}),"TypeScript\u3067\u30ab\u30b9\u30bf\u30e0\u30a8\u30e9\u30fc\u30af\u30e9\u30b9\u3092\u4f5c\u6210\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066"))))}l.isMDXComponent=!0},217:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),b=n,f=u["".concat(c,".").concat(b)]||u[b]||d[b]||a;return r?o.a.createElement(f,i(i({ref:t},s),{},{components:r})):o.a.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);