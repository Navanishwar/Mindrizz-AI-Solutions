console.log("Version 2.0");
console.log("Mindrizz AI Loaded");

document.addEventListener("DOMContentLoaded", () => {

    const button = document.querySelector(".btn");

    if(button){

        button.addEventListener("mouseenter", () => {
            button.style.transform = "scale(1.08)";
        });

        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
        });

    }

});


const path = document.getElementById("infinityCurve");
const orb = document.querySelector(".orb");


console.log(path);

const length = path.getTotalLength();

console.log(length);

let progress = 0;


function animateOrb(){

    const point = path.getPointAtLength(progress);

    // Move Orb
    orb.style.left = (point.x - 7) + "px";
    orb.style.top = (point.y - 7) + "px";

    // Move forward
    progress += 0.88;

    // Loop
    if(progress >= length){
        progress = 0;
    }

    requestAnimationFrame(animateOrb);

}

animateOrb();