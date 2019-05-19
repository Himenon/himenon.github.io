import * as React from "react";
import { PostProps } from "@custom-site/interfaces/lib/page";

const headerContent = (props: PostProps): React.ReactElement<any> => {
  return (
  <div id="header">
    <div className="wrapper">
      <a href={props.site.baseUri} className="btn">{props.site.title}</a>
      <ul className="nav">
        <li className="downloads"><a href="https://github.com/custom-site/custom-site" className="btn">Github</a></li>
      </ul>
    </div>
  </div>
  );
}

const mainContent = (props: PostProps, content?: React.ReactNode): React.ReactElement<any> => {
  return (
    <div className="wrapper">
      <section>
        <h1>{props.page.metaData.title}</h1>
        {content}
      </section>
    </div>
  )
}

const wrappedContent = (props: PostProps, content?: React.ReactNode): React.ReactElement<any> => {
  return (
    <body>
      {headerContent(props)}
      {mainContent(props, content)}
    </body>
  );
};

export const createBodyTemplateFunction = (props: PostProps) => (content?: React.ReactNode): React.ReactElement<any> => {
  return wrappedContent(props, content);
};
