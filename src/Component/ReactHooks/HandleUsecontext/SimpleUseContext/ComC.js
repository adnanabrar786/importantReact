import React ,{useContext} from 'react'
import {UserContext} from "./UserContext"

const ComC = () => {

    const {state , setState} = useContext(UserContext);

  return (
    <div>
        <h3>This is {state}</h3>
        <button onClick={()=> {setState("Ahmed")}}>Updtae Global State</button>
    </div>
  )
}

export default ComC
