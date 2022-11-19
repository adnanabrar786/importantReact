import React, { useState } from "react";

const LowerCaseArrayMap = () => {
  const [value, setValue] = useState("");

  const data = ["mango", "banana", "orange", "pineapple", "grapes"];

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      {data
        .filter((item) => {
          if (!value.toLowerCase()) {
            return item.toLowerCase();
          } else if (item.includes(value.toLowerCase())) {
            return true;
          }
        })
        .map((item, index) => (
          <div key={index}>
            <h1>{item.toLowerCase()}</h1>
          </div>
        ))}
    </div>
  );
};

export default LowerCaseArrayMap;
