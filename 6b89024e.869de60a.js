(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{114:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return b})),t.d(n,"default",(function(){return i}));var a=t(3),r=t(8),c=(t(0),t(197)),l={title:"JavaScript\u306e\u9ad8\u968e\u95a2\u6570\u3092\u5229\u7528\u3057\u3066\u51e6\u7406\u306b\u5bfe\u3057\u3066\u660e\u77ad\u306a\u547d\u540d\u3092\u884c\u3046",description:"map, filter, reduce\u3092\u5229\u7528\u3057\u3066\u51e6\u7406\u3092\u5c0f\u3055\u304f\u8a18\u8ff0\u3059\u308b\u5de5\u7a0b\u3092\u307e\u3068\u3081\u307e\u3057\u305f\u3002",keywords:["javascript","forEach","map","filter","reduce","\u4f8b","\u30b5\u30f3\u30d7\u30eb","\u4f7f\u3044\u65b9","\u5b9f\u7528\u4f8b"],createdAt:new Date("2018-09-16T12:45:00.000Z"),updatedAt:new Date("2019-05-21T11:22:01.000Z")},p={unversionedId:"javascript/higher-order-function-tips",id:"javascript/higher-order-function-tips",isDocsHomePage:!1,title:"JavaScript\u306e\u9ad8\u968e\u95a2\u6570\u3092\u5229\u7528\u3057\u3066\u51e6\u7406\u306b\u5bfe\u3057\u3066\u660e\u77ad\u306a\u547d\u540d\u3092\u884c\u3046",description:"map, filter, reduce\u3092\u5229\u7528\u3057\u3066\u51e6\u7406\u3092\u5c0f\u3055\u304f\u8a18\u8ff0\u3059\u308b\u5de5\u7a0b\u3092\u307e\u3068\u3081\u307e\u3057\u305f\u3002",source:"@site/docs/javascript/higher-order-function-tips.md",slug:"/javascript/higher-order-function-tips",permalink:"/docs/javascript/higher-order-function-tips",editUrl:"https://github.com/Himenon/himenon.github.io/edit/default/docs/javascript/higher-order-function-tips.md",version:"current",sidebar:"someSidebar",previous:{title:"URL\u304b\u3089JavaScript\u3067\u30c9\u30e1\u30a4\u30f3\u540d\u3092\u62bd\u51fa\u3059\u308b\u306b\u306f\uff1f",permalink:"/docs/javascript/get-collect-domain-name"},next:{title:"JavaScript\u30fbTypeScript\u306eimport\u30fbexport\u306e\u4f9d\u5b58\u95a2\u4fc2\u3092\u53ef\u8996\u5316\u3059\u308bcode-dependency\u306e\u7d39\u4ecb",permalink:"/docs/javascript/introduction-code-dependency"}},b=[{value:"\u30d6\u30ed\u30b0\u306e\u60c5\u5831\u304b\u3089\u30e1\u30cb\u30e5\u30fc\u3092\u4f5c\u308b",id:"\u30d6\u30ed\u30b0\u306e\u60c5\u5831\u304b\u3089\u30e1\u30cb\u30e5\u30fc\u3092\u4f5c\u308b",children:[{value:"\u6700\u77ed\u3067\u66f8\u3044\u305f\u5834\u5408",id:"\u6700\u77ed\u3067\u66f8\u3044\u305f\u5834\u5408",children:[]},{value:"\u5b8c\u6210\u7248",id:"\u5b8c\u6210\u7248",children:[]},{value:"\u89e3\u8aac",id:"\u89e3\u8aac",children:[]}]}],o={rightToc:b};function i(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"2019 \u30a2\u30c9\u30d9\u30f3\u30c8\u30ab\u30ec\u30f3\u30c0\u30fc \u30c9\u30ef\u30f3\u30b4\u306e15\u65e5\u76ee\u306e\u8a18\u4e8b\u3067\u3059\u3002"),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"../../blog/2019/12/14/jsconf2019-report"}),"\u524d\u65e5\u306e\u8a18\u4e8b"),"\u4e2d\u3067\u30c6\u30af\u30cb\u30ab\u30eb\u306a\u8a71\u304c\u767b\u5834\u3057\u306a\u304b\u3063\u305f\u306e\u3067\u3001\nPull Request\u306e\u30ec\u30d3\u30e5\u30fc\u3067\u3088\u304f\u6307\u6458\u3057\u305f\u5185\u5bb9\u3092\u307e\u3068\u3081\u307e\u3059\u3002"),Object(c.b)("p",null,"\u524d\u63d0\u3068\u3057\u3066\u3001",Object(c.b)("strong",{parentName:"p"},"\u30d7\u30ed\u30c0\u30af\u30b7\u30e7\u30f3\u74b0\u5883\u306b\u6301\u3063\u3066\u3044\u304f\u30b3\u30fc\u30c9\u3067\u3001\u81ea\u5206\u4ee5\u5916\u306e\u4eba\u9593\u304c\u4fdd\u5b88\u3059\u308b\u53ef\u80fd\u6027\u306e\u3042\u308b\u30b3\u30fc\u30c9"),"\u3092\u66f8\u304f\u306a\u3089\u3069\u306e\u3088\u3046\u306b\u66f8\u304f\u304b\u3001\u3068\u3044\u3046\u8996\u70b9\u3067\u8aac\u660e\u3057\u307e\u3059\u3002"),Object(c.b)("p",null,"\u5b9f\u884c\u74b0\u5883\u3068\u3057\u3066\u3001Google Chrome\u306eDevTools\u3067\u52d5\u304f\u30b3\u30fc\u30c9\u3092\u8f09\u305b\u3066\u3044\u304d\u307e\u3059\u3002\u53c2\u8003\u306bTypeScript\u306e\u5b9f\u88c5\u3082\u8f09\u305b\u307e\u3059\u3002"),Object(c.b)("p",null,"\u305f\u3068\u3048\u3070\u3001",Object(c.b)("inlineCode",{parentName:"p"},"map"),"\u3001",Object(c.b)("inlineCode",{parentName:"p"},"filter"),"\u3001",Object(c.b)("inlineCode",{parentName:"p"},"reduce"),"\u3067\u30b3\u30f3\u30d1\u30af\u30c8\u306b\u3067\u304d\u308b\u8868\u73fe\u3092\u3001",Object(c.b)("inlineCode",{parentName:"p"},"for"),"/",Object(c.b)("inlineCode",{parentName:"p"},"forEach"),"/",Object(c.b)("inlineCode",{parentName:"p"},"while"),"/",Object(c.b)("inlineCode",{parentName:"p"},"if"),"\u3067\u51e6\u7406\u3092\u8868\u73fe\u3057\u3066\u3044\u308b\u5834\u5408\u3067\u3059\u3002\n\u8868\u73fe\u65b9\u6cd5\u306b\u4e00\u5b9a\u306e\u516c\u5f0f\u3092\u6301\u3063\u3066\u3044\u306a\u3044\u305f\u3081\u306b",Object(c.b)("inlineCode",{parentName:"p"},"map"),"\u3001",Object(c.b)("inlineCode",{parentName:"p"},"filter"),"\u3001",Object(c.b)("inlineCode",{parentName:"p"},"reduce"),"\u306e\u5229\u7528\u65b9\u6cd5\u304c\u308f\u304b\u3089\u306a\u3044\u306e\u3067\u306f\u306a\u3044\u304b\u3001\u3068\u898b\u3066\u3044\u307e\u3059\u3002"),Object(c.b)("p",null,"\u3044\u304f\u3064\u304b\u306e\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u3067\u3069\u306e\u3088\u3046\u306b\u4f7f\u3046\u304b\u7d39\u4ecb\u3057\u307e\u3059\u3002"),Object(c.b)("h2",{id:"\u30d6\u30ed\u30b0\u306e\u60c5\u5831\u304b\u3089\u30e1\u30cb\u30e5\u30fc\u3092\u4f5c\u308b"},"\u30d6\u30ed\u30b0\u306e\u60c5\u5831\u304b\u3089\u30e1\u30cb\u30e5\u30fc\u3092\u4f5c\u308b"),Object(c.b)("p",null,"\u305f\u3068\u3048\u3070\u672c\u30d6\u30ed\u30b0\u3082\u305d\u3046\u3067\u3059\u304c\u3001\u300c\u8a18\u4e8b\u306e\u4e00\u89a7\u300d\u3092\u8868\u793a\u3059\u308b\u6a5f\u80fd\u3092\u4f5c\u308a\u305f\u3044\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002\n\u30bc\u30ed\u304b\u3089\u4f5c\u308b\u5834\u5408\u3001\u30e1\u30cb\u30e5\u30fc\u306b\u5fc5\u8981\u306a\u60c5\u5831\u306b\u5bfe\u3057\u3066\u53d6\u5f97\u3067\u304d\u308b\u60c5\u5831\u306b\u904e\u4e0d\u8db3\u304c\u751f\u3058\u3066\u3044\u308b\u5834\u5408\u3001\u6700\u7d42\u51fa\u529b\u307e\u3067\u306b\u5909\u63db\u3092\u5165\u308c\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),Object(c.b)("p",null,"\u521d\u671f\u30c7\u30fc\u30bf\u3068\u3057\u3066\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u3092\u8003\u3048\u307e\u3059\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'const dataSet = [\n  {\n    title: "top",\n    uri: "/top",\n    description: "\u3053\u306eweb\u30b5\u30a4\u30c8\u306eTOP\u30da\u30fc\u30b8",\n    tags: ["website"],\n  },\n  {\n    title: "about",\n    uri: "/about",\n    description: "\u3053\u306eweb\u30b5\u30a4\u30c8\u306e\u8aac\u660e",\n    tags: ["about"],\n  },\n  {\n    title: "blog",\n    uri: "/blog",\n    description: "\u30d6\u30ed\u30b0\u4e00\u89a7",\n    tags: ["article"],\n  }\n];\n')),Object(c.b)("p",null,"\u51fa\u529b\u3068\u3057\u3066\u307b\u3057\u3044\u3082\u306e\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u3057\u307e\u3059\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<ul>\n  <li><a href="https://example.com/top">top</a></li>\n  <li><a href="https://example.com/about">about</a></li>\n  <li><a href="https://example.com/blog">blog</a></li>\n</ul>\n')),Object(c.b)("h3",{id:"\u6700\u77ed\u3067\u66f8\u3044\u305f\u5834\u5408"},"\u6700\u77ed\u3067\u66f8\u3044\u305f\u5834\u5408"),Object(c.b)("p",null,"\u53d6\u308a\u3042\u3048\u305a\u52d5\u304f\u3001\u3092\u76ee\u6a19\u306b\u66f8\u3044\u305f\u30b3\u30fc\u30c9\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u66f8\u3051\u307e\u3059\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'const ul = document.createElement("ul");\ndataSet.forEach(item => {\n  const li = document.createElement("li");\n  const anchor  = document.createElement("a");\n  anchor.text = item.title;\n  anchor.href = "https://example.com" + item.uri;\n  li.appendChild(anchor);\n  ul.appendChild(li);\n});\n\nul;\n')),Object(c.b)("h3",{id:"\u5b8c\u6210\u7248"},"\u5b8c\u6210\u7248"),Object(c.b)("p",null,"\u3053\u308c\u3068\u6bd4\u8f03\u3057\u3066\u3001\u672c\u756a\u74b0\u5883\u306b\u5165\u308c\u308b\u5834\u5408\u306e\u30b3\u30fc\u30c9\u306f\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'const createElement = ({ tagName, children }) => {\n  const element = document.createElement(tagName);\n  if (children) {\n    element.appendChild(children);\n  }\n  return element;\n}\n\nconst createFragment = ({ children }) => {\n  const fragment = document.createDocumentFragment()\n  children.forEach(child => {\n    fragment.appendChild(child);\n  });\n  return fragment;\n}\n\nconst createMenuItem = (props) => {\n  const anchor = createElement({ tagName: "a" });  \n  anchor.text = props.anchor.text;\n  anchor.href = props.anchor.href;\n  return createElement({ tagName: "li", children: anchor });\n}\n\nconst createMenu = (props) => {\n  const menuItems = props.items.map(createMenuItem);\n  return createElement({ tagName: "ul", children: createFragment(menuItems) });\n}\n\nconst generateMenuProps = (dataSet, baseUrl) => {\n  const items = dataSet.map(param => {\n    return {\n      anchor: {\n        text: param.title,\n        href: baseUrl + param.uri,\n      },\n    };\n  });\n  return { items };\n}\n\nconst menuProps = generateMenuProps(dataSet, "https://example.com");\n\ncreateMenu(menuProps);\n')),Object(c.b)("p",null,"\u5b9f\u88c5\u30b3\u30fc\u30c9\u306b\u5927\u304d\u306a\u958b\u304d\u304c\u3042\u308b\u306e\u3092\u898b\u3066\u53d6\u308c\u307e\u3059\u3002\n\u306a\u305c\u3053\u306e\u3088\u3046\u306b\u5197\u9577\u7684\u306a\u30b3\u30fc\u30c9\u306b\u306a\u308b\u306e\u304b\u8aac\u660e\u3057\u307e\u3059\u3002"),Object(c.b)("h3",{id:"\u89e3\u8aac"},"\u89e3\u8aac"),Object(c.b)("p",null,"\u307e\u305a\u306f\u5b9f\u88c5\u4e0a\u306e\u30eb\u30fc\u30eb\u3092\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u5b9a\u3081\u3066\u3044\u307e\u3059\u3002"),Object(c.b)("h4",{id:"\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u30eb\u30fc\u30eb"},"\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u30eb\u30fc\u30eb"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"class\u306e\u751f\u6210\u3084\u3001DOM\u306e\u751f\u6210\u3059\u308b\u3001\u306a\u3069Native API\u3092\u53e9\u304f\u95a2\u6570\u306f\u63a5\u982d\u8f9e\u306b",Object(c.b)("inlineCode",{parentName:"li"},"create"),"\u3092\u5229\u7528\u3059\u308b"),Object(c.b)("li",{parentName:"ol"},"\u30c7\u30fc\u30bf\u5909\u63db\u3092\u3059\u308b\u95a2\u6570\u306e\u547d\u540d\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u3059\u308b",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"convertAtoB([A\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc])"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u5165\u529b\u3059\u308bA\u306e\u578b\u304c\u78ba\u5b9a\u3057\u3066\u3044\u308b\u5834\u5408"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"generate[TargetName]([\u5165\u529b\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc])"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u5165\u529b\u3059\u308b\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u306e\u578b\u304c",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u66d6\u6627\u306a\u5834\u5408"),Object(c.b)("li",{parentName:"ul"},"\u8907\u6570\u5b58\u5728\u3057\u30011\u3064\u306e\u610f\u5473\u3067\u8868\u73fe\u3067\u304d\u306a\u3044\u5834\u5408"))))))),Object(c.b)("li",{parentName:"ol"},"DOM\u751f\u6210\u306e\u95a2\u6570\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc",Object(c.b)("inlineCode",{parentName:"li"},"props"),"\u3068\u547d\u540d\u3059\u308b",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"props\u306fJavaScript\u306eObject\u306b\u3059\u308b"),Object(c.b)("li",{parentName:"ul"},"props\u5185\u306e\u30ad\u30fc\u540d\u306fprops\u3092\u5229\u7528\u3059\u308b\u95a2\u6570\u304c\u5fc5\u8981\u3068\u3059\u308b\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u540d\u306b\u3059\u308b"),Object(c.b)("li",{parentName:"ul"},"props\u306e\u5c11\u52c7\u8005\u306f\u751f\u6210\u3059\u308b\u5bfe\u8c61\u81ea\u8eab\u3068\u3059\u308b"))),Object(c.b)("li",{parentName:"ol"},"\u540c\u4e00\u30b9\u30b3\u30fc\u30d7\u5185\u3067\u547d\u540d\u304c\u304b\u3076\u308b\u5834\u5408\u306f\u3001\u95a2\u6570\u540d\u306b\u5177\u8c61\u5ea6\u304c1\u3064\u9ad8\u3044\u540d\u524d\u3092\u542b\u3081\u308b",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u30b9\u30b3\u30fc\u30d7\u5185\u3067\u885d\u7a81\u304c\u8d77\u304d\u306a\u304f\u306a\u308b\u307e\u3067\u3053\u308c\u3092\u7e70\u308a\u8fd4\u3059"))),Object(c.b)("li",{parentName:"ol"},"\u95a2\u6570\u3092\u4ee5\u4e0b\u306e\u65b9\u91dd\u3067\u5206\u5272\u3059\u308b",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u610f\u5473\u306e\u3042\u308b\u5358\u4f4d",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u610f\u5473 \u2252 \u8981\u4ef6"))),Object(c.b)("li",{parentName:"ul"},"\u540c\u3058\u5b9f\u88c5\u304c\u8907\u6570\u56de\u7e70\u308a\u8fd4\u3055\u308c\u305f\u5834\u5408"),Object(c.b)("li",{parentName:"ul"},"Mock/Stub\u30c6\u30b9\u30c8\u304c\u5fc5\u8981\u3068\u306a\u308a\u305d\u3046\u306aAPI\u3092\u76f4\u63a5\u53e9\u3044\u3066\u3044\u308b\u5834\u5408")))),Object(c.b)("h4",{id:"\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u30eb\u30fc\u30eb\u3092\u9069\u7528\u3057\u3066\u3044\u304f"},"\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u30eb\u30fc\u30eb\u3092\u9069\u7528\u3057\u3066\u3044\u304f"),Object(c.b)("p",null,"\u6700\u77ed\u3067\u66f8\u3044\u305f\u5834\u5408\u306e\u30b3\u30fc\u30c9\u306b\u5bfe\u3057\u3066\u30eb\u30fc\u30eb\u3092\u9069\u7528\u3057\u307e\u3059\u3002\n\u30eb\u30fc\u30eb\u3092\u30b3\u30fc\u30c9\u306b\u9069\u7528\u3057\u3066\u3044\u304f\u969b\u3001\u3069\u306e\u3088\u3046\u306b\u3057\u3066\u3044\u304f\u304b\u306f\u3042\u308b\u7a0b\u5ea6\u306e\u6163\u308c\u304c\u5fc5\u8981\u3067\u3059\u306e\u3067\u3001\n\u624b\u3092\u52d5\u304b\u3057\u3066\u691c\u8a3c\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Step 1 \u610f\u5473\u306e\u3042\u308b\u5358\u4f4d\u3067\u5206\u5272\u3059\u308b")),Object(c.b)("p",null,"\u6700\u521d\u306b\u7740\u624b\u3059\u308b\u306e\u306f\u8981\u4ef6\u304b\u3089\u3067\u3059\u3002\n\u308f\u304b\u308a\u3084\u3059\u306e\u306f\u8868\u793a\u306e\u90e8\u5206\u3067\u3001\u6700\u7d42\u51fa\u529b\u306f",Object(c.b)("inlineCode",{parentName:"p"},"ul > li > a"),"\u3068\u3044\u3046\u69cb\u9020\u3092\u6301\u3063\u3066\u3044\u307e\u3059\u3002\n\u30bf\u30b0\u3060\u3051\u306f\u610f\u5473\u304c\u4f1d\u308f\u3089\u306a\u3044\u306e\u3067\u3001\u547d\u540d\u3092\u3057\u307e\u3059\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"MenuItem : li > a \u306eHTMLElement\nMenuElement     : ul > MenuItem \u306eHTMLElement\n")),Object(c.b)("p",null,"\u3053\u308c\u306b\u3088\u308a\u3001",Object(c.b)("inlineCode",{parentName:"p"},"MenuItem"),"\u3068",Object(c.b)("inlineCode",{parentName:"p"},"Menu"),"\u3092\u751f\u6210\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n\u8fd4\u308a\u5024\u306f",Object(c.b)("inlineCode",{parentName:"p"},"HTMLElement"),"\u3067\u3042\u308b\u305f\u3081\u3001",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/ja/docs/Web/API/Document/createElement"}),Object(c.b)("inlineCode",{parentName:"a"},"document.createElement")),"\u3092\u5229\u7528\u3059\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002\n\u3053\u308c\u306b\u3088\u308a\u3001\u6b21\u306e\u3088\u3046\u306b\u547d\u540d\u304c\u78ba\u5b9a\u3057\u307e\u3059\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// document.createElement\u306fNative API\u3067\u3042\u308b\u305f\u3081\u3001\u63a5\u982d\u8f9e\u306b`create`\u3092\u63a1\u7528\n// create + HTMLElement(\u751f\u6210\u5bfe\u8c61)\nconst createHTMLElement = () => {}\n// Menu\u3068MenuItem\u3067\u540d\u524d\u304c\u885d\u7a81\u3059\u308b\u305f\u3081\u3001\u5177\u8c61\u5ea6\u3092\u4e0a\u3052\u308b\nconst createMenuItem = () => {}\nconst createMenu = () => {}\n")),Object(c.b)("p",null,"\u3053\u308c\u3067\u9aa8\u683c\u304c\u6574\u3044\u307e\u3057\u305f\u3002\u9aa8\u683c\u3060\u3051\u3067\u5b9f\u88c5\u3059\u308b\u3068\u3001\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const createMenuItem = () => {\n  const li = document.createElement("li");\n  const anchor = document.createElement("a");\n  li.appendChild(anchor);\n  return li;\n}\n\nconst createMenu = () => {\n  const ul = document.createElement("ul");\n  // menuItem\u3092\u30eb\u30fc\u30d7\u3067\u751f\u6210\n  // ul.appendChild(menuItem);\n  return ul;\n}\n\ncreateMenu();\n')),Object(c.b)("p",null,"\u8fd4\u308a\u5024\u306e\u547d\u540d\u306f",Object(c.b)("inlineCode",{parentName:"p"},"create[\u751f\u6210\u5bfe\u8c61]"),"\u306e\u3046\u3061\u3001",Object(c.b)("inlineCode",{parentName:"p"},"\u751f\u6210\u5bfe\u8c61"),"\u3092camelCase\u306b\u3059\u308b\u3068\u885d\u7a81\u3057\u306b\u304f\u304f\u306a\u308a\u307e\u3059\u3002\n\u305f\u3060\u3001\u4eca\u56de\u306f",Object(c.b)("inlineCode",{parentName:"p"},"document.createElement"),"\u3092\u631f\u3093\u3067\u3044\u308b\u306e\u3067\u3001\u3053\u3053\u306f\u751f\u6210\u3059\u308b\u30bf\u30b0\u540d\u3092\u5229\u7528\u3057\u307e\u3057\u305f\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'// \u751f\u6210\u5bfe\u8c61\u306f\u5f15\u6570\u306b\u5408\u81f4\u3059\u308b\u305f\u3081\u3001\u5909\u6570\u540d\u306f`ul`\u3068\u306a\u308b\n// https://developer.mozilla.org/ja/docs/Web/API/HTMLAnchorElement\nconst ul = document.createElement("ul");\n// `create + [\u751f\u6210\u5bfe\u8c61]`\u306e\u516c\u5f0f\u306b\u5f53\u3066\u306f\u3081\u3089\u308c\u308b\u305f\u3081\u3001\u5909\u6570\u540d\u306f`menuItem`\u3068\u306a\u308b\nconst menuItem = createMenuItem();\n')),Object(c.b)("p",null,"\u4f59\u8ac7\uff1a\u3061\u306a\u307f\u306b\u3001",Object(c.b)("inlineCode",{parentName:"p"},"a"),"\u30bf\u30b0\u751f\u6210\u6642\u306e\u5909\u6570\u540d\u306f",Object(c.b)("inlineCode",{parentName:"p"},"a"),"\u3067\u306f\u306a\u3044\u304b\u3068\u3044\u3046\u3068\u3001Web API\u306f",Object(c.b)("inlineCode",{parentName:"p"},"HTMLAnchorElement"),"\u304b\u3089\u547d\u540d\u3092\u5f15\u3063\u5f35\u3063\u3066\u304d\u3066\u3044\u308b\u305f\u3081\u3067\u3059\u3002\nTypeScript\u3067\u3042\u308c\u3070\u3001",Object(c.b)("inlineCode",{parentName:"p"},"React"),"\u306e\u578b\u5b9a\u7fa9\u3092\u53c2\u7167\u3057\u3066\u307f\u308b\u306e\u3082\u826f\u3044\u3067\u3057\u3087\u3046\u3002"),Object(c.b)("p",null,"\u53c2\u8003"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"HTMLAnchorElement",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/ja/docs/Web/API/HTMLAnchorElement"}),"https://developer.mozilla.org/ja/docs/Web/API/HTMLAnchorElement")))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"@types/react"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/global.d.ts#L32"}),"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/global.d.ts#L32")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/288692b272b695eda00a47f93339e1e16ee756b1/types/react/index.d.ts#L2863-L3043"}),"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/288692b272b695eda00a47f93339e1e16ee756b1/types/react/index.d.ts#L2863-L3043"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Step 2 \u5f15\u6570\u3092\u6c7a\u5b9a\u3059\u308b")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"createMenu"),"\u3068",Object(c.b)("inlineCode",{parentName:"p"},"createMenuItem"),"\u5f15\u6570\u306e\u540d\u524d\u3092\u307e\u305a\u306f\u6c7a\u3081\u307e\u3057\u3087\u3046\u3002\n\u4eca\u56de\u306f",Object(c.b)("inlineCode",{parentName:"p"},"document.createElement"),"\u3067\u751f\u6210\u3057\u305fDOM\u306b\u5bfe\u3057\u3066\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3092\u6e21\u3059\u305f\u3081\u3001",Object(c.b)("inlineCode",{parentName:"p"},"props"),"\u3068\u3044\u3046\u5909\u6570\u540d\u306b\u306a\u308a\u307e\u3059\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const createMenuItem = (props) => {}\nconst createMenu = (props) => {}\n")),Object(c.b)("p",null,"\u6b21\u306b\u3001",Object(c.b)("inlineCode",{parentName:"p"},"props"),"\uff08Object\uff09\u306e\u4e2d\u8eab\u3092\u6c7a\u5b9a\u3057\u307e\u3059\u3002\n\u30ad\u30fc\u540d\u306f\u751f\u6210\u3059\u308bHTMLElement\u306e\u540d\u524d\u3092\u5165\u308c\u308b\u306e\u304c\u826f\u3044\u3067\u3057\u3087\u3046\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const createMenuItem = (props) => {\n  // props = { anchor: {} };\n}\nconst createMenu = (props) => {\n  // props = { items: [ { anchor: { ... } }, { anchor: { ... } } ] }\n}\n")),Object(c.b)("p",null,"\u3053\u3053\u3067\u4e0d\u601d\u8b70\u3060\u3068\u601d\u3046\u306e\u304c\u3001",Object(c.b)("inlineCode",{parentName:"p"},"createMenu"),"\u306eprops\u306e\u540d\u524d\u304c",Object(c.b)("inlineCode",{parentName:"p"},"props.menuItems"),"\u3067\u306f\u306a\u3044\u3053\u3068\u3067\u3057\u3087\u3046\u3002\n\u5b9f\u306f\u3053\u308c\u30eb\u30fc\u30eb\u306b\u3082\u66f8\u304d\u307e\u3057\u305f\u304c\u3001",Object(c.b)("inlineCode",{parentName:"p"},"props"),"\u306e\u6240\u6709\u8005\u306f\u751f\u6210\u5bfe\u8c61\u3001\u3064\u307e\u308a",Object(c.b)("inlineCode",{parentName:"p"},"menu"),"\u3060\u3068\u8003\u3048\u308b\u3068\u3001\n",Object(c.b)("inlineCode",{parentName:"p"},"menu.items"),"\u3068\u8aad\u307f\u53d6\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3046\u307e\u304f\u968e\u5c64\u69cb\u9020\u3092\u8868\u73fe\u3067\u304d\u307e\u3059\u3002"),Object(c.b)("p",null,"\u3053\u3053\u307e\u3067\u3092\u5b9f\u88c5\u306b\u843d\u3068\u3059\u3068\u3001"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const createMenuItem = (props) => {\n  const li = document.createElement("li");\n  const anchor = document.createElement("a");\n  anchor.text = props.anchor.text;\n  anchor.href = props.anchor.href;\n  li.appendChild(anchor);\n  return li;\n}\n\nconst createMenu = (props) => {\n  const ul = document.createElement("ul");\n  props.items.forEach(item => {\n    const menuItem = createMenuItem(item);\n    ul.appendChild(menuItem);\n  });\n  return ul;\n}\n\ncreateMenu(/** Step3\u3078 */);\n')),Object(c.b)("p",null,"\u3068\u66f8\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Step 3 \u4e0e\u3048\u3089\u308c\u305f\u30c7\u30fc\u30bf\u3092\u5909\u63db\u3059\u308b")),Object(c.b)("p",null,"Step2\u307e\u3067\u3067\u306f\u307e\u3060\u5b9f\u88c5\u304c\u4e0d\u5341\u5206\u3067\u3059\u3002",Object(c.b)("inlineCode",{parentName:"p"},"dataSet"),"\u306b\u5bfe\u3057\u3066",Object(c.b)("inlineCode",{parentName:"p"},"createMenu"),"\u306e\u5f15\u6570\u306e\u578b\u304c\u5408\u81f4\u3057\u3066\u3044\u307e\u305b\u3093\u3002\n\u305d\u306e\u305f\u3081\u5909\u63db\u304c\u5fc5\u8981\u3068\u306a\u308a\u307e\u3059\u3002"),Object(c.b)("p",null,"\u307e\u305f\u3001dataSet\u306b\u306f\u30d9\u30fc\u30b9URL\u304c\u5b58\u5728\u3057\u306a\u3044\u305f\u3081\u3001\u8ffd\u52a0\u3059\u308b\u5b9f\u88c5\u3082\u5fc5\u8981\u3067\u3059\u3002\n\u6700\u77ed\u306e\u5b9f\u88c5\u3067\u306f\u6b21\u306e\u3088\u3046\u306b\u66f8\u3044\u3066\u3044\u305f\u90e8\u5206\u3067\u3059\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'anchor.href = "https://example.com" + item.uri;\n')),Object(c.b)("p",null,"\u3064\u307e\u308a\u3001",Object(c.b)("inlineCode",{parentName:"p"},"dataSet"),"\u3068\u30d9\u30fc\u30b9URL",Object(c.b)("inlineCode",{parentName:"p"},"https://example.com"),"\u3092\u5229\u7528\u3057\u3066\u3001",Object(c.b)("inlineCode",{parentName:"p"},"createMenu"),"\u306b\u308f\u305f\u3059\u5909\u6570\u3092\u751f\u6210\u3059\u308b\u95a2\u6570\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002"),Object(c.b)("p",null,"\u95a2\u6570\u306f",Object(c.b)("inlineCode",{parentName:"p"},"convertAtoB"),"\u5f62\u5f0f\u304b",Object(c.b)("inlineCode",{parentName:"p"},"generate[TargetName]"),"\u306e\u3069\u3061\u3089\u304b\u306b\u306a\u308a\u307e\u3059\u304c\u3001\n",Object(c.b)("inlineCode",{parentName:"p"},"convertAtoB"),"\u3092\u63a1\u7528\u3059\u308b\u5834\u5408\u306f\u5165\u529b\u3059\u308b\u5074\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u304c\u610f\u5473\u306e\u3042\u308b\u5f62\u3067\u307e\u3068\u307e\u3063\u3066\u3044\u306a\u3051\u308c\u3070",Object(c.b)("inlineCode",{parentName:"p"},"A"),"\u3092\u547d\u540d\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u305b\u3093\u3002\u3064\u307e\u308a\u3001\u4eca\u56de\u306e\u5834\u5408\u3001",Object(c.b)("inlineCode",{parentName:"p"},"dataSet"),"\u3068\u30d9\u30fc\u30b9URL\u306e\u584a\u306b\u547d\u540d\u304c\u3067\u304d\u308c\u3070\u5229\u7528\u3067\u304d\u307e\u3059\u304c\u3001",Object(c.b)("strong",{parentName:"p"},"\u5177\u4f53\u7684\u306a"),"\u540d\u524d\u304c\u304b\u3093\u305f\u3093\u306b\u306f\u601d\u3044\u3064\u304b\u306a\u3044\u306e\u3067\u3001",Object(c.b)("inlineCode",{parentName:"p"},"generate[TargetName]"),"\u5f62\u5f0f\u306e\u547d\u540d\u3092\u884c\u3044\u307e\u3059\u3002"),Object(c.b)("p",null,"\u751f\u6210\u5bfe\u8c61\u306f",Object(c.b)("inlineCode",{parentName:"p"},"createMenu"),"\u306e\u5165\u529b\u5909\u6570\u3001\u3064\u307e\u308a\u3001",Object(c.b)("inlineCode",{parentName:"p"},"Menu"),"\u306e",Object(c.b)("inlineCode",{parentName:"p"},"props")," -> ",Object(c.b)("inlineCode",{parentName:"p"},"MenuProps"),"\u306b\u306a\u308a\u307e\u3059\u3002\n\u3086\u3048\u306b\u3001"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const generateMenuProps = () => {}\n")),Object(c.b)("p",null,"\u3068\u95a2\u6570\u540d\u304c\u6c7a\u5b9a\u3055\u308c\u307e\u3059\u3002\u3053\u306e\u95a2\u6570\u306e\u5f15\u6570\u306f",Object(c.b)("inlineCode",{parentName:"p"},"Menu"),"\u306e",Object(c.b)("inlineCode",{parentName:"p"},"Props"),"\u3092\u751f\u6210\u306b\u5fc5\u8981\u306a\u7d20\u6750\u3092\u6e21\u3059\u3060\u3051\u3067\u3059\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const generateMenuProps = (dataSet, baseUrl) => {}\n")),Object(c.b)("p",null,"\u3053\u3053\u307e\u3067\u6765\u305f\u3089\u5f8c\u306f\u5909\u63db\u3059\u308b\u5b9f\u88c5\u30b3\u30fc\u30c9\u3092\u66f8\u304f\u3060\u3051\u306b\u306a\u308a\u307e\u3059\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const generateMenuProps = (dataSet, baseUrl) => {\n  const items = dataSet.map(param => {\n    return {\n      anchor: {\n        text: param.title,\n        href: baseUrl + param.uri,\n      },\n    };\n  });\n  return { items };\n}\n")),Object(c.b)("p",null,"\u3053\u308c\u3067\u5b8c\u6210\u3067\u3059\u3002\u7d50\u5408\u3057\u3066\u307f\u308b\u3068\u3001"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const createMenuItem = (props) => {\n  const li = document.createElement("li");\n  const anchor = document.createElement("a");\n  anchor.text = props.anchor.text;\n  anchor.href = props.anchor.href;\n  li.appendChild(anchor);\n  return li;\n}\n\nconst createMenu = (props) => {\n  const ul = document.createElement("ul");\n  props.items.forEach(item => {\n    const menuItem = createMenuItem(item);\n    ul.appendChild(menuItem);\n  });\n  return ul;\n}\n\nconst generateMenuProps = (dataSet, baseUrl) => {\n  const items = dataSet.map(param => {\n    return {\n      anchor: {\n        text: param.title,\n        href: baseUrl + param.uri,\n      },\n    };\n  });\n  return { items };\n}\n\nconst menuProps = generateMenuProps(dataSet, "http://example.com");\n\ncreateMenu(menuProps);\n')),Object(c.b)("p",null,"\u307b\u3068\u3093\u3069\u3053\u308c\u3067\u5b8c\u6210\u3068\u8a00\u3063\u3066\u3082\u554f\u984c\u306a\u3044\u3067\u3057\u3087\u3046\u3002\nStep 4\u79fb\u884c\u306f\u4f53\u88c1\u3092\u6574\u3048\u3066\u3044\u4f5c\u696d\u3092\u884c\u3044\u307e\u3059\u3002"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Step 4")))}i.isMDXComponent=!0},197:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return j}));var a=t(0),r=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=r.a.createContext({}),i=function(e){var n=r.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},m=function(e){var n=i(e.components);return r.a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},s=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),m=i(t),s=a,j=m["".concat(l,".").concat(s)]||m[s]||u[s]||c;return t?r.a.createElement(j,p(p({ref:n},o),{},{components:t})):r.a.createElement(j,p({ref:n},o))}));function j(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,l=new Array(c);l[0]=s;var p={};for(var b in n)hasOwnProperty.call(n,b)&&(p[b]=n[b]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var o=2;o<c;o++)l[o]=t[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);