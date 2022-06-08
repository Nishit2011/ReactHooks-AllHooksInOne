import React, { useEffect, useRef } from "react";

function ParentUseRef() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h3>Parent ref</h3>

      <input type="text" ref={inputRef} />
    </div>
  );
}

export default ParentUseRef;
