declare module "@mdx-js/mdx" {
  export interface Options {
    filepath?: string;
    footnotes?: boolean;
    mdPlugins?: any[];
    hastPlugins?: any[];
    compilers?: any[];
    blocks?: string[];
    skipExport?: boolean;
    layout?: boolean;
    preserveNewlines?: boolean;
  }
  function mdx(content: string, options?: Options): string;
  export function sync(content: string, options?: Options): string;
  export default mdx;
}

declare module "@mdx-js/react" {
  import * as React from "react";

  export interface LayoutProps {
    children: React.ReactNode[];
    id: string;
  }

  export const MDXContext: {
    $$typeof: symbol;
    Consumer: {
      $$typeof: symbol;
      Consumer: any;
      Provider: any;
    };
    Provider: {
      $$typeof: symbol;
    };
  };

  export function MDXProvider<T>(props: T): React.Context<T>

  export function mdx(type: string, props?: { mdxType?: string }): React.FunctionComponent;

  export type CustomComponents = { [P in keyof JSX.IntrinsicElements]?: (props: JSX.IntrinsicElements[P]) => React.ReactNode } & {
    [key: string]: (props: any) => React.ReactNode;
  }; // 独自拡張用

  // TODO どうやって決めたか思い出す
  export interface MDXTagProps<T extends keyof CustomComponents> {
    name: T;
    parentName?: keyof JSX.IntrinsicElements;
    props?: T extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[T] : any;
    children?: React.ReactNode | React.ReactNode[] | string;
    components?: CustomComponents;
    Layout?: ({ children, id }: LayoutProps) => React.ReactNode[];
    layoutProps?: LayoutProps;
  }

  export function useMDXComponents(e: any): any;
  export function withMDXComponents(e: any): any;
}