let email =
document.getElementById("email");

let password =
document.getElementById("password");

let loginBtn =
document.getElementById("loginBtn");

loginBtn.addEventListener("click", ()=>{

    if(email.value === "" ||
       password.value === ""){

        alert("Please fill all fields");

    }

    else{

        window.location.href ="dashboard.html";

    }

});