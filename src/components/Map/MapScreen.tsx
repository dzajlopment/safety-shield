import { useState } from "react";
import MapContainer from "./MapContainer";
import PlaceCallout from "./PlaceCallout";
import SignCallout from "./SignCallout";
import { TPoint } from "../../types/TPoint";
import useSWR from "swr";
import { fetcher } from "../../util/fetcher";
import { Zone } from "../../models/Zone";

const useZones = () => {
  const { data, isLoading, error } = useSWR(
    "http://192.168.1.81:3000/api/zone",
    fetcher
  );

  if (isLoading || error) {
    return [];
  }

  return data.data.map((apiZone: any): Zone => {
    return {
      id: apiZone._id,
      coordinates: apiZone.coordinates,
      signs: apiZone.signs,
    };
  });
};

const MapScreen = () => {
  const [selectedPoint, setSelectedPoint] = useState<TPoint | null>(null);

  const zones = useZones();

  return (
    <div className="w-full h-full relative">
      <MapContainer
        selectedPoint={selectedPoint}
        setSelectedPoint={setSelectedPoint}
        zones={zones}
      />
      <div className="flex flex-col justify-between h-full pt-8 pointer-events-none absolute top-0 left-0 w-full z-[9999]">
        <SignCallout
          signs={[{ code: "zzo-1" }, { code: "zzo-2" }, { code: "zzo-3" }]}
        />
        <PlaceCallout
          place={{ name: "Wyjście ewakuacyjne", zone: "biura" }}
          distanceInMeters={152}
        />
      </div>
    </div>
  );
};

export default MapScreen;
