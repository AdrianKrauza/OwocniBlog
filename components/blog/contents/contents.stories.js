import React from 'react';



export default {
  title: 'Blog/Markdown',
  component: Markdown,

};



const Template = (args) => <Markdown {...args} />;

export const markdown = Template.bind({});
markdown.args = {markdown:`
## test

dsadsa
dsad

`};