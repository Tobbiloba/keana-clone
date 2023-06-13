// import React from 'react';
// import { GoogleMap, Marker } from '@react-google-maps/api';
// import './Mapbox.css'
// const containerStyle = {
//     width: '200px',
//     height: '100px'
// };

// const center = {
//     lat: 37.7749,
//     lng: -122.4194
// };

// const GoogleMapComponent = () => {
//     return (
//         <div className="border border-red-500 z-0 h-fit">
//             <GoogleMap
//                 mapContainerStyle={containerStyle}
//                 center={center}
//                 zoom={10}
//                 className="mapbox"
//             >
//                 <Marker position={center} />
//             </GoogleMap>
//         </div>

//     );
// };

// export default GoogleMapComponent;

import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import './Mapbox.css'

const GoogleMapComponent = () => {
    const containerStyle = {
        width: '100vw',
        height: '450px'
    };

    const center = {
        lat: 37.7749,
        lng: -122.4194
    };
    return (
        <div className="map-container h-fit">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                className="mapbox"
            >
                <Marker position={center} />
            </GoogleMap>
        </div>
    );
};

export default GoogleMapComponent;
