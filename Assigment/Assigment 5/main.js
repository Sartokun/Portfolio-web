let buttonType = 0;

window.onload = function() {
    document.getElementById("top").innerText = "Welcome to the Forum";
};

function postFunction() {
    buttonType++;
    const message = document.getElementById("message").value;
    if (message.trim() === "") {
        alert("Please enter a message.");
        return;
    }

    if (buttonType === 1) {
        document.getElementById("topic").innerText = message;
    } else if (buttonType === 2) {
        document.getElementById("reply1").innerText = message;
    } else if (buttonType === 3) {
        document.getElementById("reply2").innerText = message;
    }
    document.getElementById("message").value = "";
}

function clearFunction() {
    document.getElementById("topic").innerText = "";
    document.getElementById("reply1").innerText = "";
    document.getElementById("reply2").innerText = "";
    document.getElementById("message").value = "";
    buttonType = 0;
}
