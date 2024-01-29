import React, { useState } from "react";
import Hamberger from "./../../assets/hamburger.png";

type Props = {
  /**
   * Side bar list,
   */
  sideBar_list?: JSX.Element | null;
  /**
   * Children Object Content
   */
  children: JSX.Element;
  /**
   * side bar on left side ?
   */
  leftside?: boolean;
  /**
   * side bar on width ?
   */
  width?: string;
  title?: string;
  titleBarColor?: string;
  titleTextColor?: string;
};

export const SideBar = ({
  sideBar_list,
  children,
  leftside,
  title,
  width,
  titleBarColor = "bg-slate-600",
  titleTextColor = "text-white",
}: Props) => {
  const [state, setState] = useState(true);
  return (
    <section
      className={` flex ${
        !leftside && "flex-row-reverse"
      } gap-1 min-h-[inherit] max-h-[inherit] w-full`}
    >
      <div className={` ${state ? width : "w-12"} `}>
        <div
          className={`max-h-[40px] float-right flex ${
            !leftside ? "flex-row" : "flex-row-reverse"
          } w-full ${titleBarColor} ${titleTextColor}`}
        >
          <div className="w-[40px] mx-1" onClick={() => setState(!state)}>
            <img height="40px" src={Hamberger} />
          </div>
          {state && (
            <div className={`m-1 flex-1 flex justify-center items-center`}>
              <div className="text-xl">{title}</div>
            </div>
          )}
        </div>
        <div className="pt-[40px] h-full max-h-full">
          {state && sideBar_list}
        </div>
      </div>
      <div className={`p-1 flex-1 `}>{children}</div>
    </section>
  );
};

SideBar.defaultProps = {
  leftside: true,
  title: "Annie Leonhart",
  width: "w-72",
};

export const sideBar_list = (): JSX.Element => {
  let array: number[] = [];
  for (let index = 0; index < 50; index++) {
    array.push(index);
  }
  return (
    <div className="w-full overflow-y-auto bg-amber-200">
      {array.map((m) => (
        <div> {`Item ${m}`}</div>
      ))}
    </div>
  );
};
