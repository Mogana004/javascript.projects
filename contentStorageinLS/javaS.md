
```html
let saveButton = document.getElementById("saveButton");
let textAreaEL = document.getElementById("textArea");
saveButton.onclick = function() {
    let content = textAreaEL.value;
    localStorage.setItem("userContent", content);

}
```
