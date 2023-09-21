import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import AdminLogin from './pages/Admin/AdminLogin';

import Dashboard from './pages/Admin/Dashboard';
import './App.css';
import Organization from './pages/Admin/Organization';
import Vendor from './pages/Admin/Vendor';

function App() {
  return (
      // <Login/>
      // <Signup/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/organization" element={<Organization/>}/>
          <Route path="/vendor" element={<Vendor/>}/>
          <Route path="/adminlogin" element={<AdminLogin />}/>
        </Routes>
      </BrowserRouter>
     

    );
}

export default App;
