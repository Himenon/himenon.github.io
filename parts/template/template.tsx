import { Index, PostProps } from "@custom-site/interfaces/lib/page";
import * as React from "react";
import * as dayjs from "dayjs";

const IndexList = ({ props: indexes }: { props: Index[] }) => {
  const total = indexes.length;
  const items = indexes.map((item, idx) => {
    return (
      <tr key={item.uri}>
        <td>{total - idx}</td>
        <td key={item.uri}>
          <a href={item.uri} rel="noopener" target="_blank">
            {item.title}
          </a>
        </td>
      </tr>
    );
  });
  return (
    <table>
      <thead>
        <td>Back Number</td>
        <td>Posted at</td>
        <td>Title</td>
      </thead>
      <tbody>{items}</tbody>
    </table>
  );
};

const Header = (props: PostProps): React.ReactElement<any> => {
  const postDate: string = dayjs((props.page.metaData as any).createdAt).format("YYYY-MM-DD hh:mm:ss");
  return (
    <div>
      <nav id="nav-bar">
        <a href="/">Top</a>
      </nav>
      <header id="site-header">
        <h1>{props.page.metaData.title}</h1>
        <p>{props.page.metaData.description}</p>
        <p>
          <span>投稿日</span>
          <time>{postDate}</time>
        </p>
      </header>
    </div>
  );
};

const Main = ({ props, content }: { props: PostProps; content?: React.ReactNode }): React.ReactElement<any> => {
  return (
    <div className="wrapper">
      <section>{content}</section>
      {props.page.uri === "" && <IndexList props={props.indexes} />}
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
