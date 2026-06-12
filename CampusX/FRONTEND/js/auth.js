const form = document.querySelector("form");
const usernameInput = document.querySelector('input[name="username"]');
const passwordInput = document.querySelector('input[name="password"]');
const checkbox = document.querySelector('input[type="checkbox"]');
const loginButton = document.querySelector(".login-btn");

window.onload = function() {

    if (localStorage.getItem("username")) {

        usernameInput.value = localStorage.getItem("username");
        checkbox.checked = true;

    }

};

form.addEventListener("submit", function(event) {

    if (usernameInput.value.trim() === "" || passwordInput.value.trim() === "") {

        alert("Please fill all fields!");
        event.preventDefault();

    }

});

checkbox.addEventListener("change", function() {

    if (checkbox.checked) {

        localStorage.setItem("username", usernameInput.value);

    } else {

        localStorage.removeItem("username");

    }

});

loginButton.addEventListener("click", () => {

    loginButton.innerHTML = "Logging in...";

});
const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function () {

        const btn = form.querySelector("button");

        btn.innerText = "Processing...";

        btn.disabled = true;

    });

}