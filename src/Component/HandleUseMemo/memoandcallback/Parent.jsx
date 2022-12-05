// video Link :::::::::::::
// https://www.youtube.com/watch?v=5zempLONkxM

import React, { useState, useCallback } from 'react'
import Child from './Child'

const Parent = () => {

  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  const addNumber = () => {
    setNumber(prev => prev + 1)
  }


  const addcCount = () => {
    setCount(prev => prev + 2)
  }

  const Learning = useCallback(
    () => {
      // Something
    },
    [count]
  );

  return (
    <div>
      <Child Learning={Learning} count={count} />
      <p>{number}</p>
      <button onClick={addNumber}>Add Number</button>
      <p>{count}</p>
      <button onClick={addcCount}>Add Number</button>
    </div>
  )
}

export default Parent
