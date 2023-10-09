// Import statements
import React, { useEffect, useContext } from 'react';
import './global.css';  
import { ThemeProvider, ThemeContext } from './ThemeContext'; 
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import './App.css';

// New Container component
function Container() {
  const { theme } = useContext(ThemeContext);  // Now Container is a child of ThemeProvider

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="App">
      <Header />
      <MainContent />
    </div>
  );
}

// App component
function App() {
  return (
    <ThemeProvider>
      <Container />  {/* Now Container is wrapped by ThemeProvider */}
    </ThemeProvider>
  );
}

// Export statement
export default App;
