//js is single threaded synchronous language
//single threaded means only one task will execute at a time
//synchronous means task will execute one by one in the order they are written in the code
console.log("hello, ji");

setTimeout(()=>{
    console.log("SetTimeout executed once");
}, 5000);

setTimeout(()=>{
    console.log("SetTimeout executed twice");
}, 6000);

console.log("End");


//JavaScript runs single-threaded and executes code synchronously in the call stack.
//When it encounters asynchronous tasks (like fetch or setTimeout), it delegates them to the browser’s Web APIs.
//Once those tasks finish, their callbacks are placed in the Callback Queue (or Microtask Queue for Promises).
//The Event Loop continuously checks if the call stack is empty — if it is, it pushes queued callbacks into the stack for execution.