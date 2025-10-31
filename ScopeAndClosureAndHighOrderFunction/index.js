//Scope are of some types
// 1.)Global Scope -> variables declared in global scope can we used anywhere in the code. even inside a block and inside a function
// 2.)Block Scope -> variables declared inside block can only be accesible inside block scope. only var didn't respect block scope a varible declared inside block using var can also be used outside of that block.
// 3.)Fucntional Scope -> variables declared inside functional block can only be accessed inside the function
// 4.)Lexical Scope -> Scope of a variable depends on the position of the variable. 




// // closure -> it's the property of javascript that it remember the variable form it's outerscope even when the outer functions execution is completed.
// // here when outer function is called an execution context is created in memory creation phase Name get the memory and inintialized 
// // with undefined. then inner function code stored in memory and the inner function returned. Now this execution context will get delete
// // but since the Name variable is used in the inner function it stored seperately and when inner function is called it use that Name variable.
// function outer(){
//     let Name = "Madhur";
//     function inner(){
//         console.log(Name);
//     }
//     return inner;
// }

// let x = outer();
// x();





// // another example
// function outer(){
//     let count = 0;
//     function inner(){
//         count++;
//         return count;
//     }
//     return inner;
// }

// const x = outer();
// console.log(x());
// console.log(x());
// console.log(x());

//Use of closer in real world is preventing the developer or user to accidentely change the value of some variables.
//as we see in above example we cannot access count. for that we have to call the inner function which only modify count in specific manner.





// //Real world example
// function UserBankAccount(){
//     let Balance = 0;
//     let user = {
//         Deposit: function(amount){
//             if(amount > 0){
//                 Balance += amount;
//                 return Balance;
//             }
//             else{
//                 console.log("Enter valid amount");
//             }
//         },
//         Withdraw: function(amount){
//             if(amount > 0 && amount <= Balance){
//                 Balance -= amount;
//                 return Balance;
//             }
//             else{
//                 console.log("Enter valid amount");
//             }
//         }
//     };
//     return user;
// }

// let User1 = UserBankAccount();
// console.log(User1.Deposit(400));
// console.log(User1.Withdraw(200));

// // How it works because Deposit, Withdraw are closures which remember the varaible Balance outside their scope




// Higher Order Function are those function who either takes function as an argument or the function who return a function or those
// who do both.
//forEach, filter, reducer, map, set




// //forEach
// //forEach take a function as a parameter and that function can have three parameters which are number, index, array and the number is compulsory
// //number return the element of the array, index return the index of elements and array return the whole array
// // const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// arr.forEach((number)=>{
//     console.log(number);
// })

// arr.forEach(function(number, index, array){
//     console.log(number, index, array);
// })
// //we can also manipulate the elements
// arr.forEach((number)=>{
//     console.log(number*number);
// })
// console.log(arr);




// //filter
// // const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let arr1 = arr.filter((number)=>{number>=2;});
// console.log(arr1);

// let arr2 = arr.filter((number, index)=>number%2 == 0 && index > 3);
// console.log(arr2);

// //i will add my own method inside the arr
// Array.prototype.channi = function(compare){//compare is the callback function which we will give
//     const a = [];
//     for(let num of this){
//         if(compare(num)){
//             a.push(num);
//         }
//     }
//     return a;
// }

// let arr3 = arr.channi((number)=>number > 2);
// console.log(arr3);

// //filtering method can't be used on arr4 because it's stored in arr array
// //to make it universal we use Prototype
// let arr4 = [10, 20, 30, 40, 50, 60, 70, 80 ,90, 100];
// let arr5 = arr4.channi((number)=>number>25);
// console.log(arr5);




// // map
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10];
// let arr1 = arr.map((number)=>number*2);
// console.log(arr1);

// //Real life implementation of these function
// //in real life backend gives you array of objects such as below
// const products = [
//   // Electronics
//   { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
//   { id: 2, name: "Headphones", category: "Electronics", price: 200, inStock: true },
//   { id: 3, name: "Smartphone", category: "Electronics", price: 800, inStock: false },
//   { id: 4, name: "Monitor", category: "Electronics", price: 300, inStock: true },
//   { id: 5, name: "Keyboard", category: "Electronics", price: 75, inStock: true },

//   // Books
//   { id: 6, name: "The Hobbit", category: "Books", price: 25, inStock: true },
//   { id: 7, name: "A Brief History of Time", category: "Books", price: 30, inStock: true },
//   { id: 8, name: "Dune", category: "Books", price: 28, inStock: false },

//   // Appliances
//   { id: 9, name: "Coffee Maker", category: "Appliances", price: 150, inStock: false },
//   { id: 10, name: "Blender", category: "Appliances", price: 80, inStock: true },
//   { id: 11, name: "Toaster", category: "Appliances", price: 45, inStock: true },
//   { id: 12, name: "Microwave Oven", category: "Appliances", price: 220, inStock: true },

