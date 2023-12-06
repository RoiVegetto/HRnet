import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Index from './Pages/Index/Index';
import EmployeeList from './Pages/EmployeeList/EmployeeList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/employeeList" element={<EmployeeList />} />
      </Routes>
    </Router>
  );
}

export default App;
