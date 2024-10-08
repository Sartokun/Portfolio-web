window.onload = loginLoad;

function loginLoad() {
    var clickLogin = document.getElementById("myLogin");
    clickLogin.onsubmit = checkLogin;
}

function checkLogin() {
	var form = document.forms["myLogin"];
	var username = form["username"].value;
	var password = form["password"].value;

	// var storedUsername = localStorage.getItem("username");
	// var storedPassword = localStorage.getItem("password");

	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const storedUsername = urlParams.get('username');
	const storedPassword = urlParams.get('password');
	if (username === storedUsername && password === storedPassword) {
		alert("การเข้าสู่ระบบสำเร็จ");
		return true;
	} else {
		alert("Username หรือ Password ไม่ถูกต้อง. กรุณากรอกใหม่");
		// alert("storedUsername : " + storedUsername);
		// alert("storedPassword : " + storedPassword);
		return false;
	}
}