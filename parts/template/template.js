"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dayjs = require("dayjs");
const React = require("react");
const IndexList = ({ props: indexes }) => {
    const total = indexes.length;
    const items = indexes.map((item, idx) => {
        return (React.createElement("tr", { key: item.uri },
            React.createElement("td", null, total - idx),
            React.createElement("td", { key: item.uri },
                React.createElement("a", { href: item.uri, rel: "noopener" }, item.title))));
    });
    return (React.createElement("table", { id: "post-articles" },
        React.createElement("thead", null,
            React.createElement("tr", null,
                React.createElement("td", null, "Back Number"),
                React.createElement("td", null, "Title"))),
        React.createElement("tbody", null, items)));
};
const Header = (props) => {
    const postedAt = dayjs(props.page.metaData.createdAt).format("YYYY-MM-DD hh:mm:ss");
    const updatedAt = dayjs(props.page.metaData.updatedAt).format("YYYY-MM-DD hh:mm:ss");
    return (React.createElement("div", null,
        React.createElement("nav", { id: "nav-bar" },
            React.createElement("div", { id: "nav-bar-container" },
                React.createElement("a", { href: "/" }, "TOP"))),
        React.createElement("header", { id: "site-header" },
            React.createElement("div", { id: "site-header-container" },
                React.createElement("h1", { id: "page-title" }, props.page.metaData.title),
                props.page.metaData.description && React.createElement("p", { id: "page-description" }, props.page.metaData.description),
                React.createElement("p", { id: "article-time" },
                    React.createElement("span", { id: "posted-at__label" }, "\u6295\u7A3F\u65E5"),
                    React.createElement("time", null, postedAt),
                    React.createElement("span", { id: "created-at__label" }, "\u66F4\u65B0\u65E5"),
                    React.createElement("time", null, updatedAt))))));
};
const Main = ({ props, content }) => {
    return (React.createElement("div", { className: "wrapper" },
        React.createElement("section", null, content),
        props.page.uri === "" && React.createElement(IndexList, { props: props.indexes })));
};
const wrappedContent = (props, content) => {
    return (React.createElement("body", null,
        React.createElement(Header, Object.assign({}, props)),
        React.createElement(Main, Object.assign({}, { props, content }))));
};
exports.createBodyTemplateFunction = (props) => (content) => {
    return wrappedContent(props, content);
};
