(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{121:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(3),o=t(7),a=(t(0),t(217)),i={title:"Django\u306b\u304a\u3044\u3066\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306b\u4fdd\u5b58\u3059\u308b\u524d\u5f8c\u306b\u51e6\u7406\u3092\u30d5\u30c3\u30af\u3055\u305b\u308b",description:"Django\u306eSignal\u3092\u5229\u7528\u3057\u3066\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306e\u4fdd\u5b58\u524d\u30fb\u4fdd\u5b58\u5f8c\u306b\u51e6\u7406\u3092\u30d5\u30c3\u30af\u3055\u305b\u308b",keywords:["python","django","database","signal","event","hook"],createdAt:new Date("2018-09-15T11:55:29.000Z"),updatedAt:new Date("2019-05-21T11:22:01.000Z")},c={unversionedId:"python/django/signal",id:"python/django/signal",isDocsHomePage:!1,title:"Django\u306b\u304a\u3044\u3066\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306b\u4fdd\u5b58\u3059\u308b\u524d\u5f8c\u306b\u51e6\u7406\u3092\u30d5\u30c3\u30af\u3055\u305b\u308b",description:"Django\u306eSignal\u3092\u5229\u7528\u3057\u3066\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306e\u4fdd\u5b58\u524d\u30fb\u4fdd\u5b58\u5f8c\u306b\u51e6\u7406\u3092\u30d5\u30c3\u30af\u3055\u305b\u308b",source:"@site/docs/python/django/signal.md",slug:"/python/django/signal",permalink:"/docs/python/django/signal",editUrl:"https://github.com/Himenon/himenon.github.io/edit/default/docs/python/django/signal.md",version:"current",sidebar:"someSidebar",previous:{title:"Django\u3067Many to Many\u3092Admin\u753b\u9762\u306e\u30ea\u30b9\u30c8\u306b\u8868\u793a\u3059\u308b",permalink:"/docs/python/django/show-many-to-many-admin-view"},next:{title:"Django\u306b\u304a\u3051\u308b\u9759\u7684\u30d5\u30a1\u30a4\u30eb\u306e\u63a2\u7d22\u304c\u30b3\u30b1\u305f\u3068\u304d\u306e\u30a8\u30e9\u30fc",permalink:"/docs/python/django/static-file"}},l=[],p={rightToc:l};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Signal\u306f\u30a4\u30d9\u30f3\u30c8\u30d5\u30c3\u30af\u306e\u3088\u3046\u306b\u5229\u7528\u3067\u304d\u307e\u3059\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'@receiver(pre_save, sender=JobOffer)\ndef before_save_handler(sender, instance, **kwargs):\n    print("\u4fdd\u5b58\u524d\u306b\u547c\u3073\u51fa\u3055\u308c\u3066\u3044\u308b")\n\n@receiver(post_save, sender=JobOffer)\ndef after_save_handler(sender, instance, **kwargs):\n    print("\u4fdd\u5b58\u5f8c\u306b\u547c\u3073\u51fa\u3055\u308c\u308c\u308b")\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://simpleisbetterthancomplex.com/tutorial/2016/07/28/how-to-create-django-signals.html"}),"https://simpleisbetterthancomplex.com/tutorial/2016/07/28/how-to-create-django-signals.html")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.ibm.com/developerworks/jp/opensource/library/os-django-admin/index.html"}),"https://www.ibm.com/developerworks/jp/opensource/library/os-django-admin/index.html"))))}s.isMDXComponent=!0},217:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),s=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return t?o.a.createElement(b,c(c({ref:n},p),{},{components:t})):o.a.createElement(b,c({ref:n},p))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);