import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AuthProvider } from './Context/AuthProvider'
import Home from './Pages/Home'
import PrivateRoute from './Components/PrivateRoute'
import Login from './Pages/Login'
import PrivateLayout from './Components/PrivateLayout'

function App() {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path="/" element={
            <PrivateRoute>
              <PrivateLayout>
              <Home />
              </PrivateLayout>
            </PrivateRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
