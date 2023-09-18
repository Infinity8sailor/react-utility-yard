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
  title?: string;
};

export const SideBar = ({ sideBar_list, children, leftside, title }: Props) => {
  const [state, setState] = useState(true);
  return (
    <section
      className={` flex ${
        !leftside && "flex-row-reverse"
      } gap-1 min-h-[inherit] max-h-[inherit] `}
    >
      <div className={` bg-slate-600 ${state ? "w-64" : "w-10"} `}>
        <div
          className={`m-1 ${!leftside ? "float-left" : "float-right"} w-8`}
          onClick={() => setState(!state)}
        >
          <img height="40px" src={Hamberger} />
        </div>
        {state && (
          <div
            className={`m-2 ${leftside ? "float-left" : "float-right"} w-32`}
            // onClick={() => setState(!state)}
          >
            <div>{title}</div>
          </div>
        )}
        <div className="pt-[40px] h-full max-h-full bg-slate-500">
          {state && sideBar_list}
        </div>
      </div>
      <div className="p-1 flex-1 bg-slate-300">{children}</div>
    </section>
  );
};

SideBar.defaultProps = {
  leftside: true,
  title: "Annie Leonhart",
};
