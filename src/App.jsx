import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Dashboard from './components/Dashboard';
import BookAppointment from './components/BookAppointment';
import BookingConfirmation from './components/BookingConfirmation';
import Header from './components/Header';
import ForgotPassword from "./pages/ForgotPassword";



export default function App(){
  return (
    <BrowserRouter>

    {/** header */}

    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/booking-confirmation" element={<BookingConfirmation />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  )
}