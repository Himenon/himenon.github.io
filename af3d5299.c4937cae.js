(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{148:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(7),l=(a(0),a(187)),o={title:"Flask\u306e\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u3092\u5229\u7528\u3057\u3066\u307f\u308b",description:"\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc\u3092\u5229\u7528\u3057\u3066\u6587\u5b57\u5217\u306e\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u3092\u8a66\u3059",keywords:["flask streaming","flask \u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0","flask yield","python \u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0","flask stream","flask file stream","flask stream response","flask request stream","flask response generator","flask stream_with_context","python","flask","streaming"],createdAt:new Date("2018-03-09T11:40:20.000Z"),updatedAt:new Date("2019-05-21T11:22:01.000Z")},p={unversionedId:"python/flask/hello-flask-streamming-content",id:"python/flask/hello-flask-streamming-content",isDocsHomePage:!1,title:"Flask\u306e\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u3092\u5229\u7528\u3057\u3066\u307f\u308b",description:"\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc\u3092\u5229\u7528\u3057\u3066\u6587\u5b57\u5217\u306e\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u3092\u8a66\u3059",source:"@site/docs/python/flask/hello-flask-streamming-content.md",slug:"/python/flask/hello-flask-streamming-content",permalink:"/docs/python/flask/hello-flask-streamming-content",editUrl:"https://github.com/Himenon/himenon.github.io/edit/master/docs/python/flask/hello-flask-streamming-content.md",version:"current",sidebar:"someSidebar",previous:{title:"Django\u3067Validation \u30a2\u30eb\u30d5\u30a1\u30d9\u30c3\u30c8\u306e\u307f\u306e\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u88c5\u3059\u308b",permalink:"/docs/python/django/validate-only-alphabet"},next:{title:"Flask\u306ev1.0\u306e\u30ea\u30ea\u30fc\u30b9\u3067\u5909\u308f\u3063\u305f\u3053\u3068",permalink:"/docs/python/flask/release-v1.0-check"}},i=[{value:"\u57fa\u672c",id:"\u57fa\u672c",children:[{value:"\u4f55\u304c\u8d77\u304d\u305f\uff1f",id:"\u4f55\u304c\u8d77\u304d\u305f\uff1f",children:[]}]},{value:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u4f7f\u3046",id:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u4f7f\u3046",children:[{value:"jinja2.Template\u306e\u6319\u52d5\u3092\u78ba\u8a8d\u3059\u308b",id:"jinja2template\u306e\u6319\u52d5\u3092\u78ba\u8a8d\u3059\u308b",children:[]}]},{value:"stream_with_context",id:"stream_with_context",children:[]},{value:"\u6240\u611f",id:"\u6240\u611f",children:[]}],c={rightToc:i};function s(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(l.a)("wrapper",Object(n.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(l.a)("h1",{id:"flask\u306e\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u3092\u5229\u7528\u3057\u3066\u307f\u308b"},"Flask\u306e\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u3092\u5229\u7528\u3057\u3066\u307f\u308b"),Object(l.a)("p",null,"Flask\u306bStreaming Contents\u3068\u3044\u3046\u3082\u306e\u304c\u5b58\u5728\u3057\u305f\u306e\u3067\u3001\n\u3053\u306e\u5b9f\u88c5\u65b9\u6cd5\u3092\u898b\u3066\u307f\u308b\u3002"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"http://flask.pocoo.org/docs/0.12/patterns/streaming/"}),"http://flask.pocoo.org/docs/0.12/patterns/streaming/"))),Object(l.a)("h2",{id:"\u57fa\u672c"},"\u57fa\u672c"),Object(l.a)("p",null,"\u672c\u8a18\u4e8b\u4e2d\u3067\u306f",Object(l.a)("a",Object(n.a)({parentName:"p"},{href:"https://gist.github.com/Himenon/9a4e7dd1a7e57a6da09b2b9624a737a0"}),"\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9"),"\n\u306e\u4e00\u90e8\u3092\u4f7f\u3063\u3066\u89e3\u8aac\u3057\u306a\u304c\u3089\u9032\u3081\u3066\u3044\u304f\u306e\u3067\u3001\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u3092\u9069\u5b9c\u53c2\u7167\u3057\u3066\u307b\u3057\u3044\u3002"),Object(l.a)("p",null,"\u307e\u305a\u306f\u3001\u30b3\u30fc\u30c9\u3092\u66f8\u3044\u3066\u307f\u308b\u3002\u9069\u5f53\u306a\u30c7\u30a3\u30ec\u30af\u30c8\u30ea(\u3053\u3053\u3067\u306f",Object(l.a)("inlineCode",{parentName:"p"},"myapp"),")\u306b",Object(l.a)("inlineCode",{parentName:"p"},"server.py"),"\u3092\u7528\u610f\u3059\u308b\u3002"),Object(l.a)("pre",null,Object(l.a)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"@app.route('/hello-world')\ndef hello_world():\n    def generate():\n        for comment in get_comments():\n            yield '<li>' + comment + '</li>'\n            time.sleep(0.5)  # \u52d5\u4f5c\u3092\u308f\u304b\u308a\u3084\u3059\u304f\u3059\u308b\u305f\u3081\u306b\u8ffd\u52a0\n    return Response(generate())\n")),Object(l.a)("p",null,"\u5b9f\u884c\u3059\u308b\u3068\u6b21\u306e\u3088\u3046\u306b\u306a\u3063\u305f\u3002"),Object(l.a)("p",null,Object(l.a)("img",{alt:"Google Chrome\u306b\u304a\u3051\u308bStreaming\u306e\u5b9f\u969b\u306e\u52d5\u753b",src:a(269).default})),Object(l.a)("p",null,"\u624b\u5143\u306e\u74b0\u5883\u3067\u78ba\u8a8d\u3057\u305f\u3068\u3053\u308d\u3001Chrome\u3068Firefox\u3067\u306f\u52d5\u753b\u306e\u3088\u3046\u306a\u6319\u52d5\u306b\u306a\u3063\u305f\u304c\u3001\nSafari\u306f\u30ed\u30fc\u30c7\u30a3\u30f3\u30b0\u304c\u9577\u304f\u306a\u3063\u305f\u3060\u3051\u306e\u3001\u540c\u671f\u7684\u306a\u5834\u5408\u3068\u540c\u3058\u7d50\u679c\u306b\u306a\u3063\u305f\u3002\n\u3069\u3046\u3084\u3089\u3001\u30d6\u30e9\u30a6\u30b6\u3054\u3068\u306b\u30ed\u30fc\u30c7\u30a3\u30f3\u30b0\u306e\u4ed5\u7d44\u307f\u304c\u7570\u306a\u308b\u3088\u3046\u3067\u3042\u308b\u3002"),Object(l.a)("h3",{id:"\u4f55\u304c\u8d77\u304d\u305f\uff1f"},"\u4f55\u304c\u8d77\u304d\u305f\uff1f"),Object(l.a)("p",null,"Response\u306e\u7b2c\u4e00\u5f15\u6570(\u3082\u3057\u304f\u306f",Object(l.a)("inlineCode",{parentName:"p"},"response="),")\u306f\u3001String\u304bIterator\u3092\u53d7\u3051\u53d6\u308b\u3002\n\u305d\u3053\u306bGenerator\u3092\u6e21\u3059\u3053\u3068\u306b\u3088\u3063\u3066\u3001\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u3059\u308b\u3053\u3068\u304c\u53ef\u80fd\u3068\u306a\u308b\u3002\n\u3053\u308c\u306f",Object(l.a)("a",Object(n.a)({parentName:"p"},{href:"https://knzm.readthedocs.io/en/latest/pep-0333-ja.html#buffering-and-streaming"}),"PEP333(\u65e5\u672c\u8a9e\u8a33)\u306eBuffering and Streaming"),"\u306b\u6b21\u306e\u3088\u3046\u306b\u6c7a\u3081\u3089\u308c\u3066\u3044\u308b\u3002"),Object(l.a)("blockquote",null,Object(l.a)("p",{parentName:"blockquote"},"\u3057\u304b\u3057\u306a\u304c\u3089\u3001\u5927\u304d\u3044\u30d5\u30a1\u30a4\u30eb\u3001\u307e\u305f\u306f HTTP \u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u306e\u7279\u6b8a\u306a\u7528\u9014 (\u8907\u5408\u300c\u30b5\u30fc\u30d0\u30d7\u30c3\u30b7\u30e5\u300d\u306a\u3069) \u306e\u305f\u3081\u306b\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u51fa\u529b\u3092\u3088\u308a\u5c0f\u3055 \u306a\u30d6\u30ed\u30c3\u30af\u306b\u63d0\u4f9b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u304b\u3082\u3057\u308c\u306a\u3044 (\u4f8b\u3048\u3070\u30e1\u30e2\u30ea\u306b\u5927\u304d\u3044\u30d5\u30a1\u30a4 \u30eb\u3092\u30ed\u30fc\u30c9\u3059\u308b\u3053\u3068\u3092\u907f\u3051\u308b\u305f\u3081)\u3002\u307e\u305f\u3001\u5fdc\u7b54\u306e\u3042\u308b\u90e8\u5206\u3092\u751f\u6210\u3059\u308b\u306e\u306b\u6642\u9593 \u304c\u304b\u304b\u308b\u5834\u5408\u3082\u6642\u3005\u3042\u308b\u304c\u3001\u305d\u308c\u306b\u5148\u884c\u3059\u308b\u30ec\u30b9\u30dd\u30f3\u30b9\u306e\u90e8\u5206\u3092\u524d\u3082\u3063\u3066\u9001\u308b \u3053\u3068\u306f\u5f79\u306b\u7acb\u3064\u3060\u308d\u3046\u3002\n\u3053\u308c\u3089\u306e\u5834\u5408\u3067\u306f\u3001\u901a\u5e38\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u30d6\u30ed\u30c3\u30af\u3054\u3068\u306e\u69d8\u5f0f\u3067\u51fa\u529b\u3092\u751f \u6210\u3059\u308b\u30a4\u30c6\u30ec\u30fc\u30bf (\u3057\u3070\u3057\u3070\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fb\u30a4\u30c6\u30ec\u30fc\u30bf) \u3092\u8fd4\u3059\u3060\u308d\u3046\u3002\u3053\u308c \u3089\u306e\u30d6\u30ed\u30c3\u30af\u306f\u3001 mulitpart \u5883\u754c (\u300c\u30b5\u30fc\u30d0\u30d7\u30c3\u30b7\u30e5\u300d\u306e\u305f\u3081\u306e) \u3084\u3001\u6642\u9593\u306e \u304b\u304b\u308b\u30bf\u30b9\u30af (\u30c7\u30a3\u30b9\u30af\u306b\u5b58\u5728\u3059\u308b\u30d5\u30a1\u30a4\u30eb\u306e\u5225\u306e\u30d6\u30ed\u30c3\u30af\u3092\u8aad\u3080\u306a\u3069) \u306e\u3059 \u3050\u524d\u3067\u5206\u5272\u304c\u8d77\u3053\u308b\u304b\u3082\u3057\u308c\u306a\u3044\u3002\n\u5f15\u7528\uff1a",Object(l.a)("a",Object(n.a)({parentName:"p"},{href:"https://knzm.readthedocs.io/en/latest/pep-0333-ja.html#buffering-and-streaming"}),"PEP333(\u65e5\u672c\u8a9e\u8a33)\u306eBuffering and Streaming"))),Object(l.a)("p",null,"\u3064\u307e\u308a\u3001\n\u5de8\u5927\u3001\u3082\u3057\u304f\u306f\u5927\u91cf\u306e\u30c7\u30fc\u30bf\u3092\u9001\u4fe1\u3059\u308b\u6642\u3001\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u3092\u5229\u7528\u3059\u308c\u3070\u3001\u30b5\u30fc\u30d0\u30fc\u5074\u306e\u30e1\u30e2\u30ea\u30fc\u306e\u4f7f\u7528\u91cf\u304c\u62bc\u3055\u3048\u3089\u308c\u308b\u304b\u3089\u3001\n\u305d\u306e\u3088\u3046\u306a\u5834\u5408\u306b\u4f7f\u3046\u305f\u3081\u306b\u7528\u610f\u3055\u308c\u3066\u3044\u308b\u3002\uff08\u305f\u3060\u3057\u3001\u30c8\u30ec\u30fc\u30c9\u30aa\u30d5\u3068\u3057\u3066\u8ee2\u9001\u6642\u9593\u304c\u540c\u671f\u7684\u306a\u30ec\u30b9\u30dd\u30f3\u30b9\u306e\u5834\u5408\u3088\u308a\u3082\u9577\u304f\u306a\u308b\uff09\u3002"),Object(l.a)("p",null,"\u305f\u3060\u3057\u3001\u3053\u306e\u4ed5\u69d8\u306fMUST\u3067\u306f\u306a\u3044\u305f\u3081\u3001\u4ed6\u306eWSGI\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u304c\u5bfe\u5fdc\u3057\u3066\u3044\u306a\u3044\u5834\u5408\u3082\u3042\u308b\u306e\u3067\u3001\u6ce8\u610f\u3057\u305f\u307b\u3046\u304c\u3088\u3055\u305d\u3046\u3002"),Object(l.a)("h2",{id:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u4f7f\u3046"},"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u4f7f\u3046"),Object(l.a)("p",null,"Jinja2\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u4f7f\u3063\u305f\u5834\u5408\u306e\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u306e\u5b9f\u88c5\u3092\u898b\u3066\u307f\u308b\u3002\n\u307e\u305a\u306f\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u7528\u610f\u3092\u3059\u308b\u3002\nFlask\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306f\u6b21\u306e\u3088\u3046\u306a\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u914d\u7f6e\u3057\u3066\u304a\u3051\u3070\u826f\u3044\u3002\n\u5168\u4f53\u306e\u30b3\u30fc\u30c9\u306f",Object(l.a)("a",Object(n.a)({parentName:"p"},{href:"https://gist.github.com/Himenon/9a4e7dd1a7e57a6da09b2b9624a737a0"}),"\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9"),"\u304b\u3089\u9069\u5b9c\u53d6\u5f97\u3057\u3066\u6b32\u3057\u3044\u3002"),Object(l.a)("pre",null,Object(l.a)("code",Object(n.a)({parentName:"pre"},{}),"myapp/\n\u251c\u2500\u2500 server.py\n\u2514\u2500\u2500 templates\n    \u2514\u2500\u2500 comment_list.html  # \u8ffd\u52a0\n")),Object(l.a)("p",null,"\u307e\u305a\u306f\u3001",Object(l.a)("a",Object(n.a)({parentName:"p"},{href:"http://flask.pocoo.org/docs/0.12/patterns/streaming/"}),"http://flask.pocoo.org/docs/0.12/patterns/streaming/"),"\u306b\u66f8\u3044\u3066\u3042\u308b\u30b3\u30fc\u30c9\u3092\u771f\u4f3c\u3057\u3066\u307f\u308b\u3002"),Object(l.a)("pre",null,Object(l.a)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"def stream_template(template_name, **context):\n    app.update_template_context(context)\n    t = app.jinja_env.get_template(template_name)   # jinja2.Template\n    rv = t.stream(context)                          # jinja2.environment.TemplateStream \n    rv.enable_buffering(5)\n    return rv\n\n@app.route('/hello-world-with-template')\ndef hello_world_with_template():\n    return Response(stream_template('comment_list.html', comments=get_comments()))\n")),Object(l.a)("p",null,Object(l.a)("inlineCode",{parentName:"p"},"/hello-world-with-template"),"\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308c\u3070\u3001\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u304c\u5206\u304b\u308b\u3002\n\u304c\u3001",Object(l.a)("inlineCode",{parentName:"p"},"time.sleep"),"\u3092\u5165\u308c\u308b\u5834\u6240\u304c\u306a\u3044\u306e\u3067\u3082\u3046\u5c11\u3057\u6df1\u307c\u3063\u3066\u307f\u308b"),Object(l.a)("h3",{id:"jinja2template\u306e\u6319\u52d5\u3092\u78ba\u8a8d\u3059\u308b"},"jinja2.Template\u306e\u6319\u52d5\u3092\u78ba\u8a8d\u3059\u308b"),Object(l.a)("p",null,"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u30a8\u30f3\u30b8\u30f3\u306fJinja2\u3092\u5229\u7528\u3059\u308b\u305f\u3081\u3001\u8aad\u3080\u3079\u304dAPI\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306fJinja2\u306e\u65b9\u3002"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"http://jinja.pocoo.org/docs/2.10/api/#jinja2.Template"}),"http://jinja.pocoo.org/docs/2.10/api/#jinja2.Template"))),Object(l.a)("p",null,Object(l.a)("inlineCode",{parentName:"p"},"jinja2.environment.TemplateStream"),"\u306e\u6319\u52d5\u3092\u691c\u8a3c\u3059\u308b\u3002\n",Object(l.a)("inlineCode",{parentName:"p"},"templates"),"\u304c\u5b58\u5728\u3059\u308b\u3001",Object(l.a)("inlineCode",{parentName:"p"},"myapp/"),"\u306e\u4e2d\u3067ipython\u3092\u53e9\u3044\u3066\u307f\u308b\u3002"),Object(l.a)("pre",null,Object(l.a)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"from flask import Flask\napp = Flask('hello')\n\ncontext = {\n    'comments': [ 'Count: {}'.format(i) for i in range(100) ]\n}\napp.update_template_context(context)\nt = app.jinja_env.get_template('comment_list.html')\n\nrv = t.stream(context) # jinja2.environment.TemplateStream\nrv.enable_buffering(5) # \u30d0\u30c3\u30d5\u30a1\u30b5\u30a4\u30ba\n\nnext(rv) # list\u306e1\u301c5  \u307e\u3067\nnext(rv) # list\u306e6\u301c11 \u307e\u3067\n# ...\n")),Object(l.a)("p",null,Object(l.a)("inlineCode",{parentName:"p"},"jinja2.environment.TemplateStream"),"\u306f",Object(l.a)("inlineCode",{parentName:"p"},"enable_buffering"),"\u3067\u6307\u5b9a\u3055\u308c\u305f\n\u5927\u304d\u3055\u306b\u30c1\u30e3\u30f3\u30af\u3055\u308c\u305f\u30a4\u30c6\u30ec\u30fc\u30bf\u5316\u3055\u308c\u3066\u304f\u308b\uff08",Object(l.a)("inlineCode",{parentName:"p"},"__iter__"),"\u3092\u6301\u3063\u3066\u3044\u308b)\u3002"),Object(l.a)("p",null,"\u3053\u308c\u3092\u9006\u624b\u306b\u53d6\u3063\u3066\u3001\u3069\u306e\u69d8\u306b\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u3066\u3044\u304f\u304b\u3001\u78ba\u8a8d\u3059\u308b\u305f\u3081\u4f3c\u3001\u6b21\u306e\u3088\u3046\u306b\u30b3\u30fc\u30c9\u3092\u66f8\u304d\u63db\u3048\u3066\u307f\u308b\u3002"),Object(l.a)("pre",null,Object(l.a)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"def stream_template(template_name, **context):\n    app.update_template_context(context)\n    t = app.jinja_env.get_template(template_name)\n    rv = t.stream(context)\n    rv.enable_buffering(5)\n    for buffer in rv:\n        yield buffer\n        time.sleep(0.5)\n")),Object(l.a)("p",null,"\u3053\u308c\u3092\u5b9f\u884c\u3059\u308b\u3068\u3001\u6b21\u306e\u3088\u3046\u306a\u7d50\u679c\u306b\u306a\u3063\u305f\u3002"),Object(l.a)("p",null,Object(l.a)("img",{alt:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u30a8\u30f3\u30b8\u30f3\u3092\u4f7f\u3063\u305f\u5834\u5408\u306e\u6319\u52d5",src:a(270).default})),Object(l.a)("p",null,"\u3084\u306f\u308aResponse\u306b\u30a4\u30c6\u30ec\u30fc\u30bf\u3092\u6e21\u3057\u3066\u3044\u308b\u3053\u3068\u304c\u308f\u304b\u3063\u305f\u3002"),Object(l.a)("h2",{id:"stream_with_context"},"stream_with_context"),Object(l.a)("p",null,"Generator\u306e\u4e2d\u3067\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u542b\u307e\u308c\u308b\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u53d6\u5f97\u3057\u305f\u3044\u5834\u5408\u304c\u3042\u308b\u3002\ngenerator\u4e2d\u3067\u306f",Object(l.a)("inlineCode",{parentName:"p"},"flask.requrest"),"\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u306a\u3044\u305f\u3081\u3001\u305d\u308c\u3092\u53ef\u80fd\u306b\u3059\u308b\u305f\u3081\u306b\u3001\n",Object(l.a)("inlineCode",{parentName:"p"},"stream_with_context"),"\u3092\u5229\u7528\u3059\u308b\u3002\u3053\u308c\u3092\u5229\u7528\u3059\u308b\u3053\u3068\u306b\u3088\u308a\u3001\n",Object(l.a)("inlineCode",{parentName:"p"},"flask.request"),"\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002"),Object(l.a)("pre",null,Object(l.a)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"@app.route('/stream')\ndef streamed_response():\n    def generate():\n        yield 'Hello '\n        time.sleep(1)\n        yield request.args['name'] # stream_with_context\u3067wrap\u3055\u308c\u3066\u308b\u305f\u3081\u30a2\u30af\u30bb\u30a6\u53ef\n        time.sleep(1)\n        yield '!'\n\n    return Response(stream_with_context(generate()))\n")),Object(l.a)("h2",{id:"\u6240\u611f"},"\u6240\u611f"),Object(l.a)("p",null,"PEP333\u306b\u66f8\u3044\u3066\u3042\u308b\u3068\u304a\u308a\u3001\u30c7\u30fc\u30bf\u5bb9\u91cf\u306e\u5927\u304d\u306a\u30c7\u30fc\u30bf\u3092\u9001\u4fe1\u3059\u308b\u5834\u5408\u306b\u4f7f\u3048\u308b\u3053\u3068\u304c\u308f\u304b\u308b\u3002\n\u6570MB\u3001\u3082\u3057\u304f\u306f\u6570GB\u5358\u4f4d\u306e\u30c7\u30fc\u30bf\u3092\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u304b\u3089\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b\u6642\u3001\u30b5\u30fc\u30d0\u30fc\u5074\u306b\u8ca0\u8377\u3092\u304b\u3051\u306a\u3044\u305f\u3081\u306b\u3082\n\u3053\u306e\u30d1\u30bf\u30fc\u30f3\u306f\u4f7f\u3048\u305d\u3046\u3067\u3042\u308b\u3002"),Object(l.a)("p",null,Object(l.a)("strong",{parentName:"p"},"\u53c2\u8003")),Object(l.a)("p",null,"\u672c\u6587\u4e2d\u3067\u51fa\u3066\u304d\u305f\u30ea\u30f3\u30af\u3092\u307e\u3068\u3081\u3066\u304a\u304f\u3002"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},"\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9: ",Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"https://gist.github.com/Himenon/9a4e7dd1a7e57a6da09b2b9624a737a0"}),"https://gist.github.com/Himenon/9a4e7dd1a7e57a6da09b2b9624a737a0")),Object(l.a)("li",{parentName:"ul"},"Flask Streaming Content: ",Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"http://flask.pocoo.org/docs/0.12/patterns/streaming/"}),"http://flask.pocoo.org/docs/0.12/patterns/streaming/")),Object(l.a)("li",{parentName:"ul"},"PEP333: ",Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"https://knzm.readthedocs.io/en/latest/pep-0333-ja.html#buffering-and-streaming"}),"https://knzm.readthedocs.io/en/latest/pep-0333-ja.html#buffering-and-streaming")),Object(l.a)("li",{parentName:"ul"},"Jinja2: ",Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"http://jinja.pocoo.org/docs/2.10/api/#jinja2.Template"}),"http://jinja.pocoo.org/docs/2.10/api/#jinja2.Template"))))}s.isMDXComponent=!0},187:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):p({},t,{},e)),a},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),b=s(a),j=n,u=b["".concat(o,".").concat(j)]||b[j]||m[j]||l;return a?r.a.createElement(u,p({ref:t},c,{components:a})):r.a.createElement(u,p({ref:t},c))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=b;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var c=2;c<l;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},269:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/hello-world-streaming-a9746af4318285796106b7b0b552c494.gif"},270:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/hello-world-streaming-with-template-0b35be6e6f91a35f36edb13a713be378.gif"}}]);