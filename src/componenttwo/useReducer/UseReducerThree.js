
// if more than one reducer

import React, { useReducer } from "react";

const UseReducerThree = () => {

    let intiailState = 0;
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

    const [count, dispatch] = useReducer(reducer, intiailState)
    const [countTwo, dispatchTwo] = useReducer(reducer, intiailState)

    return (
        <>
            <div>
                <label>count value is : {count}</label><br />
                <button onClick={() => dispatch('increment')}>increment</button><br />
                <button onClick={() => dispatch('decrement')}>decrement</button><br />
                <button onClick={() => dispatch('reset')}>reset</button>
            </div>

            <div>
                <label>count value is : {countTwo}</label><br />
                <button onClick={() => dispatchTwo('increment')}>increment</button><br />
                <button onClick={() => dispatchTwo('decrement')}>decrement</button><br />
                <button onClick={() => dispatchTwo('reset')}>reset</button>
            </div>
        </>
    )
}

export default UseReducerThree


