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
