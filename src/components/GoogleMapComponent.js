import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: 37.7749,
    lng: -122.4194
};

const GoogleMapComponent = () => {
    return (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
        >
            <Marker position={center} />
        </GoogleMap>
    );
};

export default GoogleMapComponent;