const newel = document.createElement("h2");
newel.textContent = "Strike is Coming....";
newel.id = "first";


const oldel = document.getElementsByTagName("h1");
oldel[0].after(newel);

const newel2 = document.createElement("h2");
newel2.textContent = "Strike is not Coming....";
newel2.id = "ff";
newel.before(newel2);
//simillarly there is append and prepend methods


const secel = document.createElement("h3");
secel.textContent = "hmmm......";
secel.id = "second";
// secel.className = "diwali"
// // but using className is not recommended because it overwrite the first class.
// secel.className += " holi";//by this we can overcome this limitation but still it's confusing.
//we use classList for adding classes.
secel.classList.add("diwali");
secel.classList.add("holi");
secel.classList.remove("diwali");
secel.classList.toggle("Dusshera");//it add Dusshera as a class if it's not present already. if Dussehra class is persent then it remove it
secel.classList.contains("Diwali");//It return true or false based on if the Diwali present as a class or not.

secel.style.backgroundColor = "pink";
secel.style.display = "flex";
secel.style.justifyContent = "center";

//getAttribute() and setAttribute()
console.log(secel.getAttribute("id"));
secel.setAttribute("class", "diwali");//This will overwrite 
console.log(secel.getAttribute("class"));

newel2.append(secel);

//in real world our backend return an array and we have to upload it on ui we don't do that manually instead we use for loop


// const unorderedList = document.createElement("ul");
// unorderedList.id = "ul";
// secel.after(unorderedList);
// let arr = ["Milk", "Paneer", "Matar", "Aaloo", "Gobhi"];

// for(let num of arr){
//     const list = document.createElement("li");
//     list.innerText = num;
//     unorderedList.append(list);
// }
//Above method is not recommended because we are updating the browser many times which is time comsuming
//so we use documentFragment which is offline container which we can use to append all the data and at last update the ui by appending fragement

const unorderedList = document.createElement("ul");
unorderedList.id = "ul";

let arr = ["Milk", "Paneer", "Matar", "Aaloo", "Gobhi"];
const fragment = document.createDocumentFragment();
for(let num of arr){
    const list = document.createElement("li");
    list.innerText = num;
    fragment.append(list);
}
unorderedList.append(fragment);
secel.after(unorderedList);


//Things to remember
//1.) parent.append(child); this will insert the child at very end of parent. means it create a child
//2.) parent.prepend(child); this will insert the child at starting of the parent. it also create a child
//3.)reference.after(newElement); this will insert the newElement after the reference element as a sibling
//4.) reference.before(newElement); this will insert the newElement before the reference elment as a sibling

