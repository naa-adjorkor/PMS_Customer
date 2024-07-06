import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { Landing } from './pages/Landing';
import { Contact } from './pages/Contact';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App