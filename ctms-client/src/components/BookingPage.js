import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/background.jpg'; // Background image
import collegeLogo from '../assets/logo.png'; // Optional college logo

const BookingPage = () => {
  const navigate = useNavigate();
  const buses = ['Bus 1', 'Bus 2', 'Bus 3', 'Bus 4'];

  const handleBusClick = (bus) => {
    navigate('/bus-form', { state: { bus } }); // Navigate to Bus Form Page
  };

  // Page style
  const pageStyle = {
    position: 'relative',
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    margin: 0,
    padding: 0,
  };

  // Blurred background style
  const blurredBackgroundStyle = {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url(${backgroundImage})`, // Use the imported background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'blur(8px)', // Apply blur effect
    zIndex: -1, // Behind content
    opacity: 0.6, // Transparency for effect
  };

  // Bus list container style
  const busListStyle = {
    zIndex: 1, // Make sure content is above the background
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slightly transparent background for bus list
    borderRadius: '10px',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
    width: '400px',
  };

  // Individual bus item style
  const busItemStyle = {
    border: '1px solid #007bff',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    padding: '15px',
    margin: '10px 0',
    width: '300px',
    cursor: 'pointer',
    transition: 'transform 0.3s, box-shadow 0.3s',
    textAlign: 'center',
    fontSize: '18px',
  };

  // Hover style for bus item
  const busItemHoverStyle = {
    transform: 'scale(1.05)',
    boxShadow: '0 4px 20px rgba(0, 123, 255, 0.2)',
  };

  return (
    <div style={pageStyle}>
      {/* Blurred Background */}
      <div style={blurredBackgroundStyle}></div>

      {/* College Logo (Optional) */}
      <img src={collegeLogo} alt="College Logo" style={{ width: '120px', marginBottom: '20px' }} />

      {/* Bus List */}
      <h2 style={{ color: '#333', marginBottom: '20px' }}>Available Buses</h2>
      <div style={busListStyle}>
        {buses.map((bus, index) => (
          <div
            key={index}
            onClick={() => handleBusClick(bus)}
            style={busItemStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = busItemHoverStyle.transform;
              e.currentTarget.style.boxShadow = busItemHoverStyle.boxShadow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {bus}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingPage;
