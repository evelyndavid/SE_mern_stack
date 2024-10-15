import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/WelcomePage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import BookingPage from './components/BookingPage';
import BusForm from './components/BusForm';
import PaymentPage from './components/PaymentPage';
import './index.css';
import ThankYouPage from './components/ThankYouPage';
import TrackBusPage from './components/TrackBusPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Welcome page with Login and Signup buttons */}
        <Route path="/" element={<HomePage />} />
        
        {/* Login and Signup pages */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        
        {/* Booking page with bus cards */}
        <Route path="/booking" element={<BookingPage />} />
        
        {/* Bus form page for each bus */}
        <Route path="/bus-form" element={<BusForm />} />
        
        {/* Payment page */}
        <Route path="/payment" element={<PaymentPage />} />
        
        {/* Thank You page */}
        <Route path="/thank-you" element={<ThankYouPage />} />
        
        {/* Track My Bus page */}
        <Route path="/track-my-bus" element={<TrackBusPage />} />
      </Routes>
    </Router>
  );
}

export default App;
