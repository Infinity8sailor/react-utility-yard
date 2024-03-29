import React from "react";

type Props = {
  /**
   * props,
   */
  icon: string;
  //   color: "blue" | "green" | "red";
  onClick?: any;
  size?: "sm" | "md" | "lg";
  cursor?: "normal" | "pointer";
};

export const MaterialIcon = ({
  icon,
  onClick = null,
  size = "md",
  cursor = "normal",
}: Props) => {
  const sizeStyles = {
    sm: "h-4 w-6",
    md: "h-6 w-10",
    lg: "h-8 w-14",
  };
  // const colors = {
  //   blue: `peer-checked:bg-blue-500`,
  //   green: `peer-checked:bg-green-500`,
  //   red: `peer-checked:bg-red-500`,
  // };
  return (
    <span
      onClick={onClick}
      style={{
        // marginLeft: "0.25rem",
        // marginTop:"0.15rem",
        cursor: cursor,
        display: "content",
        fontSize: size,
      }}
    >
      <i
        className="material-icons  align-middle fill"
        style={{
          fontVariationSettings: `'FILL' 1,
    'wght' 100,
    'GRAD' 0,
    'opsz' ${sizeStyles[size]}`,
        }}
      >
        {icon}
      </i>
    </span>
  );
};
