// Time : 0:30 >>> 2:50

import React, { useState } from "react";

const SecondMistake = () => {
  const [user, setUser] = useState();
  return (
    <div>
      <h1>User Name:</h1>
      {/* <p>{user.name}</p> */}
      <p>{user?.name}</p>
      <p>{user && user.name}</p>
    </div>
  );
};

export default SecondMistake;

// result ::
//  Error is mai aey ga >>> user.name
// agr state mai khuch nahi hy tw aisay likhy gay
// first tariqa >>> user?.name
// second tariqa >> user && user.name
// intialize mai define kar daey gay

// 3rd mistake
// Do'nt forget writing your types in useState in intialization
