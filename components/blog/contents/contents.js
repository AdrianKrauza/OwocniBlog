import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const ContentTitle = styled.h2`
font-size: 24px;
color:#333;
font-family: Arial;
margin-bottom: 20px;
`


const StyledContent = styled.li`
  list-style: inside;
  color: #387605;
  a {
    color: #387605;
    font-family: "Arial";
    font-weight: 500;
    font-size: 18px;
    line-height: calc(1.275rem + 0.3vw);
    list-style-type: disc;
    list-style-position: inside;
    text-decoration: none;
  }
  margin: 10px 0;
`;
const StyledContents = styled.ul`
  width: 860px;
  margin: 100px auto;
  
`;

const Contents = ({ contents }) => {
 
  return (
    <StyledContents>
      <ContentTitle>Spis treści:</ContentTitle>
      <ul>
        {contents.map(({ content, contentId }) => (
          <StyledContent>
            <a href={`#${contentId}`} children={content} />
          </StyledContent>
        ))}
      </ul>
    </StyledContents>
  );
};

export default Contents;
