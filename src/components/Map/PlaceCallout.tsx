import { Place } from "../../models/Place";
import ReportIcon from "../../assets/warning_FILL0_wght400_GRAD0_opsz24.svg";

export type PlaceCalloutProps = {
  place: Place;
};

const PlaceCallout = () => {
  return (
    <div className="flex w-full bg-white items-center p-6 rounded-t-[2em]">
      <div className="grow">
        <h1 className="text-xl font-bold">Wyjście ewakuacyjne</h1>
        <p>150m stąd · magazyn</p>
      </div>
      <button className="bg-yellow-400 h-max py-3 px-5 rounded-full flex gap-3">
        Zgłoszenie
        <img src={ReportIcon} alt="" />
      </button>
    </div>
  );
};

export default PlaceCallout;
