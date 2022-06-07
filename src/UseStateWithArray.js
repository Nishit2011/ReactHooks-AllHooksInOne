import React, { useState } from "react";

export const UseStateWithArray = () => {
  const [basket, setBasket] = useState([]);
  const [fruitName, setFruitName] = useState("");

  const addToBasket = (e) => {
    e.preventDefault();
    setBasket([...basket, fruitName]);
  };

  return (
    <div>
      <input
        type="text"
        name="fruits"
        onChange={(e) => setFruitName(e.target.value)}
      />
      <button onClick={(e) => addToBasket(e)}>Add</button>
      <div>{JSON.stringify(basket)}</div>
    </div>
  );
};
