
// utilises click states through the use of event listeners 1.2
document.getElementById('sign-up-button').addEventListener('click', function(event) {
    event.preventDefault(); // Stops input from being submitted causing reload of page
    const displayName = document.getElementById('displayName').value; // variable containing value of name input
    const email = document.getElementById('emailAddress').value; // variable containing value of email input 

    const nameRegex = /^[a-zA-Z\s]+$/; // used to validate name
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/ // used to validate email

    if(nameRegex.test(displayName) && emailRegex.test(email)) {
        // if both inputs are valid 
        const popup = document.createElement('div');
        popup.id = 'popup'
        popup.innerHTML = `
            <img src="tick.png" alt="Tick" class="tick-image">
            <p class="custom-font">Thanks for signing up, ${displayName}!</p>
            <p class="custom-font">Your magic link has been sent to your email.</p>
        `;
        
        document.body.appendChild(popup);
    }  else{
        alert('Please enter a valid name and email address.');
    }
});

// Event listener to close the popup when clicking outside of it 1.2
document.addEventListener('mousedown', function(event) {
    const popup = document.getElementById('popup');
    if (popup && !popup.contains(event.target)) {
        // The click was outside the popup, remove the popup
        document.body.removeChild(popup);
    }
});
// adjust text in submit buttonto mimic mobile view from figma page
function checkScreenSize() {
    if (window.matchMedia("(max-width: 768px)").matches) {
        document.getElementById('sign-up-button').innerText = 'Continue with Magic Link';
    } else {
        document.getElementById('sign-up-button').innerText = 'Sign Up with Email';
    }
}

window.addEventListener('resize', checkScreenSize); // Checks screen size whenever the window is resized
checkScreenSize(); // Checks screen size on initial load

