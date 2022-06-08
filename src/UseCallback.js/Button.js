import React from "react";

export const Button = (props) => {
  return (
    <div>
      <button onClick={props.handler}>
        {props.name}-{props.value}
      </button>
    </div>
  );
};
