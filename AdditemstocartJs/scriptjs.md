```js
let pageContainer = document.getElementById("containercart");

// Create heading element
let headingEl = document.createElement("h1");
headingEl.textContent = "Add to Cart";
pageContainer.appendChild(headingEl);

// Create input element
let inputEl = document.createElement("input");
inputEl.type = "text";
inputEl.id = "cartItemTextInput";
inputEl.placeholder = "Enter your text here";
pageContainer.appendChild(inputEl);

// Create button element
let buttonEl = document.createElement("button");
buttonEl.classList.add("button-class", "d-flex", "flex-row");
buttonEl.id = "addBtn";
buttonEl.textContent = "Add";
pageContainer.appendChild(buttonEl);

// Get the list container
let listContainer = document.getElementById("listContainer");

// Create heading for the cart items
let cartHeading = document.createElement("h1");
cartHeading.textContent = "My Cart Items";
listContainer.appendChild(cartHeading);

// Event listener for the button click
buttonEl.addEventListener("click", function() {
    // Create list item element
    let liElement = document.createElement("li");

    // Set the text content of the list item to the value entered in the input
    liElement.textContent = inputEl.value;

    // Append the list item to the list container
    listContainer.appendChild(liElement);

    // Clear the input after adding to the list
    inputEl.value = "";
});
```

