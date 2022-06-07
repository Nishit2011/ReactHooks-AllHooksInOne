import React, { useEffect, useState } from "react";

export const UseStateWithArrayOfObjects = () => {
  const [basket, setBasket] = useState([{ fruitName: "" }]);
  const [val, setVal] = useState("");
  const [warning, setWarning] = useState("");

  const addToBasket = (e) => {
    e.preventDefault();
    let arr = [...basket];
    arr = arr.filter((value) => value.fruitName !== "");
    arr.push({ fruitName: val });
    setBasket(arr);
    setVal("");
  };

  const deleteFruit = (e, num) => {
    e.preventDefault();
    console.log(num);
    const updatedArr = [...basket];
    updatedArr.splice(num, 1);
    console.log(updatedArr);
    setBasket(updatedArr);
  };

  useEffect(() => {
    basket.length === 5 ? setWarning("5 fruits added") : setWarning("");
  }, [basket]);
  return (
    <div>
      <h4>UseStateWithArrayOfObjects</h4>
      <h6>{warning}</h6>
      <input
        type="text"
        name="fruits"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <button onClick={(e) => addToBasket(e)}>Add</button>
      {/* <div>{JSON.stringify(basket)}</div> */}
      {basket.map((el, index) => (
        <div key={index}>
          {" "}
          {el.fruitName}{" "}
          {el.fruitName !== "" ? (
            <span onClick={(e) => deleteFruit(e, index)}>X</span>
          ) : (
            <></>
          )}{" "}
        </div>
      ))}
    </div>
  );
};
