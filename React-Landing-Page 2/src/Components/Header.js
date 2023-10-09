import React, { useContext } from 'react';  
import { ThemeContext } from '../ThemeContext';  
import './Header.css';
import './MediaQueries.css';
import logo from './Reputy-logo.png';

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <header className={`header ${theme}`}>  {/* Use theme, not ThemeContext */}
      <a href="#" className="logo-link">
        <img src={logo} alt="Reputy Logo" className="logo" />
      </a>
      <nav className="navbar">
      <ul className="nav-links">
          <li><a href="javascript:void(0)" className="nav-link">Join Freesides</a></li>
          <li><a href="javascript:void(0)" className="nav-link">Partner With Us</a></li>
          <li><a href="javascript:void(0)" className="nav-link">Team</a></li>
          <li><a href="javascript:void(0)" className="nav-link">Blog</a></li>
        </ul>
        <ul className="auth-links">
          <li><button className="auth-link login-button">Log in</button></li>
          <li><button className="auth-link create-account-button">Create Account</button></li>
          <li><button className="auth-link create-account-button" onClick={toggleTheme}>Dark Mode</button></li>
        </ul>
      </nav>
      
    </header>
  );
}

export default Header;
