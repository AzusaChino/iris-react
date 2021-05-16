import { Avatar } from "antd";
import React from "react";
import { Comment } from "../models/comment";

type CommentProps = {
  comment: Comment;
};

const CommentItem = (props: CommentProps) => {
  const { comment } = props;

  return (
    <div style={{ margin: "auto" }}>
      <div className="">
        <Avatar src={comment.avatar} />
        <span>{comment.username}</span>
      </div>
      <div className="">
        <span>{comment.time}</span>
        <span>{comment.content}</span>
      </div>
    </div>
  );
};

export default CommentItem;
