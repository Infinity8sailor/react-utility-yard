import React from "react";

type Props = {
  height?: number;
  width?: number;
  children?: JSX.Element;
};

export function RootPage({ height, width, children }: Props) {
  return (
    // use style prop for dynaimc values . 
    <div
      className={`h-[${height}px] w-[${width}px] min-h-[680px] min-w-[1560px] max-h-[680px] max-w-[1560px] overflow-hidden bg-slate-900`}
    >
      {children}
    {/* <div className={`hidden h-[$px] w-[${width}px]`}></div> */}
    </div>
  );
}
