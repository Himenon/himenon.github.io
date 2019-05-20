import { PostProps } from "@custom-site/interfaces/lib/page";
import * as React from "react";

// const IndexList = (props: Index[]) => {
//   props.map(prop => {
//     return <li key={prop.uri}>{prop.title}</li>
//   })
// }

const Header = (props: PostProps): React.ReactElement<any> => {
  return (
    <div id="header">
      <h1>{props.site.title}</h1>
    </div>
  );
};

const Main = ({ props, content }: { props: PostProps; content?: React.ReactNode }): React.ReactElement<any> => {
  return (
    <div className="wrapper">
      <section>
        <h1>{props.page.metaData.title}</h1>
        {content}
      </section>
    </div>
  );
};

const wrappedContent = (props: PostProps, content?: React.ReactNode): React.ReactElement<any> => {
  return (
    <body>
      <Header {...props} />
      <Main {...{ props, content }} />
    </body>
  );
};

export const createBodyTemplateFunction = (props: PostProps) => (content?: React.ReactNode): React.ReactElement<any> => {
  return wrappedContent(props, content);
};
