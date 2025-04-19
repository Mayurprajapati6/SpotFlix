import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import MovieDetails from './Pages/MovieDetails';
import About from './Pages/About';
import Footer from './Components/Footer';
import Favorites from './Pages/Favorites';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Router>
      <div className='min-h-screen bg-gray-50 dark:bg-gray-900'>
        <Navbar theme={theme} onThemeSwitch={handleThemeSwitch} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/Movie/:id' element={<MovieDetails/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/favorites' element={<Favorites/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;