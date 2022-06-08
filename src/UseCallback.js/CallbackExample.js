import axios from "axios";
import React, { useCallback, useState } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

function CallbackExample() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(25000);
  const increaseAge = useCallback(() => {
    console.log("age");
    setAge((prevState) => prevState + 1);
  }, [age]);
  const increaseSalary = useCallback(() => {
    console.log(" salary");
    setSalary((prevState) => prevState + 1000);
  }, [salary]);

  return (
    <div>
      <Title />

      <Button handler={increaseAge}>Age</Button>
      <Count text="Age" value={age} />
      <Button handler={increaseSalary}>Salary</Button>
      <Count text="Salary" value={salary} />
      {/* <button onClick={increaseAge}>Age</button>
      <button onClick={increaseSalary}>Salary</button> */}
    </div>
  );
}

export default React.memo(CallbackExample);
