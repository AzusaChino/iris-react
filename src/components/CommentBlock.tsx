import React, { useEffect, useState } from "react";
import { Comment } from "../models/comment";
import CommentItem from "./CommentItem";
import { queryComment } from "../api";

type CommentBlockProps = {
  articleId: string;
};

const CommentBlock = (props: CommentBlockProps) => {
  const [comments, setComments] = useState<Array<Comment>>();

  const { articleId } = props;

  useEffect(() => {
    const fetchData = async () => {
      const result = await queryComment(articleId);
      setComments(result.data.data);
    };
    fetchData();
    // 监听传入对象，随之改变刷新dom
  }, [articleId]);

  return (
    <div>
      <div className="commentArea"></div>
      <div>
        {comments ? (
          comments.map((c) => {
            return <CommentItem comment={c} />;
          })
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default CommentBlock;
