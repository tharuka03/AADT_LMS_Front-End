import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AuthProvider } from './Context/AuthProvider'
import Home from './Pages/Home'
import PrivateRoute from './Components/Application/PrivateRoute'
import Login from './Pages/Login'
import PrivateLayout from './Components/Application/PrivateLayout'
import GradeBook from './Pages/GradeBook'
import Announcements from './Pages/Announcements'
import Profile from './Pages/Profile'

function App() {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path="/dashboard" element={
            <PrivateRoute>
              <PrivateLayout>
              <Home />
              </PrivateLayout>
            </PrivateRoute>
          } />
          <Route path="/Gradebook" element={
            <PrivateRoute>
              <PrivateLayout>
              <GradeBook />
              </PrivateLayout>
            </PrivateRoute>
          } />
          <Route path="/Announcements" element={
            <PrivateRoute>
              <PrivateLayout>
              <Announcements />
              </PrivateLayout>
            </PrivateRoute>
          } />
          <Route path="/Profile" element={
            <PrivateRoute>
              <PrivateLayout>
              <Profile />
              </PrivateLayout>
            </PrivateRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
