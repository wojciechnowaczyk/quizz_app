import React from "react";

import InputWithLabel from "../components/inputWithLabel";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Input With Label",
  component: InputWithLabel,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <InputWithLabel {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: "Input",
  placeholder: "Placeholder",
  onChange: (el) => console.log(el),
};
