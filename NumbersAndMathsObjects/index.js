// //number
// let a = 10;
// console.log(a);

// //.toFixed(x) this will return the number with x digits after decimal after rounding off. and this will return string
// let b = 1.235543;
// console.log(b.toFixed(3)); //1.236
// console.log(typeof b.toFixed(3));

// //.toPrecision(x) this will return the number with x total x digits after rounding off. and this will still return string
// console.log(b.toPrecision(4));
// console.log(typeof b.toPrecision(4));

// //.toString() this will convert a number to a string.
// console.log(b.toString());

// //we can create a number usign objects
// let c = new Number(20);
// let d = new Number(20);
// console.log(c);
// console.log(typeof c);
// console.log(c == d);//return false because while comparing objects there address is being compared.
// let e = c;
// console.log(e == c);//return true because both share same address.
// let f = 20;
// console.log(c == f);//return true because js compiler automatically do typeconversion
// //None primitive data type copy or compare on basis of address
// //primitive data type copy or compare on basis of value

// //creating objects and accessing there members
// let obj1 = {
//     Name: "Madhur",
//     Roll: 2
// }
// console.log(obj1.Name);//one way of accessing members of objects
// console.log(obj1["Roll"]);//another way of accessing members of objects


//                                                               //Math
//Math is a global object in javascript which provide various functions for maths
console.log(Math.PI);//give the value of PI
console.log(Math.abs(-4));//return positive of any number
console.log(Math.ceil(4.5));//return smallest number greater than x
console.log(Math.exp(1));//return e^x;
console.log(Math.floor(4.5));//return largest number smaller than x
console.log(Math.log(3));//return log x to the e
console.log(Math.log10(100));//return log x to the base 10
console.log(Math.max(23, 2323, 232323232));//return max of all the parameters given
console.log(Math.min(23, 23, 23232, 2));//return min of all the parameters given
console.log(Math.pow(2, 3));//return x^y
//random
console.log(Math.random());//return value between 0 and 1 including 0
//generate random values between 1 to 10
console.log(Math.floor(Math.random()*10)+1);
//generate random values between 1 to 6
console.log(Math.floor(Math.random()*6) + 1);
//generate random value between 15 to 25
console.log(Math.floor(Math.random()*11)+15);





