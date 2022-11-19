// ::::::::::::  Video Link: 6 mistakes of useState ::::::::::::::::::
// https://www.google.com/search?q=mistake+in+useState+in+react+js&oq=mistake+in+useState+in+react+js&aqs=chrome..69i57j33i160l2.8915j0j7&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:0f68cbe4,vid:Fhu5cu864ag

// Time : 0:30 >>> 2:50

// ::::::::::::   Topic : 6 mistakes of useState ::::::::::::::::::
import React, { useState } from "react";

const FirstMistake = () => {
  const [count, setCount] = useState(0);

  //  Bad practice works start
  //   const wrongIncrement = () => {
  //     return setCount(count + 1);
  //   };

  //   const wrongIncrementAsync = async () => {
  //     return setTimeout(() => {
  //       setCount(count + 1);
  //     }, 2000);
  //   };
  //  Bad practice works end

  //  Good practice
  const increment = () => {
    // it is good for optimization
    //  always return call back function when return state
    // q k wo "previous value" lay ga
    return setCount((pre) => pre + 1);
  };

  const incrementAsync = async () => {
    return setTimeout(() => {
      setCount((pre) => pre + 1);
    }, 2000);
  };
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={increment}>+</button>
      <p>{count}</p>
      <button onClick={incrementAsync}>+</button>
    </div>
  );
};

export default FirstMistake;
