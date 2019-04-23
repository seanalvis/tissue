
"script";

function login() {
    var username = document.getElementById('username');
    username = username.value;
    var password = document.getElementById('password');
    password = password.value;

    if (username === 'admin@tissue.com' && password === 'admin123') {
        username = '';
        password = '';
        window.location.href =  "subscription-dashboard.html";
       
    } else {
        username = '';
        password = '';
        alert("Invalid Credentials");
    }
}