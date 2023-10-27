import React from "react";
import { SideBar } from "../../src/components/wrappers/sidebar";

export default {
  title: "Components/SideBar",
  component: SideBar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    // layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // side: "left",
    backgroundColor: { control: "color" },
  },
};

const sideBar_list = (): JSX.Element => {
  let array: number[] = [];
  for (let index = 0; index < 50; index++) {
    array.push(index);
  }
  return (
    <div className="h-full overflow-y-scroll">
      {array.map((m) => (
        <div> {`Item ${m}`}</div>
      ))}
    </div>
  );
};

export const Default = {
  args: {
    sideBar_list: null,
    children: <></>,
    leftside: true,
    title: "Annie Leonhart",
  },
};

export const SideBarX = () => (
  <SideBar sideBar_list={sideBar_list()}>
    <>Side bar wrapper content</>
  </SideBar>
);

export const RightSideBar = {
  args: {
    leftside: false,
    children: <>Hello</>,
  },
};
