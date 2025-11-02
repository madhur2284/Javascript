let qoutes = [
    "All our dreams can come true if we have the courage to pursue them.",
    "Be sure you put your feet in the right place, then stand firm.",
    "Try not to become a man of success, but rather become a man of value.",
    "Success is stumbling from failure to failure with no loss of enthusiasm.",
    "Don't Let Yesterday Take Up Too Much Of Today",
    "Nothing is impossible, the word itself says 'I'm possible."
]

const btn = document.getElementsByClassName("btn")[0];
btn.addEventListener('click', (e)=>{
    const add = document.querySelector(".dynamic");
    let i = Math.floor(Math.random()*6);
    console.log(i);
    add.textContent = qoutes[i.toPrecision(1)];
})

const themeChanger = document.querySelector(".Theme");
themeChanger.addEventListener('click', (e)=>{
    const p1 = document.querySelector(".parent");
    const p2 = document.querySelector(".box")
    p1.classList.toggle("dark");
    p2.classList.toggle("dbox");
})