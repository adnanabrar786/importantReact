//            Get Data from axios api

import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchApiOne = () => {

  const [data, setData] = useState([]);

  useEffect( () => {
     axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        const data = res.data;
        setData(data);
      })
      .catch(err => {
        console.error(err); 
      });
  }, []);

  return (
    <div>

      {data.map(post => (
        <ul key={post.id}>
          <li>
            {post.title}
          </li>
        </ul>
      ))}

    </div>
  );
};

export default FetchApiOne;