import React from 'react';

import InformationBox from '../components/informationBox'

export default {
  title: 'Example/Boxes',
  component: InformationBox,
};

const Template = (args) => <InformationBox {...args} />;

export const InformationBoxExample = Template.bind({});
InformationBoxExample.args = {
  title: "Title",
};

