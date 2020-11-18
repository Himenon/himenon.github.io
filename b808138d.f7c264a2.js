(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(7),o=(n(0),n(187)),c={title:"node\u306erequest\u30e9\u30a4\u30d6\u30e9\u30ea\u306e`json`\u30aa\u30d7\u30b7\u30e7\u30f3\u306e\u53d6\u308a\u6271\u3044\u306b\u3064\u3044\u3066\u8abf\u3079\u3066\u307f\u305f",description:"json:true\u306e\u6307\u5b9a\u3092\u3057\u3066\u3082POST\u6642\u306bjson\u5316\u3055\u308c\u306a\u3044\u3089\u3057\u3044\uff1f",keywords:["javascript","library","requests"],createdAt:new Date("2018-04-09T03:32:29.000Z"),updatedAt:new Date("2019-05-21T11:22:01.000Z")},s={unversionedId:"javascript/request-library-description-for-json-value",id:"javascript/request-library-description-for-json-value",isDocsHomePage:!1,title:"node\u306erequest\u30e9\u30a4\u30d6\u30e9\u30ea\u306e`json`\u30aa\u30d7\u30b7\u30e7\u30f3\u306e\u53d6\u308a\u6271\u3044\u306b\u3064\u3044\u3066\u8abf\u3079\u3066\u307f\u305f",description:"json:true\u306e\u6307\u5b9a\u3092\u3057\u3066\u3082POST\u6642\u306bjson\u5316\u3055\u308c\u306a\u3044\u3089\u3057\u3044\uff1f",source:"@site/docs/javascript/request-library-description-for-json-value.md",slug:"/javascript/request-library-description-for-json-value",permalink:"/docs/javascript/request-library-description-for-json-value",editUrl:"https://github.com/Himenon/himenon.github.io/edit/master/docs/javascript/request-library-description-for-json-value.md",version:"current",sidebar:"someSidebar",previous:{title:"NodeJS\u306efs\u30e9\u30a4\u30d6\u30e9\u30ea\u3067\u30d5\u30a1\u30a4\u30eb\u306e\u4f5c\u6210\u65e5\u3092\u53d6\u5f97\u3059\u308b",permalink:"/docs/javascript/read-ctime"},next:{title:"NodeJS\u306erequire\u304c\u3069\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u63a2\u7d22\u3057\u3066\u3044\u308b\u306e\u304b\u3092\u8abf\u3079\u308b",permalink:"/docs/javascript/require-resolve"}},i=[{value:"TL;DR",id:"tldr",children:[]},{value:"\u7c21\u5358\u306b\u8abf\u3079\u3066\u307f\u305f",id:"\u7c21\u5358\u306b\u8abf\u3079\u3066\u307f\u305f",children:[]},{value:"\u5b9f\u88c5\u30b3\u30fc\u30c9\u304b\u3089\u8abf\u3079\u3066\u307f\u305f",id:"\u5b9f\u88c5\u30b3\u30fc\u30c9\u304b\u3089\u8abf\u3079\u3066\u307f\u305f",children:[{value:"\u30aa\u30d7\u30b7\u30e7\u30f3\u306e<code>json</code>\u3092\u3069\u3046\u306e\u3088\u3046\u306b\u53d6\u308a\u6271\u3063\u3066\u3044\u308b\u304b",id:"\u30aa\u30d7\u30b7\u30e7\u30f3\u306ejson\u3092\u3069\u3046\u306e\u3088\u3046\u306b\u53d6\u308a\u6271\u3063\u3066\u3044\u308b\u304b",children:[]},{value:"\u3082\u3063\u3068\u8a73\u3057\u304f\u898b\u3066\u307f\u308b",id:"\u3082\u3063\u3068\u8a73\u3057\u304f\u898b\u3066\u307f\u308b",children:[]}]}],l={rightToc:i};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h2",{id:"tldr"},"TL;DR"),Object(o.a)("p",null,"\u3064\u3079\u3053\u3079\u3044\u308f\u305a\u3001\u8a72\u5f53\u30b3\u30fc\u30c9\u898b\u305f\u307b\u3046\u304c\u65e9\u3044"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/request/request/blob/master/request.js#L1278-L1313"}),"https://github.com/request/request/blob/master/request.js#L1278-L1313"))),Object(o.a)("p",null,"\u30b3\u30fc\u30c9\u3092\u8aad\u3093\u3067\u3082\u308f\u304b\u3089\u306a\u304b\u3063\u305f\u3089\u7d9a\u304d\u3092\u3069\u3046\u305e\u3002"),Object(o.a)("h2",{id:"\u7c21\u5358\u306b\u8abf\u3079\u3066\u307f\u305f"},"\u7c21\u5358\u306b\u8abf\u3079\u3066\u307f\u305f"),Object(o.a)("p",null,"node\u306eHTTP Client\u3067\u3042\u308b",Object(o.a)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/request/request"}),"request"),"\u3092POST\u6642\u306b\u5229\u7528\u3057\u305f\u3068\u304d\u3001\n",Object(o.a)("inlineCode",{parentName:"p"},"json: true"),"\u306eoption\u304c\u3042\u308b\u3051\u3069\u3001",Object(o.a)("inlineCode",{parentName:"p"},"body"),"\u304cjson\u304b\u3055\u308c\u306a\u3044\u3063\u3066\u3044\u3046\u8a71\u3092\u805e\u3044\u305f\u306e\u3067\u3001\u8abf\u3079\u3066\u307f\u305f\u3002"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"https://stackoverflow.com/questions/27190447/pass-json-to-http-post-request"}),"https://stackoverflow.com/questions/27190447/pass-json-to-http-post-request")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"https://stackoverflow.com/questions/8675688/send-content-type-application-json-post-with-node-js"}),"send Content-Type: application/json post with node.js"))),Object(o.a)("p",null,"\u3069\u3046\u3084\u3089\u3001option\u306e",Object(o.a)("inlineCode",{parentName:"p"},"json"),"\u306bBoolean\u3067\u306f\u306a\u304f\u3001\u76f4\u63a5Object\u3092\u6e21\u3057\u305f\u307b\u3046\u304c\u65e9\u3044\u3002"),Object(o.a)("h2",{id:"\u5b9f\u88c5\u30b3\u30fc\u30c9\u304b\u3089\u8abf\u3079\u3066\u307f\u305f"},"\u5b9f\u88c5\u30b3\u30fc\u30c9\u304b\u3089\u8abf\u3079\u3066\u307f\u305f"),Object(o.a)("h3",{id:"\u30aa\u30d7\u30b7\u30e7\u30f3\u306ejson\u3092\u3069\u3046\u306e\u3088\u3046\u306b\u53d6\u308a\u6271\u3063\u3066\u3044\u308b\u304b"},"\u30aa\u30d7\u30b7\u30e7\u30f3\u306e",Object(o.a)("inlineCode",{parentName:"h3"},"json"),"\u3092\u3069\u3046\u306e\u3088\u3046\u306b\u53d6\u308a\u6271\u3063\u3066\u3044\u308b\u304b"),Object(o.a)("p",null,"\u5192\u982d\u3067\u3082\u7d39\u4ecb\u3057\u305f",Object(o.a)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/request/request/blob/master/request.js#L1278-L1313"}),"https://github.com/request/request/blob/master/request.js#L1278-L1313"),"\u3067\u3042\u308b\u3002"),Object(o.a)("p",null,"\u3044\u308d\u3044\u308d\u3076\u3063\u98db\u3070\u3057\u3066\u3001"),Object(o.a)("pre",null,Object(o.a)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"Request.prototype.json = function (val) {\n  var self = this\n\n  // \u4e2d\u7565\n\n  self._json = true\n  if (typeof val === 'boolean') {\n    // json\u30aa\u30d7\u30b7\u30e7\u30f3\u306e\u5024\u304cboolean\u306e\u5834\u5408\n    if (self.body !== undefined) {\n      // body\u304cundefined\u3067\u306a\u3051\u308c\u3042\u3070\n      if (!/^application\\/x-www-form-urlencoded\\b/.test(self.getHeader('content-type'))) {\n        // content-type\u304c application/x-www-form-urlencoded \u3068\u30de\u30c3\u30c1\u3057\u305f\u500d\u3001\n        // https://github.com/request/request/blob/master/lib/helpers.js#L20-L28\n        self.body = safeStringify(self.body, self._jsonReplacer)\n      } else {\n        // rfc3986\u3067\u30a8\u30f3\u30b3\u30fc\u30c9\n        // https://github.com/request/request/blob/master/lib/querystring.js#L42-L46\n        self.body = self._qs.rfc3986(self.body)\n      }\n      if (!self.hasHeader('content-type')) {\n        // content-type\u304c\u6307\u5b9a\u3055\u308c\u3066\u3044\u306a\u3051\u308c\u3070\u3001application/json\u306b\u6307\u5b9a\n        self.setHeader('content-type', 'application/json')\n      }\n    }\n} else {\n    // json\u304cboolean\u3067\u306a\u3044\u3068\u304d \n    // body\u306b\u5165\u308c\u76f4\u3057\u3066\u3044\u307e\u3059\u306d\u3002\n    self.body = safeStringify(val, self._jsonReplacer)\n    if (!self.hasHeader('content-type')) {\n      // content-type\u304c\u6307\u5b9a\u3055\u308c\u3066\u3044\u306a\u3051\u308c\u3070\u3001application/json\u306b\u6307\u5b9a\n      self.setHeader('content-type', 'application/json')\n    }\n  }\n\n  return self\n}\n")),Object(o.a)("p",null,"\u3053\u308c\u3067\u8b0e\u306f\u89e3\u3051\u307e\u3057\u305f\u3002\n",Object(o.a)("inlineCode",{parentName:"p"},"rfc3986"),"\u304c\u51fa\u3066\u304d\u305f\u306e\u3067\u3059\u304c\u3001\u5225\u306e\u7ae0\u3067\u7d39\u4ecb\u3002"),Object(o.a)("h3",{id:"\u3082\u3063\u3068\u8a73\u3057\u304f\u898b\u3066\u307f\u308b"},"\u3082\u3063\u3068\u8a73\u3057\u304f\u898b\u3066\u307f\u308b"),Object(o.a)("p",null,"\u6e0b\u5ddd\u3055\u3093\u306e\u8a18\u4e8b\u304c\u5927\u5909\u53c2\u8003\u306b\u306a\u308a\u307e\u3059\u3002\n\u8aad\u3093\u3067\u3044\u305f\u5f53\u6642\u306f\u3088\u304f\u308f\u304b\u3089\u306a\u304b\u3063\u305f\u306e\u3067\u3059\u304c\u3001\u4eca\u3068\u306a\u3063\u3066\u306f\u565b\u307f\u7de0\u3081\u3066\u8aad\u3081\u307e\u3059\u306d\u3002\u3002\u3002\nRFC\u5927\u4e8b\u3002"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"https://qiita.com/shibukawa/items/c0730092371c0e243f62"}),"encodeURIComponent\u304c\u4e16\u754c\u57fa\u6e96\u3060\u3068\u8aa4\u89e3\u3057\u3066\u305f\u8a71")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent"}),"encodeURIComponent() - MDN")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent"}),"encodeURIComponent() - demo"))),Object(o.a)("p",null,"RFC3986\u306b\u53b3\u683c\u306b\u5bfe\u5fdc\u3057\u305f\u30e9\u30a4\u30d6\u30e9\u30ea"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/ljharb/qs"}),"ljharb/qs"),Object(o.a)("ul",{parentName:"li"},Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"https://nodejs.org/api/querystring.html"}),"Query String - Node.js v9.11.1 Documentation")),Object(o.a)("li",{parentName:"ul"},"requests\u5185\u90e8\u3067\u5229\u7528\u3055\u308c\u3066\u3044\u307e\u3059\u306d")))),Object(o.a)("p",null,"RFC3986\u95a2\u9023"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"https://triple-underscore.github.io/RFC3986-ja.html"}),"RFC3986 \u65e5\u672c\u8a9e\u8a33\u306e\u8907\u88fd")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"http://freak-da.hatenablog.com/entry/20080321/p1"}),"URI\u306b\u4f7f\u3063\u3066\u3088\u3044\u6587\u5b57\u306e\u8a71 - RFC2396 \u3068 RFC3986")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"http://info-i.net/rfc3986-url"}),"RFC3986\u3092\u8aad\u307f\u306a\u304c\u3089URL\u30a8\u30f3\u30b3\u30fc\u30c9\u306b\u3064\u3044\u3066\u8003\u3048\u305f"))))}p.isMDXComponent=!0},187:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),b=p(n),j=a,d=b["".concat(c,".").concat(j)]||b[j]||u[j]||o;return n?r.a.createElement(d,s({ref:t},l,{components:n})):r.a.createElement(d,s({ref:t},l))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);