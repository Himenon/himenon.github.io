"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Prism = require("prismjs");
const React = require("react");
require("prismjs/components/prism-typescript.min.js");
require("prismjs/components/prism-jsx.min.js");
require("prismjs/components/prism-tsx.min.js");
require("prismjs/components/prism-json.min.js");
require("prismjs/components/prism-yaml.min.js");
require("prismjs/components/prism-bash.js");
require("prismjs/components/prism-markdown.min.js");
require("prismjs/components/prism-python.min.js");
require("prismjs/components/prism-bash.min.js");
const SUPPORT_LANGUAGES = Object.keys(Prism.languages);
const getLanguageDefinition = (lang) => {
    if (SUPPORT_LANGUAGES.includes(lang)) {
        return Prism.languages[lang];
    }
    return null;
};
exports.generateCustomComponents = () => {
    return {
        pre: props => React.createElement(React.Fragment, null, props.children),
        code: props => {
            const lang = props.className ? props.className.slice("language-".length) : "";
            const code = typeof props.children === "string" ? props.children : "";
            const grammar = getLanguageDefinition(lang);
            let highlightHtml;
            if (grammar) {
                highlightHtml = Prism.highlight(code, grammar, lang);
            }
            if (!lang || !grammar) {
                return (React.createElement("pre", null,
                    React.createElement("code", Object.assign({}, props))));
            }
            const newProps = {
                ...props,
                children: undefined,
                dangerouslySetInnerHTML: {
                    __html: highlightHtml || "",
                },
            };
            return (React.createElement("pre", { className: props.className },
                React.createElement("code", Object.assign({}, newProps))));
        },
    };
};
