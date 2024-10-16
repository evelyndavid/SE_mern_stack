import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/background.jpg'; // Background image
import collegeLogo from '../assets/logo.png'; // College logo image

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [branchName, setBranchName] = useState(''); // State for branch name
  const [bankName, setBankName] = useState(''); // State for bank name
  const [pincode, setPincode] = useState(''); // State for pincode
  const navigate = useNavigate(); // Initialize navigate

  const handeltrack = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/payment/pay', {
        cardNumber,
        branchName,
        bankName,
        expiryDate,
        cvv,
        pincode
      });
      alert('Payment successful');
      navigate('/thank-you'); // Redirect to Thank You Page
    } catch (error) {
      console.error('Payment failed', error);
      alert('Payment failed');
    }
  };

  const pageStyle = {
    position: 'relative',
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center', // Horizontally center the container
    alignItems: 'center', // Vertically center the container
    margin: 0,
    padding: 0,
  };

  const blurredBackgroundStyle = {
    content: '""', // Pseudo-element behavior
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url(${backgroundImage})`, // Path to your background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'blur(8px)', // Apply blur effect
    zIndex: -1, // Ensure the background is behind the content
    opacity: 0.6, // Slight transparency for a lively effect
  };

  const formContainerStyle = {
    zIndex: 1, // Content should be above the blurred background
    width: '400px',
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent background
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '16px',
    transition: 'border-color 0.3s',
  };

  const buttonStyle = {
    padding: '10px 20px',
    marginTop: '10px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#4CAF50',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const handleButtonHover = (e) => {
    e.target.style.backgroundColor = '#45a049'; // Hover effect
  };

  const handleButtonLeave = (e) => {
    e.target.style.backgroundColor = '#4CAF50'; // Reset to original color
  };

  return (
    <div style={pageStyle}>
      {/* Blurred Background Layer */}
      <div style={blurredBackgroundStyle}></div>

      {/* Payment Form */}
      <div style={formContainerStyle}>
        {/* College Logo */}
        <img src={collegeLogo} alt="College Logo" style={{ width: '120px', marginBottom: '20px' }} />

        <h2 style={{ marginBottom: '20px', color: '#333' }}>Payment</h2>
        <form onSubmit={handeltrack} style={{ width: '100%' }}>
          <input
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="text"
            placeholder="Expiry Date (MM/YY)"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="text"
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="text"
            placeholder="Branch Name"
            value={branchName}
            onChange={(e) => setBranchName(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="text"
            placeholder="Bank Name"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="text"
            placeholder="Pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            required
            style={inputStyle}
          />
          <button
            type="submit"
            style={buttonStyle}
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleButtonLeave}
          >
            Pay
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
