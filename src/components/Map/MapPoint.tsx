import { Marker } from "react-leaflet";

export type MapPointProps = {
  position: [number, number];
};

const MapPoint = (props: MapPointProps) => {
  return <Marker position={props.position}></Marker>;
};

export default MapPoint;
