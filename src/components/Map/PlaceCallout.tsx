import { Place } from "../../models/Place";
import ReportIcon from "./../../assets/warning_FILL0_wght400_GRAD0_opsz24.svg";

export type PlaceCalloutProps = {
  place: Place;
  distanceInMeters: number;
  onReportClick?: () => void;
};

const PlaceCallout = (props: PlaceCalloutProps) => {
  const handleReportClick = () => {
    props.onReportClick?.();
  };

  return (
    <div className="flex w-full bg-white items-center p-6 rounded-t-[2em] pointer-events-auto">
      <div className="grow">
        <h1 className="text-xl font-bold">{props.place.name}</h1>
        <p>
          {props.distanceInMeters}m stąd · {props.place.zone}
        </p>
      </div>
      <button
        className="bg-yellow-400 h-max py-3 px-5 rounded-full flex gap-3"
        onClick={handleReportClick}
      >
        Zgłoszenie
        <img src={ReportIcon} alt="" />
      </button>
    </div>
  );
};

export default PlaceCallout;
