import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'

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
    </>
  )
}

export default App
