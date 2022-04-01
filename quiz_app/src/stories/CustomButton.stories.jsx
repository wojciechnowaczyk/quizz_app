import React from 'react';


import Button from '../components/button';
import AnswerButton from '../components/answerButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Buttons',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

const SecondaryTemplate = (args) => <AnswerButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
title: "Press  me"
};

export const AnswerButtonPrimary = SecondaryTemplate.bind({});

AnswerButtonPrimary.args={
  title: 'Press me',
  id:  1,
  onPress: () => {console.log('Pressed')}
}
