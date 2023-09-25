import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import AdminLogin from './pages/Admin/AdminLogin';

import Dashboard from './pages/Admin/Dashboard';
import './App.css';
import Organization from './pages/Admin/Organization';
import Vendor from './pages/Admin/Vendor';
import Home from './pages/Home';
import Terms from './pages/Terms';
import AboutUs from './pages/AboutUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ContactUs from './pages/ContactUs';
import AddVendor from './pages/Vendor/AddVendor';
import ViewVendor from './pages/Vendor/ViewVendor';
import Faq from './pages/Faq';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/organization" element={<Organization/>}/>
          <Route path="/vendor" element={<Vendor/>}/>
          <Route path="/adminlogin" element={<AdminLogin />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/terms" element={<Terms />}/>
          <Route path="/aboutus" element={<AboutUs />}/>
          <Route path="/contactus" element={<ContactUs />}/>
          <Route path="/privacy" element={<PrivacyPolicy />}/>
          <Route path="/addvendor" element={<AddVendor />}/>
          <Route path="/viewvendors" element={<ViewVendor />}/>
          <Route path="/faq" element={<Faq />}/>
          

        </Routes>
      </BrowserRouter>
     

    );
}

export default App;
