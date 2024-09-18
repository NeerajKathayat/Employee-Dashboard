import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './assets/pages/Dashboard'
import EmployeeDetail from './assets/pages/EmployeeDetail';


function App() {
  

  return (
    <>
  <Router>
  
    <Routes>
    <Route path="/"  element={<Dashboard/>} />
       <Route path="/employee/:Id"  element={<EmployeeDetail/>} />
    </Routes>
  </Router>
    
   </>
  )
}

export default App
