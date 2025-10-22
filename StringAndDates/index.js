//                                                             //String
let str1 = " Madhur ";
let str2 = `Hello, ${str1}`;
let str3 = `hello
hi
hola`;
console.log(str1);
console.log(str2);
console.log(str3);
console.log(str1.length)//will return the length of string

console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
console.log(str1.includes("adh"));//return true fill x present in the string otherwise return false
console.log(str1.indexOf(" "));
console.log(str1.slice(1, 4));//return the part of the string between index 1 and 4 including 1 and excluding 4
console.log(str1.slice(-1, -3));
console.log(str1.slice(3));//return the part of string form index 3
console.log(str1.replace(" ", " gupta "));//replace the first string and replace it with second string. it just replace the first occurance of first string
console.log(str1.replaceAll(" ", " ji "));//return the string with all occurance of first stirng with second string
console.log(str1.replaceAll(" ", " ji ").trim());//this return a string after removing all the leading and trailing whitespaces and line terminator characters form the string
const Name = "Madhur,Rahul,Divyansh,Sambhav,Krishna,Utkarsh";
console.log(Name.split(","));//this will return an array of all the string which 
console.log(Name.split(",")[0]);


//                                                      Date
const now = new Date;
console.log(now);
console.log(now.toString());
console.log(now.toLocaleString());
console.log(now.getDay());//return a number 1 for monday, 2 for tuesday and etc.
console.log(now.getDate());
console.log(now.getFullYear());
console.log(now.getMonth());//return a number 0 for january, 1 of feburary and etc.
console.log(now.getHours());
const n = Date.now();//This will give the total milliseconds. this is timeStamp that's how server and database deal in time
console.log(n);
const f = new Date(0);
console.log(f.toString());//this is the time form where the milliseconds count starts.
f.setMonth(7);
f.setDate(28);
f.setFullYear(2004);
console.log(f.toString());
console.log(f.toLocaleString());
console.log(f.toISOString());//this is universal time format and that's what we will sent to server. here z means zulu time means utc



