import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

export class GoogleMapComponent extends React.Component {
    constructor(props) {
        super(props);
        this.gmapSettings = {
            mapContainerStyle: {
                width: '100%',
                height: '50vh'
            },
            center: {
                lat: 37.040830258861746,
                lng: -84.6248039131798
            },
            zoom: 18
        }
    }
    render() {
        return (
            <LoadScript
                googleMapsApiKey='AIzaSyA1k10MM7cUtRh_WxpMxvBIt96dViR4ZiE'>
                    <GoogleMap {...this.gmapSettings} />
                </LoadScript>
        );
    }
}
export default GoogleMapComponent;