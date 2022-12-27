// video ::::::::::::
// https://www.youtube.com/watch?v=NMerkZt7iVw&t=3s 

import React, { useState } from 'react'
import Child from './Child';

const Parent = () => {

  const [showData, setShowData] = useState("")

  const getData = (data) => {
    console.log(data);
    setShowData(data)
  }

  return (
    <div>
      Parent
      <Child getData={getData} />
      <h3>{showData}</h3>
    </div>
  )
}

export default Parent
