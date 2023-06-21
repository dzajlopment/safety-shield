import { useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

export type MapScreenProps = {
  children?: React.ReactNode;
};

const MapScreen = (props: MapScreenProps) => {
  const mapRef = useRef(null);

  return (
    <MapContainer
      ref={mapRef}
      className="map-continer"
      center={[51.505, -0.09]}
      zoom={16}
      scrollWheelZoom={true}
      zoomControl={false}
      minZoom={7}
      attributionControl={false}
    >
      <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {props.children}
    </MapContainer>
  );
};

export default MapScreen;
