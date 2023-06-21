import { Sign } from "../../models/Sign";

export type SignCalloutProps = {
  signs: Sign[];
  onClick?: () => void;
};

const SignCallout = (props: SignCalloutProps) => {
  const handleCalloutClicked = () => props.onClick?.();

  return (
    <div
      className="flex gap-2 p-2 bg-white rounded-full flex-wrap w-max mx-auto"
      onClick={handleCalloutClicked}
    >
      {props.signs.map((sign) => (
        <img
          key={sign.code}
          src={`/signs/${sign.code}.png`}
          className="w-10 h-10 object-cover"
        />
      ))}
    </div>
  );
};

export default SignCallout;
