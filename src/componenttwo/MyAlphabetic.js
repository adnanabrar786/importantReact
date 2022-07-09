import React, { useState } from 'react'

const MyAlphabetic = () => {

    // concat
    // let a = "A"
    // let b = "B"
    // const c = a += b
    // console.log(c);

    // .split
    //const S = "PeteR"
    // S = [ "P" , "e" ,"t" ,"e" ,"R"]

    // .reduce
    // array.reducer    

    const S = "PeteR"
    // S = [ "P" , "e" ,"t" ,"e" ,"R"]
    // acc means previous value
    // char means current value
    const Myfunc = (str) => str.split('').reduce((acc, char) =>
        acc += char === char.toLowerCase() ? char.toUpperCase() :
            char.toLowerCase())

    console.log(Myfunc(S));


    // const arr = [ {Number : 80 } ,{Number : 77 } ,{Number : 88 } ,{Number : 95 } ,{Number : 68 }];

    // let  sum = 0 ;


    // for (let i = 0; i < arr.length; i++) {
    //      sum += arr[i].Number
    // }
    // let avg = sum /arr.length
    // console.log(avg);

    // if(avg >= 80 ) {
    //     console.log("Grad A+");
    // }
    // else if(avg >= 80 && avg <= 70) {
    //     console.log("Grad A");
    // }
    // else if(avg >= 70 && avg <= 60) {
    //     console.log("Grad B");
    // }
    // else if(avg >= 60 && avg <= 50) {
    //     console.log("Grad C");
    // }
    // else if(avg >= 50 && avg <= 40) {
    //     console.log("Grad D");
    // }else {
    //     console.log("Fail");
    // }

    // let sum = 0;

    // for (let i = 0; i < 1000; i++) {
    //     if (i % 3 === 0 || i % 5 === 0) {
    //         sum += i
            
    //     }
    // }

    // console.log(sum);





    return (

        <div>

        </div>
    )
}

export default MyAlphabetic
