import { useState } from "react";

function useCounter(initialVal, val) {
  const [countVal, setCountVal] = useState(initialVal);

  const increment = () => {
    setCountVal(countVal + val);
  };

  const decrement = () => {
    setCountVal(countVal - val);
  };

  const reset = () => {
    setCountVal(initialVal);
  };

  return [countVal, increment, decrement, reset];
}

export default useCounter;
