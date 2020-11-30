(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{106:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return o})),n.d(r,"metadata",(function(){return c})),n.d(r,"rightToc",(function(){return l})),n.d(r,"default",(function(){return p}));var t=n(3),i=n(8),a=(n(0),n(197)),o={title:"Error: incompatible versions client[v2.8.2] server[v2.7.2]",description:"helm\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u304c\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3068\u30b5\u30fc\u30d0\u30fc\u3067\u7570\u306a\u308b\u3068\u304d\u306b\u8d77\u304d\u305f\u30a8\u30e9\u30fc",keywords:["error","helm"],createdAt:new Date("2018-03-22T02:19:41.000Z"),updatedAt:new Date("2019-05-22T01:08:17.000Z")},c={unversionedId:"kubernetes/error-helm-incompatible-version",id:"kubernetes/error-helm-incompatible-version",isDocsHomePage:!1,title:"Error: incompatible versions client[v2.8.2] server[v2.7.2]",description:"helm\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u304c\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3068\u30b5\u30fc\u30d0\u30fc\u3067\u7570\u306a\u308b\u3068\u304d\u306b\u8d77\u304d\u305f\u30a8\u30e9\u30fc",source:"@site/docs/kubernetes/error-helm-incompatible-version.md",slug:"/kubernetes/error-helm-incompatible-version",permalink:"/docs/kubernetes/error-helm-incompatible-version",editUrl:"https://github.com/Himenon/himenon.github.io/edit/default/docs/kubernetes/error-helm-incompatible-version.md",version:"current",sidebar:"someSidebar",previous:{title:"GKE\u3092Cron\u3067\u8d77\u52d5\u30fb\u505c\u6b62\u3055\u305b\u308b",permalink:"/docs/kubernetes/cron-wake-up-down"},next:{title:"Kubernetes\u306b\u914d\u7f6e\u3057\u305fNginx\u3067\u30a2\u30af\u30bb\u30b9\u5236\u5fa1\u3059\u308b",permalink:"/docs/kubernetes/nginx-access-control-for-kubernetes"}},l=[{value:"\u518d\u5ea6helm init\u3057\u3066\u307f\u308b",id:"\u518d\u5ea6helm-init\u3057\u3066\u307f\u308b",children:[]},{value:"Version\u306eupgrade",id:"version\u306eupgrade",children:[]}],s={rightToc:l};function p(e){var r=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},s,n,{components:r,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"$ helm install stable/redis\nError: incompatible versions client[v2.8.2] server[v2.7.2]\n")),Object(a.b)("p",null,"\u3069\u3046\u3084\u3089Version\u304cClient\u3068Server\u3067\u7570\u306a\u308b\u3088\u3046\u3067\u3042\u308b\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),'$ helm version\nClient: &version.Version{SemVer:"v2.8.2", GitCommit:"a80231648a1473929271764b920a8e346f6de844", GitTreeState:"clean"}\nServer: &version.Version{SemVer:"v2.7.2", GitCommit:"8478fb4fc723885b155c924d1c8c410b7a9444e6", GitTreeState:"clean"}\n')),Object(a.b)("h2",{id:"\u518d\u5ea6helm-init\u3057\u3066\u307f\u308b"},"\u518d\u5ea6helm init\u3057\u3066\u307f\u308b"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"$ helm init\n$HELM_HOME has been configured at /Users/himepro/.helm.\nWarning: Tiller is already installed in the cluster.\n(Use --client-only to suppress this message, or --upgrade to upgrade Tiller to the current version.)\nHappy Helming!\n")),Object(a.b)("p",null,"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u308b\u304b\u3089\u3001Tiller\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u4e0a\u3052\u308d\u3063\u3066\u8a00\u308f\u308c\u305f\u3002"),Object(a.b)("h2",{id:"version\u306eupgrade"},"Version\u306eupgrade"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"$ helm init --upgrade\n$HELM_HOME has been configured at /Users/himepro/.helm.\n\nTiller (the Helm server-side component) has been upgraded to the current version.\nHappy Helming!\n")),Object(a.b)("p",null,"\u30b5\u30fc\u30d0\u30fc\u5074\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u304c\u4e0a\u304c\u3063\u305f\u6a21\u69d8\u3002\n\u78ba\u8a8d\u3057\u3066\u307f\u308b\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),'$ helm version\nClient: &version.Version{SemVer:"v2.8.2", GitCommit:"a80231648a1473929271764b920a8e346f6de844", GitTreeState:"clean"}\nServer: &version.Version{SemVer:"v2.8.2", GitCommit:"a80231648a1473929271764b920a8e346f6de844", GitTreeState:"clean"\n')),Object(a.b)("p",null,"\u304a\u3057\u307e\u3044\u3002"))}p.isMDXComponent=!0},197:function(e,r,n){"use strict";n.d(r,"a",(function(){return u})),n.d(r,"b",(function(){return d}));var t=n(0),i=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var r=i.a.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},u=function(e){var r=p(e.components);return i.a.createElement(s.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},m=i.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=t,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||a;return n?i.a.createElement(d,c(c({ref:r},s),{},{components:n})):i.a.createElement(d,c({ref:r},s))}));function d(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);