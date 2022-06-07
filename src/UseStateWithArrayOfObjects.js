import React, { useState } from "react";

export const UseStateWithArrayOfObjects = () => {
  const [basket, setBasket] = useState([{ fruitName: "" }]);
  const [val, setVal] = useState("");

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
    updatedArr.filter((el, index) => index !== num);
    setBasket(updatedArr);
  };
  return (
    <div>
      <h4>UseStateWithArrayOfObjects</h4>
      <input
        type="text"
        name="fruits"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <button onClick={(e) => addToBasket(e)}>Add</button>
      {/* <div>{JSON.stringify(basket)}</div> */}
      {basket.map((el, index) => (
        <div>
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
