(window.webpackJsonp=window.webpackJsonp||[]).push([[114,21,93],{215:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(224),i=a(246),c=a(219);var o=function(e){var t=e.nextItem,a=e.prevItem;return r.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog post page navigation"},r.a.createElement("div",{className:"pagination-nav__item"},a&&r.a.createElement(c.a,{className:"pagination-nav__link",to:a.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Newer Post"),r.a.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&r.a.createElement(c.a,{className:"pagination-nav__link",to:t.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Older Post"),r.a.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},s=a(230),m=a(251);t.default=function(e){var t=e.content,a=e.sidebar,n=t.frontMatter,c=t.metadata,d=c.title,u=c.description,v=c.nextItem,f=c.prevItem,g=c.editUrl,E=n.hide_table_of_contents;return r.a.createElement(l.a,{title:d,description:u,wrapperClassName:"blog-wrapper"},t&&r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--2"},r.a.createElement(s.a,{sidebar:a})),r.a.createElement("main",{className:"col col--8"},r.a.createElement(i.a,{frontMatter:n,metadata:c,isBlogPostPage:!0},r.a.createElement(t,null)),r.a.createElement("div",null,g&&r.a.createElement("a",{href:g,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},r.a.createElement("g",null,r.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(v||f)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement(o,{nextItem:v,prevItem:f}))),!E&&t.rightToc&&r.a.createElement("div",{className:"col col--2"},r.a.createElement(m.a,{headings:t.rightToc})))))}},225:function(e,t,a){"use strict";var n=a(3),r=a(7),l=a(0),i=a(218),c=a(219),o=a(22),s=a(221),m=a(54),d=a.n(m);function u(e){var t=e.to,a=e.href,i=e.label,o=e.prependBaseUrlToHref,m=Object(r.a)(e,["to","href","label","prependBaseUrlToHref"]),d=Object(s.a)(t),u=Object(s.a)(a,{forcePrependBaseUrl:!0});return l.createElement(c.a,Object(n.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:o?u:a}:{to:d},m),i)}var v=function(e){var t=e.url,a=e.alt;return l.createElement("img",{className:"footer__logo",alt:a,src:t})};t.a=function(){var e=Object(o.default)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=a||{},r=n.copyright,c=n.links,m=void 0===c?[]:c,f=n.logo,g=void 0===f?{}:f,E=Object(s.a)(g.src);return a?l.createElement("footer",{className:Object(i.a)("footer",{"footer--dark":"dark"===a.style})},l.createElement("div",{className:"container"},m&&m.length>0&&l.createElement("div",{className:"row footer__links"},m.map((function(e,t){return l.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?l.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):l.createElement("li",{key:e.href||e.to,className:"footer__item"},l.createElement(u,e))}))):null)}))),(g||r)&&l.createElement("div",{className:"text--center"},g&&g.src&&l.createElement("div",{className:"margin-bottom--sm"},g.href?l.createElement("a",{href:g.href,target:"_blank",rel:"noopener noreferrer",className:d.a.footerLogoLink},l.createElement(v,{alt:g.alt,url:E})):l.createElement(v,{alt:g.alt,url:E})),l.createElement("div",{dangerouslySetInnerHTML:{__html:r}})))):null}},251:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(218);var i=function(e,t,a){var r=Object(n.useState)(void 0),l=r[0],i=r[1];Object(n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var r=0,c=!1,o=document.getElementsByClassName(e);r<o.length&&!c;){var s=o[r],m=s.href,d=decodeURIComponent(m.substring(m.indexOf("#")+1));n.id===d&&(l&&l.classList.remove(t),s.classList.add(t),i(s),c=!0),r+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},c=a(56),o=a.n(c),s="table-of-contents__link";function m(e){var t=e.headings,a=e.isChild;return t.length?r.a.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:"#"+e.id,className:s,dangerouslySetInnerHTML:{__html:e.value}}),r.a.createElement(m,{isChild:!0,headings:e.children}))}))):null}t.a=function(e){var t=e.headings;return i(s,"table-of-contents__link--active",100),r.a.createElement("div",{className:Object(l.a)(o.a.tableOfContents,"thin-scrollbar")},r.a.createElement(m,{headings:t}))}}}]);