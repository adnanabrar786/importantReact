import axios from 'axios';
import React, { useState, useEffect } from 'react'

const UseEffectMy = () => {

  const [values, setValues] = useState([]);

  useEffect(() => {

    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        const myValue = res.data
        setValues(myValue)
      })
      .catch(err => {
        console.log(err);
      })
  }, []);


  return (
    <div>

      {values.map((value) => {

        const { userId, id, title } = value

        return (
          <div key={id}>
            <h4>{id}</h4>
            <h5>{title}</h5>
          </div>
        )
      })
      }

    </div>
  )
}

export default UseEffectMy
