import React, { useRef } from "react";

const DisplayUseRef = () => {
  const inputRef = useRef(null);

  const handleInput = () => {
    //  inputRef.current.value = 100;
    // inputRef.current.focus();
    // inputRef.current.style.color = "blue";
    inputRef.current.style.display = "none";
  };

  return (
    <div>
      <h1>use Ref Hooks</h1>
      <input ref={inputRef}></input>
      <button onClick={handleInput}>Mybtton</button>
    </div>
  );
};

export default DisplayUseRef;
