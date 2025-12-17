// -------------------------------------
// sign-up.js
// JavaScript code for sign-up functionality
// code for the sign up page of the web application
// -------------------------------------
const SignUpButton = document.getElementById('sign-up-button'); // get sign-up button element
const SignUpUserNameInput = document.getElementById('sign-up-username-input'); // get username input element
const SignUpPasswordInput = document.getElementById('sign-up-password-input'); // get password input element
const ShowPasswordCheckbox = document.getElementById('sign-up-show-password-button'); // get show password checkbox element
const GoToLoginPageButton = document.getElementById('go-to-login-page-button'); // get go to login page button element


// Function to handle sign-up process
function SignUp() 
{
    let username = SignUpUserNameInput.value.trim(); // capture and trim username input
    let password = SignUpPasswordInput.value.trim(); // capture and trim password input

    let isUsernameAndPasswordEmpty = false; // declare variable to track if username and password are empty

    if (username === '' || password === '')
    {
        alert('Username and password cannot be empty.');
        isUsernameAndPasswordEmpty = true; // set variable to true if either field is empty
        return; // rerurn early if either field is empty
    };
    if (!isUsernameAndPasswordEmpty) // check if username and password are not empty
    {
        localStorage.setItem('username', username); // store username in local storage
        localStorage.setItem('password', password); // store passowrd in local storage
        alert('Sign-up successful!'); // alert for successful sign-up
        setTimeout(() => {
            window.location.href = 'game.html'; // Redirect to game page after sign-up
            sessionStorage.setItem('isLoggedIn', 'true'); // set session storage item to indicate user is logged in
        }, 500);
    };
};

// Function to toggle password visibility
function TogglePasswordVisibility() 
{
    let passwordInputType = SignUpPasswordInput.type; // 'password' or 'text'

    if (passwordInputType === 'password')
    {
        SignUpPasswordInput.type = 'text';  // show password
    }
    else
    {
        SignUpPasswordInput.type = 'password'; // hide password
    }
};

// Function to navigate to login page
function GoToLoginPage()
{
    setInterval(() => {
        window.location.href = 'login.html'; // Redirect to login page
    }, 500);
};

SignUpButton.addEventListener('click', SignUp); // add click event listener to sign-up button
ShowPasswordCheckbox.addEventListener('click', TogglePasswordVisibility); // add click event listener to show password checkbox
GoToLoginPageButton.addEventListener('click', GoToLoginPage); // add click event listener to go to login page button

// End of sign-up.js
// -------------------------------------
// Dont Touch Below This Line
// Code is done
// Copyright Reserved Idan Nissim.
// -------------------------------------
