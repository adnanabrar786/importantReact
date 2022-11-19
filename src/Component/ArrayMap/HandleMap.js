import React from "react";

const HandleMap = () => {
  const arr = ["a", "b", "c"];

  return <div>{arr.map((item, index, arr) => console.log(item))}</div>;
};

export default HandleMap;
