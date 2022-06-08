import React from "react";

export const Count = (props) => {
  console.log("Count component");
  return (
    <div>
      <div>
        {props.text} - {props.value}
      </div>
    </div>
  );
};
