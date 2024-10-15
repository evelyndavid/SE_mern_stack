import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import backgroundImage from '../assets/background.jpg'; // Path to your local image

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate('/booking'); // Navigate to Booking Page
  };

  // Styles
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundImage: `url(${backgroundImage})`, // Use the imported image
    backgroundSize: 'cover', // Ensure the image covers the entire background
    backgroundPosition: 'center', // Center the image
    backgroundRepeat: 'no-repeat', // Prevent repeating the image
  };

  const headingStyle = {
    fontSize: '36px',
    marginBottom: '20px',
    color: '#fff', // Adjust text color for better contrast on background image
  };

  const linkStyle = {
    margin: '10px 0',
    padding: '10px 20px',
    background: '#007bff',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    transition: 'background 0.3s',
    display: 'inline-block',
  };

  const buttonStyle = {
    marginTop: '10px',
    padding: '10px 20px',
    background: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background 0.3s',
  };

  const linkHoverStyle = {
    background: '#0056b3',
  };

  const buttonHoverStyle = {
    background: '#218838',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome to TCE</h1>
      <Link 
        to="/login" 
        style={linkStyle} 
        onMouseEnter={(e) => e.currentTarget.style.background = linkHoverStyle.background} 
        onMouseLeave={(e) => e.currentTarget.style.background = '#007bff'}
      >
        Login
      </Link>
      <Link 
        to="/signup" 
        style={linkStyle} 
        onMouseEnter={(e) => e.currentTarget.style.background = linkHoverStyle.background} 
        onMouseLeave={(e) => e.currentTarget.style.background = '#007bff'}
      >
        Signup
      </Link>
      <button 
        onClick={handleBookingClick} 
        style={buttonStyle}
        onMouseEnter={(e) => e.currentTarget.style.background = buttonHoverStyle.background}
        onMouseLeave={(e) => e.currentTarget.style.background = '#28a745'}
      >
        Go to Booking Page
      </button>
    </div>
  );
};

export default WelcomePage;
