import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import { AuthProvider } from './Context/AuthProvider'
import Home from './Pages/Home'
import PrivateRoute from './Layouts/PrivateRoute'
import Login from './Pages/Login'
import PrivateLayout from './Layouts/PrivateLayout'
import GradeBook from './Pages/GradeBook'
import Announcements from './Pages/Announcements'
import Profile from './Pages/Profile'
import CoursePageAbout from './Pages/Course/CoursePageAbout'
import CoursePageLayout from './Layouts/CoursePageLayout'
import CoursePageLessons from './Pages/Course/CoursePageLessons'
import CoursePageCommunity from './Pages/Course/CoursePageCommunity'
import CoursePagePerformance from './Pages/Course/CoursePagePerformance'
import CoursePageCertificate from './Pages/Course/CoursePageCertificate'

function App() {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Navigate to="/dashboard" replace />} />
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
          <Route path="/course/:courseID/" element={<Navigate to="about" replace />} />
          <Route path="/course/:courseID/about" element={
            <PrivateRoute>
              <PrivateLayout>
              <CoursePageLayout>
                <CoursePageAbout />
              </CoursePageLayout>
              </PrivateLayout>
            </PrivateRoute>
          } />
          <Route path="/course/:courseID/lessons" element={
            <PrivateRoute>
              <PrivateLayout>
              <CoursePageLayout>
                <CoursePageLessons />
              </CoursePageLayout>
              </PrivateLayout>
            </PrivateRoute>
          } />
          <Route path="/course/:courseID/community" element={
            <PrivateRoute>
              <PrivateLayout>
              <CoursePageLayout>
                <CoursePageCommunity />
              </CoursePageLayout>
              </PrivateLayout>
            </PrivateRoute>
          } />
          <Route path="/course/:courseID/performance" element={
            <PrivateRoute>
              <PrivateLayout>
              <CoursePageLayout>
                <CoursePagePerformance />
              </CoursePageLayout>
              </PrivateLayout>
            </PrivateRoute>
          } />
          <Route path="/course/:courseID/certificate" element={
            <PrivateRoute>
              <PrivateLayout>
              <CoursePageLayout>
                <CoursePageCertificate />
              </CoursePageLayout>
              </PrivateLayout>
            </PrivateRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
