/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds). Hint: try searching for setTimeout. (https://www.w3schools.com/jsref/met_win_settimeout.asp)

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/

function cambioBackground(){
    const background = document.querySelector("body");
    background.style.backgroundColor = "orange";
}

setTimeout(cambioBackground, 5000);

let index=0;
const colores = ["yellow", "green", "red", "pink", "gray"];
setInterval (() => document.body.style.backgroundColor = colores[index++ % colores.length], 5000);