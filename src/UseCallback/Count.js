import React from "react";

function Count(props) {
  console.log(`Count component ${props.text}`);
  return (
    <div>
      <div>
        {props.text} - {props.value}
      </div>
    </div>
  );
}

export default React.memo(Count);
