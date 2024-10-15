import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import backgroundImage from '../assets/background.jpg'; 
import logo from '../assets/logo.png'; // Make sure to import your logo

// Fix marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const TrackBusPage = () => {
  const [busLocation, setBusLocation] = useState(null);

  // Random coordinates for buses
  const busCoordinates = {
    bus1: { lat: 12.9716, lng: 77.5946 },  // Coordinates for Bus 1 (Example)
    bus2: { lat: 13.0827, lng: 80.2707 },  // Coordinates for Bus 2 (Example)
    bus3: { lat: 19.0760, lng: 72.8777 },  // Coordinates for Bus 3 (Example)
    bus4: { lat: 28.7041, lng: 77.1025 }   // Coordinates for Bus 4 (Example)
  };

  const handleTrackBus = (busNumber) => {
    setBusLocation(busCoordinates[busNumber]);
  };

  // CSS styles defined as JavaScript objects
  const containerStyle = {
    width: '700px',
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

  return (
    <div style={pageStyle}>
      <div style={backgroundStyle}></div> {/* Background layer */}
      <div style={containerStyle}>
        <img src={logo} alt="Logo" style={collegeLogoStyle} />
        <h1 style={headingStyle}>Track Your Bus</h1>
        <div style={{ marginBottom: '20px' }}>
          <button onClick={() => handleTrackBus('bus1')} style={buttonStyle}>Track Bus 1</button>
          <button onClick={() => handleTrackBus('bus2')} style={buttonStyle}>Track Bus 2</button>
          <button onClick={() => handleTrackBus('bus3')} style={buttonStyle}>Track Bus 3</button>
          <button onClick={() => handleTrackBus('bus4')} style={buttonStyle}>Track Bus 4</button>
        </div>

        {busLocation && (
          <MapContainer center={busLocation} zoom={12} style={{ height: '400px', width: '100%', borderRadius: '10px' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={busLocation}>
              <Popup>
                Bus is here!
              </Popup>
            </Marker>
          </MapContainer>
        )}
      </div>
    </div>
  );
};

export default TrackBusPage;
