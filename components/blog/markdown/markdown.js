import React from "react";
import styled from "styled-components";

var md = require('markdown-it')();
var markdownItAttrs = require('markdown-it-attrs');

md.use(markdownItAttrs, {
  leftDelimiter: '{',
  rightDelimiter: '}',
  allowedAttributes: []  
});

const StyledMarkdown = styled.div`
  margin: ${({width})=>width !== 1200 ? "none": "auto"};
  max-width: ${({width})=>width}px;
  h2 {
    font-size: 6rem;
    font-family: ${({theme})=>theme.fontFamily.playfair};
    font-weight: 800;
    color: #333;
    text-align: center;
    margin:60px 0 85px 0;
  }
  p {
    letter-spacing: -0.5px;
    font-family: ${({theme})=>theme.fontFamily.georgia};
    font-size: 2.4rem;
    font-weight: 500;
    max-width: 860px;
    margin: auto;
    margin-bottom: 40px;
    color: #515151;
    line-height: 1.5;

  }
  img {
    margin: auto;
    display: block;
  }
  a {
    color: ${({theme})=> theme.colors.accent};
    text-decoration: underline;
  }
`;

const Markdown = ({ markdown,width = 1200 }) => {
  const res = md.render(markdown);
  return <StyledMarkdown {...width} dangerouslySetInnerHTML={{ __html: res }}/>
};

export default Markdown;
