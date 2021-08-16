import styled from "styled-components";
// import Image from "../image/image";
// import Gallery from "../gallery/gallery";

const RightSection = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
a:nth-child(2){
  margin:2px 0 50px 0;
}
`
const LeftSection = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
`
const Title = styled.p`
    font-size: 24px;
    color: #c1c1c1;
    font-family: ${({ theme }) => theme.fontFamily.arial};
    padding-bottom: 10px;
`
const Copyright = styled.p`
  color: #c1c1c1;
  font-family: ${({ theme }) => theme.fontFamily.arial};
  font-size: 14px;
  text-align: center;
`
const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.arial};
  font-size: 18px;
  display: block;
  text-decoration: none;
  text-align: ${({ align }) => align};
  line-height:1.3;
  `;
const Container = styled.footer`
  background: #262626;
  display:flex;
  margin: auto;
  justify-content: space-between;
  padding:100px calc(50vw - (1170px / 2));
`;
const Footer = ({ linkSection }) => {
  const { rightSection, centerSection, leftSection } = linkSection;
  return (
    <Container>
      {/* <Gallery/> */}
      <LeftSection>
        <Title>{rightSection.title}</Title>
        {[...Array(5)].map((_,index) => (
          <StyledLink
          align="left"
            href={rightSection[`link${index+1}Href`]}
            children={rightSection[`link${index+1}Text`]}
          />
        ))}
      </LeftSection>
      <div>
        {/* <Image layout="fixed" image={centerSection.image} /> */}
        <Copyright dangerouslySetInnerHTML={{ __html: centerSection.copyright }}/>
      </div>
      <RightSection>
        <StyledLink
        align="right"
          href={leftSection.contanctLink}
          children={leftSection.contanctText}
        />
        <StyledLink
        align="right"
          href={leftSection.aboutUsLink}
          children={leftSection.aboutUsText}
        />
        <StyledLink
        align="right"
          href={leftSection.peopleFindLink}
          dangerouslySetInnerHTML={{ __html: leftSection.peopleFindText }}
        />
      </RightSection>
    </Container>
  );
};

export default Footer;
