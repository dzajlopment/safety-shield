import PlaceCallout from "./PlaceCallout";
import SignCallout from "./SignCallout";

const MapScreen = () => {
  return (
    <div className="bg-slate-600 w-full h-full">
      <div className="flex flex-col justify-between h-full pt-8 pointer-events-none">
        <SignCallout
          signs={[{ code: "zzo-1" }, { code: "zzo-1" }, { code: "zzo-1" }]}
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
