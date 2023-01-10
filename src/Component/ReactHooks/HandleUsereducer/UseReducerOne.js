import React, { useReducer } from "react";

const UseReducerOne = () => {

  let intiailState = 0;
  // state as currentState , state ki type bhi ho sakti hy
  // action means work Perform , action ki type bhi ho sakti hy

    const reducer = (state, action) => {
        switch (action) {
            case 'increment':
                return state + 1;
            case 'decrement':
                return state - 1;
            case 'reset':
                return intiailState;
            default:
                return state
        }

    }

    // count means current value
    // dispatch means jo action ko perform karta hy


   const [count , dispatch] =  useReducer(reducer, intiailState)

    return (
        <>
        <label>count value is : {count}</label><br/>
            <button onClick={() =>dispatch('increment')}>increment</button><br/>
            <button onClick={() => dispatch('decrement')}>decrement</button><br/>
            <button onClick={() =>dispatch('reset')}>reset</button>
        </>
    )
}

export default UseReducerOne


