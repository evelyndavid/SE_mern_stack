import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import backgroundImage from '../assets/background.jpg'; 
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

  return (
    <div style={{ textAlign: 'center', marginTop: '50px'}}>
      <h1>Track Your Bus</h1>
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => handleTrackBus('bus1')} style={buttonStyle}>Track Bus 1</button>
        <button onClick={() => handleTrackBus('bus2')} style={buttonStyle}>Track Bus 2</button>
        <button onClick={() => handleTrackBus('bus3')} style={buttonStyle}>Track Bus 3</button>
        <button onClick={() => handleTrackBus('bus4')} style={buttonStyle}>Track Bus 4</button>
      </div>

      {busLocation && (
        <MapContainer center={busLocation} zoom={12} style={{ height: '400px', width: '100%' }}>
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
  );
};

const buttonStyle = {
  padding: '10px 20px',
  margin: '0 10px',
  backgroundColor: '#28a745',
  color: 'white',
  border: 'none',
  cursor: 'pointer'
};

export default TrackBusPage;
