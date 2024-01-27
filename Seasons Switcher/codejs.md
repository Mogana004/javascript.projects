``` js
let springSmallImageElement = document.getElementById("seasonSmallImage")
let springMediumImageElement = document.getElementById("seasonMediumImage")



function onSpring() {
    springSmallImageElement.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-xs-img.png";
    springMediumImageElement.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-md-img.png";



}

function onSummer() {
    let summerBtnElemtone = document.getElementById("summerBtn").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-xs-img.png";
    let summerBtnElemttwo = document.getElementById("summerBtn").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-md-img.png";
    springSmallImageElement.src = summerBtnElemtone;
    springMediumImageElement.src = summerBtnElemttwo;

}

function onAutumn() {
    let autumnBtnElemtone = document.getElementById("autumnBtn").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-xs-img.png";
    let autumnBtnElemttwo = document.getElementById("autumnBtn").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-md-img.png";
    springSmallImageElement.src = autumnBtnElemtone;
    springMediumImageElement.src = autumnBtnElemttwo;
}

function onWinter() {
    let winterBtnElemtone = document.getElementById("winterBtn").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-xs-img.png";
    let winterBtnElemttwo = document.getElementById("winterBtn").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-md-img.png";
    springSmallImageElement.src = winterBtnElemtone;
    springMediumImageElement.src = winterBtnElemttwo;


}
```
