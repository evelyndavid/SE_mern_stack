import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

import backgroundImage from '../assets/college.jpg'; // Adjust the path to your background image
import logoImage from '../assets/logo.png'; // Adjust the path to your logo

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate('/booking'); // Navigate to Booking Page
  };

  // Styles
  const containerStyle = {
    width: '400px',
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent background
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    zIndex: 1,
  };

  const pageStyle = {
    display: 'flex',
    justifyContent: 'center', // Horizontally center the container
    alignItems: 'center', // Vertically center the container
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
  };

  const backgroundStyle = {
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
    zIndex: -1,
    opacity: 0.6, // Slight transparency for a lively effect
  };

  const collegeNameStyle = {
    fontSize: '1.8em',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333',
  };

  const collegeLogoStyle = {
    width: '120px',
    marginBottom: '10px',
  };

  const systemHeadingStyle = {
    fontSize: '1.5em',
    fontWeight: 600,
    marginTop: '10px',
    marginBottom: '20px',
    color: '#555',
  };

  const buttonStyle = {
    backgroundColor: '#4CAF50',
    border: 'none',
    color: 'white',
    padding: '10px 20px',
    textAlign: 'center',
    textDecoration: 'none',
    fontSize: '16px',
    margin: '10px',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    background: '#45a049',
  };

  

  return (
    <div style={pageStyle}>
      <div style={backgroundStyle}></div> {/* Background layer */}

      <div style={containerStyle}>
        {/* College Name */}
        <h1 style={collegeNameStyle}>Thiagarajar College of Engineering</h1> {/* Replace with actual college name */}

        {/* College Logo */}
        <img src={logoImage} alt="College Logo" style={collegeLogoStyle} />

        {/* College Transport Management System Heading */}
        <h2 style={systemHeadingStyle}>College Transport Management System</h2>

        {/* Buttons */}
        <div>
          <Link 
            to="/login" 
            style={buttonStyle}
            onMouseEnter={(e) => e.currentTarget.style.background = buttonHoverStyle.background}
            onMouseLeave={(e) => e.currentTarget.style.background = '#4CAF50'}
          >
            Login
          </Link>
          <Link 
            to="/signup" 
            style={buttonStyle}
            onMouseEnter={(e) => e.currentTarget.style.background = buttonHoverStyle.background}
            onMouseLeave={(e) => e.currentTarget.style.background = '#4CAF50'}
          >
            Signup
          </Link>

          {/* New Booking Page Button */}
          <button 
          onClick={handleBookingClick} 
          style={buttonStyle}
          onMouseEnter={(e) => e.currentTarget.style.background = buttonHoverStyle.background}
          onMouseLeave={(e) => e.currentTarget.style.background = '#28a745'}
        >
          Go to Booking Page
        </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
