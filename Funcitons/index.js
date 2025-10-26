// // Simple function
// //we can call a function before the definition of function. this is because of hoisting 
// function greeting(Name){//in parameter just write variable name don't initialise variable like (let Name)
//     console.log(`hello, ${Name}`);
// }
// greeting("Madhur");



// //default parameters
// //They are parameters in the funciton definition who's value are already defined they generally take the value passed form the function
// //call but if in function call the value is not passed for that variable then the predefined value is assigned to variable
// function add(a, b, c = 0){
//     return a+b+c;
// }
// console.log(add(1, 2, 3));//6
// console.log(add(1, 2));//3



// //Rest Operator
// //the rest operator wrap multiple elements in single array. It is used in functional parameters and array destructuring
// function add(a, b, ...number){
//     let sum = 0;
//     sum = a+b;
//     for(let num of number){
//         sum += num;
//     }
//     return sum;
// }
// console.log(add(1, 2));
// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4));
// console.log(add(1, 2, 3, 4, 5));

// let arr1 = [5, 6, 7, 8];
// let [first, second, ...number] = arr1;
// console.log(first, second, number);
// //Rest operator is different form spread operator because spread operator act on arrays and objects. it used to unwrap array/arrays or make each element a single entity
// //eg
// let arr2 = [[-3, -2, -1, 0] ,1, 2, 3, 4];
// let arr3 = [...arr1 ,...arr2];
// console.log(arr3);
// // eg for spread operator in object
// const person = { name: "Alice", age: 25 };

// // Spread: Unpack object properties
// const updatedPerson = { ...person, city: "NYC" };
// console.log(updatedPerson);
// // { name: "Alice", age: 25, city: "NYC" }

// // Overwriting properties
// const olderPerson = { ...person, age: 30 };
// // { name: "Alice", age: 30 }



// //functional expression
// // functional expression can't be called before definition because it's now store as a variable. means it's not hoisted
// let f = function(a, b){
//     console.log(a+b);
// };
// f(1, 2);



// //Arrow Function
// //Arrow fucntion cannot be called before it's definition because it's now store as a variable. means it's not hoisted
// let c = (a, b)=>{
//     console.log(a+b);
// };
// c(1, 2);
// //in arrow function if the body of the function is single lined we can remove the curly braces and if we are returning something then
// //we can remove return keyword;
// //if we have single parameter than we can remove prentheses
// let f = x => x*x;
// console.log(f(3));



// // IIFE(Immediately Invoked Function)
// //This function call itself immediately
// (function greeting(){
//     console.log("hello, ji!");
// })();

// (()=>{
//     console.log("hello, ji!");
// })();

// (function (){
//     console.log("hello, ji!");
// })();



// Callback Function
// Callback Function is a function which is passed as an argument to another function