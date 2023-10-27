// Button.stories.tsx
import * as React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { RootPage } from "./rootPage";
// import { SideBarX } from "../../components/wrappers/sidebar.stories";

export default {
  title: "components/Pages/Root",
  component: RootPage,
  tags: ["autodocs"],
} as Meta;

export const Primary: StoryFn = (args) => <RootPage {...args}>
    <>DOcs</>
</RootPage>;
Primary.args = {
  //   height: 720,
  //   width: 500,
  //   primary: true,
};
// export const Sidebar: StoryFn = (args) => (
//   <RootPage {...args}>
//     <SideBarX />
//   </RootPage>
// );