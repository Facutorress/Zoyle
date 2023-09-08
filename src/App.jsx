import React from 'react';
import './App.css'; 
import Home from './Componentes/Home'; 
import Navbar from './Componentes/Navbar';
import Shop from './Componentes/Shop'; // Asegúrate de tener este componente creado
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar className="bg-white"/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App