document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Clear all error messages
    document.querySelectorAll('.error-message').forEach(span => span.textContent = '');

    // Get form values
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validation flags
    let isValid = true;

    // Validate First Name
    if (firstName === '') {
        document.getElementById('firstNameError').textContent = 'First name is required.';
        isValid = false;
    }

    // Validate Last Name
    if (lastName === '') {
        document.getElementById('lastNameError').textContent = 'Last name is required.';
        isValid = false;
    }

    // Validate Email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email.';
        isValid = false;
    }

    // Validate Phone Number (assuming a 10-digit phone number)
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').textContent = 'Please enter a valid 10-digit phone number.';
        isValid = false;
    }

    // Validate Password (minimum 8 characters)
    if (password.length < 8) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters.';
        isValid = false;
    }

    // If all validations pass, log form data to console
    if (isValid) {
        const formData = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone_number: phone,
            password: password
        };

        console.log(formData);
        alert("Form submitted successfully!");
    }
});