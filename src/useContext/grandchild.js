import React, { useState, useContext } from "react";
import { ValContext } from "./parent";

export const GrandChild = () => {
  const val = useContext(ValContext);
  return <div>GrandChild From Parent--{val}</div>;
};
