const p1 = fetch("https://api.github.com/users");
console.log(p1);  //This will print "Promise { <pending> }". This is the status of the request
//there are three stages of Promise 1.) pending, 2.) fullfilled and 3.) reject
//reject will only show in three conditions i)Internet Down, ii)Server Down and iii)DNS issue
//fullfilled will show when we get response or when the server was


// //below will print a msg form server which give informations about our api call. but this will not give the data we wanted from
// //the api call because data we get in response of the api call is received in bytes and we have to use .json() function to get that data
// p1.then((response)=>{
//     console.log(response);
// })



// //.json() is also a promise so the below code will again print "Promise { <pending> }".
// p1.then((response)=>{
//     console.log(response.json());
// })




// //to get data we do following thing.
// const p2 = p1.then((response)=>{
//     return response.json();
// })

// p2.then((response)=>{
//     console.log(response);
// })




// //Above method is long so we use promise Chaining
// //.then() do it work when promise is fullfilled.
// //.catch() do it work when promise is rejected.
// //.finally() do it work in both cases.
// p1.then((response)=>{
//     console.log(response);
//     return response.json();
// })
// .then((response)=>{
//     console.log(response);
// })
// .catch((error)=>{
//     console.error(error);
// })
// .finally(()=>{
//     console.log("Promise Setteled!");
// })



p1.then(response=>{
    if(!response.ok){
        throw new Error("Data is not present in server");
    }
    return response.json();
})
.then(response =>{
    const parent = document.getElementById("first");
    const fragment = document.createDocumentFragment();
    for(let r of response){
        const div = document.createElement("div");
        div.classList.add("childs");
        const img = document.createElement("img");
        const h1 = document.createElement("h1");
        const a = document.createElement("a");
        img.src = r.avatar_url;
        img.style.height = "100px";
        img.style.width = "100px";
        h1.textContent = r.login;
        a.href = r.html_url;
        a.text = "Github Profile";
        div.append(h1, img, a);
        fragment.append(div);
    }
    parent.append(fragment);
})
.catch(error=>{
    console.error(error);
})