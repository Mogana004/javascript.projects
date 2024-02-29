# splice function

### removing item
``` js
let myArray = [5, "six" , 2 , 8.2];
myArray.splice(2, 2);

console.log(myArray);  // [5, "six"]





```
> syntax : arr.splice(Start, Delete Count)


### adding item

```js
let myArray = [5, "six", 2, 8.2];
myArray.splice(2, 0, "one", false);

console.log(myArray);  // [5, "six", "one", false, 2, 8.2]


```
> syntax:  arr.splice(Start, Delete Count, Item1, Item2 ... )


### Replacing existing items
```js

let myArray = [5, "six", 2, 8.2];
myArray.splice(2, 1, true);

console.log(myArray);  // [5, "six", true, 8.2]
```
> syntax : arr.splice(Start, Delete Count, Item1, Item2 ... )
