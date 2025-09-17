// JavaScript Document
console.log("hi");

const zichtbaarheid = document.querySelectorAll('.vervagen');

// https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp en chatgpt // 
const togglebutton = document.getElementById('togglebutton');


togglebutton.addEventListener('click', () => {
    document.classList.toggle ("darkmode")
})