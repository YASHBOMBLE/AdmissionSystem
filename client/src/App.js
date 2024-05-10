import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./view/Home/Home.js"
import Login from "./view/Login/Login.js"
import Signup from './view/Signup/Signup.js'
function App() {
  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/login" element={<Login /> } />
          <Route path="/Signup" element={<Signup /> } />

         
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App