window.onload = pageLoad; 

function pageLoad() {
    var clickRegister = document.getElementById("myRegister");
    clickRegister.onsubmit = validateForm;
}

function validateForm() {
    var form = document.forms["myRegister"];
    var username = form["username"].value;
    var passwords = form["password"];

    var requiredFields = ["firstname", "lastname", "gender", "bday", "email", "username"];
    for (var field of requiredFields) {
        if (!form[field].value) {
            document.getElementById("errormsg").textContent = "กรุณากรอกข้อมูลให้ครบถ้วน";
            return false;
        }
    }

    if (passwords[0].value !== passwords[1].value) {
        document.getElementById("errormsg").textContent = "Password และ Retype Password ต้องตรงกัน";
        // alert("Password และ Retype Password ต้องตรงกัน");
        return false;
    }

    // alert("username : " + username);
    // alert("password : " + password);
    // saveUserData(username, password);
    return true;
}

function saveUserData(username, password) {
	localStorage.setItem("username", username);
	localStorage.setItem("password", password);
}