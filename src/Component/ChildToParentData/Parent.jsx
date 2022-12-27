// video ::::::::::::
// https://www.youtube.com/watch?v=NMerkZt7iVw&t=3s 

import React from 'react'
import Child from './Child';

const Parent = () => {

    const getData = (data) => {
        console.log(data);
    }

  return (
    <div>
      Parent
      <Child getData={getData}/>
    </div>
  )
}

export default Parent
