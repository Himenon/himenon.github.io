// tslint:disable-next-line:no-reference
/// <reference path="../../node_modules/@custom-site/custom-site/typings/@custom-site/index.d.ts"/>

import { ExternalLink } from "@custom-site/page";
import { PluginFunctionMap } from "@custom-site/plugin";
import urljoin = require("url-join");

const pretty = require('pretty');

const getOgImageSource = (globalLinks: ExternalLink["globalLinks"]): string | undefined => {
  if (!globalLinks) {
    return;
  }
  const result = globalLinks.find(item => {
    if (typeof item === "string") {
      return false;
    }
    return item.rel === "apple-touch-icon";
  })
  if (result && typeof result !== "string") {
    return result.href;
  }
  return;
}

export const onGenerateMetaData: PluginFunctionMap["onGenerateMetaData"] = payload => {
  const page = payload.page;
  const currentPageAbsolutePath = urljoin(payload.site.baseUrl, page.uri);
  const imageUrl = getOgImageSource(page.metaData.globalLinks);
  payload.page.metaData = {
    ...payload.page.metaData,
    extend: {
      meta: [
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: "twitter:site",
          content: "@Himenon",
        },
        {
          property: "og:title",
          content: page.metaData.title,
        },
        {
          property: "og:url",
          content: currentPageAbsolutePath
        },
        {
          property: "og:description",
          content: page.metaData.description
        },
        {
          property: "og:image",
          content: urljoin(payload.site.baseUrl, imageUrl || "")
        },
      ]
    }
  };
  return payload;
};


export const onAfterRenderPage: PluginFunctionMap["onAfterRenderPage"] = (payload) => {
  return {
    html: pretty(payload.html)
  }
}