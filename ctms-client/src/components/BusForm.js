import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/background.jpg'; 

const BusForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '', dob: '', address: '', stop: '', phone: '', parentPhone: '', department: '', year: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      // Handle form submission here (e.g., saving data to the backend)
      alert('Booking successful!');
      navigate('/payment');  // Redirect to Payment Page
    } catch (error) {
      alert('Booking failed. Please try again.');
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
      <h1 style={{ marginBottom: '20px' }}>Bus Booking Form</h1>
      <input type="text" name="name" placeholder="Name" style={inputStyle} value={formData.name} onChange={handleChange} />
      <input type="date" name="dob" placeholder="DOB" style={inputStyle} value={formData.dob} onChange={handleChange} />
      <input type="text" name="address" placeholder="Address" style={inputStyle} value={formData.address} onChange={handleChange} />
      <input type="text" name="stop" placeholder="Stop" style={inputStyle} value={formData.stop} onChange={handleChange} />
      <input type="text" name="phone" placeholder="Phone" style={inputStyle} value={formData.phone} onChange={handleChange} />
      <input type="text" name="parentPhone" placeholder="Parent's Mobile" style={inputStyle} value={formData.parentPhone} onChange={handleChange} />
      <input type="text" name="department" placeholder="Department" style={inputStyle} value={formData.department} onChange={handleChange} />
      <input type="text" name="year" placeholder="Year" style={inputStyle} value={formData.year} onChange={handleChange} />
      <button 
        onClick={handleSubmit} 
        style={buttonStyle} 
        onMouseEnter={handleButtonHover} 
        onMouseLeave={handleButtonLeave}
      >
        Submit & Book
      </button>
    </div>
  );
};

export default BusForm;
