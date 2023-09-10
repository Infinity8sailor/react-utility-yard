import React, { useState } from "react";
import Hamberger from "./../../assets/hamburger.png";

type Props = {};

export const SideBar = (props: Props) => {
  const [state, setState] = useState(true);
  return (
    <section className="flex gap-1 min-h-[500px]">
      <div className={`bg-red-950 ${state ? "w-64" : "w-10"} `}>
        <div className="m-1 float-right w-8" onClick={() => setState(!state)}>
          <img height="50px" src={Hamberger} />
        </div>
      </div>
      <div className="p-1 flex-1"></div>
    </section>
  );
};
