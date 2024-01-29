import React, { useRef, useEffect } from "react";
import { MaterialIcon } from "../Icons/icon";
import { Loading } from "../Loading/loading";
// import "./button.css";
// import { Loading } from "./loading";
// import { MaterialIcon } from "./material_icon";

interface props {
  /**
   * Bias: bias_text[rating.bias[0]],
   */
  text: string;
  focus?: boolean;
  onclick?: any;
  onkeydown?: any;
  z_id?: number;
  size?: "sm" | "md" | "lg";
  loading?: boolean; // for loading image to be displayed
  icon?: string;
  color?: "cool" | "hot" | "warm";
}

export function Button({
  text = "Button",
  focus = false,
  onclick = null,
  onkeydown = null,
  z_id = 0,
  color = "cool",
  icon = "",
  loading = false,
  size = "sm",
}: props) {
  const button_ref = useRef<any>(null);

  const sizeStyles = {
    sm: "h-6",
    md: "h-8",
    lg: "h-10",
  };

  const colors = {
    cool: " from-sky-300  to-green-500",
    warm: " from-pink-500 via-red-500 to-yellow-500",
    hot: " from-orange-500 via-red-500 to-yellow-500",
  };
  // console.log(size);
  useEffect(() => {
    if (focus) {
      button_ref.current.focus();
    }
  }, [focus]);
  return (
    <div
      style={{ zIndex: z_id }}
      className={`group ${sizeStyles[size]}  relative flex justify-center items-center w-fit 
      rounded bg-gradient-to-r from-sk ${colors[color]} p-[2px] hover:text-white
       focus:outline-none focus:ring active:text-opacity-75 `}
    >
      <span
        ref={button_ref}
        onKeyDown={onkeydown}
        onClick={onclick}
        className="block rounded-sm bg-green-50 px-2 text-sm font-medium group-hover:bg-transparent"
      >
        {text}
      </span>
      {icon.length > 0 ? <MaterialIcon icon={icon} size="sm" /> : <></>}
      {loading ? <Loading state={loading} size={"sm"} /> : null}
    </div>
  );
}
