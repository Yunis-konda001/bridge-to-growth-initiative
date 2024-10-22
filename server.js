const e = require("express");

function SendMail() {
    var params = {
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value
    }
    emailjs.send("service_u90ghzc", "template_4z39uyq", params)
    .then(function (res) {
        alert("success! " + res.status);
    })
}



