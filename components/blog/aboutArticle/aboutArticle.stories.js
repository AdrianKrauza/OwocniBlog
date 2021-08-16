import React from "react";

import AboutArticle from "./aboutArticle";

export default {
  title: "Blog",
  component: AboutArticle,
};

const Template = (args) => <AboutArticle {...args} />;

export const aboutArticle = Template.bind({});
aboutArticle.args = {
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas magna nulla",
    image:{url:"/uploads/Naming_4739541b57.jpg"}

};
