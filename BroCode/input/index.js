//There are two different way to take input from user
// 1. easy way using prompt
let firstName = false;
while(Boolean(firstName) == false){
    firstName = window.prompt("What is you First Name");//this will return a string
}

const firstname = document.createElement("h2");
firstname.innerHTML = firstName;
document.body.appendChild(firstname);


let username;
document.getElementById("sub").onclick = function(event){
    event.preventDefault();//this will prevent the page form refreshing automatically after clicking submit button 
    username = document.getElementById("inp").value;
    console.log(username);
    const h2 = document.createElement("h2");
    h2.innerHTML = username;
    document.body.appendChild(h2);
};
