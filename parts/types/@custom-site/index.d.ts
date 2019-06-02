declare module "@custom-site/development" {
  export interface FileWatchFlag {
    filename: string;
  }
}

declare module "@custom-site/plugin" {
  export type PluginName = string;
  import { PageState, SiteState } from "@custom-site/page";

  export interface State {
    /** Return Value only Use page.metaData */
    GENERATE_META_DATA: { site: SiteState; page: PageState };
    /** Render Page converter */
    AFTER_RENDER_PAGE: { html: string };
  }

  export type CreateHandlerMap<T> = { [P in keyof T]?: Array<(payload: T[P]) => T[P]> };
  export type CreateHandler<K extends keyof EventHandlerMap> = (payload: State[K]) => State[K];
  export type EventHandlerMap = CreateHandlerMap<State>;

  export interface PluginFunctionMap {
    onGenerateMetaData?: CreateHandler<"GENERATE_META_DATA">;
    onAfterRenderPage?: CreateHandler<"AFTER_RENDER_PAGE">;
  }

  export interface PluginDetail {
    name: PluginName;
    resolve?: string;
  }

  export type Plugin = PluginDetail | PluginName;
}

declare module "@custom-site/internal" {
  import { Plugin } from "@custom-site/plugin";
  import { CommonOption } from "@custom-site/config";
  export interface State {
    plugins: Plugin[];
    pluginPaths: string[];
    config: CommonOption;
  }
}

declare module "@custom-site/cli" {
  export interface Option {
    outDir?: string;
    dev?: boolean;
    open?: boolean;
    port?: string;
    basePath?: string;
    layout?: string;
    config?: string;
    components?: string;
  }
}

declare module "@custom-site/config" {
  import { FileWatchFlag } from "@custom-site/development";
  import { HtmlMetaData } from "@custom-site/page";
  import { Plugin } from "@custom-site/plugin";
  export interface CommonOption {
    /**
     * `config.json`のパス
     */
    configFile?: string;
    /**
     * 記事のソースファイルがあるディレクトリ
     * configFileからの相対パス
     */
    source: string;
    global: HtmlMetaData;
    destination?: string;
    baseUri: string;
    baseUrl: string;
    port: number;
    blacklist: {
      extensions: string[];
    };
    layoutFile?: string;
    customComponentsFile?: string;
    plugins: Plugin[];
    __type?: "PRODUCTION" | "DEVELOPMENT";
  }
  /**
   * optionalのみの追加を認める
   */
  export interface DevelopOption extends CommonOption {
    __type: "DEVELOPMENT";
    watcher?: FileWatchFlag;
    open?: boolean;
  }
  /**
   * optionalのみの追加を認める
   */
  export interface BuildOption extends CommonOption {
    __type: "PRODUCTION";
    destination: string;
  }
  export interface Options {
    develop?: DevelopOption;
    build?: BuildOption;
  }
}

declare module "@custom-site/page" {
  import { CustomComponents } from "@mdx-js/react";

  // TODO Plugin
  export interface TwitterMeta {
    "twitter:card"?: "summary" | "summary_large_image";
    "twitter:site"?: string;
  }

  // TODO Plugin
  export interface OGP {
    "og:title"?: string;
    "og:description"?: string;
    "og:url"?: string;
    "og:image"?: string;
  }

  export type ScriptHTMLAttributes = JSX.IntrinsicElements["script"];

  export type LinkHTMLAttributes = JSX.IntrinsicElements["link"];

  export type MetaHTMLAttributes = JSX.IntrinsicElements["meta"];

  export interface ExternalJavaScript {
    js?: Array<string | ScriptHTMLAttributes>;
    localScripts?: Array<string | ScriptHTMLAttributes>;
    globalScripts?: Array<string | ScriptHTMLAttributes>;
  }

  export interface ExternalCSS {
    css?: Array<string | LinkHTMLAttributes>;
  }

  export interface ExternalLink {
    link?: Array<string | LinkHTMLAttributes>;
    localLinks?: Array<string | LinkHTMLAttributes>;
    globalLinks?: Array<string | LinkHTMLAttributes>;
  }

  export interface ThirdParty {
    googleAnalytics?: {
      ua?: string;
    };
  }

  export interface HtmlMetaData extends ExternalJavaScript, ExternalCSS, ExternalLink {
    /**
     * Default Support Meta Property Set
     */
    lang?: string;
    description?: string;
    keywords?: string;
    title?: string;
    tags?: string;
    stylesheets?: string[];
    layout?: string;
    copyright?: string;
    author?: string;
    viewport?: {
      "initial-scale"?: number | string;
      "maximum-scale"?: number | string;
      "minimum-scale"?: number | string;
      "user-scalable"?: "no";
      width?: number | "device-width";
    };
    /**
     * Extendable Meta Property Parameters
     */
    extend?: {
      meta?: MetaHTMLAttributes[];
      script?: ScriptHTMLAttributes[];
      link?: LinkHTMLAttributes[];
    };
    thirdParty?: ThirdParty;
  }

  export type createTemplateFunction = (props: PostProps) => (content?: React.ReactNode) => React.ReactElement<any>;

  export interface ExternalTemplate {
    createBodyTemplateFunction: createTemplateFunction;
  }

  export interface ExternalCustomComponent {
    generateCustomComponents: () => CustomComponents;
  }

  export interface TemplateProps {
    postProps: PostProps;
    createTemplateFunction?: createTemplateFunction;
  }

  export interface SiteState {
    title: string;
    description: string;
    baseUri: string;
    baseUrl: string;
  }

  export interface ArticleProps {
    metaData: HtmlMetaData;
  }

  export interface PageState {
    uri: string;
    content: string;
    metaData: HtmlMetaData;
    ext: string;
    filename: string;
    name: string;
    raw: string;
  }

  export interface Index {
    uri: string;
    title: string;
    keywords: string[];
  }

  export interface PostProps {
    site: SiteState;
    page: PageState;
    indexes: Index[];
  }

  export interface RenderedStaticPage {
    name: PageState["name"];
    originalName: string;
    html: string;
  }
}
