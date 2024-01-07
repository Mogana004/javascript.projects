let inputElement = document.getElementById("inputElement");
let signInTextElement= document.getElementById("signInText");
function signIn(){
    let inputValue = inputElement.value;
    console.log(inputValue);
    let verifyText ="Hi " + inputValue + " , verifying your account...";
    signInTextElement.textContent =verifyText;
}