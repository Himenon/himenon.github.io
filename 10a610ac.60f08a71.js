(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{215:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return u}));var r=t(0),c=t.n(r);function b(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){b(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},b=Object.keys(e);for(r=0;r<b.length;r++)t=b[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)t=b[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var o=c.a.createContext({}),p=function(e){var n=c.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return c.a.createElement(o.Provider,{value:n},e.children)},O={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},j=c.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,b=e.originalType,i=e.parentName,o=a(e,["components","mdxType","originalType","parentName"]),d=p(t),j=r,u=d["".concat(i,".").concat(j)]||d[j]||O[j]||b;return t?c.a.createElement(u,l(l({ref:n},o),{},{components:t})):c.a.createElement(u,l({ref:n},o))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var b=t.length,i=new Array(b);i[0]=j;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var o=2;o<b;o++)i[o]=t[o];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,t)}j.displayName="MDXCreateElement"},78:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return a})),t.d(n,"default",(function(){return p}));var r=t(3),c=t(7),b=(t(0),t(215)),i={title:"\u30b3\u30f3\u30c6\u30ca\u30fc\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u4f5c\u6210\u6642\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u6210\u9577\u8a2d\u8a08\u306e\u8003\u5bdf",description:"\u30b3\u30f3\u30c6\u30ca\u30fc\u3092\u5229\u7528\u3057\u305f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3059\u308b\u3068\u304d\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u8a2d\u8a08\u306b\u3064\u3044\u3066\u8003\u3048\u3066\u307f\u305f\u3002",keywords:["docker","kubernetes","container","thinking","\u8003\u5bdf"],createdAt:new Date("2018-03-16T02:28:23.000Z"),updatedAt:new Date("2019-05-21T11:22:01.000Z")},l={permalink:"/blog/container-app-directory-management-consideration",editUrl:"https://github.com/Himenon/himenon.github.io/edit/develop/blog/blog/container-app-directory-management-consideration.md",source:"@site/blog/container-app-directory-management-consideration.md",description:"\u30b3\u30f3\u30c6\u30ca\u30fc\u3092\u5229\u7528\u3057\u305f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3059\u308b\u3068\u304d\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u8a2d\u8a08\u306b\u3064\u3044\u3066\u8003\u3048\u3066\u307f\u305f\u3002",date:"2020-12-11T10:41:50.622Z",tags:[],title:"\u30b3\u30f3\u30c6\u30ca\u30fc\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u4f5c\u6210\u6642\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u6210\u9577\u8a2d\u8a08\u306e\u8003\u5bdf",readingTime:1.14,truncated:!0,nextItem:{title:"\u9759\u7684\u30b5\u30a4\u30c8\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc\u306e\u9078\u5b9a\u6642\u306b\u8003\u3048\u308b\u3053\u3068",permalink:"/blog/static-site-generator"}},a=[{value:"\u306f\u3058\u3081\u306b",id:"\u306f\u3058\u3081\u306b",children:[{value:"\u63d0\u8d77",id:"\u63d0\u8d77",children:[]},{value:"\u8ab2\u984c",id:"\u8ab2\u984c",children:[]},{value:"\u65b9\u5411\u6027",id:"\u65b9\u5411\u6027",children:[]}]},{value:"\u89e3\u8aac\u7528\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u8981\u4ef6\u5b9a\u7fa9",id:"\u89e3\u8aac\u7528\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u8981\u4ef6\u5b9a\u7fa9",children:[]},{value:"\u5177\u4f53\u7684\u306a\u624b\u9806\u306b\u843d\u3068\u3057\u8fbc\u3093\u3067\u4fef\u77b0\u3059\u308b",id:"\u5177\u4f53\u7684\u306a\u624b\u9806\u306b\u843d\u3068\u3057\u8fbc\u3093\u3067\u4fef\u77b0\u3059\u308b",children:[{value:"1. \u5c0f\u3055\u306aWEB\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3059\u308b",id:"1-\u5c0f\u3055\u306aweb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3059\u308b",children:[]},{value:"2. \u30c6\u30b9\u30c8\u30b3\u30fc\u30c9\u3092\u8ffd\u52a0\u3059\u308b",id:"2-\u30c6\u30b9\u30c8\u30b3\u30fc\u30c9\u3092\u8ffd\u52a0\u3059\u308b",children:[]},{value:"3. \u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u8ffd\u52a0\u3059\u308b",id:"3-\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u8ffd\u52a0\u3059\u308b",children:[]},{value:"4. CI\u306e\u8a2d\u5b9a\u3092\u7d44\u307f\u8fbc\u3080",id:"4-ci\u306e\u8a2d\u5b9a\u3092\u7d44\u307f\u8fbc\u3080",children:[]},{value:"5. \u30b3\u30f3\u30c6\u30ca\u30fc\u5316\u3059\u308b",id:"5-\u30b3\u30f3\u30c6\u30ca\u30fc\u5316\u3059\u308b",children:[]},{value:"6. git clone\u3057\u305f\u3042\u3068\u306b\u7acb\u3061\u4e0a\u3052\u3084\u3059\u3044\u3088\u3046\u306b\u3059\u308b",id:"6-git-clone\u3057\u305f\u3042\u3068\u306b\u7acb\u3061\u4e0a\u3052\u3084\u3059\u3044\u3088\u3046\u306b\u3059\u308b",children:[]},{value:"7. frontend\u3068backend\u3067\u5207\u308a\u5206\u3051\u308b",id:"7-frontend\u3068backend\u3067\u5207\u308a\u5206\u3051\u308b",children:[]},{value:"8. \u6210\u9577\u3055\u305b\u308b",id:"8-\u6210\u9577\u3055\u305b\u308b",children:[]}]},{value:"\u307e\u3068\u3081",id:"\u307e\u3068\u3081",children:[]},{value:"\u3010\u4f59\u8ac7\u3011Dockerfile\u306e<code>ENTRYPOINT</code>\u3068<code>CMD</code>\u306b\u95a2\u3057\u3066\u3001\u500b\u4eba\u7684\u306a\u8003\u5bdf",id:"\u3010\u4f59\u8ac7\u3011dockerfile\u306eentrypoint\u3068cmd\u306b\u95a2\u3057\u3066\u3001\u500b\u4eba\u7684\u306a\u8003\u5bdf",children:[{value:"\u53cd\u4f8b",id:"\u53cd\u4f8b",children:[]}]}],o={rightToc:a};function p(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"\u306f\u3058\u3081\u306b"},"\u306f\u3058\u3081\u306b"),Object(b.b)("p",null,"Docker\u3092\u4f7f\u3063\u305fWEB\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u6210\u9577\u8a2d\u8a08\u306b\u3064\u3044\u3066\u8003\u3048\u3066\u3044\u304d\u307e\u3059\u3002"),Object(b.b)("h3",{id:"\u63d0\u8d77"},"\u63d0\u8d77"),Object(b.b)("p",null,"PC\u3092\u4f7f\u3046\u4e0a\u3067\u3001\u6211\u3005\u306e\u6271\u3046\u30c7\u30fc\u30bf\u306f\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u69cb\u9020\u306e\u4e2d\u306b\u683c\u7d0d\u3055\u308c\u3066\u3044\u307e\u3059\u3002\n\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u958b\u767a\u306f\u3001\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u3057\u3066\u3001\u30d0\u30fc\u30b8\u30e7\u30f3\u7ba1\u7406\u3057\u3001\u30c7\u30d7\u30ed\u30a4\u307e\u3067\n\u884c\u3063\u3066\u306f\u3058\u3081\u3066\u30e6\u30fc\u30b6\u30fc\u306b\u5c4a\u304d\u307e\u3059\u3002\n\u6642\u304c\u7d4c\u904e\u3059\u308b\u306b\u9023\u308c\u3066\u3001\u4f7f\u7528\u3059\u308b\u6280\u8853\u3084\u30b5\u30fc\u30d3\u30b9\u306e\u898f\u6a21\u611f\u304c\u5909\u308f\u3063\u3066\u304d\u307e\u3059\u304c\u3001\n\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u69cb\u9020\u306e\u521d\u671f\u8a2d\u8a08\u6b21\u7b2c\u3067\u3001\u8fc5\u901f\u306b\u5bfe\u5fdc\u3067\u304d\u308b\u304b\u3069\u3046\u304b\u304c\u6c7a\u307e\u3063\u3066\u304f\u308b\u3068\u8003\u3048\u3089\u308c\u307e\u3059\u3002"),Object(b.b)("h3",{id:"\u8ab2\u984c"},"\u8ab2\u984c"),Object(b.b)("p",null,"\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u304a\u3051\u308b\u3001\n\u30b3\u30f3\u30c6\u30ca\u30fc\u3092\u7528\u3044\u305f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\n\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u6210\u9577\u8a2d\u8a08\u306e\u8003\u5bdf\u3092\u5177\u4f53\u7684\u306b\u884c\u3046\u3002"),Object(b.b)("h3",{id:"\u65b9\u5411\u6027"},"\u65b9\u5411\u6027"),Object(b.b)("p",null,"\u300cUNIX\u3068\u3044\u3046\u8003\u3048\u65b9\u30fc\u305d\u306e\u8a2d\u8a08\u601d\u60f3\u3068\u54f2\u5b66\u300d\u306e\u672c\u306b\u4e57\u3063\u53d6\u308a\u3001\n\u4ee5\u4e0b\u306e\u3053\u3068\u3092\u76ee\u6a19\u306b\u8003\u3048\u3066\u3044\u304d\u307e\u3059\u3002"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u5c0f\u3055\u304f\u4f5c\u308b"),Object(b.b)("li",{parentName:"ul"},"1\u3064\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u306b\u306f1\u3064\u306e\u3053\u3068\u3060\u3051\u3092\u3084\u3089\u305b\u308b"),Object(b.b)("li",{parentName:"ul"},"\u8a66\u4f5c\u304c\u65e9\u304f\u4f5c\u308c\u308b\u72b6\u614b\u306b\u3059\u308b"),Object(b.b)("li",{parentName:"ul"},"\u52b9\u7387\u3088\u308a\u79fb\u690d\u6027\u3092\u53d6\u308b"),Object(b.b)("li",{parentName:"ul"},"\u3059\u3079\u3066\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u30d5\u30a3\u30eb\u30bf\u30fc\u306b\u3059\u308b")),Object(b.b)("p",null,"\u3053\u308c\u304b\u3089\u5916\u308c\u308b\u8003\u3048\u306e\u3082\u306e\u306f\u3001\u9664\u5916\u3059\u308b\u65b9\u91dd\u3067\u884c\u3044\u307e\u3059\u3002"),Object(b.b)("h2",{id:"\u89e3\u8aac\u7528\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u8981\u4ef6\u5b9a\u7fa9"},"\u89e3\u8aac\u7528\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u8981\u4ef6\u5b9a\u7fa9"),Object(b.b)("p",null,"\u8aac\u660e\u306e\u305f\u3081\u3001\u3042\u3089\u304b\u3058\u3081\u8981\u4ef6\u5b9a\u7fa9\u3092\u3057\u3066\u304a\u304d\u307e\u3059\u3002\n\uff08\u554f\u984c\u306e\u62bd\u8c61\u5ea6\u3068\u3053\u3053\u306e\u5177\u4f53\u5ea6\u304c\u304b\u3051\u96e2\u308c\u3059\u304e\u306a\u306e\u3067\u3001\u6c17\u304c\u5411\u3044\u305f\u3089\u8abf\u6574\uff09"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"WEB\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3059\u308b"),Object(b.b)("li",{parentName:"ol"},"\u8a00\u8a9e\u306fPython\u3068\u3059\u308b"),Object(b.b)("li",{parentName:"ol"},"\u958b\u767a\u74b0\u5883\u306fDocker\u3092\u7528\u3044\u308b"),Object(b.b)("li",{parentName:"ol"},"\u30c7\u30d7\u30ed\u30a4\u5148\u306fKubernetes\u3068\u3059\u308b"),Object(b.b)("li",{parentName:"ol"},"Kubernetes\u306fHelm\u306b\u3088\u3063\u3066\u7ba1\u7406\u3059\u308b"),Object(b.b)("li",{parentName:"ol"},"CI/CD\u3092\u7528\u3044\u3066\u3001\u81ea\u52d5\u30c6\u30b9\u30c8\u3001\u81ea\u52d5\u30c7\u30d7\u30ed\u30a4\u3092\u884c\u3046"),Object(b.b)("li",{parentName:"ol"},"\u30b3\u30fc\u30c9\u306fGitHub\u3067\u7ba1\u7406\u3059\u308b"),Object(b.b)("li",{parentName:"ol"},"\u30c6\u30b9\u30c8\u99c6\u52d5\u3092\u884c\u3046"),Object(b.b)("li",{parentName:"ol"},"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u5fc5\u305a\u6b8b\u3059"),Object(b.b)("li",{parentName:"ol"},"\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u3092\u63a1\u7528\u3059\u308b")),Object(b.b)("h2",{id:"\u5177\u4f53\u7684\u306a\u624b\u9806\u306b\u843d\u3068\u3057\u8fbc\u3093\u3067\u4fef\u77b0\u3059\u308b"},"\u5177\u4f53\u7684\u306a\u624b\u9806\u306b\u843d\u3068\u3057\u8fbc\u3093\u3067\u4fef\u77b0\u3059\u308b"),Object(b.b)("p",null,"\u8981\u4ef6\u3092\u6e80\u305f\u3059\u3088\u3046\u306b\u3001WEB\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u80b2\u3066\u3066\u307f\u307e\u3059\u3002\n\u305d\u306e\u6642\u306e\u30d5\u30a1\u30a4\u30eb\u69cb\u9020\u3001\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u69cb\u9020\u306e\u5909\u5316\u3092\u898b\u3066\u3044\u304d\u307e\u3059\u3002\n\u30e2\u30c1\u30d9\u30fc\u30b7\u30e7\u30f3\u306e\u7dad\u6301\u306e\u305f\u3081\u306b\u3001\u300c\u307e\u305a\u52d5\u304b\u3059\u300d\u3092\u524d\u63d0\u306b\u69cb\u7bc9\u3057\u307e\u3059"),Object(b.b)("h3",{id:"1-\u5c0f\u3055\u306aweb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3059\u308b"},"1. \u5c0f\u3055\u306aWEB\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3059\u308b"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),"+ server.py\n")),Object(b.b)("p",null,"\u30ed\u30fc\u30ab\u30eb\u3067\u30b5\u30af\u30c3\u3068\u8a66\u305b\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30b3\u30fc\u30c9\u3092\u914d\u7f6e\u3057\u307e\u3059\u3002\n\u30d5\u30a1\u30a4\u30eb\u5206\u5272\u3068\u304b\u306f\u5f8c\u56de\u3057\u3067\u3059\u3002\u307e\u305a\u52d5\u304b\u3059\u3001\u3068\u3044\u3046\u90e8\u5206\u3092\u9054\u6210\u3059\u308b\u3002"),Object(b.b)("h3",{id:"2-\u30c6\u30b9\u30c8\u30b3\u30fc\u30c9\u3092\u8ffd\u52a0\u3059\u308b"},"2. \u30c6\u30b9\u30c8\u30b3\u30fc\u30c9\u3092\u8ffd\u52a0\u3059\u308b"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),"  server.py\n+ test_server.py\n")),Object(b.b)("p",null,"\u3053\u306e\u6bb5\u968e\u3067\u306f\u307e\u3060",Object(b.b)("inlineCode",{parentName:"p"},"test/"),"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u5207\u3089\u306a\u3044\u3067\u304a\u304f\u3002\n\u7406\u7531\u306f\u3001\u307e\u305a\u306f\u30b3\u30f3\u30c6\u30ca\u30fc\u3067\u52d5\u304b\u3059\u304c\u76ee\u6a19\u3002"),Object(b.b)("h3",{id:"3-\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u8ffd\u52a0\u3059\u308b"},"3. \u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u8ffd\u52a0\u3059\u308b"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),"  server.py\n  test_server.py\n+ README.md\n")),Object(b.b)("p",null,"git pull\u3057\u3066\u304b\u3089\u3001\u8d77\u52d5\u3001\u30c6\u30b9\u30c8\u3092\u884c\u3046\u65b9\u6cd5\u3092\u66f8\u3044\u3066\u304a\u3044\u305f\u307b\u3046\u304c\u826f\u3044\u3067\u3057\u3087\u3046\u3002\n\u30a2\u30d7\u30ea\u306e\u60f3\u50cf\u529b\u306e\u65b9\u306b\u30ea\u30bd\u30fc\u30b9\u3092\u6301\u3063\u3066\u3044\u304b\u308c\u308b\u306e\u3067\u3001\u5fd8\u308c\u306a\u3044\u3046\u3061\u306b\u66f8\u304d\u307e\u3059\u3002"),Object(b.b)("h3",{id:"4-ci\u306e\u8a2d\u5b9a\u3092\u7d44\u307f\u8fbc\u3080"},"4. CI\u306e\u8a2d\u5b9a\u3092\u7d44\u307f\u8fbc\u3080"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),"+ .ci_settings\n  server.py\n  test_server.py\n  README.md\n")),Object(b.b)("p",null,"Circle CI\u3067\u3082\u3001Travis CI\u3067\u3082\u826f\u3044\u306e\u3067\u3001\u307e\u305a\u7a81\u3063\u8fbc\u307f\u307e\u3059\u3002\n\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u80a5\u5927\u5316\u3059\u308b\u524d\u306b\u8a2d\u7f6e\u3059\u308b\u3053\u3068\u304c\u5927\u4e8b\u3067\u3059\u3002"),Object(b.b)("h3",{id:"5-\u30b3\u30f3\u30c6\u30ca\u30fc\u5316\u3059\u308b"},"5. \u30b3\u30f3\u30c6\u30ca\u30fc\u5316\u3059\u308b"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),"  .ci_settings\n+ Dockerfile\n  server.py\n  test_server.py\n  README.md\n")),Object(b.b)("p",null,"Dockerfile\u306f\u3001\u3053\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c",Object(b.b)("inlineCode",{parentName:"p"},"docker pull"),"\u3057\u305f\u3042\u3068\u3001\n",Object(b.b)("inlineCode",{parentName:"p"},"docker run"),"\u3067\u7acb\u3061\u4e0a\u304c\u308b\u3088\u3046\u306b\u8a18\u8ff0\u3057\u307e\u3059\u3002"),Object(b.b)("h3",{id:"6-git-clone\u3057\u305f\u3042\u3068\u306b\u7acb\u3061\u4e0a\u3052\u3084\u3059\u3044\u3088\u3046\u306b\u3059\u308b"},"6. git clone\u3057\u305f\u3042\u3068\u306b\u7acb\u3061\u4e0a\u3052\u3084\u3059\u3044\u3088\u3046\u306b\u3059\u308b"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),"  .ci_settings\n  Dockerfile\n+ docker-compose.yml\n  server.py\n  test_server.py\n  README.md\n")),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"docker-compose up"),"\u3082\u3057\u304f\u306f\u3001\u305d\u308c\u3068\u540c\u7b49\u306e\u30b3\u30de\u30f3\u30c9\u3067\u3001\n\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u3082\u542b\u3081\u305f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u3059\u3079\u3066\u7acb\u3061\u4e0a\u304c\u308b\u3068\u958b\u767a\u3078\u306e\u7740\u624b\u304c\u306f\u3084\u3044\u3002"),Object(b.b)("h3",{id:"7-frontend\u3068backend\u3067\u5207\u308a\u5206\u3051\u308b"},"7. frontend\u3068backend\u3067\u5207\u308a\u5206\u3051\u308b"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),"  .ci_settings\n+ frontend/\n+   Dockerfile\n+ backend/\n    Dockerfile\n    server.py\n    test_server.py\n  docker-compose.yml # build context\u306e\u5909\u66f4\n  README.md\n")),Object(b.b)("p",null,"Frontend\u3068Backend\u306e\u30b3\u30fc\u30c9\u3092\u5206\u96e2\u3057\u3066\u4fdd\u5b88\u3057\u3084\u3059\u3044\u72b6\u614b\u306b\u3057\u307e\u3059\u3002\n\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u306e\u4e0b\u5730\u304c\u3067\u304d\u307e\u3057\u305f\u3002"),Object(b.b)("h3",{id:"8-\u6210\u9577\u3055\u305b\u308b"},"8. \u6210\u9577\u3055\u305b\u308b"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),"  .ci_settings\n  frontend/\n    Dockerfile\n    ...\n  backend/\n    Dockerfile\n    server.py\n    module/\n      ...\n    test/\n      test_server.py\n  docker-compose.yml # build context\u306e\u5909\u66f4\n  README.md\n")),Object(b.b)("p",null,"\u524d\u56de\u3067\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u5207\u308a\u5206\u3051\u304c\u7d42\u308f\u3063\u305f\u306e\u3067\u3001\u3042\u3068\u306f\u305d\u308c\u305e\u308c\u306e\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u3092\u6210\u9577\u3055\u305b\u308b\u3060\u3051\u3067\u3059\u3002\n\u305d\u308c\u305e\u308c\u306e\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u3067\u30c9\u30e1\u30a4\u30f3\u8a2d\u8a08\u3092\u884c\u3044\u3064\u3064\u3001\n\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u6210\u9577\u8a2d\u8a08\u3092\u3059\u308b\u3068\u3001\u958b\u767a\u8005\u306b\u3068\u3063\u3066\u3082\u3001\u30b5\u30fc\u30d3\u30b9\u306b\u3068\u3063\u3066\u3082\u826f\u3044\u3053\u3068\u3057\u304b\u306a\u3044\u3067\u3057\u3087\u3046\u3002"),Object(b.b)("h2",{id:"\u307e\u3068\u3081"},"\u307e\u3068\u3081"),Object(b.b)("p",null,"\u6210\u9577\u75db\u3092\u5473\u308f\u3044\u307e\u3059\u304c\u3001\u5c0f\u3055\u3044\u3046\u3061\u306b\u3001\u624b\u306e\u5c4a\u304f\u7bc4\u56f2\u304b\u3089TDD\u3067\u304d\u308b\u72b6\u614b\u306b\n\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u6210\u9577\u8a2d\u8a08\u3092\u884c\u3063\u3066\u304a\u304f\u3053\u3068\u3067\u3001\n\u80a5\u5927\u5316\u3059\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u5bfe\u3057\u3066\u5148\u624b\u3092\u6253\u3064\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),Object(b.b)("p",null,"\u5927\u898f\u6a21\u306aOSS\u3092\u898b\u305f\u308a\u3001\u5b9f\u969b\u306b\u904b\u7528\u3055\u308c\u3066\u3044\u308b\u30b3\u30fc\u30c9\u3092\u898b\u3066\u3001\n\u81ea\u3089\u306e\u77e5\u8b58\u3084\u7406\u8ad6\u3001\u7d4c\u9a13\u304b\u3089\u304f\u308b\u69cb\u9020\u8a2d\u8a08\u3068\u7167\u3089\u3057\u5408\u308f\u305b\u306a\u304c\u3089\u4eca\u5f8c\u3082\u8003\u5bdf\u3057\u3066\u3044\u304d\u305f\u3044\u3067\u3059\u306d\u3002"),Object(b.b)("h2",{id:"\u3010\u4f59\u8ac7\u3011dockerfile\u306eentrypoint\u3068cmd\u306b\u95a2\u3057\u3066\u3001\u500b\u4eba\u7684\u306a\u8003\u5bdf"},"\u3010\u4f59\u8ac7\u3011Dockerfile\u306e",Object(b.b)("inlineCode",{parentName:"h2"},"ENTRYPOINT"),"\u3068",Object(b.b)("inlineCode",{parentName:"h2"},"CMD"),"\u306b\u95a2\u3057\u3066\u3001\u500b\u4eba\u7684\u306a\u8003\u5bdf"),Object(b.b)("p",null,"\u3044\u308d\u3044\u308d\u8a66\u3057\u305f\u7d50\u679c\u3001\u8981\u4ef6\u304c\u78ba\u5b9a\u3057\u3066\u3044\u306a\u3044\u5834\u5408\u3084\u3001\u3088\u308a\u660e\u78ba\u306b\u5b9f\u884c\u30b3\u30de\u30f3\u30c9\u3092\u958b\u767a\u8005\u306b\u4f1d\u3048\u308b\u306b\u306f\u3001\n",Object(b.b)("inlineCode",{parentName:"p"},"CMD"),"\u3068",Object(b.b)("inlineCode",{parentName:"p"},"ENTRYPOINT"),"\u306e\u5f79\u5272\u3092\u660e\u78ba\u5316\u3057\u3066\u304a\u304f\u5fc5\u8981\u304c\u3042\u308b\u3068\u8003\u3048\u307e\u3059\u3002\n\u5177\u4f53\u7684\u306b\u306f\u6b21\u306e2\u3064\u3067\u3059\u3002"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},Object(b.b)("inlineCode",{parentName:"li"},"Dockerfile"),"\u306e\u6700\u5f8c\u306f",Object(b.b)("inlineCode",{parentName:"li"},"CMD"),"\u3067\u7d42\u308f\u308b\u3088\u3046\u306b\u3057\u3001\u30d5\u30a9\u30a2\u30b0\u30e9\u30a6\u30f3\u30c9\u30d7\u30ed\u30bb\u30b9\u3068\u3057\u3066\u8d77\u52d5\u3059\u308b\u3088\u3046\u306b\u3057\u3066\u304a\u304f\u3002"),Object(b.b)("li",{parentName:"ol"},Object(b.b)("inlineCode",{parentName:"li"},"ENTRYPOINT"),"\u306f",Object(b.b)("inlineCode",{parentName:"li"},"exec $@"),"\u3092\u672b\u5c3e\u306b\u8a18\u8ff0\u3057\u3066\u304a\u304d\u3001\u74b0\u5883\u5909\u6570\u306b\u3088\u3063\u3066\u3001\u30b3\u30f3\u30c6\u30ca\u30fc\u5185\u90e8\u306e\u72b6\u614b\u304c\u5207\u308a\u66ff\u308f\u308b\u3088\u3046\u306b\u3057\u3066\u304a\u304f\u3002")),Object(b.b)("p",null,"\u6bd4\u55a9\u3092\u7528\u3044\u3066\u4f8b\u3048\u308b\u3068\u3001",Object(b.b)("inlineCode",{parentName:"p"},"CMD"),"\u306f\u624b\u3067\u3001",Object(b.b)("inlineCode",{parentName:"p"},"ENTRYPOINT"),"\u306f\u8155\u306e\u3088\u3046\u306a\u611f\u3058\u3067\u3059\u3002"),Object(b.b)("p",null,"\u76f4\u63a5\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3059\u308b\u306e\u306f",Object(b.b)("inlineCode",{parentName:"p"},"CMD"),"\u306b\u3057\u3066\u304a\u304d\u3001\n\u305f\u3068\u3048\u3070\u3001\u540c\u4e00\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u3082\u7570\u306a\u308b\u7acb\u3061\u4e0a\u3052\u65b9\u3092\u8a66\u3057\u305f\u3088\u3046\u306a\u5834\u5408\uff08\u5f15\u6570\u306a\u3069\u3092\u3064\u3051\u308b\uff09\u3068\u304d\u306b\u3001\n\u7d20\u306e\u30b3\u30de\u30f3\u30c9\u3092\u8d77\u52d5\u6642\u306b\u4f1d\u3048\u308b\u3068\u3088\u308a\u691c\u8a3c\u304c\u65e9\u304f\u306a\u308a\u307e\u3059\u3002"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"ENTRYPOINT"),"\u306e\u4f7f\u3044\u65b9\u306f\u3001\u5148\u306e\u691c\u8a3c\u306b\u3088\u3063\u3066\u5c0e\u304d\u51fa\u3055\u308c\u305f\u8a2d\u5b9a\u3092\u74b0\u5883\u5909\u6570\u3067\u5207\u308a\u66ff\u3048\u308b\u3053\u3068\u3060\u3051\u3092\u8003\u3048\u307e\u3059\u3002\n",Object(b.b)("inlineCode",{parentName:"p"},"ENTRYPOINT"),"\u306f\u30b7\u30a7\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u3067\u8a18\u8ff0\u3057\u307e\u3059\u304c\u3001\n\u672b\u5c3e\u306b",Object(b.b)("inlineCode",{parentName:"p"},'exec "$@"'),"\u3092\u3064\u3051\u308b\u3053\u3068\u3067\u3001",Object(b.b)("inlineCode",{parentName:"p"},"CMD"),"\u3092\u5b9f\u884c\u3059\u308b\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059\u3002\n\u3053\u3053\u306b\u81f3\u308b\u524d\u307e\u3067\u306b\u3001\u74b0\u5883\u5909\u6570\u3067\u30b3\u30f3\u30c6\u30ca\u30fc\u5185\u90e8\u306e\u72b6\u614b\u3092\u5207\u308a\u66ff\u3048\u308b\u3053\u3068\u3067",Object(b.b)("inlineCode",{parentName:"p"},"CMD"),"\u306e\u6a5f\u52d5\u529b\u3092\u5931\u308f\u305a\u306b\u3001\u8a2d\u5b9a\u3092\u5207\u308a\u66ff\u3048\u3089\u308c\u307e\u3059\u3002"),Object(b.b)("p",null,"1\u3064\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u8907\u6570\u306e\u8d77\u52d5\u30b3\u30de\u30f3\u30c9\u3092\u6301\u3063\u3066\u3044\u308b\u5834\u5408\u306b\u3001\u3053\u306e2\u3064\u306b\u5206\u96e2\u3057\u3066\u304a\u304f\u3068\u826f\u3044\u3053\u3068\u304c\u308f\u304b\u308a\u307e\u3059\u3002\n\u5177\u4f53\u7684\u306a\u4f8b\u3060\u3068\u3001\u30bf\u30b9\u30af\u30ad\u30e5\u30fc\u30e9\u30a4\u30d6\u30e9\u30ea\u306e",Object(b.b)("inlineCode",{parentName:"p"},"celery"),"\u3092\u4f7f\u3063\u3066\u3044\u308b\u6642\u306b\u3053\u306e\u4e8b\u8c61\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002\nCelery\u306f\u540c\u4e00\u306e\u30b3\u30fc\u30c9\u3067\u3001",Object(b.b)("inlineCode",{parentName:"p"},"worker"),"\u3001",Object(b.b)("inlineCode",{parentName:"p"},"scheduler"),"\u3001",Object(b.b)("inlineCode",{parentName:"p"},"server"),"\u306e3\u3064\u306e\u5f79\u5272\u3092\u3082\u305f\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\n\u8d77\u52d5\u30b3\u30de\u30f3\u30c9\u304c\u7570\u306a\u308b\u3060\u3051\u3067\u3001\u305d\u308c\u4ee5\u5916\u306f\u307e\u3063\u305f\u304f\u540c\u3058\u3067\u3059\u3002"),Object(b.b)("p",null,"\u3053\u308c\u3092\u74b0\u5883\u5909\u6570\u3067\u8d77\u52d5\u30b3\u30de\u30f3\u30c9\u3092\u5207\u308a\u66ff\u3048\u308b\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u3082\u53ef\u80fd\u3067\u3059\u304c\u3001\n\u7d50\u5c40\u3069\u3093\u306a\u30b3\u30de\u30f3\u30c9\u3067\u5b9f\u884c\u3057\u3066\u3044\u305f\u306e\u304b\u3092\u78ba\u8a8d\u3059\u308b\u305f\u3081\u306b\u306f\u3001\u30ed\u30b8\u30c3\u30af\u3092\u8aad\u307e\u306a\u3044\u3068\u305f\u3069\u308a\u7740\u3051\u305a\u3001\n\u305d\u308c\u3060\u3051\u3067\u6d88\u8017\u3057\u3066\u3057\u307e\u3044\u307e\u3059\u3002"),Object(b.b)("p",null,"\u5e78\u3044\u306b\u3057\u3066\u3001",Object(b.b)("inlineCode",{parentName:"p"},"CMD"),"\u306e\u90e8\u5206\u306f",Object(b.b)("inlineCode",{parentName:"p"},"docker-compose"),"\u306e",Object(b.b)("inlineCode",{parentName:"p"},"command"),"\u3067\u3042\u3068\u304b\u3089\u5909\u66f4\u3067\u304d\u307e\u3059\u3057\u3001\nKubernetes\u3082\u540c\u69d8\u306e\u3053\u3068\u304cdeployment\u3067\u3067\u304d\u307e\u3059\u3002\n\u82e5\u5e72Portability\u306e\u90e8\u5206\u3092\u4e0b\u3052\u308b\u5370\u8c61\u304c\u3042\u308a\u307e\u3059\u3002\n\u305d\u3082\u305d\u3082\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u8907\u6570\u306e\u8d77\u52d5\u30d1\u30bf\u30fc\u30f3\u3092\u6301\u3063\u3066\u3044\u308b\u5834\u5408\u306f\u3042\u3068\u304b\u3089\u5909\u66f4\u3059\u308b\u3053\u3068\u304c\u53ef\u80fd\u306a\u72b6\u614b\u306b\u3057\u3066\u304a\u3044\u305f\u307b\u3046\u304c\u826f\u3044\u3068\u8003\u3048\u3089\u308c\u307e\u3059\u3002"),Object(b.b)("h3",{id:"\u53cd\u4f8b"},"\u53cd\u4f8b"),Object(b.b)("p",null,"\u53cd\u4f8b\u306f\u6709\u308a\u307e\u3059\u3002",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/getredash/redash"}),"getredash/redash"),"\u3067\u3059\u3002\n",Object(b.b)("inlineCode",{parentName:"p"},"bin/docker-entrypoint"),"\u306b\u8d77\u52d5\u30ed\u30b8\u30c3\u30af\u304c\u96c6\u7d04\u3055\u308c\u3066\u3044\u307e\u3059\u3002\n",Object(b.b)("inlineCode",{parentName:"p"},"docker-compose.yml"),"\u306f",Object(b.b)("inlineCode",{parentName:"p"},"command"),"\u3092\u53d7\u3051\u4ed8\u3051\u3066\u3044\u307e\u3059\u304c\u3001\u7d14\u7c8b\u306acommand\u3067\u306f\u306a\u304f\u3001\u5f15\u6570\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002\n(\u3053\u306e\u90e8\u5206\u3001\u672c\u5f53\u306a\u3089",Object(b.b)("inlineCode",{parentName:"p"},"args"),"\u3092\u5229\u7528\u3057\u305f\u307b\u3046\u304c\u826f\u3044\u3088\u3046\u306b\u601d\u3048\u307e\u3059\u304c\u3001\n\u4eca\u5f8c",Object(b.b)("inlineCode",{parentName:"p"},"docker-compose"),"\u304c\u4e3b\u6d41\u3067\u306a\u304f\u306a\u3063\u305f\u6642\u306b",Object(b.b)("inlineCode",{parentName:"p"},"args"),"\u304c\u3042\u308b\u304b\u3069\u3046\u304b\u308f\u304b\u3089\u306a\u3044\u306e\u3067\u3053\u308c\u306f\u3053\u308c\u3067\u6b63\u89e3\u304b\u306a\u3068\u601d\u3044\u307e\u3059\u3002)\nredash\u306e\u5834\u5408\u3001\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u304c\u3059\u3067\u306b\u6c7a\u307e\u3063\u3066\u3044\u308b\u3088\u3046\u306aOSS\u306b\u306a\u3063\u3066\u3044\u308b\u306e\u3067\u3001\n\u30e6\u30fc\u30b6\u30fc\u5074\u306b\u3080\u3057\u308d\u8ca0\u62c5\u3092\u5f37\u3044\u3044\u306a\u3044\u3088\u3046\u306a\u8a2d\u8a08\u306b\u306a\u3063\u3066\u3044\u308b\u306e\u304b\u306a\u3001\u3068\u52dd\u624b\u306b\u63a8\u6e2c\u3057\u307e\u3059\u3002"))}p.isMDXComponent=!0}}]);