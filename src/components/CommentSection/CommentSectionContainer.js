// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // const [comments] = useState(Comment);
  // Add state for the comments

  return (
    <div>
      {props.comments.map(p => (
        <Comment comment={p} />
      ))}
      {/* map through the comments data and return the Comment component */}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
