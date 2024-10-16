import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/background.jpg'; // Background image
import collegeLogo from '../assets/logo.png'; // College logo image (if needed)

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/signup', { email, password });
      alert('Signup successful');
      navigate('/login'); // Redirect to Login Page after signup
    } catch (error) {
      console.error('Signup failed');
      alert('Signup failed');
    }
  };

  const pageStyle = {
    position: 'relative',
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
    <div style={pageStyle}>
      {/* Blurred Background Layer */}
      <div style={blurredBackgroundStyle}></div>

      {/* Signup Form */}
      <div style={formContainerStyle}>
        {/* College Logo */}
        <img src={collegeLogo} alt="College Logo" style={{ width: '120px', marginBottom: '20px' }} />

        <h2 style={{ marginBottom: '20px', color: '#333' }}>Signup</h2>
        <form onSubmit={handleSignup} style={{ width: '100%' }}>
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
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
