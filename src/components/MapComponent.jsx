import React from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';

function MapComponent() {
  return (
    <GoogleMap
    defaultCenter={{ lat: 48.856613, lng: 2.352222 }}
    defaultZoom={12}
  >
    {Marker}
  </GoogleMap>
  )
}


  
const WrappedMap = withScriptjs(withGoogleMap(MapComponent));

export default WrappedMap