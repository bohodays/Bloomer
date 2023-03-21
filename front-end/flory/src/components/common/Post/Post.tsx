import React from 'react';
import { SPost } from "./styles";

function Post(props:any) {
  return (
    <SPost>
      <div className="title">{props.title}</div>
      <div>{props.content}</div>
    </SPost>
  );
}

export default Post;