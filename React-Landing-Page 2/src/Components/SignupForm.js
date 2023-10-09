// SignUpForm.js
import React, { useState, useEffect, useRef, useContext } from 'react';  // Import necessary hooks, React, and useContext
import { ThemeContext } from '../ThemeContext';  // Import ThemeContext from the correct file
import './MainContent.css';  // Import your CSS
import tick from './tick.png';

function SignUpForm() {
  const [displayName, setDisplayName] = useState('');  // State to hold the display name
  const [email, setEmail] = useState('');  // State to hold the email
  const [isPopupVisible, setIsPopupVisible] = useState(false);  // State to control the visibility of the popup
  const [buttonText, setButtonText] = useState('Sign Up with Email');  // State to hold the button text
  const popupRef = useRef(null);  // Ref to access the popup DOM node

  const { theme } = useContext(ThemeContext);  // Access theme from context

  useEffect(() => {
    // Function to update the button text based on screen size
    const updateButtonText = () => {
      setButtonText(window.innerWidth <= 768 ? 'Continue with Magic Link' : 'Sign Up with Email');  // Set button text based on window width
    };

    window.addEventListener('resize', updateButtonText);  // Add event listener to update button text on resize
    updateButtonText();  // Set initial button text

    return () => {
      // Cleanup event listener on component unmount to prevent memory leaks
      window.removeEventListener('resize', updateButtonText);
    };
  }, []);  // Empty dependency array to run this effect once on mount and once on unmount

  const validateAndSubmit = (event) => {
    event.preventDefault();  // Prevent default form submission

    const nameRegex = /^[a-zA-Z\s]+$/;  // Regex to validate name
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;  // Regex to validate email

    if (nameRegex.test(displayName) && emailRegex.test(email)) {
      setIsPopupVisible(true);  // Show popup if inputs are valid
    } else {
      alert('Please enter a valid name and email address.');  // Alert if inputs are invalid
    }
  };

  const handleOutsideClick = (event) => {
    // Close the popup when clicking outside of it
    if (isPopupVisible && !popupRef.current.contains(event.target)) {
      setIsPopupVisible(false);
    }
  };

  useEffect(() => {
    if (isPopupVisible) {
      document.addEventListener('mousedown', handleOutsideClick);  // Add event listener to check for clicks outside the popup
    }

    return () => {
      if (isPopupVisible) {
        document.removeEventListener('mousedown', handleOutsideClick);  // Cleanup event listener on component unmount or popup close
      }
    };
  }, [isPopupVisible]);  // Dependency array with isPopupVisible to re-run this effect whenever isPopupVisible changes

  return (
    <div>
      <form className="signup-form" onSubmit={validateAndSubmit}>
        <input
          type="text"
          className="display-name"
          id="displayName"
          placeholder="Display Name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}  // Update displayName state on input change
        />
        <input
          type="email"
          className="email"
          id="emailAddress"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}  // Update email state on input change
        />
        <button type="submit" className="sign-up-button" id="sign-up-button">
          {buttonText}  
        </button>
      </form>
      {isPopupVisible && (
        <div id="popup" ref={popupRef} className={theme}>  {/* Add className here */}
          <img src={tick} alt="Tick" className="tick-image" />
          <p className={`custom-font ${theme}`}>Thanks for signing up, {displayName}!</p>  {/* Add className here */}
          <p className={`custom-font ${theme}`}>Your magic link has been sent to your email.</p>  {/* Add className here */}
        </div>
      )}
    </div>
  );
}

export default SignUpForm;  // Export SignUpForm component for use in other files
