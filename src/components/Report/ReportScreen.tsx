import { FormEvent, useState } from "react";
import { Place } from "../../models/Place";
import "./report-screen.scss";
import CloseIcon from "../../assets/close_FILL0_wght400_GRAD0_opsz48.svg";
import { Report } from "../../models/Report";

export type ReportScreenProps = {
  place: Place;
  distanceInMeters: number;
  onCancel?: () => {};
  onSubmit?: (report: Omit<Report, "id">) => {};
};

const ReportScreen = (props: ReportScreenProps) => {
  const [kind, setKind] = useState("danger");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCancelClick = () => {
    props.onCancel?.();
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    const report: Omit<Report, "id"> = { kind, title, description };
    props.onSubmit?.(report);
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-y-scroll p-6 box-border">
      <div className="flex mb-3 pb-3 border-b border-b-neutral-200">
        <div className="grow">
          <h1 className="text-xl font-bold">{props.place.name}</h1>
          <p>
            {props.distanceInMeters}m stąd · {props.place.zone}
          </p>
        </div>
        <button className="text-yellow-600" onClick={handleCancelClick}>
          <img src={CloseIcon} alt="Anuluj" className="w-9" />
        </button>
      </div>
      <form
        className="report-form flex flex-col h-full"
        onSubmit={handleFormSubmit}
      >
        <label htmlFor="kind">Rodzaj zagrożenia</label>
        <select
          id="kind"
          value={kind}
          onChange={(event) => setKind(event.target.value)}
        >
          <option value="danger">Zagrożenie</option>
          <option value="accident">Wypadek</option>
          <option value="fault">Uszkodzenie</option>
        </select>
        <label htmlFor="title">Tytuł zgłoszenia</label>
        <input
          id="title"
          type={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label htmlFor="description">Opis</label>
        <input
          id="description"
          type={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <div className="flex justify-end gap-4 mt-8">
          <button onClick={handleCancelClick}>Anuluj</button>
          <button className="bg-yellow-400 h-max py-3 px-5 rounded-full">
            Dodaj zgłoszenie
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReportScreen;
