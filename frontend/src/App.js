import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { Landing } from './pages/Landing';
import { Contact } from './pages/Contact';
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />}/>
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/Login" element={<Login/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App