import { InputImage } from "./../../src/components/input/image_input";

export default {
  title: "Components/Input/Image",
  component: InputImage,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // side: "left",
    backgroundColor: { control: "color" },
  },
};

export const Default = {
  args: {},
};
