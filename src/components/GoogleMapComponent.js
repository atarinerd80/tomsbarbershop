import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '50vh'
};

const center = {
    lat: 37.040830258861746,
    lng: -84.6248039131798
};

const onLoad = marker => {
    console.log('marker: ', marker)
}

export class GoogleMapComponent extends React.Component {
    render() {
        return (
            <LoadScript
                googleMapsApiKey='AIzaSyA1k10MM7cUtRh_WxpMxvBIt96dViR4ZiE'>
                    <GoogleMap  
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={18}>
                    </GoogleMap>
                </LoadScript>
        );
    }
}
export default GoogleMapComponent;