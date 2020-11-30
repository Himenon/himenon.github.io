(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{172:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(8),i=(n(0),n(197)),r={title:"Django\u306b\u304a\u3051\u308b\u9759\u7684\u30d5\u30a1\u30a4\u30eb\u306e\u63a2\u7d22\u304c\u30b3\u30b1\u305f\u3068\u304d\u306e\u30a8\u30e9\u30fc",description:"\u9759\u7684\u30d5\u30a1\u30a4\u30eb\u306e\u63a2\u7d22\u30a8\u30e9\u30fc",keywords:["python","django","static file"],createdAt:new Date("2018-09-15T11:55:29.000Z"),updatedAt:new Date("2019-05-21T11:22:01.000Z")},c={unversionedId:"python/django/static-file",id:"python/django/static-file",isDocsHomePage:!1,title:"Django\u306b\u304a\u3051\u308b\u9759\u7684\u30d5\u30a1\u30a4\u30eb\u306e\u63a2\u7d22\u304c\u30b3\u30b1\u305f\u3068\u304d\u306e\u30a8\u30e9\u30fc",description:"\u9759\u7684\u30d5\u30a1\u30a4\u30eb\u306e\u63a2\u7d22\u30a8\u30e9\u30fc",source:"@site/docs/python/django/static-file.md",slug:"/python/django/static-file",permalink:"/docs/python/django/static-file",editUrl:"https://github.com/Himenon/himenon.github.io/edit/default/docs/python/django/static-file.md",version:"current",sidebar:"someSidebar",previous:{title:"Django\u306b\u304a\u3044\u3066\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306b\u4fdd\u5b58\u3059\u308b\u524d\u5f8c\u306b\u51e6\u7406\u3092\u30d5\u30c3\u30af\u3055\u305b\u308b",permalink:"/docs/python/django/signal"},next:{title:"Django\u3067Nginx\u306eUnix Socket\u3092\u5229\u7528\u3059\u308b",permalink:"/docs/python/django/unix-socket-and-nginx"}},s=[],l={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'root@f363e9217eab:/django# ./manage.py collectstatic\n\nYou have requested to collect static files at the destination\nlocation as specified in your settings.\n\nThis will overwrite existing files!\nAre you sure you want to do this?\n\nType \'yes\' to continue, or \'no\' to cancel: yes\nTraceback (most recent call last):\n  File "./manage.py", line 20, in <module>\n    execute_from_command_line(sys.argv)\n  File "/usr/local/lib/python3.6/site-packages/django/core/management/__init__.py", line 364, in execute_from_command_line\n    utility.execute()\n  File "/usr/local/lib/python3.6/site-packages/django/core/management/__init__.py", line 356, in execute\n    self.fetch_command(subcommand).run_from_argv(self.argv)\n  File "/usr/local/lib/python3.6/site-packages/django/core/management/base.py", line 283, in run_from_argv\n    self.execute(*args, **cmd_options)\n  File "/usr/local/lib/python3.6/site-packages/django/core/management/base.py", line 330, in execute\n    output = self.handle(*args, **options)\n  File "/usr/local/lib/python3.6/site-packages/django/contrib/staticfiles/management/commands/collectstatic.py", line 199, in handle\n    collected = self.collect()\n  File "/usr/local/lib/python3.6/site-packages/django/contrib/staticfiles/management/commands/collectstatic.py", line 124, in collect\n    handler(path, prefixed_path, storage)\n  File "/usr/local/lib/python3.6/site-packages/django/contrib/staticfiles/management/commands/collectstatic.py", line 354, in copy_file\n    if not self.delete_file(path, prefixed_path, source_storage):\n  File "/usr/local/lib/python3.6/site-packages/django/contrib/staticfiles/management/commands/collectstatic.py", line 260, in delete_file\n    if self.storage.exists(prefixed_path):\n  File "/usr/local/lib/python3.6/site-packages/django/core/files/storage.py", line 392, in exists\n    return os.path.exists(self.path(name))\n  File "/usr/local/lib/python3.6/site-packages/django/contrib/staticfiles/storage.py", line 50, in path\n    raise ImproperlyConfigured("You\'re using the staticfiles app "\ndjango.core.exceptions.ImproperlyConfigured: You\'re using the staticfiles app without having set the STATIC_ROOT setting to a filesystem path.\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"import os\nROOT_PATH = os.path.dirname(__file__)\n\nSTATICFILES_DIRS = [os.path.join(ROOT_PATH, 'static')]\n")),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://qiita.com/aion/items/add0c983150a2a1e100d"}),"Django \u9759\u7684\u30d5\u30a1\u30a4\u30eb (static) \u95a2\u4fc2\u306e\u8a2d\u5b9a\u307e\u3068\u3081")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"The reason that STATICFILES_DIRS wants a filesystem path is that it needs to know where the files live in the operating system (so things like manage.py collectstatic are possible). The STATIC_URL setting is for webserver paths, and that's what it uses to show to the user in the admin or the {% static %} tag or whatever. STATICFILES_DIRS is server-side only and never shows up in any rendered templates or anything.")),Object(i.b)("p",null,"\u203b\u307e\u3068\u307e\u3063\u3066\u306a\u3044"),Object(i.b)("p",null,"Django\u3092\u672c\u756a\u74b0\u5883\u306b\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u3068\u304d\u3001\u9759\u7684\u30d5\u30a1\u30a4\u30eb\u95a2\u4fc2\u306e\u8a2d\u5b9a\u3067\u3044\u308d\u3044\u308d\u306f\u307e\u3063\u305f\u306e\u3067\u3001\u307e\u3068\u3081\u308b\u3002\n\u57fa\u672c\u7684\u306b\u4ee5\u4e0b\u306e5\u3064\u3042\u308b\u3088\u3046\u3060\u304c\u3001\u4e0a\u304b\u30893\u3064\u3060\u3051\u4f7f\u7528\u3057\u3066\u3044\u305f\u306e\u3067\u3001\u305d\u308c\u3089\u306b\u95a2\u3057\u3066\u307e\u3068\u3081\u308b\u3002\n\u3061\u306a\u307f\u306b\u4ee5\u4e0b\u306e\u305d\u308c\u305e\u308c\u306e\u5b9a\u6570\u306fsetting.py\u3067\u8a2d\u5b9a\u3059\u308b\u3002"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"STATIC_ROOT\nSTATIC_URL\nSTATICFILES_DIRS (Prefixes (optional))\nSTATICFILES_STORAGE\nSTATICFILES_FINDERS\n")))}p.isMDXComponent=!0},197:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},g=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),g=a,m=u["".concat(r,".").concat(g)]||u[g]||d[g]||i;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);