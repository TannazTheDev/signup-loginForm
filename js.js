let username = document.getElementById("Username");
let password = document.getElementById("Password");
let value;
function GetInfoSignUp() {
    username = username.value;
    localStorage.setItem("usernameEntered", username);
    password = password.value;
    localStorage.setItem("passwordEntered", password);
    let array = document.getElementsByName("gender");
    for (let i = 0; i < 2; i++) {
        if (array[i].checked == true) {
            value = i;
        }
    }
    document.getElementById("now-login").innerHTML = "So Now That You Signed Up; Login!"
}
//////////////////////////////////////////////////
let user = document.getElementById("user");
let pass = document.getElementById("pass");
function check() {
    user = user.value;
    pass = pass.value;
    if (user == localStorage.getItem("usernameEntered") && pass == localStorage.getItem("passwordEntered")) {
        document.getElementById("result").innerHTML = "success";

    }
    else {
        document.getElementById("result").innerHTML = "failure";
    }
}