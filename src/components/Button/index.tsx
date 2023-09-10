import { useRef, useEffect } from "react";
import "./button.css";
// import { Loading } from "./loading";
// import { MaterialIcon } from "./material_icon";

interface props {
  text: string;
  focus: boolean;
  onclick: any;
  onkeydown: any;
  z_id: number;
  size: string;
  loading: boolean; // for loading image to be displayed
  icon: null | string;
}

export function Button({
  text = "Button",
  focus = false,
  onclick = null,
  onkeydown = null,
  z_id = 10,
  size = "",
  loading = false, // for loading image to be displayed
  icon = null,
}: props) {
  const button_ref = useRef<any>(null);
  // console.log(size);
  useEffect(() => {
    if (focus) {
      button_ref.current.focus();
    }
  }, [focus]);
  return (
    <>
      <div
        className="x-btn-normal"
        style={{ zIndex: z_id, position: "relative" }}
      >
        <button
          ref={button_ref}
          className="button-85"
          onKeyDown={onkeydown}
          onClick={onclick}
        >
          {text}
        </button>
        {/* {icon ? <MaterialIcon icon={icon} /> : <></>}
        {loading ? <Loading size_num={34} /> : null} */}
      </div>
    </>
  );
}
