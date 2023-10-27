import React, { useRef, useEffect } from "react";
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
  size?: string;
  loading?: boolean; // for loading image to be displayed
  icon?: null | string;
  color?: "cool" | "hot" | "warm";
}

export function Button({
  text = "Button",
  focus = false,
  onclick = null,
  onkeydown = null,
  z_id = 0,
  color = "cool",
}: // size = "",
// loading = false, // for loading image to be displayed
// icon = null,
props) {
  const button_ref = useRef<any>(null);

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
      style={{ zIndex: z_id, position: "relative" }}
      className={`group inline-block rounded bg-gradient-to-r from-sk ${colors[color]} p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75`}
    >
      <span
        ref={button_ref}
        onKeyDown={onkeydown}
        onClick={onclick}
        className="block rounded-sm bg-white px-2 text-sm font-medium group-hover:bg-transparent"
      >
        {text}
      </span>
      {/* {icon ? <MaterialIcon icon={icon} /> : <></>}
{loading ? <Loading size_num={34} /> : null} */}
    </div>
  );
}
