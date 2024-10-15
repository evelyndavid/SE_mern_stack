import React from 'react';
import { useNavigate } from 'react-router-dom';

const ThankYouPage = () => {
  const navigate = useNavigate();

  const handleTrackBus = () => {
    navigate('/track-my-bus'); // Redirect to Track My Bus page
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Thank You!</h1>
      <p>Your payment was successful. You can now track your bus.</p>

      <button 
        onClick={handleTrackBus} 
        style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}
      >
        Track My Bus
      </button>
    </div>
  );
};

export default ThankYouPage;
