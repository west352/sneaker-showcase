const container = document.querySelector(".container");
const card = document.querySelector(".card");
const sneaker = document.querySelector(".sneaker img");
const title = document.querySelector(".title");
const description = document.querySelector("h3");
const sizes = document.querySelector(".sizes");
const purchase = document.querySelector(".purchase");

//Add animation
container.addEventListener("mousemove", (event) => {
    let xAxis = (window.innerWidth/2 - event.pageX)/25;
    let yAxis = (window.innerHeight/2 - event.pageY)/25;
    card.style.transition = "none";
    card.style.transform = `rotateX(${yAxis}deg)rotateY(${xAxis}deg)`;
});

container.addEventListener("mouseenter", (event) => {
    sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
    title.style.transform = "translateZ(150px)";
    description.style.transform = "translateZ(125px)";
    sizes.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(75px)";
})

//Remove animation
container.addEventListener("mouseleave", (event) => {
    sneaker.style.transform = "none";
    title.style.transform = "none";
    description.style.transform = "none";
    sizes.style.transform = "none";
    purchase.style.transform = "none";
    card.style.transform = "none";
    card.style.transition = "all 0.5s ease";
})

//Change selected shoe sizes
let currentActiveButton;
/**
* make the clicked button "active" and remove the "active" effect
* on the previously acitive button. if the clicked button is already active, deactivate it.
@param {Event} event - the event paramter that is available to event handlers
*/
function switchActiveMode(event) {
    const clickedButton = event.target;
    if (clickedButton.classList.contains("active")) {
        clickedButton.classList.remove("active");
    } else {
        if (typeof currentActiveButton != "undefined") {
            currentActiveButton.classList.remove("active");
        }
        clickedButton.classList.add("active");
        currentActiveButton = clickedButton;
    }
}

// Add switchActiveMode as an event handler for all shoe size buttons' click event
const sizeButtons = Array.from(sizes.children);
sizeButtons.forEach((element) => {
    element.addEventListener("click", switchActiveMode);
})