import { useRef } from "react";
import { MapContainer as Map, TileLayer } from "react-leaflet";
import MapPoints from "./MapPoints";
import { TPoint } from "../../types/TPoint";

export type MapContainerProps = {
  children?: React.ReactNode;
  selectedPoint: TPoint | null;
  setSelectedPoint: (value: TPoint | null) => void;
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
      <MapPoints
        selectedPoint={props.selectedPoint}
        setSelectedPoint={props.setSelectedPoint}
      />
    </Map>
  );
};

export default MapContainer;
