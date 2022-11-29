// time 13:50 (again practtice)
// https://www.youtube.com/watch?v=QQYeipc_cik


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// // import { Link, useLocation } from "react-router-dom";
// import { Link,  useLocation } from "react-router-dom";

// const Mistakethreefetchdata = () => {
//   const [user, setUser] = useState({});
//   let location = useLocation();
//   const id = location.pathname.split("/"[2]);

//   useEffect(() => {
//     const cancelToken = axios.CancelToken.source();
//     axios
//       .get(`https://jsonplaceholder.typicode.com/users/${id}`, {
//         cancelToken: cancelToken.token,
//       })
//       .then((res) => {
//         setUser(res.data);
//       })
//       .catch((err) => {
//         if (axios.isCancel(err)) {
//           console.log("cancled!!!");
//         } else {
//           //tod :handle error
//         }
//       });

//     return () => {
//       cancelToken.cancel();
//     };
//   }, [id]);

//   //   userId
//   return (
//     <div>
//       <h1>{user.id}</h1>
//       <h1>{user.city}</h1>
//       <h1>{user.name}</h1>
//       <Link to="/1">User 1</Link>
//       <Link to="/2">User 2</Link>
//       <Link to="/3">User 3</Link>
//     </div>
//   );
// };

// export default Mistakethreefetchdata;
