import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import NavbarContainer from './Components/Navbar/Navbar'
import SearchBox from './Components/SearchField/SearchBox';
import Footer from './Components/Footer';

function App() {
  

  return (
    <Router>
      <NavbarContainer />
      <SearchBox />
      <Footer />
    </Router>
    
  )
}

export default App
