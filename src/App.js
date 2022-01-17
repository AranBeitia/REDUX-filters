import { Routes, Route } from 'react-router-dom'
import Dashboard from './ui/pages/Dashboard'
import Home from './ui/pages/Home'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App
