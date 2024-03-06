
let setIntervalBtnElement = document.getElementById("setIntervalBtn");
let clearIntervalBtnElement = document.getElementById("clearIntervalBtn");

let uniqueId = null;

setIntervalBtnElement.onclick = function() {
    let counter = 0;
    uniqueId = setInterval(function() {
        console.log(counter);
        counter = counter + 1;

    }, 2000);
    console.log(uniqueId);

};

clearIntervalBtnElement.onclick = function() {

    clearInterval(uniqueId);
    console.log("clear Interval Called");
};
