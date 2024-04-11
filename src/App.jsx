import { useState } from 'react'
import './App.css'
import Login from './FuncComps/FCLogin'
import RegistrationPage from './FuncComps/FCRegister'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegistrationPage2 from './FuncComps/FCRegister2'

function App() {


  return (

<BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/Register" element={<RegistrationPage />} />
        <Route path="/Register2" element={<RegistrationPage2/>} />
      </Routes>
    </BrowserRouter>
  


  )
}

export default App
