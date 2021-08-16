import styled, { keyframes } from "styled-components";

const opacity = keyframes`
 0%,50%{
    visibility: hidden;
  }
  50%,100%{},

`;
const mask2 = keyframes`
0%,33%{
    -webkit-mask-position: 100% 0;
    mask-position: 100% 0;

  }
  66%,100%{
    -webkit-mask-position: 0% 0;
    mask-position: 0% 0;
  }

`;
const mask = keyframes`
  0%,33%{
    -webkit-mask-position: 0% 0;
    mask-position: 0% 0;
  }
  66%,100%{
    -webkit-mask-position: 100% 0;
    mask-position: 100% 0;
  }

`;
const ImageContainer = styled.div`
  position: relative;
  height: 230px;
  width: 433px;
    /* overflow: hidden; */
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
  transform: translate(-50%, 70px);
  width: 100%;
  background-color: white;
  width: ${433 * 2}px;
  left: 50%;
  @media (max-width: 1250px) {
    width: 433px;
    position: static;
    transform: none;
    margin:auto;
    flex-direction: column;
    background-color: transparent;
    align-items: center;
  }
`;
const Normal = styled.div`
  background-image: url(${({ url }) => url});
  background-size: cover;
  background-position-y: ${({ secondary }) => (secondary ? 100 : 0)}%;
`;
const Invert = styled.div`
  background-size: cover;
  background-image: url(${({ url }) => url});
  mask: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/141041/sheet.png");
  mask-size: 7000% 100%;
  animation: ${({ secondary }) => (secondary ? mask : mask2)} 3s steps(69)
    infinite alternate;
  background-position-y: ${({ secondary }) => (secondary ? 0 : 100)}%;
`;  
const Text = styled.p`
  height: 230px;
  width: 433px;
  margin: 0;
  display: block;
  background: white;
  padding: 0 50px;
  box-sizing: border-box;
  color: #438d07;
  font-size: 24px;
  font-family: arial;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(125deg, #31600b 0%, #438d07 100%);
  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 1250px) {
    text-align: center;
  }
`;
const Image = styled.div`
  height: 460px;
  width: 433px;
  position: absolute;
  animation: ${({ secondary }) => (secondary ? opacity : "none")} 6s infinite;
  > div {
    height: 50%;
    position: absolute;
    width: 100%;
  }
`;

const AboutArticle = ({ text, image: { url } }) => {
  return (
    <Container>
      <ImageContainer>
        <Image>
          <Normal url={`http://localhost:1337${url}`}></Normal>
          <Invert url={`http://localhost:1337${url}`}></Invert>
        </Image>
        <Image secondary>
          <Normal url={`http://localhost:1337${url}`} secondary></Normal>
          <Invert url={`http://localhost:1337${url}`} secondary></Invert>
        </Image>
      </ImageContainer>
      <Text children={text} />
    </Container>
  );
};

export default AboutArticle;
