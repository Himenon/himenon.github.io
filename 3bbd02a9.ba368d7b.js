(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{103:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return b})),t.d(n,"default",(function(){return s}));var r=t(3),i=t(7),o=(t(0),t(217)),a={title:"[mobx] you are running a minified build, but 'process.env.NODE_ENV' was not set to 'production' in your bundler. This results in an unnecessarily large and slow bundle",description:"mobx\u3092\u542b\u3080\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30d3\u30eb\u30c9\u5f8c\u306b\u8d77\u52d5\u3059\u308b\u3068\u3001minify\u306ewarn\u304c\u30ed\u30b0\u306b\u3067\u308b\u3068\u304d\u306e\u5bfe\u51e6\u65b9\u6cd5\u3002",keywords:["mobx","webpack","build","minify","warn"],createdAt:new Date("2020-03-16T17:00:00.000Z"),updatedAt:new Date("2020-03-16T17:00:00.000Z")},c={unversionedId:"javascript/mobx-minify-warning",id:"javascript/mobx-minify-warning",isDocsHomePage:!1,title:"[mobx] you are running a minified build, but 'process.env.NODE_ENV' was not set to 'production' in your bundler. This results in an unnecessarily large and slow bundle",description:"mobx\u3092\u542b\u3080\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30d3\u30eb\u30c9\u5f8c\u306b\u8d77\u52d5\u3059\u308b\u3068\u3001minify\u306ewarn\u304c\u30ed\u30b0\u306b\u3067\u308b\u3068\u304d\u306e\u5bfe\u51e6\u65b9\u6cd5\u3002",source:"@site/docs/javascript/mobx-minify-warning.md",slug:"/javascript/mobx-minify-warning",permalink:"/docs/javascript/mobx-minify-warning",editUrl:"https://github.com/Himenon/himenon.github.io/edit/default/docs/javascript/mobx-minify-warning.md",version:"current",sidebar:"someSidebar",previous:{title:"JavaScript\u3067HTML\u3092\u52d5\u7684\u306b\u751f\u6210\u3059\u308b\u3068\u304d\u306e\u66f8\u304d\u65b9\u306e\u5b9f\u8df5\u4f8b",permalink:"/docs/javascript/makeup-code-for-create-element"},next:{title:"React\u306eServer side rendering\u6642\u306b'Invalid hook call'\u304c\u51fa\u3066\u3057\u307e\u3046\u554f\u984c\u3068\u89e3\u6c7a\u65b9\u6cd5",permalink:"/docs/javascript/react-invalid-hook-call"}},b=[{value:"<code>mobx@4.15.3</code>\u307e\u305f\u306f<code>mobx@5.15.3</code>\u3092\u4f7f\u308f\u306a\u3044",id:"mobx4153\u307e\u305f\u306fmobx5153\u3092\u4f7f\u308f\u306a\u3044",children:[{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]}]},{value:"<code>webpack.DefinePlugin</code>\u3082\u3057\u304f\u306f<code>webpack.EnvironmentPlugin</code>",id:"webpackdefineplugin\u3082\u3057\u304f\u306fwebpackenvironmentplugin",children:[]}],l={rightToc:b};function s(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"mobx4153\u307e\u305f\u306fmobx5153\u3092\u4f7f\u308f\u306a\u3044"},Object(o.b)("inlineCode",{parentName:"h2"},"mobx@4.15.3"),"\u307e\u305f\u306f",Object(o.b)("inlineCode",{parentName:"h2"},"mobx@5.15.3"),"\u3092\u4f7f\u308f\u306a\u3044"),Object(o.b)("p",null,"warning\u3092\u51fa\u529b\u3059\u308b\u624b\u524d\u306e\u6761\u4ef6\u5206\u5c90\u304c",Object(o.b)("inlineCode",{parentName:"p"},"mobx@4.15.3"),"\u3067\u306f\u56fa\u5b9a\u5024\u3068\u306a\u308a\u3001\u5e38\u306bwarning\u304c\u8868\u793a\u3055\u308c\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),Object(o.b)("p",null,"\u4ee5\u4e0b\u306b\u629c\u7c8b\u3057\u305f\u554f\u984c\u306e\u30b3\u30fc\u30c9\u3092\u6b8b\u3057\u3066\u304a\u304d\u307e\u3059\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'// mobx4.15.3@lib/mobx.es6.js#4336-4345\n(() => {\n    function testCodeMinification() { }\n    if (testCodeMinification.name !== "testCodeMinification" &&\n        "development" !== "production" && // \u3053\u3053\u304c\u9593\u9055\u3044\n        process.env.IGNORE_MOBX_MINIFY_WARNING !== "true") {\n        // trick so it doesn\'t get replaced\n        const varName = ["process", "env", "NODE_ENV"].join(".");\n        console.warn(`[mobx] you are running a minified build, but \'${varName}\' was not set to \'production\' in your bundler. This results in an unnecessarily large and slow bundle`);\n    }\n})();\n')),Object(o.b)("p",null,"\u6b63\u3057\u304f\u306f\u3053\u3061\u3089\u3067\u3059\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'// mobx4.15.4@lib/mobx.es6.js#4382-4391\n(() => {\n    function testCodeMinification() { }\n    if (testCodeMinification.name !== "testCodeMinification" &&\n        process.env.NODE_ENV !== "production" &&\n        typeof process !== \'undefined\' && process.env.IGNORE_MOBX_MINIFY_WARNING !== "true") {\n        // trick so it doesn\'t get replaced\n        const varName = ["process", "env", "NODE_ENV"].join(".");\n        console.warn(`[mobx] you are running a minified build, but \'${varName}\' was not set to \'production\' in your bundler. This results in an unnecessarily large and slow bundle`);\n    }\n})();\n')),Object(o.b)("h3",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/mobxjs/mobx/blob/master/CHANGELOG.md#5154--4154"}),"https://github.com/mobxjs/mobx/blob/master/CHANGELOG.md#5154--4154"))),Object(o.b)("h2",{id:"webpackdefineplugin\u3082\u3057\u304f\u306fwebpackenvironmentplugin"},Object(o.b)("inlineCode",{parentName:"h2"},"webpack.DefinePlugin"),"\u3082\u3057\u304f\u306f",Object(o.b)("inlineCode",{parentName:"h2"},"webpack.EnvironmentPlugin")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"webpack"),"\u3067",Object(o.b)("inlineCode",{parentName:"p"},"process.env.NODE_ENV"),"\u3092\u7f6e\u63db\u3057\u307e\u3057\u3087\u3046\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'const config: webpack.Configuration = {\n  plugins: [\n    new webpack.DefinePlugin({\n      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "production"),\n      // "process.env.NODE_ENV": process.env.NODE_ENV // \u3053\u308c\u306f\u9593\u9055\u3044\n    }),\n  }\n}\n')),Object(o.b)("p",null,"\u3082\u3057\u304f\u306f\u3001"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const config: webpack.Configuration = {\n  plugins: [\n    new webpack.EnvironmentPlugin(['NODE_ENV', process.env.NODE_ENV]),\n  }\n}\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://webpack.js.org/plugins/environment-plugin/"}),"https://webpack.js.org/plugins/environment-plugin/"))))}s.isMDXComponent=!0},217:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),s=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,m=u["".concat(a,".").concat(d)]||u[d]||p[d]||o;return t?i.a.createElement(m,c(c({ref:n},l),{},{components:t})):i.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=d;var c={};for(var b in n)hasOwnProperty.call(n,b)&&(c[b]=n[b]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<o;l++)a[l]=t[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);