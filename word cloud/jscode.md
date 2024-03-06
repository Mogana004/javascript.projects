```js
let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];

let wordsContainer = document.getElementById("wordsContainer");
let userInput = document.getElementById("userInput");
let errorMsg = document.getElementById("errorMsg");
let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", addWord);

function addWord() {
    // Clear previous error messages
    errorMsg.textContent = "";

    // Get user input
    let userWord = userInput.value.trim();

    // Check if user input is empty
    if (userWord === "") {
        errorMsg.textContent = "Please enter a word.";
        return;
    }

    // Generate random font size (between 12px and 30px)
    let fontSize = Math.floor(Math.random() * (30 - 12 + 1)) + 12;

    // Create a span element with the random font size
    let wordSpan = document.createElement("span");
    wordSpan.textContent = userWord;
    wordSpan.style.fontSize = fontSize + "px";

    // Append the span element to wordsContainer
    wordsContainer.appendChild(wordSpan);

    // Clear the user input
    userInput.value = "";
}

```
