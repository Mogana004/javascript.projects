```js
let arr = [1, 7, 3, 1, 0, 20, 77];
let stringefiedArray = JSON.stringify(arr);

let updatedArray =document.getElementById("updatedArray");
updatedArray.textContent = stringefiedArray ;

let btnSplice = document.getElementById('spliceBtn');
let startIndexInput = document.getElementById("startIndexInput");
let deleteCountInput = document.getElementById("deleteCountInput");
let itemToAddInput = document.getElementById("itemToAddInput");

function updatedArrayFunction(){
    let startIndexInputValue =startIndexInput.value;
    let deleteCountInputValue = deleteCountInput.value;
    let itemToAddInputValue = itemToAddInput.value;
    
    let startIndex = parseInt(startIndexInputValue);
    let deleteCount =parseInt(deleteCountInputValue);
    let ItemToAdd = itemToAddInputValue;
    arr.splice(startIndex , deleteCount , ItemToAdd);
    let stringefiedArray =JSON.stringify(arr);
    updatedArray.textContent = stringefiedArray;
    
    
}
function onSpliceUpdate(){
    let startIndexInputValue = startIndexInput.value;
    let deleteCountInputValue = deleteCountInput.value;
    let itemToAddInputValue = itemToAddInput.value;
    if (startIndexInputValue === ""){
        alert('enter the start index ');
        
    }else {
        updatedArrayFunction();
        
    }
    if (deleteCountInputValue === ""){
        deleteCountInput.value = 0 ;
        
    }
    if (itemToAddInputValue === ""){
        itemToAddInput.value = '';
        
    }
}
btnSplice.onclick = function(){
    onSpliceUpdate();
}

```
