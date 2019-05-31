import { Index, PostProps } from "@custom-site/interfaces/lib/page";
import * as dayjs from "dayjs";
import * as React from "react";

const IndexList = ({ props: indexes }: { props: Index[] }) => {
  const total = indexes.length;
  const items = indexes.map((item, idx) => {
    return (
      <tr key={item.uri}>
        <td>{total - idx}</td>
        <td key={item.uri}>
          <a href={item.uri} rel="noopener">
            {item.title}
          </a>
        </td>
      </tr>
    );
  });
  return (
    <table id="post-articles">
      <thead>
        <tr>
          <td>Back Number</td>
          <td>Title</td>
        </tr>
      </thead>
      <tbody>{items}</tbody>
    </table>
  );
};

const Header = (props: PostProps): React.ReactElement<any> => {
  const postedAt: string = dayjs((props.page.metaData as any).createdAt).format("YYYY-MM-DD hh:mm:ss");
  const updatedAt: string = dayjs((props.page.metaData as any).updatedAt).format("YYYY-MM-DD hh:mm:ss");
  return (
    <div>
      <nav id="nav-bar">
        <div id="nav-bar-container">
          <a href="/">TOP</a>
        </div>
      </nav>
      <header id="site-header">
        <div id="site-header-container">
          <h1 id="page-title">{props.page.metaData.title}</h1>
          {props.page.metaData.description && <p id="page-description">{props.page.metaData.description}</p>}
          <p id="article-time">
            <span id="posted-at__label">投稿日</span>
            <time>{postedAt}</time>
            <span id="created-at__label">更新日</span>
            <time>{updatedAt}</time>
          </p>
        </div>
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
