// async await
// async function always return a promise

//Using Promise
function greeting(){
    return new Promise((resolve, reject)=>{
        if(1){
            resolve("Gupta");
        }
        else{
            reject("Don't know the surname");
        }
    })
}

const p = greeting();
p.then((response)=>{
    console.log(response);
})
.catch((error)=>{
    console.error(error);
})



//Using async
async function greet(){
    return "Madhur";
}

const s = greet();
s.then((response)=>{
    console.log(response);
});



// await
//await make the asynchornous task synchronous means it will stop the execution untill the task is completed
//eg
//const p = await fetch("https://api.github.com/users");
//the code didn't move forward untill the response will be fetched from github api
//But this will stop the execution of the whole code. is't promise where maid to deal with these kind of stuff.
//so we use async await together.

async function github(){
    const p = await fetch("https://api.github.com/users");
    const q = await p.json();
    console.log(q);
}

github();

console.log("Hello")
