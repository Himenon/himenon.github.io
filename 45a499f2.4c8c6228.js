(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{105:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return a})),n.d(r,"metadata",(function(){return s})),n.d(r,"rightToc",(function(){return i})),n.d(r,"default",(function(){return l}));var t=n(3),o=n(8),c=(n(0),n(197)),a={title:"nodejs\u304b\u3089\u5b9f\u884c\u3059\u308b\u30b3\u30de\u30f3\u30c9\u306e\u30ed\u30b0\u3092stream\u3067\u51fa\u529b\u3059\u308b",keywords:["nodejs","command","exec","execSync","spawn","spawnSync"],description:"execSync\u306a\u3069\u3092\u5229\u7528\u3059\u308b\u3068\u3001\u5b9f\u884c\u3055\u308c\u305f\u30b3\u30de\u30f3\u30c9\u304c\u5b8c\u4e86\u3057\u305f\u3042\u3068\u306b\u30ed\u30b0\u304c\u8fd4\u3063\u3066\u304d\u307e\u3059\u3002\u30ed\u30b0\u3092stream\u3067\u53d6\u5f97\u3059\u308b\u306b\u306fspawn\u3092\u5229\u7528\u3057\u307e\u3059\u3002"},s={unversionedId:"javascript/child-process-log-stream",id:"javascript/child-process-log-stream",isDocsHomePage:!1,title:"nodejs\u304b\u3089\u5b9f\u884c\u3059\u308b\u30b3\u30de\u30f3\u30c9\u306e\u30ed\u30b0\u3092stream\u3067\u51fa\u529b\u3059\u308b",description:"execSync\u306a\u3069\u3092\u5229\u7528\u3059\u308b\u3068\u3001\u5b9f\u884c\u3055\u308c\u305f\u30b3\u30de\u30f3\u30c9\u304c\u5b8c\u4e86\u3057\u305f\u3042\u3068\u306b\u30ed\u30b0\u304c\u8fd4\u3063\u3066\u304d\u307e\u3059\u3002\u30ed\u30b0\u3092stream\u3067\u53d6\u5f97\u3059\u308b\u306b\u306fspawn\u3092\u5229\u7528\u3057\u307e\u3059\u3002",source:"@site/docs/javascript/child-process-log-stream.md",slug:"/javascript/child-process-log-stream",permalink:"/docs/javascript/child-process-log-stream",editUrl:"https://github.com/Himenon/himenon.github.io/edit/default/docs/javascript/child-process-log-stream.md",version:"current",sidebar:"someSidebar",previous:{title:"JavaScript\u3067\u30af\u30a8\u30ea\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3092\u66f8\u304d\u63db\u3048\u308b",permalink:"/docs/javascript/change-query-params"},next:{title:"mdx-js\u306e\u5b9f\u88c5\u3092\u89e3\u8aad\u3059\u308b\u307e\u3067\u306e\u8a71",permalink:"/docs/javascript/decipher-mdx-js"}},i=[],p={rightToc:i};function l(e){var r=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},p,n,{components:r,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u5b9f\u88c5\u3092\u884c\u3046\u3053\u3068\u3067\u30ed\u30b0\u3092\u9069\u5b9c\u53d6\u5f97\u3067\u304d\u308b\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-typescript"}),'import { spawn } from "child_process";\n\nconst cmd = (command: string, args: string, cwd: string): Promise<void> => {\n  const promise: Promise<void> = new Promise(resolve => {\n    console.log(`${command} ${args}`);\n\n    const childProcess = spawn(command, args.split(" "), { cwd, env });\n\n    childProcess.stdout.on("data", data => {\n      console.log(data.toString().trim()); // stream\u3067\u30ed\u30b0\u3092\u51fa\u529b\u3059\u308b\n    });\n\n    childProcess.stdout.on("end", () => {\n      resolve();\n    });\n\n  });\n  return promise;\n};\n')))}l.isMDXComponent=!0},197:function(e,r,n){"use strict";n.d(r,"a",(function(){return d})),n.d(r,"b",(function(){return f}));var t=n(0),o=n.n(t);function c(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){c(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var r=o.a.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},d=function(e){var r=l(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,c=e.originalType,a=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=t,f=d["".concat(a,".").concat(m)]||d[m]||u[m]||c;return n?o.a.createElement(f,s(s({ref:r},p),{},{components:n})):o.a.createElement(f,s({ref:r},p))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var c=n.length,a=new Array(c);a[0]=m;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:t,a[1]=s;for(var p=2;p<c;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);