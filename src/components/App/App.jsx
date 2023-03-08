import React, { useState } from "react";
import TimerDop from "../Toogle";

const App = () => {
  const [clear, setClear] = useState(true);
  return (
    <div>
      {clear ? <TimerDop /> : <b style={{marginRight: "10px"}}>component cleared</b>}
      <button
        style={{alignItems: "center", width: "80px", border: "1px solid black" }}
        onClick={() => {
          setClear(clear ? false : true);
        }}>
        toogle
      </button>
    </div>
  );
};

export default App;