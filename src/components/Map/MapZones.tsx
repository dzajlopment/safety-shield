import { Polygon } from "react-leaflet";
import { Zone } from "../../models/Zone";

export type MapZonesProps = {
  zones: Zone[];
};

const MapZones = (props: MapZonesProps) => {
  return (
    <>
      {props.zones.map((zone) => {
        return <Polygon key={zone.id} positions={zone.coordinates} />;
      })}
    </>
  );
};

export default MapZones;
