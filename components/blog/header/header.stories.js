import React from "react";

import Header from "./header";

export default {
  title: "Blog",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const header = Template.bind({});
header.args = {
  title: "lorem impsum",
  subtitle:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\\n Maecenas magna nulla, vestibulum ",
  aboutArticle:{
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas magna nulla",
    image:{url:"/uploads/Naming_4739541b57.jpg"}
  }
};
