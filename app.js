const menuBtn = document.querySelector('.menu');
const tab = document.querySelector('.tab');
const closeBtn = document.querySelector('.closeBtn');
const overlay = document.querySelector('.overlay');
const mode = document.querySelector('.mode');
const timeSp = document.querySelector('.s1tsag');
menuBtn.addEventListener('click', ()=>{
    //tab.className = "show-tab";
    tab.classList.add("show-tab");
    overlay.classList.add("show-overlay");
});
closeBtn.addEventListener('click', ()=>{
    tab.classList.remove("show-tab");
    overlay.classList.remove("show-overlay");
});
let aboutm = {
    school : "79-р сургуульд сурдаг.",
    grade : "11th grade",
    phone : 88719518,
    age : 15 + "настай",
    favs : "Math, Physics, English",
    city: "Ulaanbaatar",
    hobby:  "Код бичих",
    favc : "хар",
    tsag : 16,
}
const emailInput = document.querySelector('.fn1');
const feedInput = document.querySelector('.fn2');
const submit = document.querySelector('.fn3');
submit.addEventListener('click',()=>{
    if(emailInput == "" || feedInput == ""){
        alert("Хоосон байна!");
    }else{
        alert("Хоосон байна");
    }

});