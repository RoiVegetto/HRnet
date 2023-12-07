import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './Pages/Index/Index';
import EmployeeList from './Pages/EmployeeList/EmployeeList';
import { EmployeeProvider } from './Data/EmployeeContext';

function App() {
  return (
    <EmployeeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/employeeList" element={<EmployeeList />} />
        </Routes>
      </Router>
    </EmployeeProvider>
  );
}

export default App;
