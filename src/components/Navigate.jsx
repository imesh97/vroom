import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useMemo } from "react";

export default function Navigate() {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_MAPS_APIKEY,
  });

  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
  const renderMap = () => {
    return (
      <GoogleMap
        center={center}
        zoom={10}
        mapContainerClassName="map-container"
      />
    );
  };

  if (loadError) {
    console.log("Map cannot be loaded right now, sorry.");
    return <div>Map cannot be loaded right now, sorry.</div>;
  }
  return isLoaded ? renderMap() : <div></div>;
}
