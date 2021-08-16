import React from "react";
import ReactMarkdown from "react-markdown";
import styled, { createGlobalStyle } from "styled-components";
import dynamic from "next/dynamic";
const AboutArticle = dynamic(() => import("../aboutArticle/aboutArticle"));
const Title = styled.h1`
  padding-top: 20rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: 74px;
  font-family: ${({ theme }) => theme.fontFamily.playfair};
  text-align: center;
  font-weight: 900;
`;
const Subtitle = styled(ReactMarkdown)`
  color: ${({ theme }) => theme.colors.white};
  font-size: 4.8rem;
  font-style: italic;
  line-height: 1.5;
  font-family: ${({ theme }) => theme.fontFamily.georgia};
  text-align: center;
`;

const Line = styled.hr`
  background: linear-gradient(to right, #438d07 0%, #fff 53%, #438d07 100%);
  height: 1px;
  width: 85vw;
  max-width: 770px;
  border: none;
  margin: 30px auto;
  @media (max-width: 1250px) {
  transform: translateY(300px);
  }

`;
const Container = styled.header`
  background-color: #1f1f1f;
  min-height: 700px;
  position: relative;
  margin-bottom: 70px;
`;

const Header = ({ title, subtitle, aboutArticle }) => {
  return (
    <Container>
      <Title children={title} />
      <Subtitle children={subtitle} />
      <Line />
      <AboutArticle {...{ ...aboutArticle }} />
    </Container>
  );
};

export default Header;
