import { InputText } from "../../src/components/input/input_text";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Core/Input/text",
  component: InputText,
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
    loading: true, // for loading image to be displayed
    icon: null,
  },
};
