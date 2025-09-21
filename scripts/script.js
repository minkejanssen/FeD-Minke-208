// JavaScript Document
console.log("hi");




let Lettergrootte = document.querySelector("h3")

let Welkom = document.getElementById("welkom");

document.querySelector("h3").style.fontSize = "20px";

// voorbeeld code van mijn opdracht van inleiding programmeren van jaar 1 //
function veranderTekst() {
    Welkom.textContent = "Welcome to Joe & the Juice, scroll down to learn more!"
}

Welkom.addEventListener("click", veranderTekst);
