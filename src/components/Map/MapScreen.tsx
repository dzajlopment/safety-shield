import { useState } from "react";
import MapContainer from "./MapContainer";
import PlaceCallout from "./PlaceCallout";
import SignCallout from "./SignCallout";
import { TPoint } from "../../types/TPoint";
import useSWR from "swr";
import { fetcher } from "../../util/fetcher";
import { Zone } from "../../models/Zone";
import CurrentLocationIcon from "../../assets/my_location_FILL0_wght400_GRAD0_opsz24.svg";
import { Sign } from "../../models/Sign";

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

const signsTest: Sign[][] = [
  [{ code: "zakazryb" }, { code: "nakazokulary" }],
  [{ code: "zakazogien" }],
  [{ code: "zakaztoksyn" }],
  []
];

const MapScreen = () => {
  const [selectedPoint, setSelectedPoint] = useState<TPoint | null>(null);

  const [currentLocation, setCurrentLocation] = useState<
    [number, number] | null
  >(null);

  const getCurrentLocation = () => {
    setI((i) => {
      if (i === signsTest.length - 1) {
        return 0;
      }
      return i + 1;
    });

    navigator.geolocation.getCurrentPosition((position) => {
      setCurrentLocation([position.coords.latitude, position.coords.longitude]);
    });
  };

  const [i, setI] = useState(0);
  // const [signs, setSigns] = useState<Sign[]>([]);

  const zones = useZones();

  return (
    <div className="w-full h-full relative">
      <MapContainer
        selectedPoint={selectedPoint}
        setSelectedPoint={setSelectedPoint}
        zones={zones}
      />
      <div className="flex flex-col justify-between h-full pt-8 pointer-events-none absolute top-0 left-0 w-full z-[9999]">
        {signsTest[i].length && <SignCallout signs={signsTest[i]} />}
        <div>
          <button
            className="p-4 bg-white ml-auto block mb-6 mr-6 rounded-xl pointer-events-auto"
            onClick={getCurrentLocation}
          >
            <img src={CurrentLocationIcon} alt="Current location" />
          </button>
          <PlaceCallout
            place={{ name: "Wyjście ewakuacyjne", zone: "biura" }}
            distanceInMeters={152}
          />
        </div>
      </div>
    </div>
  );
};

export default MapScreen;
