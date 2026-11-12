import { useState } from 'react'
import './App.css'
import NavBar from './comp/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import About from './pages/About';
import Events from './pages/Events';
import Join from './pages/Join';
import SupportUs from './pages/SupportUs';



function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/join" element={<Join />} />
        <Route path="/support_us" element={<SupportUs />} />
      </Routes>
    </Router>
  );
}

export default App
