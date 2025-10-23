//                                                 //object
//key value pair
const user = {
    Name: "Madhur",
    surname: "Gupta",
    age: 21,
    emailId: "madhur.gupta.2284@gamil.com",
    amount: 10000000,
    currency: "Dollars",
    greeting: function (){
        console.log(`hello, ${user.Name}`);//It's one way of accesing object data member inside member function
        console.log(`hello, ${this.Name}`);//It's another way of accessing object data member inside member function
        return this.amount;//This function
    },
    //nested objects
    address: {
        city: "Delhi",
        District: "North Delhi"
    }
}

console.log(user.age);
console.log(user["age"]);
console.log(user.address.city);
user.aadhar = 877073690853;
console.log(user);
user.amount = 1000000000;
console.log(user);

delete user.age;
console.log(user);


//IMP
//way to print only key or only values or both key and value pair. all there mehods return an array
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
//This is for in loop. this will print only keys
for(let keys in user){
    console.log(keys);
}
//we can also access key value pair with for in loop
for(let num in user){
    console.log(num + ", " + user[num]);
}
//this is called destructuring.
const {Name,currency} = user;
console.log(Name, currency);
//we can also use different name
const {Name:userName, currency:userCurrency} = user;
console.log(userName, userCurrency);
//mainly we use for of loop because for in loop is 
//to use for of loop to iterate on an object we use array destructuring
for(let [key, value] of Object.entries(user)){
    console.log(key, value);
}

let val = user.greeting();
console.log(val);

const user2 = user;//user2 and user both refering to same memory location
//we can copy an object and also make the new object independent. this can somewhat achieved by spread operator
const user3 = {...user};
//but it didn't make the nested object independent. means it's not completely independen
//to achieve complete independency we use sturctureclone()
const user4 = structureclone(user);
console.log(user4);
