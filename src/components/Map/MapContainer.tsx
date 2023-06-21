import { useRef } from "react";
import { MapContainer as Map, TileLayer } from "react-leaflet";

export type MapContainerProps = {
  children?: React.ReactNode;
};

const MapContainer = (props: MapContainerProps) => {
  const mapRef = useRef(null);

  return (
    <Map
      ref={mapRef}
      className="map-continer h-full w-full absolute"
      center={[51.505, -0.09]}
      zoom={16}
      scrollWheelZoom={true}
      zoomControl={false}
      minZoom={7}
      attributionControl={false}
    >
      <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {props.children}
    </Map>
  );
};

export default MapContainer;
