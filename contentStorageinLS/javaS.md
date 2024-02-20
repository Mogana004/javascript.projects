
```js
let saveButton = document.getElementById("saveButton");
let textAreaEL = document.getElementById("textArea");
saveButton.onclick = function() {
    let content = textAreaEL.value;
    localStorage.setItem("userContent", content);

}
let storedUserText = localStorage.getItem("userContent");
if (storedUserText === null) {
    textAreaEL.value = "";


} else {
    textAreaEL.value = storedUserText;
}
```
