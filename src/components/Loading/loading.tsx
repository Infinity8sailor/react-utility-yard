import React from "react";
import loading from "./../../assets/Loading-Img.gif";

type Props = {
  /**
   * props,
   */
  state: boolean;
  size?: "sm" | "md" | "lg";
};

export const Loading = ({ state = false, size = "md" }: Props) => {
  const sizeStyles = [
    { sm: "h-5 w-8", md: "h-6 w-10", lg: "h-8 w-14" },
    {
      sm: "m-0.5 h-3 w-3 peer-checked:start-2",
      md: "m-1 h-4 w-4 peer-checked:start-4",
      lg: "m-1 h-6 w-6 peer-checked:start-6",
    },
  ];
  // const colors = {
  //   blue: `peer-checked:bg-blue-500`,
  //   green: `peer-checked:bg-green-500`,
  //   red: `peer-checked:bg-red-500`,
  // };
  return (
    <div className={`${!state && "hidden"} p-0 -mx-1.5 flex items-center`}>
      <img
        className={`${sizeStyles[0][size]}  p-0 m-0`}
        alt="Loading..."
        src={loading}
      />
    </div>
  );
};
