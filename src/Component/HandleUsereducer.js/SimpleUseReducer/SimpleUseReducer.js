import React, { useReducer } from 'react'
import { Buttonreducer } from './ButtonReducer';
import { initialState } from './ButtonReducer';

const SimpleUseReducer = () => {

    //  usereducer banaya hy ye state jaisa hy 
    //  state mai data show hoga
    //  intialize mai shuru mai jo value hogi wo aey gi

    const [state, dispatch] = useReducer(Buttonreducer, initialState);

    return (
        <div>
            <h1>Counter</h1>
            <h3>{state}</h3>
            <button onClick={() => dispatch('increment')}>Inc</button>
            <button onClick={() => dispatch('decrement')}>Dec</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default SimpleUseReducer;
