import React from "react";

function Title() {
  console.log("Title component");
  return <div>useCallback example</div>;
}

export default React.memo(Title);
