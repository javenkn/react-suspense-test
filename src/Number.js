import React from "react";

export const Number = ({ resource }) => {
  const num = resource.num.read();
  return <h3>Your random number is: {num}</h3>;
};
