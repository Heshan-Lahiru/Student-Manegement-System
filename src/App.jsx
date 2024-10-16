import { useState } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Studentform from './components/students-details/Student-register-form'

import Studenttable from './components/students-details-table/Student-register-table'

import Updatestudent from './components/update-student-detail/update-student'

import Profile from './components/profile-show/profile-page'
import '@fontsource/roboto/700.css';



function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>

        <Route path="/" element={<Studentform />} />
        <Route path="/studenttable" element={<Studenttable />} />
        <Route path="/update/:id" element={<Updatestudent />} />
         <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </Router>

  )
}

export default App
