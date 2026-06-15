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
console.log(document.getElementById("infinityCurve"));
const path = document.getElementById("infinityCurve");
const orb = document.querySelector(".orb");

let progress = 0;
const length = path.getTotalLength();
console.log(path.getTotalLength());
function animateOrb(){

    const point = path.getPointAtLength(progress);

    orb.style.left = (point.x - 24) + "px";
    orb.style.top  = (point.y - 24) + "px";
    const trail =
    document.querySelector(".orb-trail");

    trail.style.transform =
    `translate(${point.x - 90}px, ${point.y - 8}px)`;

    progress += 2;

    if(progress >= length){
        progress = 0;
    }

    requestAnimationFrame(animateOrb);
}

animateOrb();