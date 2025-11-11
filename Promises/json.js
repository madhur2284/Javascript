//json is lightweight text format used to transfer data form one system to another efficiently. it makes the content easy to read
// and write by machine and humans. it is understood in many languages such as js, java, python and etc.

let jsObject = {
    Name: "Madhur",
    Job: "Student",
    greeting: function(){
        console.log("Hello");
    },
    age: 21,
    marks: [99, 98, 97, 98, 99, 99],
    friends: {
        first: "Ayush",
        Second: "Mayank",
        Third: "Divyansh",
        Fourth: "Sambhav",
        Fifth: "Krishna",
        Sixth: "Utkarsh"
    },
    salary: null,
    isEngaged: undefined,
}

let json = `{
    "Name": "Madhur",
    "Job": "Student",
    "age": 21,
    "marks": [99, 98, 97, 98, 99, 99],
    "friends": {
        "first": "Ayush",
        "Second": "Mayank",
        "Third": "Divyansh",
        "Fourth": "Sambhav",
        "Fifth": "Krishna",
        "Sixth": "Utkarsh"
    },
    "Salary": null
}`

console.log(typeof jsObject);//Object
console.log(typeof json);//String

//Conversion from json to js Object and js Object to json
//.stringify()
const ObjectTojson = JSON.stringify(jsObject);
const jsonToObject = JSON.parse(json);

console.log(typeof ObjectTojson);
console.log(typeof jsonToObject);

//when fetch call the api, api in response of the call returns data in json format and then we have to convert that json into js
//object using response.json().

/*
| Feature         | `response.json()`                | `JSON.parse()`                         |
| --------------- | -------------------------------- | -------------------------------------- |
| Belongs to      | Fetch API                        | Core JavaScript                        |
| Input           | Response object (from API)       | JSON string                            |
| Output          | JS Object (wrapped in a Promise) | JS Object (directly)                   |
| Asynchronous?   | ✅ Yes (returns Promise)         | ❌ No (synchronous)                   |
| Common Use Case | Reading API responses            | Parsing a JSON string you already have |

*/

