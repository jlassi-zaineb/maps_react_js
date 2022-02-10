import React from 'react';
import { Container } from 'react-bootstrap';
import WrappedMap from './components/MapComponent';
import ZipComponent from './components/ZipComponent';



export default function App() {

  return (

    <Container className='m-5'>

      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.API_KEY}`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "500px" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
      <br />
      <ZipComponent />
      
    </Container >
  )
}
