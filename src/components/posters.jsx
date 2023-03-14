import React, { useEffect } from "react";
import TimerDop from "./getSum";

const Posts = ({ data }) => {
  return (
    <ul style={{ width: "1000px" }}>
      <ol style={{ border: "1px solid purple", borderRadius: "25px" }}>
        {data.id}
      </ol>
      <ol style={{ border: "1px solid purple", borderRadius: "25px" }}>
        {data.body}
      </ol>
      <ol style={{ border: "1px solid purple", borderRadius: "25px" }}>
        {data.title}
      </ol>
    </ul>
  );
};

export default Posts;