import { useState } from 'react'
import './App.css'
import NavBar from './comp/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import Landing from './comp/Landing';



function App() {
 
  return (
    <Router>
      <NavBar />
      <Landing />
    </Router>
  );
}

export default App
