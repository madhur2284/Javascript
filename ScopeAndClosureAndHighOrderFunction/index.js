//Scope are of some types
// 1.)Global Scope -> variables declared in global scope can we used anywhere in the code. even inside a block and inside a function
// 2.)Block Scope -> variables declared inside block can only be accesible inside block scope. only var didn't respect block scope a varible declared inside block using var can also be used outside of that block.
// 3.)Fucntional Scope -> variables declared inside functional block can only be accessed inside the function
// 4.)Lexical Scope -> Scope of a variable depends on the position of the variable. 




// // closer -> it's the property of javascript that it remember the variable form it's outerscope even when the outer functions execution is completed.
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

const arr = [1, 2, 3, 4];
//forEach
//forEach take a function as a parameter and that function can have three parameters which are number, index, array and the number is compulsory
//number return the element of the array, index return the index of elements and array return the whole array
arr.forEach((number)=>{
    console.log(number);
})

arr.forEach(function(number, index, array){
    console.log(number, index, array);
})
//we can also manipulate the elements
arr.forEach((number)=>{
    console.log(number*number);
})
console.log(arr);



//filter
arr.join();







