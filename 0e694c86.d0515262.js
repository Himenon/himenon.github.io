(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{217:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(n),b=r,m=s["".concat(c,".").concat(b)]||s[b]||f[b]||a;return n?o.a.createElement(m,i(i({ref:t},u),{},{components:n})):o.a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(217)),c={title:"\u9759\u7684\u30b5\u30a4\u30c8\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc\u306e\u9078\u5b9a\u6642\u306b\u8003\u3048\u308b\u3053\u3068",description:"\u69d8\u3005\u306a\u9759\u7684\u30b5\u30a4\u30c8\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc\u306e\u4e2d\u304b\u3089\u81ea\u5206\u306b\u3042\u3063\u305f\u9759\u7684\u30b5\u30a4\u30c8\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc\u3092\u3069\u3046\u3084\u3063\u3066\u63a2\u3059\u306e\u304b\u8003\u3048\u3066\u307f\u305f\u3002",keywords:["static site generator","\u9759\u7684\u30b5\u30a4\u30c8\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc","\u6280\u8853\u9078\u5b9a"],createdAt:new Date("2018-02-14T02:24:48.000Z"),updatedAt:new Date("2019-05-21T11:22:01.000Z")},i={permalink:"/blog/static-site-generator",editUrl:"https://github.com/Himenon/himenon.github.io/edit/develop/blog/blog/static-site-generator.md",source:"@site/blog/static-site-generator.md",description:"\u69d8\u3005\u306a\u9759\u7684\u30b5\u30a4\u30c8\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc\u306e\u4e2d\u304b\u3089\u81ea\u5206\u306b\u3042\u3063\u305f\u9759\u7684\u30b5\u30a4\u30c8\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc\u3092\u3069\u3046\u3084\u3063\u3066\u63a2\u3059\u306e\u304b\u8003\u3048\u3066\u307f\u305f\u3002",date:"2021-05-18T03:48:28.660Z",tags:[],title:"\u9759\u7684\u30b5\u30a4\u30c8\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc\u306e\u9078\u5b9a\u6642\u306b\u8003\u3048\u308b\u3053\u3068",readingTime:.825,truncated:!0,nextItem:{title:"\u30b3\u30f3\u30c6\u30ca\u30fc\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u4f5c\u6210\u6642\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u6210\u9577\u8a2d\u8a08\u306e\u8003\u5bdf",permalink:"/blog/container-app-directory-management-consideration"}},p=[],u={rightToc:p};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.staticgen.com/"}),"StaticGen"),"\u3068\u3044\u3046\u30b5\u30a4\u30c8\u3067\u3044\u308d\u3044\u308d\u3068\u7d39\u4ecb\u3055\u308c\u3066\u3044\u307e\u3059\u306d\u3002"),Object(a.b)("p",null,"\u597d\u307f\u306e\u3082\u306e\u3092\u9078\u3076\u3068\u826f\u3044\u306e\u3067\u3059\u304c\u3001\u901a\u5e38\u306e\u30d6\u30ed\u30b0\u3068\u9055\u3044\u3001\u904b\u7528\u306b\u624b\u9593\u304c\u304b\u304b\u308a\u307e\u3059\u3002\n\u500b\u4eba\u7684\u306b\u3001Jekyll\u3001Pelican\u3001Middleman\u3001Sphinx\u3001MkDocs\uff08\u5f53\u30b5\u30a4\u30c8\uff09\u3092\u4f7f\u3063\u3066\u307f\u3066\n\u3069\u3046\u3044\u3046\u8003\u3048\u65b9\u3067\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc\u3092\u9078\u3076\u304b\u6c17\u306e\u5411\u304f\u307e\u307e\u66f8\u3044\u3066\u307f\u3088\u3046\u3068\u601d\u3044\u307e\u3059\u3002"))}l.isMDXComponent=!0}}]);