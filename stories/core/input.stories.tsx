import { Input } from "../../src/components/input/input";
import React from "react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Core/Input/Input",
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    value: "Annie Leonhart",
    size: "md",
    type: "text",
    editOn: true,
    available: true,
  },
};
export const Secondary = {
  args: {
    value: "Annie Leonhart",
    size: "md",
    type: "text",
    editOn: true,
    available: true,
    className: "h-3 bg-red-400",
  },
};

export const Extra = () => (
  <div className="h-6">
    <Input value={"Annie Leonhart"} editOn={true} placeholder="Kill me" />{" "}
  </div>
);
export const DarkExtra = () => (
  <div className="h-6 text-black bg-black">
    <Input
      value={"Annie Leonhart"}
      type="datetime-local"
      editOn={true}
      placeholder="Kill me"
    />{" "}
  </div>
);
export const DarkExtra2 = () => (
  <div className=" bg-black">
    <Input
    className=""
      value={"Annie Leonhart"}
      type="datetime-local"
      editOn={true}
      placeholder="Kill me"
    />{" "}
  </div>
);