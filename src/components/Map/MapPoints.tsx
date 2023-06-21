import useSWR from "swr";
import { fetcher } from "../../util/fetcher";
import { TPoint } from "../../types/TPoint";
import MapPoint from "./MapPoint";

const DUMMY_DATA: TPoint[] = [
  {
    _id: "xsda",
    cordinates: [51.505, -0.09],
    description: "XDDD",
    name: "Maszyna 1",
    type: "Device",
  },
];

export type MapPointsProps = {
  selectedPoint: TPoint | null;
  setSelectedPoint: (value: TPoint | null) => void;
};

const MapPoints = (props: MapPointsProps) => {
  // const { data, error } = useSWR("API ENDOPOINT", fetcher);

  // if (error) {
  //   return <></>;
  // }

  // if (!data) {
  //   return <></>;
  // }

  // const points: TPoint[] = data;
  const points: TPoint[] = DUMMY_DATA;

  return (
    <>
      {points.map((point) => (
        <MapPoint
          id={point._id}
          key={point._id}
          position={point.cordinates}
          type={point.type}
          description={point.description}
          name={point.name}
          selectedPoint={props.selectedPoint}
          setSelectedPoint={props.setSelectedPoint}
        />
      ))}
    </>
  );
};

export default MapPoints;
