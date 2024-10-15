import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/background.jpg'; 
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      alert('Login successful');
      navigate('/booking'); // Redirect to Booking Page
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed');
    }
  };

  const formContainerStyle = {
    backgroundImage: `url(${backgroundImage})`, // Use the imported image
    backgroundSize: 'cover', // Ensure the image covers the entire background
    backgroundPosition: 'center', // Center the image
    backgroundRepeat: 'no-repeat', // Prevent repeating the image
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '50px',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
    maxWidth: '400px',
    margin: 'auto',
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
    backgroundColor: '#007bff',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const handleButtonHover = (e) => {
    e.target.style.backgroundColor = '#0056b3'; // Darker shade on hover
  };

  const handleButtonLeave = (e) => {
    e.target.style.backgroundColor = '#007bff'; // Revert to original
  };

  return (
    <div style={formContainerStyle}>
      <h2 style={{ marginBottom: '20px' }}>Login</h2>
      <form onSubmit={handleLogin} style={{ width: '100%' }}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
          style={inputStyle}
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
          style={inputStyle}
        />
        <button 
          type="submit" 
          style={buttonStyle} 
          onMouseEnter={handleButtonHover} 
          onMouseLeave={handleButtonLeave}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
