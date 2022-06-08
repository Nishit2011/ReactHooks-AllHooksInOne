import React from "react";
import CounterOne from "./CounterOne";
import CounterTwo from "./CounterTwo";

function ParentCounter() {
  return (
    <div>
      <CounterOne />
      <CounterTwo />
    </div>
  );
}

export default ParentCounter;
