import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/background.jpg'; // Background image
import collegeLogo from '../assets/logo.png'; // College logo image

const ThankYouPage = () => {
  const navigate = useNavigate();

  const handleTrackBus = () => {
    navigate('/track-my-bus'); // Redirect to Track My Bus page
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
    position: 'relative', // Ensure positioning for the background
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

  const collegeLogoStyle = {
    width: '120px',
    marginBottom: '20px',
  };

  const headingStyle = {
    fontSize: '1.8em',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333',
  };

  const subHeadingStyle = {
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

  const handleButtonHover = (e) => {
    e.target.style.backgroundColor = '#45a049'; // Hover effect
  };

  const handleButtonLeave = (e) => {
    e.target.style.backgroundColor = '#4CAF50'; // Reset to original color
  };

  return (
    <div style={pageStyle}>
      {/* Blurred Background Layer */}
      <div style={backgroundStyle}></div>

      {/* Thank You Message Container */}
      <div style={containerStyle}>
        <img src={collegeLogo} alt="College Logo" style={collegeLogoStyle} />

        <h1 style={headingStyle}>Thank You!</h1>
        <p>Your payment was successful. You can now track your bus.</p>
        <button
          onClick={handleTrackBus}
          style={buttonStyle}
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonLeave}
        >
          Track My Bus
        </button>
      </div>
    </div>
  );
};

export default ThankYouPage;
