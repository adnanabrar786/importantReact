import React, { useState, useEffect } from "react";
// https://www.youtube.com/watch?v=QQYeipc_cik

// 9:21
const MistakesUseEffect = () => {
  const userObj = {
    name: "",
    selected: false,
  };

  const [state, setstate] = useState(userObj);
  const [name, setName] = useState("");

  const UpdateName = () => {
    setstate((prev) => ({ ...prev, name }));
  };

  const selectedTrue = () => {
    setstate((prev) => ({ ...prev, selected: true }));
  };

  useEffect(() => {
    console.log("seEfect Run!!!!");
  }, [state.name, state.selected]);

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} /> <br />
      <br />
      <button onClick={UpdateName}>Update Name</button>
      <br /> <br />
      <button onClick={selectedTrue}>Selected</button>
      <div>
        {`name : ${state.name},
          selected : ${state.selected}`}
      </div>
    </div>
  );
};

export default MistakesUseEffect;

// Result :::
//   see the dependency choose the correct order in useEffect
