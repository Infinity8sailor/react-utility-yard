import React from "react";

type Props = {
  height?: number;
  width?: number;
  children?: JSX.Element;
};

export function RootPage({ children }: Props) {
  return (
    // use style prop for dynaimc values .
    <div className={`max-h-[600px] w-[1500px] bg-slate-400`}>
      {children}
      {/* <div className={`hidden h-[$px] w-[${width}px]`}></div> */}
    </div>
  );
}
