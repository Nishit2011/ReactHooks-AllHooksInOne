import React, { useState } from "react";

export const UseStateWithArrayOfObjects = () => {
  const [basket, setBasket] = useState([{ fruitName: "" }]);

  const addToBasket = (e) => {
    e.preventDefault();
    setBasket([...basket, fruitName]);
  };
  return (
    <div>
      <h4>UseStateWithArrayOfObjects</h4>
      <input type="text" name="fruits" />
      <button onClick={(e) => addToBasket(e)}>Add</button>
      {/* <div>{JSON.stringify(basket)}</div> */}
    </div>
  );
};
