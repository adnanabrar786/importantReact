import React, { useState } from "react";

// see Fourth Mistake same as this to get value from input

const ComplexUseState = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    Subject: "",
  });

  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.name });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleOnChange}
          name="firstName"
          value={data.firstName}
        />
        <br />
        <input
          type="text"
          onChange={handleOnChange}
          name="lastName"
          value={data.lastName}
        />
        <br />
        <input
          type="text"
          onChange={handleOnChange}
          name="Subject"
          value={data.Subject}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ComplexUseState;
