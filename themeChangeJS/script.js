let inputEl = document.getElementById("themeUserInput");
let bgContainerEl = document.getElementById("bgContainer");
let bgContainerClass = bgContainerEl.classList;

inputEl.addEventListener("keydown", function(event) {
    let changeColor = inputEl.value;
    if (event.key == "Enter" && changeColor === "Dark") {
        // Set the background image using the style property
        bgContainerEl.style.backgroundImage = 'url("https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png")';

        // Add a class to indicate the dark theme (optional)
        bgContainerClass.add("dark-theme");
    }
});
