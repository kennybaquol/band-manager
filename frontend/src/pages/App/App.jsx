import { useState, useEffect } from 'react'
import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, Link } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar';
import Home from '../Home/Home';

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route exact path="/home/" component={Home} /> */}
        {/* <Route path="/menu/:id/update/" component={UpdateMenu} /> */}
      </Routes>

    </div>


  );
}

export default App
