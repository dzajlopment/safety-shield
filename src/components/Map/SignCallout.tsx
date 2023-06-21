import { Sign } from "../../models/Sign";

export type SignCalloutProps = {
  signs: Sign[];
  className?: string;
  onClick?: () => void;
};

const SignCallout = (props: SignCalloutProps) => {
  const handleCalloutClicked = () => {
    props.onClick?.();
  };

  return (
    <div
      className={`flex gap-2 px-3 py-3 bg-white rounded-full flex-wrap w-max mx-auto overflow-hidden pointer-events-auto ${props.className}`}
      onClick={handleCalloutClicked}
    >
      {props.signs.map((sign) => (
        <img
          key={sign.code}
          src={`/signs/${sign.code}.png`}
          className="w-16 h-16 object-cover"
        />
      ))}
    </div>
  );
};

export default SignCallout;
