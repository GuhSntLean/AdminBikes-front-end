import React from "react";
import GoogleMapReact from "google-map-react";

const Map = ({ location, zoomLevel }) => {
  return (
    <div>
      <div className="google-map">
          <GoogleMapReact>
              
          </GoogleMapReact>
      </div>
    </div>
  );
};
