import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%',
    frameBorder: 0
};
//  width="100%" height="100%" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0}


const center = {
    lat: -25.363,
    lng: 131.044
};

function initMap() {
    const myLatLng = { lat: -25.363, lng: 131.044 };
    const map = new window.google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: myLatLng,
    });

    new window.google.maps.Marker({
        position: myLatLng,
        map,
        title: "Hello World!",
    });
}



function ListingMap() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCcc-2Avc8V938CeqdZ_nKNR2ZNajpfwlU"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={14}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            { /* Child components, such as markers, info windows, etc. */}
            <></>
        </GoogleMap>
    ) : <></>
}

export default React.memo(ListingMap)