import { Marker } from "react-leaflet";
import { TPoint } from "../../types/TPoint";

export type MapPointProps = {
  id: string;
  position: [number, number];
  type: string;
  name: string;
  description: string;
  selectedPoint: TPoint | null;
  zone: string;
  setSelectedPoint: (value: TPoint | null) => void;
};

const MapPoint = (props: MapPointProps) => {
  if (!props?.position) {
    return <></>;
  }

  return (
    <Marker
      position={props.position}
      eventHandlers={{
        click: () => {
          props.setSelectedPoint({
            _id: props.id,
            coordinates: props.position,
            description: props.description,
            name: props.name,
            type: props.type,

            zone: props.zone,
          });
        },
      }}
    />
  );
};

export default MapPoint;
