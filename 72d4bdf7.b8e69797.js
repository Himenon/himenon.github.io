(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{123:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(3),c=n(7),o=(n(0),n(217)),a={title:"Kubernetes\u3067\u3088\u304f\u4f7f\u3046\u30b3\u30de\u30f3\u30c9\uff08\u30b3\u30d4\u30da\u7528\uff09",description:"alias\u3092\u306f\u3089\u305a\u306b\u30b3\u30d4\u30da\u3060\u3051\u3067\u52d5\u4f5c\u3059\u308b\u30b3\u30fc\u30c9\u3092\u3053\u3053\u306b\u66f8\u304d\u7a4d\u3082\u3089\u305b\u308b",keywords:["kubernetes","kubectl"],createdAt:new Date("2018-03-26T06:03:09.000Z"),updatedAt:new Date("2019-05-21T02:10:19.000Z")},l={unversionedId:"kubernetes/shortcut-for-kubectl",id:"kubernetes/shortcut-for-kubectl",isDocsHomePage:!1,title:"Kubernetes\u3067\u3088\u304f\u4f7f\u3046\u30b3\u30de\u30f3\u30c9\uff08\u30b3\u30d4\u30da\u7528\uff09",description:"alias\u3092\u306f\u3089\u305a\u306b\u30b3\u30d4\u30da\u3060\u3051\u3067\u52d5\u4f5c\u3059\u308b\u30b3\u30fc\u30c9\u3092\u3053\u3053\u306b\u66f8\u304d\u7a4d\u3082\u3089\u305b\u308b",source:"@site/docs/kubernetes/shortcut-for-kubectl.mdx",slug:"/kubernetes/shortcut-for-kubectl",permalink:"/docs/kubernetes/shortcut-for-kubectl",editUrl:"https://github.com/Himenon/himenon.github.io/edit/default/docs/kubernetes/shortcut-for-kubectl.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Kubernetes\u306b\u914d\u7f6e\u3057\u305fNginx\u3067\u30a2\u30af\u30bb\u30b9\u5236\u5fa1\u3059\u308b",permalink:"/docs/kubernetes/nginx-access-control-for-kubernetes"},next:{title:"\u5fa9\u7fd2\u7528MongoDB\u306e\u57fa\u672c\u30af\u30a8\u30ea",permalink:"/docs/mongodb/basic-query"}},i=[{value:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306e\u5207\u308a\u66ff\u3048",id:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306e\u5207\u308a\u66ff\u3048",children:[]},{value:"Default\u306eNamespace\u306e\u5909\u66f4",id:"default\u306enamespace\u306e\u5909\u66f4",children:[]},{value:"Deployment, Service, Pods\u3092\u4e00\u6c17\u306b\u78ba\u8a8d\u3059\u308b",id:"deployment-service-pods\u3092\u4e00\u6c17\u306b\u78ba\u8a8d\u3059\u308b",children:[]},{value:"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u304b\u3089Deployment\u306bService\u3092\u30d0\u30a4\u30f3\u30c9\u3059\u308b",id:"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u304b\u3089deployment\u306bservice\u3092\u30d0\u30a4\u30f3\u30c9\u3059\u308b",children:[]},{value:"Deployment\u3092\u901f\u653b\u3067\u8a66\u3059",id:"deployment\u3092\u901f\u653b\u3067\u8a66\u3059",children:[]}],p={rightToc:i};function u(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ kubectl config get-contexts\n")),Object(o.b)("h2",{id:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306e\u5207\u308a\u66ff\u3048"},"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306e\u5207\u308a\u66ff\u3048"),Object(o.b)("p",null,"docker edge\u3068GKE\u3092\u5207\u308a\u66ff\u3048\u305f\u308a\u3059\u308b\u3068\u304d\u306b\u4f7f\u3046"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ kubectl config use-context\n\n# Docker for Edge\n$ kubectl config use-context docker-for-desktop\n")),Object(o.b)("h2",{id:"default\u306enamespace\u306e\u5909\u66f4"},"Default\u306eNamespace\u306e\u5909\u66f4"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"--namespace="),"\u304c\u6253\u3064\u306e\u304c\u3081\u3093\u3069\u304f\u3055\u3044\u3068\u304d\u306b\u4f7f\u3046"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"kubectl config set-context (kubectl config current-context) --namespace=\n")),Object(o.b)("h2",{id:"deployment-service-pods\u3092\u4e00\u6c17\u306b\u78ba\u8a8d\u3059\u308b"},"Deployment, Service, Pods\u3092\u4e00\u6c17\u306b\u78ba\u8a8d\u3059\u308b"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"kubectl get deploy,svc,po\n")),Object(o.b)("h2",{id:"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u304b\u3089deployment\u306bservice\u3092\u30d0\u30a4\u30f3\u30c9\u3059\u308b"},"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u304b\u3089Deployment\u306bService\u3092\u30d0\u30a4\u30f3\u30c9\u3059\u308b"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"hello-web"),"\u3068\u3044\u3046Deployment\u306b\u542b\u307e\u308c\u308b\u30b3\u30f3\u30c6\u30ca\u304c\u3001Port8080\u3067Expose\u3057\u3066\u3044\u308b\u3068\u3059\u308b\u3002\n\u305d\u308c\u306b\u5bfe\u3057\u3066\u3001type=LoadBalancer\u306eService\u3092\u63a5\u7d9a\u3057\u3066\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092Port 80\u3067\u516c\u958b\u3059\u308b\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ kubectl expose deployment hello-web --type=LoadBalancer --port 80 --target-port 8080\n")),Object(o.b)("h2",{id:"deployment\u3092\u901f\u653b\u3067\u8a66\u3059"},"Deployment\u3092\u901f\u653b\u3067\u8a66\u3059"),Object(o.b)("p",null,"\u30ed\u30fc\u30ab\u30eb\u306b\u3042\u308b\u30b3\u30f3\u30c6\u30ca\u3092\u4f7f\u3063\u3066\u30c7\u30d0\u30c3\u30b0\u3092\u884c\u3046\u7528\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: extensions/v1beta1\nkind: Deployment\nmetadata:\n  name: debug-pod\n  labels:\n    app: debug-pod\nspec:\n  replicas: 1\n  tempalte:\n    metadata:\n      labels:\n        app: debug-pod\n    spec:\n      containers:\n        - name: debug-container\n          image: "[YOUR IMAEGE]"\n      command: [""]\n')))}u.isMDXComponent=!0},217:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),c=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var p=c.a.createContext({}),u=function(e){var t=c.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return c.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,m=b["".concat(a,".").concat(d)]||b[d]||s[d]||o;return n?c.a.createElement(m,l(l({ref:t},p),{},{components:n})):c.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);