import React from "react";
import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";

const Map = ({ location, zoomLevel }) => {
  return (
    <div>
      <div className="google-map">
        <GoogleMapReact defaultCenter={location} defaultZoom={zoomLevel}>
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

const LocationPin = ({ text }) => {
  return (
    <div>
      <Icon icon={locationIcon} />
    </div>
  );
};

export default Map;
