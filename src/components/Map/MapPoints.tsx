import useSWR from "swr";
import { fetcher } from "../../util/fetcher";
import { TPoint } from "../../types/TPoint";
import MapPoint from "./MapPoint";

export type MapPointsProps = {
  selectedPoint: TPoint | null;
  setSelectedPoint: (value: TPoint | null) => void;
};

const MapPoints = (props: MapPointsProps) => {
  const { data, error } = useSWR(
    "http://192.168.1.81:3000/api/device",
    fetcher
  );

  if (error) {
    return <></>;
  }

  if (!data) {
    return <></>;
  }

  const points: TPoint[] = data;

  return (
    <>
      {points.map((point) => (
        <MapPoint
          id={point._id}
          key={point._id}
          position={point.coordinates}
          type={point.type}
          description={point.description}
          name={point.name}
          zone={point.zone}
          selectedPoint={props.selectedPoint}
          setSelectedPoint={props.setSelectedPoint}
        />
      ))}
    </>
  );
};

export default MapPoints;
