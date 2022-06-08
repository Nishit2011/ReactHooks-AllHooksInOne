import React from "react";
import useCounter from "./useCounter";

function CounterTwo() {
  const [countVal, increment, decrement, reset] = useCounter(10, 5);
  return (
    <div>
      <h3>CounterTwo {countVal}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterTwo;
