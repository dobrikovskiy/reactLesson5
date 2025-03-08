import React from 'react';
import { useSelector } from 'react-redux';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ThemeToggle from './ThemeToggle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <Router>
      <div className={`App ${theme}`}>
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;