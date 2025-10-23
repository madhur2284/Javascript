//                                                        //Arrays
// let marks = [100, 50, 70, 90, 95, 96, 99, "Madhur", true];//array in javascript is an object and store multiple data types
// console.log(marks[0]);
// marks[1] = "hi";//arrays are mutable
// console.log(marks[1]);
// console.log(marks);
// marks.push(false);//add elements to end
// console.log(marks);
// marks.pop();//delete element form end
// console.log(marks);
// //avoid using shift and unshift because they are inefficient
// marks.unshift(0);//add element in starting
// console.log(marks);
// marks.shift();
// console.log(marks);//remove element form starting




const arr = [10, 20, 30, 40 , 50, 60, 70 , 80, 90, 100];
//iterate the array
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
//another kind of loop called for of loop it is similar to range based loops in c++
for(let num of arr){
    console.log(num);
}
arr[0] = 0;
console.log(arr);
//arr.splice(x, y); here x is the starting index and y is the total count of element to be deleted
const arr1 = arr.splice(2, 5);
console.log(arr1);
console.log(arr);

const arr2 = arr1.splice(1, 3, "Madhur", "Gupta");//this will remove 3 elements form the array form index 1 and then add the mentioned elements in the array form index 1
console.log(arr1);
console.log(arr2);

let arr3 = arr.concat(arr1, arr2);
console.log(arr3);
//spread operator used to spread an array means it unwrap the array. it is somewhat simillar to concat but it we can also concatinate objects using spread operator
console.log([...arr, ...arr1,1, 1, "hello", ...arr2]);
//.join() return a string after converting different elements of an array into single stirng
//.split(" ")used to convert a stirng into an array. it's vice versa of .join()
let arr4 = ["Madhur", "Gupta", "Divyansh", "Mayank"];
let namelist = arr4.join(" ");//we can give any partition character such as whitespace is given here, we can give a comma and etc.
console.log(arr4);
console.log(namelist);


//                                                         //Advance Array methods
//.sort()
arr4.sort();//this by default convert all the element of the array into string and sort it in lexicographical order
console.log(arr4);
arr4.reverse();
console.log(arr4);
let arr5 = [3, 54, 23, 45, 7, 2];
arr5.sort((a,b)=>a-b);//this is the way to sort a number array
console.log(arr5);

arr5.sort((a,b)=>b-a);
console.log(arr5);

//.flat()
arr5 = [1, 2, 3, [4, 5, 6, [7, 8, 9]], 10, 11];//this is 3d array
console.log(arr5[3][3][1]);
let arr6 = arr5.flat();//this will make the array flat but only upto 1 level
console.log(arr6);
arr6 = arr5.flat(2);//this will make arr5 flat upto 2 level but if we don't know the dimensions of array we can use "infinity".
console.log(arr6);

//we can destructure array
const [first, second] = arr6;
console.log(first, second);





