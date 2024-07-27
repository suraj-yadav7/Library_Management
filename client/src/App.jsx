import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
      <Router>
          <Routes>
            <Route exact path = '/' element={<Home/>}></Route>
            <Route exact path = '/login' element={<Login/>}></Route>
            <Route exact path = '/register' element={<Signup/>}></Route>
          </Routes>
      </Router>
      <ToastContainer/>
    </>
  )
}

export default App
