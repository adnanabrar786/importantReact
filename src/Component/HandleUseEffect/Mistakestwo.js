import React, { useState, useEffect } from "react";

const Mistakestwo = () => {
  const [num, setNum] = useState(0);

  //   wrong method start (mistake)
  //   useEffect(() => {
  //     console.log("efftect run!");
  //     setInterval(() => {
  //       setNum((prev) => prev + 1);
  //     }, 1000);
  //   }, []);
  //   wrong method end (mistake)

  // return a clean up function
  useEffect(() => {
    console.log("efftect run!");
    const interval = setInterval(() => {
      setNum((prev) => prev + 1);
    }, 1000);

    return () => {
      // wait before the effect, i should clean here
      // clear something from the previous effect
      clearInterval(interval);
      // ok done! you can run
    };
  }, []);

  return <div>{num}asasas</div>;
};

export default Mistakestwo;
