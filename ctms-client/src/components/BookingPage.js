import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/background.jpg'; 
const BookingPage = () => {
  const navigate = useNavigate();

  const buses = ['Bus 1', 'Bus 2', 'Bus 3', 'Bus 4'];

  const handleBusClick = (bus) => {
    // Pass the selected bus name if needed
    navigate('/bus-form', { state: { bus } }); // Redirect to Bus Form Page
  };

  // Styles
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`, // Use the imported image
    backgroundSize: 'cover', // Ensure the image covers the entire background
    backgroundPosition: 'center', // Center the image
    backgroundRepeat: 'no-repeat', // Prevent repeating the image
    textAlign: 'center',
    marginTop: '50px',
  };

  const busListStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  };

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

  const busItemHoverStyle = {
    transform: 'scale(1.05)',
    boxShadow: '0 4px 20px rgba(0, 123, 255, 0.2)',
  };

  return (
    <div style={containerStyle}>
      <h2>Available Buses</h2>
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
