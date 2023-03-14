import React, { useState } from "react";
import TimerDop from "../getSum";

const App = () => {
  const [delet, setDelet] = useState(true);
  return (
    <div>
      {delet ? (
        <TimerDop />
      ) : (
        <b style={{ marginRight: "10px" }}>Компанент очистился</b>
      )}
      <button
        style={{
          alignItems: "center",
          width: "180px",
          border: "1px solid pink",
        }}
        onClick={() => {
          setDelet(delet ? false : true);
        }}
      >
        Toogle
      </button>
    </div>
  );
};

export default App;