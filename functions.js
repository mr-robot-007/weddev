// types of functions ->
// function statement

//define
// function sayHello(param) {
//     console.log("hello",param);
// }


// fn invocation
// sayHello();


// fn expression

// let fnContainer = function fn() {
//     console.log("hello world");
// }
// fnContainer();

// IIFe -> immediately invoked function expression


// (function fn() {
//     console.log("I am IFEE");
//     console.log("I will run on my own");
// })();


// // arrow function

// let fn = num => num*num;

// console.log(fn(10));


// function can be passed as paramenter

// function sayHello (param) 
// {
//     console.log("helllo",param);
//     param();
//     return "afafafe";
// }

// function smaller() {
//     console.log("hello i am smaller");
// } 

// // sayHello([1,2,3,4,5]);
// sayHello(smaller);



//we can return a funciton in a function

function outer () {
    console.log("I am outer returning innner");
    return function inner () {
        console.log("I am inner");
    }
}

let rVal = outer();
console.log(rVal);
rVal();
