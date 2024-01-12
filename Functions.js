Function Declaration
function showMessage() {
  console.log("Hello");
}

showMessage();


Function Expression
let showMessage = function() {
  console.log("Hello");
};

showMessage();



More DOM Manipulations
4.1 Creating an HTML Element - createElement()

let h1Element = document.createElement("h1");
h1Element.textContent = "Web Technologies";

console.log(h1Element);  // <h1>Web Technologies</h1>



4.2 Appending to an HTML Element - appendChild()
 1)  Appending to Document Body Object:
document.body.appendChild(h1Element);

 2)  Appending to Existing Container Element:
let containerElement = document.getElementById("myContainer");
containerElement.appendChild(h1Element);




4.3 Adding Event Listeners Dynamically
let btnElement = document.createElement("button");
btnElement.textContent = "Change Heading";
document.getElementById("myContainer").appendChild(btnElement);

btnElement.onclick = function(){
  console.log("click event triggered");
};



4.4 Providing Class Names Dynamically - classList.add()
btnElement.onclick = function(){
  h1Element.textContent = "4.0 Technologies";
  h1Element.classList.add("heading");

  console.log(h1Element);
};




4.5 Removing Class Names Dynamically - classList.remove()
let removeStylesBtnElement = document.createElement("button");
removeStylesBtnElement.textContent = "Remove Styles";

document.getElementById("myContainer").appendChild(removeStylesBtnElement);

removeStylesBtnElement.onclick = function(){
  h1Element.classList.remove("heading");
};