//   // Clothing
//   { id: 13, name: "T-Shirt", category: "Clothing", price: 20, inStock: true },
//   { id: 14, name: "Jeans", category: "Clothing", price: 60, inStock: false },
//   { id: 15, name: "Jacket", category: "Clothing", price: 110, inStock: true },

//   // Home Goods
//   { id: 16, name: "Desk Lamp", category: "Home Goods", price: 35, inStock: true },
//   { id: 17, name: "Scented Candle", category: "Home Goods", price: 15, inStock: true },
//   { id: 18, name: "Picture Frame", category: "Home Goods", price: 22, inStock: false },

//   // Groceries
//   { id: 19, name: "Organic Apples", category: "Groceries", price: 5, inStock: true },
//   { id: 20, name: "Artisan Bread", category: "Groceries", price: 8, inStock: true }
// ];

// let front = products.filter((product)=> product.price > 50 && product.inStock);//this will return array of those objects whose price are greater than 25
// console.log(front);                                                            //and are inStock

// //we can chain multiple methods
// let f = products.filter((product)=> product.price > 50 && product.inStock).sort((a,b)=>a.price-b.price).map((product)=>({Name: product.name, Price: product.price}));
// console.log(f);



// //implementing map
// Array.prototype.maping = function(func){
//     let ans = [];
//     for(let num of this){
//         ans.push(func(num));
//     }
//     return ans;
// }

// let newarr = products.maping((product)=>({Name: product.name, Price: product.price}));
// console.log(newarr);




// // reduce
// const products = [
//   // Electronics
//   { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
//   { id: 2, name: "Headphones", category: "Electronics", price: 200, inStock: true },
//   { id: 3, name: "Smartphone", category: "Electronics", price: 800, inStock: false },
//   { id: 4, name: "Monitor", category: "Electronics", price: 300, inStock: true },
//   { id: 5, name: "Keyboard", category: "Electronics", price: 75, inStock: true },

//   // Books
//   { id: 6, name: "The Hobbit", category: "Books", price: 25, inStock: true },
//   { id: 7, name: "A Brief History of Time", category: "Books", price: 30, inStock: true },
//   { id: 8, name: "Dune", category: "Books", price: 28, inStock: false },

//   // Appliances
//   { id: 9, name: "Coffee Maker", category: "Appliances", price: 150, inStock: false },
//   { id: 10, name: "Blender", category: "Appliances", price: 80, inStock: true },
//   { id: 11, name: "Toaster", category: "Appliances", price: 45, inStock: true },
//   { id: 12, name: "Microwave Oven", category: "Appliances", price: 220, inStock: true },

//   // Clothing
//   { id: 13, name: "T-Shirt", category: "Clothing", price: 20, inStock: true },
//   { id: 14, name: "Jeans", category: "Clothing", price: 60, inStock: false },
//   { id: 15, name: "Jacket", category: "Clothing", price: 110, inStock: true },

//   // Home Goods
//   { id: 16, name: "Desk Lamp", category: "Home Goods", price: 35, inStock: true },
//   { id: 17, name: "Scented Candle", category: "Home Goods", price: 15, inStock: true },
//   { id: 18, name: "Picture Frame", category: "Home Goods", price: 22, inStock: false },

//   // Groceries
//   { id: 19, name: "Organic Apples", category: "Groceries", price: 5, inStock: true },
//   { id: 20, name: "Artisan Bread", category: "Groceries", price: 8, inStock: true }
// ];

// let TotalValue = products.reduce((accumulator, currentvalue)=>{
//     if(currentvalue.inStock) {
//         return accumulator + currentvalue.price;
//     }
//     else {
//         return accumulator;
//     }
// }, 0)
// console.log(TotalValue);




// //set
// //set is a list that contain unique value;
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 3, 4, 6 ];
// let s1 = new Set(arr);
// console.log(s1);

// let s2 = new Set();
// s2.add(11);
// s2.add(12);
// s2.add(13);
// s2.add(12);
// s2.add(12);
// console.log(s2);
// console.log(s2.has(3));//return false
// console.log(s2.has(11));//return true;
// for(let num of s2){
//     console.log(num);
// }
// s2.delete(11);
// console.log(s2);
// s2.clear();
// console.log(s2);




// map
// in objects keys are only either string or symbol. To restrict this limitation we use map
const m1 = new Map([
    ["Rohit", 40],
    [2, "Rohit"],
    [true, [1, 2, 3]],
    [[1, 4, 5, 6], {Name: "Madhur", Age: 20}]
]);








