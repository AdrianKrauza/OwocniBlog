import styled from "styled-components";
import Image from "../../image/image";

const Container = styled.div`
    display:flex;
    justify-content: center;
`;
 const ImageComponent = ({image}) => {
    return (
        <Container>
            <Image layout="fixed" image={image}/>
        </Container>
    )
}


export default ImageComponent;
