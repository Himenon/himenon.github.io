"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const headerContent = (props) => {
    return (React.createElement("div", { id: "header" },
        React.createElement("div", { className: "wrapper" },
            React.createElement("a", { href: props.site.baseUri, className: "btn" }, props.site.title),
            React.createElement("ul", { className: "nav" },
                React.createElement("li", { className: "downloads" },
                    React.createElement("a", { href: "https://github.com/custom-site/custom-site", className: "btn" }, "Github"))))));
};
const mainContent = (props, content) => {
    return (React.createElement("div", { className: "wrapper" },
        React.createElement("section", null,
            React.createElement("h1", null, props.page.metaData.title),
            content)));
};
const wrappedContent = (props, content) => {
    return (React.createElement("body", null,
        headerContent(props),
        mainContent(props, content)));
};
exports.createBodyTemplateFunction = (props) => (content) => {
    return wrappedContent(props, content);
};
