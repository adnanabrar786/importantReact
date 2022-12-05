import { useState, useEffect } from "react";

//   agr condition true hogi tb hi state run hogi (useEffect mai)

import React from "react";

const HandleUseEffect = () => {
  const [count, setCount] = useState(0);

  //   :::::::::::   Life Cycle of React comonents  :::::::::

  // 1)   componentDidMount
    // useEffect(() => {
    //   console.log("work 1");
    // }, []);

  // 2) componentDidUpdate
  //   useEffect(() => {
  //    console.log("work 1");
  //    },[count]);

  // 3) componentwillUnmount
  // Onreaload p first time p work 1 phr work 2 phe work 1 
  useEffect(() => {
    // Second Print
    console.log("work 1");
    return () => {
      // first Print
      console.log("return work 2");
    };
  }, [count === 3]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(prev => prev + 1)}> update </button>
    </div>
  );
};

export default HandleUseEffect;
