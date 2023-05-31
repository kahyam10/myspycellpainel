
import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";



const LocationMap: React.FC<any> = (props) => {
    
    return (
        <Map
        style={{ width:props.mapSize.width, height:props.mapSize.height, display:"box" }}
        containerStyle={{position:"relative"}}
        google={props.google}
        zoom={15} 
        
        center={{
          lat: props.currentLocation.latitude,
          lng: props.currentLocation.longitude,
        }}
        initialCenter={{
          lat: props.currentLocation.latitude,
          lng: props.currentLocation.longitude,
        }}
      >
        
      </Map>
  );
};

export default GoogleApiWrapper(
    (props)=>({
  apiKey: "AIzaSyA4J0GtsJXvOatKeEfOmd6KzKu7-6czvnc",
}))(LocationMap);
