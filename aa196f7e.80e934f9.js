(window.webpackJsonp=window.webpackJsonp||[]).push([[93,21],{225:function(e,t,r){"use strict";var a=r(3),l=r(7),n=r(0),o=r(218),c=r(219),s=r(22),m=r(221),i=r(54),f=r.n(i);function u(e){var t=e.to,r=e.href,o=e.label,s=e.prependBaseUrlToHref,i=Object(l.a)(e,["to","href","label","prependBaseUrlToHref"]),f=Object(m.a)(t),u=Object(m.a)(r,{forcePrependBaseUrl:!0});return n.createElement(c.a,Object(a.a)({className:"footer__link-item"},r?{target:"_blank",rel:"noopener noreferrer",href:s?u:r}:{to:f},i),o)}var _=function(e){var t=e.url,r=e.alt;return n.createElement("img",{className:"footer__logo",alt:r,src:t})};t.a=function(){var e=Object(s.default)().siteConfig,t=(void 0===e?{}:e).themeConfig,r=(void 0===t?{}:t).footer,a=r||{},l=a.copyright,c=a.links,i=void 0===c?[]:c,d=a.logo,h=void 0===d?{}:d,E=Object(m.a)(h.src);return r?n.createElement("footer",{className:Object(o.a)("footer",{"footer--dark":"dark"===r.style})},n.createElement("div",{className:"container"},i&&i.length>0&&n.createElement("div",{className:"row footer__links"},i.map((function(e,t){return n.createElement("div",{key:t,className:"col footer__col"},null!=e.title?n.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?n.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?n.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):n.createElement("li",{key:e.href||e.to,className:"footer__item"},n.createElement(u,e))}))):null)}))),(h||l)&&n.createElement("div",{className:"text--center"},h&&h.src&&n.createElement("div",{className:"margin-bottom--sm"},h.href?n.createElement("a",{href:h.href,target:"_blank",rel:"noopener noreferrer",className:f.a.footerLogoLink},n.createElement(_,{alt:h.alt,url:E})):n.createElement(_,{alt:h.alt,url:E})),n.createElement("div",{dangerouslySetInnerHTML:{__html:l}})))):null}}}]);