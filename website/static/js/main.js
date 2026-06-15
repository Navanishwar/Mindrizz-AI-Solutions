console.log("Mindrizz AI Loaded");

document.addEventListener("DOMContentLoaded", () => {

const button = document.querySelector(".btn");

button.addEventListener("mouseenter", () => {

button.style.transform = "scale(1.08)";

});

button.addEventListener("mouseleave", () => {

button.style.transform = "scale(1)";

});

});