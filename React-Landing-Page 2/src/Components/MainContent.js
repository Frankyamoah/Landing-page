import React, { useContext } from 'react';  
import { ThemeContext } from '../ThemeContext';  
import './MainContent.css';
import SignupForm from './SignupForm';
import './MediaQueries.css';
import ReputyImage from './Reputy-image-2.png';
import mobileLogo from './Reputy-logo.png';

function MainContent() {
  const { theme } = useContext(ThemeContext);
  console.log('Current Theme: ', theme);  // Add this line
  return (
    <main className={`main-content ${theme}`}>
      <section className={`intro-section ${theme}`}>
        <img src={ReputyImage} alt="App Reputy image" className="Reputy iphone" />
        <div className={`right-section ${theme}`}> 
          <img src={mobileLogo} alt="Reputy Logo" className="mobile-logo" style={{display: 'block', width: '150px'}} />  
          <div className={`intro-text ${theme}`}>
            <h1>Land the dream job<br />by showing your<br />soft skills credentials</h1>
            <p>Create your free talent wallet</p>
          </div>
          <SignupForm />
          <p className="login-prompt">Already got an account? <a href="#" className={`login-link ${theme}`}>Log in</a></p>
        </div>  
      </section>
    </main>
  );
}

export default MainContent;
