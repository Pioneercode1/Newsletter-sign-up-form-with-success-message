//
const buttonSubscribe = document.getElementById("button-subscribe");
const pError = document.getElementById("p-error-states");
const messageShow = document.getElementById("success-message-start");
const emailValue = document.getElementById("input-email");
const userEmail =  document.getElementById("user-email");
//
buttonSubscribe.addEventListener("click", () => {

    if (emailValue.value.trim() === "") {
        pError.setAttribute("class", "p-error-states-show");
    }
    else {
        messageShow.setAttribute("class", "success-message-start-show");
        userEmail.innerText = emailValue.value.trim();
        pError.setAttribute("class", "p-error-states-hidden");
    }

});
// 
const buttonDismiss = document.getElementById("button-dismiss");
buttonDismiss.addEventListener("click", () => {
    messageShow.setAttribute("class", "success-message-start-hidden");
    emailValue.value = "";
});