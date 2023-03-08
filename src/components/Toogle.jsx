import React, { useState, useEffect } from "react";
import RenderPost from "./RenderPost";

function TimerShow() {
  const [data, setData] = useState([]);
  const random = Math.random() * 100;

  useEffect(() => {
    let value = true;

    if (value) {
      var time = setTimeout(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${random.toFixed()}`)
          .then(async (response) => await response.json())
          .then((data) => {
            if (value) setData(data);
          });
      }, 3000);
    }
    return () => {
      clearTimeout(time);
      value = false;
    };
  }, [random]);

  return <RenderPost data={data} />;
}

export default TimerShow;