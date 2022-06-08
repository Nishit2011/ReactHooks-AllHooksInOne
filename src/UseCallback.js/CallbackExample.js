import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import { Count } from "./Count";
import { Title } from "./Title";

export const CallbackExample = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(25000);
  const increaseAge = () => {
    console.log("age");
    setAge((prevState) => prevState + 1);
  };
  const increaseSalary = () => {
    console.log(" salary");
    setSalary((prevState) => prevState + 1000);
  };

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
};
