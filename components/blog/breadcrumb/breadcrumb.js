import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const Container = styled.div`
  /* display:none; */
  max-width: 860px;
  margin: 100px auto;
  
  > ul {
    position: relative;
    list-style: none;
    >li > a{
      padding-left:15px ;

    }
  }
  > ul:before {
    content: "▼";
    position: absolute;
    left: -5px;
    color: white;
    font-size: 12px;
    top:50%;
    transform: translateY(-50%) ;
  }
  :hover ul {
    display: block;
  }
`;
const BreadcrumbsElement = styled.li`
  padding: 4px 0;
`;
const BreadcrumbsLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 12px;
`;
const BreadcrumbsList = styled.ul`
  border-top: 3px solid white;
  list-style: none;
  display: none;
  position: absolute;
  padding-top:20px;
  margin-top: 10px;
  padding-left:15px ;
  background-color:#E3E3E3;
`;

const Breadcrumb = ({ contents }) => {
  return (
    <Container>
      <ul key="BreadcrumbsElement11">
        <BreadcrumbsElement key="BreadcrumbsElement111">
          <BreadcrumbsLink href="https://www.copywriting.pl/podstawy-i-techniki">
            Podstawy i techniki
          </BreadcrumbsLink>
          <BreadcrumbsList key="BreadcrumbsList">
            <BreadcrumbsElement key="BreadcrumbsElement1">
              <BreadcrumbsLink href="https://www.copywriting.pl/podstawy-i-techniki">
                Podstawy i techniki
              </BreadcrumbsLink>
            </BreadcrumbsElement>
            <BreadcrumbsElement key="BreadcrumbsElement2">
              <BreadcrumbsLink href="https://www.copywriting.pl/copywriting-w-internecie">
                Copywriting w internecie
              </BreadcrumbsLink>
            </BreadcrumbsElement>
            <BreadcrumbsElement key="BreadcrumbsElement3">
              <BreadcrumbsLink href="https://www.copywriting.pl/nazewnictwo-i-pozycjonowanie">
                Nazewnictwo i pozycjonowanie
              </BreadcrumbsLink>
            </BreadcrumbsElement>
          </BreadcrumbsList>
        </BreadcrumbsElement>
      </ul>
    </Container>
  );
};

export default Breadcrumb;
