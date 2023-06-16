import React from "react";
import { Comment, List, Tooltip } from "antd";

interface CommitInfo {
  author: string;
  avatar: string;
  content: string;
  createDate: string;
}

interface PropsType {
  data: CommitInfo[];
}

export const ProductComment: React.FC<PropsType> = (props) => {
  const { data } = props;
  return   <List
  className="comment-list"
  itemLayout="horizontal"
  dataSource={data}
  renderItem={item => (
    <li>
      <Comment
        author={item.author}
        avatar={item.avatar}
        content={item.content}
        datetime={item.createDate}
      />
    </li>
  )}
/>;
};
