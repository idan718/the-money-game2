
function checkUserValidtion() 
{
    let isUserLoggedIn = sessionStorage.getItem('isLoggedIn'); // get isLoggedIn item from session storage

    if (isUserLoggedIn !== 'true') // check if user is not logged in
    {
        window.location.href = 'login.html'; // Redirect to login page if not logged in
        console.log('User is not logged in. Redirecting to login page...');
    }
    else 
    {
        console.log('User is logged in.'); // log message if user is logged in
    }
}

// Validate once on page load instead of tight interval
document.addEventListener('DOMContentLoaded', checkUserValidtion);