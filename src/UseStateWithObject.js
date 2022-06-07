import React, { useState } from "react";

export const UseStateWithObject = () => {
  const [details, setDetails] = useState({ fname: "", age: "" });

  const handleDetails = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };
  return (
    <div>
      Name:
      <input type="text" onChange={handleDetails} name="fname" />
      Age:
      <input type="text" onChange={handleDetails} name="age" />
      <div>Result:</div>
      <div>
        {details.fname} is {details.age} years old
      </div>
      <div>{JSON.stringify(details)}</div>
    </div>
  );
};
