//                                                 //object
//key value pair
const user = {
    Name: "Madhur",
    surname: "Gupta",
    age: 21,
    emailId: "madhur.gupta.2284@gamil.com",
    amount: 10000000,
    currency: "Dollars",
}

console.log(user.age);
console.log(user["age"]);
user.aadhar = 877073690853;
console.log(user);
user.amount = 1000000000;
console.log(user);

delete user.age;
console.log(user);
