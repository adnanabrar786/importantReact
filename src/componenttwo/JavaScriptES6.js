import React from 'react'

const Practice = () => {



    // 1) property shorthand

    // let data ="abc";

    // let obj = {
    //   //  data : data
    //   data
    // }
    // console.log(obj);
// property shorthand end

    // 2) computed poperty  names
    // let data ="abc";

    // let obj = {
    //   //  data : data
    //   data ,
    //   [data] : "xyz"
    // }
    // console.log(obj);
// computed poperty  names end

// 3)   method properties
    //   let data ="abc";

    // let obj = {
    //   //  data : data
    //   data ,
    //   [data] : "xyz", 
    //   foo () {
    //    //   console.log("hi adnan");
    //     return "hi adnan"  
    // }
    // }
    // console.log(obj);
    // console.log(obj.foo());

    //    method properties end

// destructuing 

// 4) array matching

// let arr = ["adnan" , "abrar" , 24];
// let [name , , age] = arr;
// console.log(name , age);

// 5) method matching

 // 5 (i)
// const bio = {
//     name: "ali" ,
//     age : 23
// }

// const {name , age} = bio ;
// console.log(name);



 // 5 (ii) object oy array of object
// const bio = [{
//     name: "ali" ,
//     age : 23
// },
// {
//     name: "AHMED" ,
//     age : 24
// }
// ]

// const [{name , age} , {name : name2}] = bio ;
// console.log(name , age  , name2);


//                6) classes 

// class Shape {
//     constructor (id, x, y) {
//         this.id = id
//         this.move(x, y)
//     }
//     move (x, y) {
//         this.x = x
//         this.y = y
//         console.log(`Move : ${this.id}`);
//     }
// }

// class Circle extends Shape {
//     constructor (id, x, y, radius) {
//         super(id, x, y)
//         this.radius = radius
//     }
// }

// const myResult = new Circle(11 , 2 , 3 , 46);
// console.log(myResult);
// console.log(myResult.move());


// 7)







 //  let odd = [1, 3 , 5 ,7 ,9];
//    let even = odd.map(v => v + 1) 
//    console.log(even , odd);

// const array1 = [1, 3 , 5];

// array1.forEach(element => console.log(element + 1));

//  let a = "hello";
//    a = "hello world";
//  console.log(a);


//  curring
    // const big = () =>{
    //     return function () {
    //         return "hello world"
    //     }
    // }

    // console.log(big()());
    return (
        <div>
            
        </div>
    )
}

export default Practice
