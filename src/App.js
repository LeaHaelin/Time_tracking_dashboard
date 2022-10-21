import React, { useState } from "react";
import { User } from "./User";
import { Board } from "./Board";
import "./partials/app.css";

function App() {
  const [cycle, setCycle] = useState("daily")

  const stateHandler = (e) => {
    setCycle(e.target.innerHTML)
  }
  console.log(cycle);

  return (
    <div className="App">
      <div className="container">
        <User stateHandler={stateHandler} />
        <Board cycle={cycle} />
      </div>
    </div>
  );
}

export default App;
