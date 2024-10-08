# SignUp Form Application

This project is a simple SignUp form that validates user input for First Name, Last Name, Email, Phone Number, and Password. The form ensures that all fields are correctly filled and provides validation messages if any field is invalid.

## Features

- **Input Fields**:
  - First Name (Required)
  - Last Name (Required)
  - Email (Must be in a valid email format)
  - Phone Number (Must be a valid number)
  - Password (Minimum 8 characters)
  
- **Validation**:
  - All fields are validated with appropriate error messages.
  - Invalid fields are highlighted.
  
- **Form Submission**:
  - On form submission, the form data is logged in the browser's console in the following format:
    ```json
    {
      "first_name": "John",
      "last_name": "Doe",
      "phone_number": "9988776655",
      "email": "johndoe123@email.com",
      "password": "john1234"
    }
    ```

## Technologies Used

- **HTML5**
- **CSS3**
- **Bootstrap**
- **JavaScript (Vanilla)**

