import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import { Title } from "./Title";

export const CallbackExample = () => {
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(0);
  const increaseAge = () => {
    console.log("age");
    setAge((prevState) => prevState + 1);
  };
  const increaseSalary = () => {
    console.log(" salary");
    setSalary((prevState) => prevState + 1);
  };

  return (
    <div>
      <Title />
      <Button name="Age" handler={increaseAge} value={age}></Button>
      <Button name="Salary" handler={increaseSalary} value={salary}></Button>
      {/* <button onClick={increaseAge}>Age</button>
      <button onClick={increaseSalary}>Salary</button> */}
    </div>
  );
};
