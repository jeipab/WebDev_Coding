document.addEventListener("DOMContentLoaded", function() {
    const otherRadio = document.getElementById("other");
    const otherGenderContainer = document.getElementById("other_gender_container");
    const otherGenderInput = document.getElementById("other_gender");

    document.querySelectorAll("input[name='gender']").forEach(input => {
        input.addEventListener("change", function () {
            if (otherRadio.checked) {
                otherGenderContainer.style.display = "block";
                otherGenderInput.setAttribute("required", "true");
            } else {
                otherGenderContainer.style.display = "none";
                otherGenderInput.removeAttribute("required");
            }
        });
    });
    
    const termsCheckbox = document.querySelector(".terms_and_conditions input[type='checkbox']");
    const submitButton = document.querySelector(".submit input[type='submit']");

    submitButton.disabled = true;

    termsCheckbox.addEventListener("change", function() {
        submitButton.disabled = !termsCheckbox.checked;
    });

    const passwordField = document.getElementById("password");
    const confirmPasswordField = document.getElementById("confirm_password");

    if (passwordField) {
        passwordField.addEventListener("keyup", validatePassword);
    }

    if (confirmPasswordField) {
        confirmPasswordField.addEventListener("keyup", validatePassword);
    }

    const video = document.getElementById("background_video");
    const body = document.body;

    if (video) {
        video.muted = true;

        video.addEventListener("loadeddata", function() {
            body.classList.remove('no-video');
        });

        video.addEventListener("error", function() {
            body.classList.add('no-video');
        });

        if (video.readyState === 0) {
            body.classList.add('no-video');
        }
    } else {
        body.classList.add('no-video');
    }

    document.querySelector(".form-container form").addEventListener("submit", function(event) {
        alert("Form submitted successfully!");
    });
    
});

function validatePassword() {
    var password = document.getElementById("password").value;

    var lengthValid = password.length >= 8;
    var numberValid = /[0-9]/.test(password);
    var specialValid = /[\W_]/.test(password);

    document.getElementById("length").className = lengthValid ? "valid" : "invalid";
    document.getElementById("number").className = numberValid ? "valid" : "invalid";
    document.getElementById("special").className = specialValid ? "valid" : "invalid";

    validateConfirmPassword();
}

function validateConfirmPassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm_password").value;

    if (confirmPassword.length > 0) {
        var matchValid = password === confirmPassword;
        document.getElementById("match").className = matchValid ? "valid" : "invalid";
    }
}