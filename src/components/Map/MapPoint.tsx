import { Marker } from "react-leaflet";
import { TPoint } from "../../types/TPoint";

export type MapPointProps = {
  id: string;
  position: [number, number];
  type: string;
  name: string;
  description: string;
  selectedPoint: TPoint | null;
  setSelectedPoint: (value: TPoint | null) => void;
};

const MapPoint = (props: MapPointProps) => {
  console.log(props);

  return (
    <Marker
      position={props.position}
      eventHandlers={{
        click: () => {
          props.setSelectedPoint({
            _id: props.id,
            cordinates: props.position,
            description: props.description,
            name: props.name,
            type: props.type,
          });
        },
      }}
    />
  );
};

export default MapPoint;
