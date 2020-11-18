(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{187:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),s=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,g=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return t?r.a.createElement(g,c({ref:n},p,{components:t})):r.a.createElement(g,c({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},82:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));var a=t(2),r=t(7),o=(t(0),t(187)),i={title:"Django\u3067Nginx\u306eUnix Socket\u3092\u5229\u7528\u3059\u308b",description:"Unix socket\u3067Django\u3092\u516c\u958b\u3059\u308b",keywords:["python","django","nginx","unix-socket"],createdAt:new Date("2018-09-15T11:55:29.000Z"),updatedAt:new Date("2019-05-21T11:22:01.000Z")},c={unversionedId:"python/django/unix-socket-and-nginx",id:"python/django/unix-socket-and-nginx",isDocsHomePage:!1,title:"Django\u3067Nginx\u306eUnix Socket\u3092\u5229\u7528\u3059\u308b",description:"Unix socket\u3067Django\u3092\u516c\u958b\u3059\u308b",source:"@site/docs/python/django/unix-socket-and-nginx.md",slug:"/python/django/unix-socket-and-nginx",permalink:"/docs/python/django/unix-socket-and-nginx",editUrl:"https://github.com/Himenon/himenon.github.io/edit/master/docs/python/django/unix-socket-and-nginx.md",version:"current",sidebar:"someSidebar",previous:{title:"Django\u306b\u304a\u3051\u308b\u9759\u7684\u30d5\u30a1\u30a4\u30eb\u306e\u63a2\u7d22\u304c\u30b3\u30b1\u305f\u3068\u304d\u306e\u30a8\u30e9\u30fc",permalink:"/docs/python/django/static-file"},next:{title:"Django\u3067Validation \u30a2\u30eb\u30d5\u30a1\u30d9\u30c3\u30c8\u306e\u307f\u306e\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u88c5\u3059\u308b",permalink:"/docs/python/django/validate-only-alphabet"}},l=[{value:"Unix Socket\u3092\u4f7f\u3046",id:"unix-socket\u3092\u4f7f\u3046",children:[]},{value:"Docker\u306e\u5834\u5408",id:"docker\u306e\u5834\u5408",children:[]},{value:"uWsgi",id:"uwsgi",children:[{value:"\u516c\u5f0f\u30da\u30fc\u30b8",id:"\u516c\u5f0f\u30da\u30fc\u30b8",children:[]},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]}]}],p={rightToc:l};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.a)("h2",{id:"unix-socket\u3092\u4f7f\u3046"},"Unix Socket\u3092\u4f7f\u3046"),Object(o.a)("pre",null,Object(o.a)("code",Object(a.a)({parentName:"pre"},{className:"language-nginx"}),"upstream blog_app_server {\n  # fail_timeout=0 means we always retry an upstream even if it failed\n  # to return a good HTTP response (in case the Unicorn master nukes a\n  # single worker for timing out).\n\n  server unix:/opt/example.com/run/gunicorn.sock fail_timeout=0;\n}\n\nserver {\n    listen       80;\n    server_name  www.example.com example.com;\n    server_tokens off;\n    access_log /opt/example.com/logs/nginx-access.log;\n    error_log /opt/example.com/logs/nginx-error.log;\n\n    location /static/ {\n        alias /opt/example.com/static/;\n    }\n\n    location / {\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header Host $http_host;\n        proxy_redirect off;\n        if (!-f $request_filename) {\n            proxy_pass http://blog_app_server;\n            break;\n        }\n    }\n\n    # redirect server error pages to the static page /50x.html\n    #\n    error_page   500 502 503 504  /50x.html;\n    location = /50x.html {\n        root   /usr/share/nginx/html;\n    }\n\n}\n")),Object(o.a)("h2",{id:"docker\u306e\u5834\u5408"},"Docker\u306e\u5834\u5408"),Object(o.a)("p",null,"Docker\u9593\u306fVolume\u3067\u30de\u30a6\u30f3\u30c8\u3059\u308b"),Object(o.a)("p",null,Object(o.a)("a",Object(a.a)({parentName:"p"},{href:"https://stackoverflow.com/questions/24830276/whats-should-django-allowed-hosts-be-when-using-a-unix-socket"}),"What's should Django ALLOWED_HOSTS be when using a unix socket?\n")),Object(o.a)("h2",{id:"uwsgi"},"uWsgi"),Object(o.a)("p",null,"Nginx: \u30d7\u30ed\u30ad\u30b7\u30fb\u30ea\u30d0\u30fc\u30b9\u30d7\u30ed\u30ad\u30b7\u30fbWEB\u30b5\u30fc\u30d0\u30fc\nGunicorn: AP\u30b5\u30fc\u30d0\u30fc\nuWsgi: GateWay, Interface"),Object(o.a)("h3",{id:"\u516c\u5f0f\u30da\u30fc\u30b8"},"\u516c\u5f0f\u30da\u30fc\u30b8"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"https://nginx.org/"}),"Nginx")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"http://gunicorn.org/"}),"Gunicorn - Python WSGI HTTP Server for UNIX")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"https://www.python.org/dev/peps/pep-0333/"}),"PEP 333 -- Python Web Server Gateway Interface v1.0"))),Object(o.a)("h3",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"https://qiita.com/morinokami/items/e0efb2ae2aa04a1b148b"}),"Flask + uWSGI + Nginx \u3067\u30cf\u30ed\u30fc\u30ef\u30fc\u30eb\u30c9\u3059\u308b\u307e\u3067 @ \u3055\u304f\u3089\u306eVPS (CentOS 6.6)")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"https://qiita.com/hacoten/items/0fb1a44390e1af35b50c"}),"1\u53f0\u306e\u30b5\u30fc\u30d0\u4e0a\u306bDocker\u3092\u4f7f\u3063\u3066\u8907\u6570\u30b5\u30fc\u30d3\u30b9\u904b\u7528\u3057\u3066\u307f\u308b")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"https://qiita.com/hiroykam/items/748c3fab31c616994db9"}),"Docker\u3067Python+uWSGI+Nginx\u306e\u74b0\u5883\u3092\u4f5c\u6210")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"https://qiita.com/cortyuming/items/25e3e19beb1516e1d0be"}),"docker-compose up \u3067 Django + PostgreSQL + Nginx + Gunicorn \u3092\u8d77\u52d5\u3057\u3066\u307f\u308b")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"http://ruddra.com/2016/08/14/docker-django-nginx-postgres/index.html"}),"Deploy Django, Gunicorn, NGINX, Postgresql using Docker")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"https://qiita.com/amazipangu/items/bce228f506f894cd825d"}),"Django\u306e\u74b0\u5883\u3092Docker\u5316\u3059\u308b\uff08Docker + Django + Gunicorn + nginx\uff09\u305d\u306e\uff11"))))}s.isMDXComponent=!0}}]);