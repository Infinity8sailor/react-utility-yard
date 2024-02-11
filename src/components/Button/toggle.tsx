import React from "react";

type Props = {
  /**
   * props,
   */
  color: "blue" | "green" | "red";
  // width: string;
  onChange: any;
  check?: boolean | undefined;
  size: "sm" | "md" | "lg";
  text?: string;
};

export const ToggleSwitch = ({
  color = "green",
  check = undefined,
  onChange = null,
  size = "md",
  text,
}: Props) => {
  const sizeStyles = [
    { sm: "h-4 w-6", md: "h-6 w-10", lg: "h-8 w-14" },
    {
      sm: "m-0.5 h-3 w-3 peer-checked:start-2",
      md: "m-1 h-4 w-4 peer-checked:start-4",
      lg: "m-1 h-6 w-6 peer-checked:start-6",
    },
  ];
  const colors = {
    blue: `peer-checked:bg-blue-500`,
    green: `peer-checked:bg-green-500`,
    red: `peer-checked:bg-red-500`,
  };
  return (
    <div className={`flex justify-center items-center gap-1`}>
      <label
        // htmlFor="AcceptConditions1"
        className={`relative ${sizeStyles[0][size]} cursor-pointer [-webkit-tap-highlight-color:_transparent]`}
      >
        <input
          type="checkbox"
          // id="AcceptConditions1"
          className="peer sr-only"
          checked={check}
          onChange={onChange}
        />

        <span
          className={`absolute inset-0 rounded-full bg-gray-300 transition ${colors[color]}`}
        ></span>

        <span
          className={`absolute inset-y-0 start-0 ${sizeStyles[1][size]} rounded-full bg-white transition-all `}
        ></span>
      </label>
      <label className="pr-1">{text}</label>
    </div>
  );
};

// ToggleSwitch.defaultProps = {
//   check: undefined,
//   onChange: null,
//   color: "bg-green-400",
// };
