(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(217)),i={title:"\u30b3\u30f3\u30c6\u30ca\u30fc\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u4f5c\u6210\u6642\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u6210\u9577\u8a2d\u8a08\u306e\u8003\u5bdf",description:"\u30b3\u30f3\u30c6\u30ca\u30fc\u3092\u5229\u7528\u3057\u305f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3059\u308b\u3068\u304d\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u8a2d\u8a08\u306b\u3064\u3044\u3066\u8003\u3048\u3066\u307f\u305f\u3002",keywords:["docker","kubernetes","container","thinking","\u8003\u5bdf"],createdAt:new Date("2018-03-16T02:28:23.000Z"),updatedAt:new Date("2019-05-21T11:22:01.000Z")},c={permalink:"/blog/container-app-directory-management-consideration",editUrl:"https://github.com/Himenon/himenon.github.io/edit/develop/blog/blog/container-app-directory-management-consideration.md",source:"@site/blog/container-app-directory-management-consideration.md",description:"\u30b3\u30f3\u30c6\u30ca\u30fc\u3092\u5229\u7528\u3057\u305f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3059\u308b\u3068\u304d\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u8a2d\u8a08\u306b\u3064\u3044\u3066\u8003\u3048\u3066\u307f\u305f\u3002",date:"2021-05-18T03:48:28.656Z",tags:[],title:"\u30b3\u30f3\u30c6\u30ca\u30fc\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u4f5c\u6210\u6642\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u6210\u9577\u8a2d\u8a08\u306e\u8003\u5bdf",readingTime:1.14,truncated:!0,prevItem:{title:"\u9759\u7684\u30b5\u30a4\u30c8\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc\u306e\u9078\u5b9a\u6642\u306b\u8003\u3048\u308b\u3053\u3068",permalink:"/blog/static-site-generator"},nextItem:{title:"JSConf JP 2019\u306b\u884c\u3063\u305f\u5f8c\u3001\u6b21\u306b\u4f55\u3092\u3084\u308b\u304b\u8003\u3048\u3066\u3044\u308b",permalink:"/blog/2019/12/14/jsconf2019-report"}},p=[{value:"\u306f\u3058\u3081\u306b",id:"\u306f\u3058\u3081\u306b",children:[]}],u={rightToc:p};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u306f\u3058\u3081\u306b"},"\u306f\u3058\u3081\u306b"),Object(a.b)("p",null,"Docker\u3092\u4f7f\u3063\u305fWEB\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u6210\u9577\u8a2d\u8a08\u306b\u3064\u3044\u3066\u8003\u3048\u3066\u3044\u304d\u307e\u3059\u3002"))}l.isMDXComponent=!0},217:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return s}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),f=l(n),m=r,s=f["".concat(i,".").concat(m)]||f[m]||d[m]||a;return n?o.a.createElement(s,c(c({ref:t},u),{},{components:n})):o.a.createElement(s,c({ref:t},u))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);