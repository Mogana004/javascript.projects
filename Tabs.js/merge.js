let aboutTabElement = document.getElementById('aboutTab');
let timeToVisitTabElement = document.getElementById("timeToVisitTab");
let attractionsTabElement = document.getElementById("attractionsTab");
let aboutButtonElement = document.getElementById("aboutButton");
let timeToVisitButtonElement = document.getElementById("timeToVisitButton");
let attractionButtonElement = document.getElementById("attractionsButton");

timeToVisitTabElement.className = "d-none";
attractionsTabElement.className = "d-none";

function aboutBtn() {
    aboutTabElement.className = "d-block";
    timeToVisitTabElement.clasName = "d-none";
    attractionsTabElement.className = "d-none";
    timeToVisitButtonElement.style.backgroundColor = "#dae2ec";
    attractionButtonElement.style.backgroundColor = "#dae2ec";
    aboutButtonElement.style.borderWidth = "0px";
    aboutButtonElement.style.border = "none";
    aboutButtonElement.style.outline = "none";

}

function timeToVisitBtn() {
    aboutTabElement.className = 'd-none';
    timeToVisitTabElement.className = "d-inline";
    attractionsTabElement.className = "d-none";
    aboutButtonElement.style.backgroundColor = "#dae2ec";
    timeToVisitButtonElement.style.backgroundColor = "#ffffff";
    timeToVisitButtonElement.style.border = "none";
    timeToVisitButtonElement.style.outline = "none";
    timeToVisitButtonElement.style.backgroundColor = "#dae2ec";
    timeToVisitButtonElement.style.borderWidth = "0px";


}

function attractionsBtn() {
    aboutTabElement.className = "d-none";
    timeToVisitTabElement.className = "d-none";
    attractionsTabElement.className = "d-block";
    aboutButtonElement.style.backgroundColor = "#dae2ec";
    timeToVisitButtonElement.style.backgroundColor = "#ffffff";
    timeToVisitButtonElement.style.border = "none";
    timeToVisitButtonElement.style.outline = "none";
    timeToVisitButtonElement.style.backgroundColor = "#dae2ec";
    timeToVisitButtonElement.style.borderWidth = "0px";
}
