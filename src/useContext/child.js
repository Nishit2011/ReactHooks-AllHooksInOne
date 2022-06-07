import React, { useState } from "react";
import { GrandChild } from "./grandchild";

export const Child = () => {
  return (
    <div>
      <GrandChild />
    </div>
  );
};
