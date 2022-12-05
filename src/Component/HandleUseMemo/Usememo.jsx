// ::::::::::::::::  video Link  ::::::::::::
// https://www.youtube.com/watch?v=5uiv8MFD1rc
import React, { useState, useMemo } from 'react';

const Usememo = () => {
    const [show, setShow] = useState(false);
    const [number, setNumber] = useState(0);

    const getValue = () => {
        // setNumber(number + 1)
        setNumber(prev => prev + 1)
    }

    const counterNumber = (num) => {
        console.log("click !!!");
        for (let i = 0; i < 100000000; i++) { }
        return num;
    }

    //  const checkData =  counterNumber(number) ;
    const checkData = useMemo(() => {
        return counterNumber(number)
    }, [number])

    return (
        <div>
            <button onClick={getValue}>Counter</button>
            <p>My Counter is  {checkData}</p>
            <button onClick={() => setShow(!show)}>
                {show ? "You Click Me!" : "Click Me Plz"}
            </button>
        </div>
    )
}

export default Usememo;

// :::::::::::   RESULT :::::::::::
// 1) as compare to useEffect store value in variable
// 2) as compare to useEffect we can return value


// Q) What is useMemo ?
// Ans) Increase the performance of React App.
// it always return memoized value


// DEFINITION Memoization :::
//   Memoization is an optimization feature in React
//   which,when used in the right place,increases the performance of your app
//>>>>>>>>> Urdu Translate >>>>>>>>>
//   Memoization is an optimization feature in React
//   iski value ko sahi jagah p ap istimal karty ho ye definitly increases the performance of your app


// Diiference Between useCallback and useMemo
// *) useMemo
//      return a memoized value
// *) useCallback
//      return a memoized function