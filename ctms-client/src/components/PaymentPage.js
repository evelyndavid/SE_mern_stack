import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/background.jpg'; 

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/payment/pay', { cardNumber, expiryDate, cvv });
      alert('Payment successful!');
      navigate('/thank-you'); // Redirect to Thank You Page
    } catch (error) {
      console.error('Payment failed:', error);
      alert('Payment failed');
    }
  };

  const handeltrack = async (e) => {
    e.preventDefault();
    navigate('/thank-you'); // Redirect to Thank You Page
  };

  // Styles
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f7f9fc',
    backgroundImage: `url(${backgroundImage})`, // Use the imported image
    backgroundSize: 'cover', // Ensure the image covers the entire background
    backgroundPosition: 'center', // Center the image
    backgroundRepeat: 'no-repeat', // Prevent repeating the image
  };

  const formStyle = {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '30px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    width: '300px',
    textAlign: 'center',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
    transition: 'border-color 0.3s',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    marginTop: '20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handeltrack} style={formStyle}>
        <h2>Payment</h2>
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
        <button 
          type="submit" 
          style={buttonStyle}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
