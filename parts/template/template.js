"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const dayjs = require("dayjs");
const IndexList = ({ props: indexes }) => {
    const total = indexes.length;
    const items = indexes.map((item, idx) => {
        return (React.createElement("tr", { key: item.uri },
            React.createElement("td", null, total - idx),
            React.createElement("td", { key: item.uri },
                React.createElement("a", { href: item.uri, rel: "noopener", target: "_blank" }, item.title))));
    });
    return (React.createElement("table", null,
        React.createElement("thead", null,
            React.createElement("td", null, "Back Number"),
            React.createElement("td", null, "Posted at"),
            React.createElement("td", null, "Title")),
        React.createElement("tbody", null, items)));
};
const Header = (props) => {
    const postDate = dayjs(props.page.metaData.createdAt).format("YYYY-MM-DD hh:mm:ss");
    return (React.createElement("div", null,
        React.createElement("nav", { id: "nav-bar" },
            React.createElement("a", { href: "/" }, "Top")),
        React.createElement("header", { id: "site-header" },
            React.createElement("h1", null, props.page.metaData.title),
            React.createElement("p", null, props.page.metaData.description),
            React.createElement("p", null,
                React.createElement("span", null, "\u6295\u7A3F\u65E5"),
                React.createElement("time", null, postDate)))));
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
