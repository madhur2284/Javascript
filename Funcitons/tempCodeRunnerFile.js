let arr1 = [5, 6, 7, 8];
let [first, second, ...number] = arr1;
console.log(first, second, number);
//Rest operator is different form spread operator because spread operator act on arrays and objects. it used to unwrap array/arrays or make each element a single entity
//eg
let arr2 = [[-3, -2, -1, 0] ,1, 2, 3, 4];
let arr3 = [...arr1 ,...arr2];
console.log(arr3);