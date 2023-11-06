// Button.stories.tsx
import * as React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { RootPage } from "../../src/components/wrappers/rootPage";
import { SideBarX } from "../../stories/components/sidebar.stories";

export default {
  title: "components/Pages/Root",
  component: RootPage,
  tags: ["autodocs"],
} as Meta;

export const Primary: StoryFn = (args) => (
  <RootPage {...args}>
    <>DOcs</>
  </RootPage>
);
Primary.args = {
  //   height: 720,
  //   width: 500,
  //   primary: true,
};
export const Sidebar: StoryFn = (args) => (
  <div>
    <RootPage>
      <SideBarX />
    </RootPage>
  </div>
);
