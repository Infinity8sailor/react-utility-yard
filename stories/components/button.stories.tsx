import { Button } from "../../src/components/Button";
import React from "react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Core/Button",
  component: Button,
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
    text: "Duck",
    focus: true,
    onclick: () => console.log("Hello"),
    onkeydown: null,
    z_id: 1,
    size: "40px",
    // loading: true, // for loading image to be displayed
  },
};
export const Active = {
  args: {
    text: "Duck",
    active: true,
    focus: true,
    onclick: () => console.log("Hello"),
    onkeydown: null,
    z_id: 1,
    size: "40px",
    // loading: true, // for loading image to be displayed
  },
};

export const Width = () => (
  <div
    className="w-96 bg-red-400 h-16 "
    style={{ width: "600px", background: "red" }}
  >
    <Button text="Testing Width" />
  </div>
);
export const DarkMode = () => ( 
  <div className=" w-full h-full rounded-md bg-black text-white flex justify-center items-center p-10">
    <Button text="Testing Width" />
  </div>
);

// export const Secondary = {
//   args: {
//     label: 'Button',
//   },
// };

// export const Large = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };

// export const Warning = {
//   args: {
//     primary: true,
//     label: 'Delete now',
//     backgroundColor: 'red',
//   }
// };
