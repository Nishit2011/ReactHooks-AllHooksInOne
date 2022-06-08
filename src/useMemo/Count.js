import React from "react";

function Count(props) {
  return (
    <div>
      <button onClick={props.handler}>{props.children}</button>
    </div>
  );
}

export default Count;
