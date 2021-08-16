import styled from "styled-components";
import Swiper from 'react-id-swiper';

const Container = styled.div`
.swiper-wrapper{
    /* width: 100v; */
    display: flex;
    >div{
        background-image: url("https://cdn.owocni.pl/img/single-copywriter/zaloga/1Copywriterzy-Owocni.jpg");
        /* width: 15vw; */
        height: 420px;
    }
}
`;

// import 'swiper/swiper.scss';
const SimpleSwiperWithParams = () => {
    const params = {
        loop:true,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 180,
            modifier: 1,
            slideShadows: true,
          },
    //   pagination: {
    //     el: '.swiper-pagination',
    //     type: 'bullets',
    //     clickable: true
    //   },
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev'
    //   },
    //   spaceBetween: 30
    }
   
    return(
        <Container>
      <Swiper {...params}>
     
        <div>Slide 2</div>
        <div>Slide 3</div>
        <div>Slide 4</div>
        <div>Slide 5</div>
      </Swiper>
      </Container>
    )
  }
   
  export default SimpleSwiperWithParams;