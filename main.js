

//Alla rätta svar
let svar1 = document.querySelector("#a2");
let svar2 = document.querySelector("#b3");
let svar3 = document.querySelector("#c1");
let svar4 = document.querySelector("#d3");
let svar5 = document.querySelector("#e3");
let svar6 = document.querySelector("#f2");
let svar7 = document.querySelector("#g1");
let svar8 = document.querySelector("#h2");
let svar9 = document.querySelector("#i3");
let svar10 = document.querySelector("#j2");
let svar11 = document.querySelector("#j3");
let svar12 = document.querySelector("#j1");

//Check knapp
let checkBtn = document.querySelector("#check");

checkBtn.addEventListener("click", () => {
    let points = 0; 

    if (svar1.checked === true){points ++;}
    if (svar2.checked === true){points ++;}
    if (svar3.checked === true){points ++;}
    if (svar4.checked === true){points ++;}
    if (svar5.checked === true){points ++;}
    if (svar6.checked === true){points ++;}
    if (svar7.checked === true){points ++;}
    if (svar8.checked === true){points ++;}
    if (svar9.checked === true){points ++;}
    if (svar10.checked === true && svar11.checked === true && svar12.checked === false){points ++;}
    console.log(points);
})

//Dark/light mode knapp
let toggle = document.querySelector("#toggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("togglee");

})
