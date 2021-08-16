import React from 'react';

import  Markdown from './markdown';

export default {
  title: 'Blog/Markdown',
  component: Markdown,

};



const Template = (args) => <Markdown {...args} />;

export const markdown = Template.bind({});
markdown.args = {markdown:`
## lorem impsum

lorem impsum

**lorem impsum**

[lorem impsum](https://www.google.com)
`};