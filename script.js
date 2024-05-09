document.addEventListener("DOMContentLoaded", ()=> {
    const password1 = document.getElementById("password1");
    const password2 = document.getElementById("password2");
    const passwordMessage = document.getElementById("message");
    const button = document.getElementById("btn");
    const form = document.getElementById("form1");

    button.addEventListener("click", function(e) {
        e.preventDefault();
        const password = password1.value;
        const confirmPassword = password2.value;
        if (password === "") alert("insert a password")
        else if(confirmPassword === "") alert("confirm your password");
        if (password != confirmPassword){
            password1.style.outline = "1px solid red";
            password2.style.outline = "1px solid red";
            passwordMessage.textContent = "* Passwords do not match";
        } else {
            password1.style.outline = "0";
            password2.style.outline = "0";
            passwordMessage.textContent = "";
        }
    })
})