import { useState } from "react";
import MapContainer from "./MapContainer";
import PlaceCallout from "./PlaceCallout";
import SignCallout from "./SignCallout";
import { TPoint } from "../../types/TPoint";
import ReportScreen from "../Report/ReportScreen";
import { Report } from "../../models/Report";

const MapScreen = () => {
  const [selectedPoint, setSelectedPoint] = useState<TPoint | null>(null);
  const [isReportScreenShown, setIsReportScreenShown] = useState(false);
  const [reports, setReports] = useState<Report[]>([]);

  const handleReportClick = () => {
    setIsReportScreenShown(true);
  };

  const handleReportScreenDismiss = () => {
    setIsReportScreenShown(false);
  };

  const handleReportSubmit = (report: Omit<Report, "id">) => {
    setReports((reports) => [
      ...reports,
      { ...report, id: new Date().toString() },
    ]);
    setIsReportScreenShown(false);
  };

  return (
    <>
      {selectedPoint && isReportScreenShown && (
        <ReportScreen
          distanceInMeters={100}
          place={selectedPoint}
          onCancel={handleReportScreenDismiss}
          onSubmit={handleReportSubmit}
        />
      )}
      <div className="w-full h-full relative">
        <MapContainer
          selectedPoint={selectedPoint}
          setSelectedPoint={setSelectedPoint}
        />
        <div className="flex flex-col justify-between h-full pt-8 pointer-events-none absolute top-0 left-0 w-full z-[9999]">
          <SignCallout
            signs={[{ code: "zzo-1" }, { code: "zzo-2" }, { code: "zzo-3" }]}
          />
          {selectedPoint && (
            <PlaceCallout
              place={{ name: selectedPoint?.name, zone: selectedPoint?.zone }}
              distanceInMeters={152}
              onReportClick={handleReportClick}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default MapScreen;
