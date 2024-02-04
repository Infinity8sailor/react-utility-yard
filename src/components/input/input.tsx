import React, { useEffect, useRef } from "react";

type Props = {
  /**
   * props,
   */
  value: string | number | undefined;
  onchange?: any;
  onkeyDown?: any;
  placeholder: string;
  size?: "sm" | "md" | "lg";
  type?: "text" | "time" | "datetime-local";
  className?: string;
  editOn: boolean;
  onDoubleClick?: any;
  focus?: boolean;
  // available: true | false | null;
};

export const Input = ({
  value,
  className,
  onchange = () => null,
  onkeyDown = () => null,
  placeholder,
  size = "sm",
  type = "text",
  editOn = false,
  onDoubleClick = null,
  focus,
}: // available = null,
Props) => {
  const sizes = { sm: "h-6", md: "h-8", lg: "h-10" };
  const Text_ref: any = useRef(null);

  useEffect(() => {
    if (focus) {
      Text_ref.current.focus();
    }
  }, [focus]);
  return (
    <>
      {/* <div className="relative"> */}
      <input
        type={type}
        readOnly={!editOn}
        className={`${className} ${sizes[size]} rounded-[0.225rem] px-2 py-0 `}
        value={value}
        onChange={(e) => onchange(e.target.value)}
        placeholder={placeholder}
        onKeyDown={onkeyDown}
        onDoubleClick={onDoubleClick}
        ref={Text_ref}
      />
      {/* {available !== null && (
          <span
            className={`block h-4 w-4 ${
              !available ? "bg-red-600" : "bg-green-600"
            } rounded-[50%] absolute right-1 my-auto top-0 bottom-0`}
          ></span>
        )}
      </div> */}
    </>
  );
};
