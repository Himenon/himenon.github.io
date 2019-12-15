import { ExternalCustomComponent } from "@custom-site/interfaces/lib/page";
import { CustomComponents } from "@mdx-js/react";
import * as Prism from "prismjs";
import * as React from "react";

/**
 * ハイライトしたい言語のjsファイルを読み込んでおく
 */
require("prismjs/components/prism-typescript.min.js");
require("prismjs/components/prism-jsx.min.js");
require("prismjs/components/prism-tsx.min.js"); // jsxの後ろに定義する
require("prismjs/components/prism-json.min.js");
require("prismjs/components/prism-yaml.min.js");
require("prismjs/components/prism-bash.js");
require("prismjs/components/prism-markdown.min.js");
require("prismjs/components/prism-python.min.js");
require("prismjs/components/prism-bash.min.js");

const SUPPORT_LANGUAGES = Object.keys(Prism.languages);

const getLanguageDefinition = (lang: string): Prism.Grammar | null => {
  if (SUPPORT_LANGUAGES.includes(lang)) {
    return Prism.languages[lang];
  }
  return null;
};

export const generateCustomComponents: ExternalCustomComponent["generateCustomComponents"] = (): CustomComponents => {
  return {
    pre: props => <>{props.children}</>,
    code: props => {
      const lang = props.className ? props.className.slice("language-".length) : "";
      const code = typeof props.children === "string" ? props.children : "";
      const grammar = getLanguageDefinition(lang);
      let highlightHtml: string | undefined;
      if (grammar) {
        highlightHtml = Prism.highlight(code, grammar, lang);
      }
      if (!grammar) {
        return (
          <pre className={"language-plain"}>
            <code className={"language-plain"} {...props} />
          </pre>
        );
      }
      document.createElement("ul", {});
      const newProps: JSX.IntrinsicElements["code"] = {
        ...props,
        children: undefined,
        dangerouslySetInnerHTML: {
          __html: highlightHtml || "",
        },
      };
      return (
        <pre className={props.className}>
          <code {...newProps} />
        </pre>
      );
    },
  };
};
