import { MaterialIcon } from "./../../src/components/Icons/icon";

export default {
  title: "UI/Icons",
  component: MaterialIcon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // side: "left",
    // check: { control: "boolean" },
    backgroundColor: { control: "color" },
  },
};

export const icon = {
  args: {
    icon: "delete",
  },
};
export const Green = {
  args: {
    check: true,
    onChange: null,
    color: "green",
    // color: "bg-red-400",
  },
};
export const Blue = {
  args: {
    check: true,
    onChange: null,
    color: "blue",
    // color: "bg-red-400",
  },
};
export const Base2 = {
  args: {
    check: undefined,
    onChange: null,
    // color: "bg-red-400",
  },
};
