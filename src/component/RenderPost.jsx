import React, { useEffect } from "react";
import TimerDop from "./Toogle";

const Posts = ({data}) => {
  return (
    <ul style={{width: "1000px"}}>
      <ol style={{border: "2px solid red"}}>id: {data.id}</ol>
      <ol style={{border: "2px solid red"}}>body: {data.body}</ol>
      <ol style={{border: "2px solid red"}}>title: {data.title}</ol>
    </ul>
  );
};

export default Posts;