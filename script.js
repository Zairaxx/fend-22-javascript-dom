console.log("Hej hej")

//1. Ändra på ett existerande HTML-element

let myH1 = document.querySelector("h1");
// console.log(myH1);

myH1.innerText= "Javascript - DOM Introduktion";

//2. Skapa och lägga till element på vår sida.

// Steg 1: Skapa elementet
let myH2 = document.createElement("h2");
// Steg 2: Ge elementet ett värde
myH2.innerText = "DOM står för Document Object Model";
myH2.style.background = "coral";

// Steg 3: Placera elementet någonstans i DOM:en
document.body.append(myH2);

