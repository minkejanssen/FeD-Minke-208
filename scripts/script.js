// JavaScript Document
console.log("hi");






let Welkom = document.getElementById("welkom");

// voorbeeld code van mijn opdracht van inleiding programmeren van jaar 1 //
function veranderTekst() {
    Welkom.textContent = "Welkom bij Joe & the Juice, scroll verder voor meer informatie!"
}

Welkom.addEventListener("click", veranderTekst);
