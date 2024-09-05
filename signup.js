function validateForm() {
    let fname = document.signupForm.fname.value;
    let lname = document.signupForm.lname.value;
    let email = document.signupForm.email.value;
    let password = document.signupForm.password.value;
    let conform_password = document.signupForm.conform_password.value;

    // Add your validation criteria here
    let fnameRegex = /^[a-zA-Z]+$/;
    let lnameRegex = /^[a-zA-Z]+$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()]{8,}$/;

    if (!fnameRegex.test(fname)) {
        document.getElementById('fnameValidate').innerHTML = 'First Name must be in alphabets';
        return false;
    } else {
        document.getElementById('fnameValidate').innerHTML = '';
    }

    if (!lnameRegex.test(lname)) {
        document.getElementById('lnameValidate').innerHTML = 'Last Name must be in alphabets';
        return false;
    } else {
        document.getElementById('lnameValidate').innerHTML = '';
    }

    if (!emailRegex.test(email)) {
        document.getElementById('EmailValidate').innerHTML = 'Email is not valid';
        return false;
    } else {
        document.getElementById('EmailValidate').innerHTML = '';
    }

    if (!passwordRegex.test(password)) {
        document.getElementById('PasswordValidate').innerHTML = 'Invalid password, minimum length: 8, one uppercase or lowercase, one digit, special characters';
        return false;
    } else {
        document.getElementById('PasswordValidate').innerHTML = '';
    }

    if (password !== conform_password) {
        document.getElementById('ConformPasswordValidate').innerHTML = "Confirm password doesn't match";
        return false;
    } else {
        document.getElementById('ConformPasswordValidate').innerHTML = '';
    }

    return true; // Submit the form if all validations pass
}

document.signupForm.addEventListener('submit', function (event) {
    if (!validateForm()) {
        event.preventDefault(); // Prevent form submission if validations fail
       }
    });