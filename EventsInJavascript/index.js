// //inefficient Method
// const child1 = document.getElementById("child1");
// child1.addEventListener('click', ()=>{
//     child1.textContent = "Child1 is Clicked";
// })
// //simillarly we can add eventListener to all childs but it's inefficient




// //efficient method
// const parent = document.getElementById("parent");
// for(let child of parent.children){
//     child.addEventListener('click', ()=>{
//         child.textContent = `${child.id} is clicked`;
//     })
// }
// //the for loop attach eventListener to all child and when we click the div event occurs

//we can do it more easily with event object
parent.addEventListener('click', (e)=>{
    e.target.textContent = `${e.target.id} is clicked`;
})

//This example will teach you about event bubbling
const GrandParent = document.getElementById("GrandParent");
GrandParent.addEventListener('click', (e)=>{
    e.stopPropagation();
    console.log("GrandParent is clicked");
}, false)

const Parent = document.getElementById("Parent");
Parent.addEventListener('click', (e)=>{
    e.stopPropagation();
    console.log("Parent is clicked");
}, false)

const Child = document.getElementById("Child");
Child.addEventListener('click', (e)=>{
    e.stopPropagation();
    console.log("Child is clicked");
}, false)
//first we have to learn how event handled in js
//1.) Capturing phase : In this phase traversing happening on the dom tree till we reach the target
//2.) Traget Phase: Traversing on the Dom tree stops when we get the target
//3.) Bubbling Phase: it then start executing all the events who have addEventListener

//third Parameter : It is false by default
//true -> while capturing phase if third parameter is true then it execute that event even before reaching the target 
//false -> if it's false then first capturing and target phase complete then in the bubbling phase these events executed




//event object are object returned by browser which contain every information related to event
