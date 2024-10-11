import { useState } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Studentform from './components/students-details/Student-register-form'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Studentform />} />
      </Routes>
    </Router>
    
  )
}

export default App
