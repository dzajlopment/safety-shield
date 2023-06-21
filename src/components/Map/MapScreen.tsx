import { useState } from "react";
import MapContainer from "./MapContainer";
import PlaceCallout from "./PlaceCallout";
import SignCallout from "./SignCallout";
import { TPoint } from "../../types/TPoint";

const MapScreen = () => {
  const [selectedPoint, setSelectedPoint] = useState<TPoint | null>(null);

  return (
    <div className="w-full h-full relative">
      <MapContainer
        selectedPoint={selectedPoint}
        setSelectedPoint={setSelectedPoint}
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
