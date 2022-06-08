import React from "react";

export const Button = (props) => {
  console.log("Button component");
  return (
    <div>
      <button onClick={props.handler}>{props.children}</button>
    </div>
  );
};
