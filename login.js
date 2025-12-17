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
    let inputUsername = LogInInputUsername.value.trim(); // capture and trim username input
    let inputPassword = LogInInputPassword.value.trim(); // capture and trim password input

    const usersRaw = localStorage.getItem('users');
    const users = usersRaw ? JSON.parse(usersRaw) : [];

    const foundUser = users.find(u => u.username === inputUsername && u.password === inputPassword);

    if (foundUser) // check if input matches stored user
    {
        alert('Login successful!'); // alert for successful login
        sessionStorage.setItem('isLoggedIn', 'true'); // indicate user is logged in
        sessionStorage.setItem('userId', String(foundUser.id));
        sessionStorage.setItem('username', foundUser.username);
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