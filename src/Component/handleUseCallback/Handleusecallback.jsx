// video Link :::::::::::::
// https://www.youtube.com/watch?v=N62nXHTydpA

import React, { useState, useCallback } from 'react';
import Todo from './Todo';

const Handleusecallback = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount(prev => prev + 1)
    };

    const addTodods = useCallback(() => {
        setTodos((prev) => [...prev, `New Entry....`])
    }, [todos]);


    // const addTodods = () => {
    //     setTodos((prev) => [...prev, "New Entry...."])
    // };

    return (
        <div>
            <Todo todos={todos} addTodods={addTodods} />
            <p>Count : {count}</p>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default Handleusecallback
