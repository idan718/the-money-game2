// -------------------------------------
// login.js
// JavaScript code for login functionality
// code for the login page of the web application
// -------------------------------------

const LogInInputUsername = document.getElementById("log-in-username-input"); // get username input element
const LogInInputPassword = document.getElementById("log-in-password-input"); // get password input element
const LogInButton = document.getElementById("log-in-button"); // get login button element
const SignUpButton = document.getElementById("go-to-sign-up-page-button"); // get sign-up button element
const ShowPasswordCheckbox = document.getElementById("log-in-show-password-button"); // get show password checkbox element

// Function to handle login process
function LogIn() 
{
    let storedUsername = localStorage.getItem('username'); // get stored username from local storage
    let storedPassword = localStorage.getItem('password'); // get stored password from local storage
    let inputUsername = LogInInputUsername.value.trim(); // capture and trim username input
    let inputPassword = LogInInputPassword.value.trim(); // capture and trim password input

    if (inputUsername === storedUsername && inputPassword === storedPassword) // check if input matches stored credentials
    {
        alert('Login successful!'); // alert for successful login
        sessionStorage.setItem('isLoggedIn', 'true'); // set session storage item to indicate user is logged in
        setTimeout(() => {
            window.location.href = 'game.html'; // Redirect to game page after login
        }, 500);
    }
    else 
    {
        alert('Invalid username or password. Please try again.'); // alert for invalid credentials
    }
};

// Function to toggle password visibility
function TogglePasswordVisibility() 
{
    let passwordInputType = LogInInputPassword.type; // 'password' or 'text'    
    if (passwordInputType === 'password')
    {
        LogInInputPassword.type = 'text';  // show password
    }
    else
    {
        LogInInputPassword.type = 'password'; // hide password
    }
};

//function to navigate to sign-up page
function GoToSignUpPage()
{
    setTimeout(() => {
        window.location.href = 'index.html'; // Redirect to sign-up page (index)
    }, 500);
};



LogInButton.addEventListener('click', LogIn); // add click event listener to login button
ShowPasswordCheckbox.addEventListener('click', TogglePasswordVisibility); // add click event listener to show password checkbox
SignUpButton.addEventListener('click', GoToSignUpPage); // add click event listener to sign-up button

// -------------------------------------
// this is the end of login.js
// Code is done
// copyright Idan Nissim
// -------------------------------------