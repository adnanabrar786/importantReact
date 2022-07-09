//  comlpex useReducer hook

import React, { useReducer } from "react";

const UseReducerTwo = () => {

    let intiailState = {
        firstCounter: 0,
        secondCounter: 10
    };
    
    const reducer = (state, action) => {
        switch (action.type) {
            case 'increment':
                return { ...state , firstCounter: state.firstCounter + action.value };
            case 'decrement':
                return { ...state , firstCounter: state.firstCounter - action.value };

            case 'increment2':
                return { ...state , secondCounter: state.secondCounter + action.value };
            case 'decrement2':
                return { ...state , secondCounter: state.secondCounter - action.value };
            case 'reset':
                return intiailState;
            default:
                return state
        }
    }

    const [count, dispatch] = useReducer(reducer, intiailState)

    return (
        <>
            <label>first count is : {count.firstCounter}</label> <br />
            <label>second count is : {count.secondCounter}</label> <br />

            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>increment</button> <br />
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>decrement</button> <br />

            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>increment 5</button> <br />
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>decrement 5</button> <br />

            <button onClick={() => dispatch({ type: 'reset' })}>reset</button>

            <div>
            <button onClick={() => dispatch({ type: 'increment2', value: 2 })}>increment counter 2</button> <br />
            <button onClick={() => dispatch({ type: 'decrement2', value: 2 })}>decrement counter 2</button> <br />
            </div>
        </>
    )
}

export default UseReducerTwo;


