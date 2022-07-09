import React from 'react'
import Child from './Child'

const Parent = () => {

    // Props can transfer data to Child
    // Props can not tranfer data to GrandChild 
    // if transfer data into GrandChild use useContext

  return (
    <div>
       <Child name="ali"/>
    </div>
  )
}

export default Parent
