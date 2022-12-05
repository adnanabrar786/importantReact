import React, { useState } from "react";

const FourthMistake = () => {
  const [data, setData] = useState({
    username: "",
    fathername: "",
    email: "",
    country: "",
    city: "",
    address: "",
  });

  //   const handleChangeUser = () => {
  //     setUser((pre) => ({ ...pre, userName: input, username: "Ahmed" }));
  //   };

  const handleChange = (e) => {
    setData((pre) => setData({ ...pre, [e.target.name]: e.target.value }));
  };

  console.log(data);

  return (
    <div>
      <form>
        <h1>User Name:</h1>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          name="fathername"
          placeholder="fathername"
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          name="country"
          placeholder="country"
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          name="city"
          placeholder="city"
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          name="address"
          placeholder="address"
          onChange={handleChange}
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FourthMistake;

// Result:::::::
// we can get more than one input values by using one state (right method)
// we do not do multiple states (wrong method)

// First Practice
// import React, { useState } from "react";
// const FourthMistake = () => {
//   const [input, setInput] = useState("");
//   const [users, setUser] = useState({
//     userName: "Adnan",
//     fatherName: "Abrar",
//     Subject: "Computer Science",
//   });
//   //   const copyObj = { ...users, userName: "Ahmed" };

//   //   console.log(copyObj);

//   const handleChangeUser = () => {
//     setUser((pre) => ({ ...pre, userName: input, fatherName: "Ahmed" }));
//   };

//   console.log(users);

//   return (
//     <div>
//       <h1>User Name:</h1>
//       <input type="text" onChange={(e) => setInput(e.target.value)} />
//       <button onClick={handleChangeUser}>Change Username</button>
//     </div>
//   );
// };

// export default FourthMistake;
