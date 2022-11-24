import React, { useState } from "react";

const SimpleUseState = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          return setCount((prev) => prev + 1);
        }}
      >
        update useState
      </button>
    </div>
  );
};

export default SimpleUseState;
