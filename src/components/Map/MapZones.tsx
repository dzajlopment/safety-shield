import { Polygon } from "react-leaflet";

export type Zone = {
  id: string;
  coordinates: [number, number][];
};

const MapZones = () => {
  const zones: Zone[] = [
    {
      id: "one",
      coordinates: [
        [51.505, -0.09],
        [51.535, -0.08],
        [51.515, -0.07],
      ],
    },
    {
      id: "two",
      coordinates: [
        [51.305, -0.059],
        [52.535, -30.048],
        [51.515, -0.027],
      ],
    },
  ];

  return (
    <>
      {zones.map((zone) => (
        <Polygon key={zone.id} positions={zone.coordinates} />
      ))}
    </>
  );
};

export default MapZones;
