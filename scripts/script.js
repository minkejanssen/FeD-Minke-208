// JavaScript Document
console.log("hi");

const button = document.querySelector("header > button");
const nav = document.querySelector("header > nav");

const logo = document.getElementById("logo");

const kerstThema = document.getElementById("kerstknop")

const geluid = document.getElementById("geluid");

// codevoorbeeld over Intersection Observer van: https://www.youtube.com/watch?v=bE_-Qojri0U //
const texts = document.querySelectorAll('.scrollanimatie');
const observerOptions = {
   root: null,
   rootMargin: '0px', 
   threshold: 0.5, 
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add('zichtbaar');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

texts.forEach(text => {
    observer.observe(text);
});


let welkom = document.getElementById("welkom");


// voorbeeld code van mijn opdracht van inleiding programmeren van jaar 1 //
  function veranderTekst() {
      welkom.textContent = "Welcome to Joe & the Juice, scroll down to learn more!";
  }


button.addEventListener("click", () => {
    nav.classList.toggle("active");
  });




  welkom.addEventListener("click", veranderTekst);

// voorbeeld code van mijn opdracht van inleiding programmeren van jaar 1 //
logo.addEventListener("click", function (){
    geluid.currentTime = 0;
    geluid.play();
});

kerstThema.addEventListener("click", () => {
    document.body.classList.add("kerst");
  });











