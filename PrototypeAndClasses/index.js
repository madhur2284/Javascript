//Prototype and Classes

const obj = {
    Name: "madhur",
    age: 21,
    greet: function(){
        console.log(`hello, ${this.Name}`);
    }
}
obj.greet();

const obj1 = {
    account: 1,
    money: 2000000000
}

console.log(`account number ${obj1.account} has ${obj1.money} in his bank account`);
//we can access data members of obj and member funcitions of obj through obj1 by .__proto__
obj1.__proto__ = obj;
console.log(`Account holder of account number ${obj1.account} is ${obj1.Name}`);

//                                                        //Class
class person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    hi (){
        console.log(`hi ${this.name}`);
    }
}

const p1 = new person("madhur", 21);
p1.hi();

// Inheritance
class customer extends person{
    constructor(name, age, account, balance){
        super(name, age);
        this.account = account;
        this.balance = balance;
    }
    printf(){
        console.log(`account: ${this.account}, balance: ${this.balance}`);
    }
}

const c1 = new customer("madhur", 21, 1, 2000000000);
c1.hi();
c1.printf();

