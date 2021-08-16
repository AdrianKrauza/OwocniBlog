import React from "react";
import Image from "../../image/image";
import styled from "styled-components";
import dynamic from "next/dynamic";
const Markdown = dynamic(() => import("../markdown/markdown"));
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ imagePosition }) =>
    imagePosition ? "row-reverse" : "row"};
  > * {
    margin: 30px;
  }
  @media (max-width: 1250px) {
    flex-direction: column;
    > * {
      margin: 30px 0px;
    }
  }
`;

const ImageWithText = ({ markdown, image, imagePosition }) => {
  return (
    <Container imagePosition={imagePosition === "prawo"}>
       <Image layout="fixed" image={image}/>
      <Markdown width="800" markdown={markdown} />
    </Container>
  );
};

export default ImageWithText;
