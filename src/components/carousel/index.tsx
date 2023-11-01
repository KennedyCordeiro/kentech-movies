import React, { useEffect } from "react";
import styled from "styled-components";
import Swiper from "swiper";
import "./carousel.css"; // Importe o CSS do Swiper

const Section = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  gap: 50px;
  padding: 0 50px;
  min-height: 100vh;
  max-width: 90vw;
  margin: 0 auto;
`;

const ExploreLink = styled.a`
  display: inline-block;
  text-decoration: none;
  text-transform: uppercase;
  color: #717171;
  font-weight: 500;
  background: #fff;
  border-radius: 3.125rem;
  margin: 0 auto;
  padding: 6px 26px;
  font-size: 0.9rem;
  transition: 0.3s ease-in-out;
`;

const MySwiperWrapper = styled.div`
  width: 100%;
`;

const MySwiperSlide = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 0 0 80px;
  filter: grayscale(0.6);
`;

const MySwiperTitle = styled.h2`
  color: #fff;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.4;
  margin-bottom: 0.625rem;
  text-transform: uppercase;
  text-align: center;
`;

interface MySwiperProps {
  images: string[]; // Array de URLs das imagens
}

const MySwiper: React.FC<MySwiperProps> = ({ images }) => {
  useEffect(() => {
    new Swiper(".swiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 2,
      speed: 600,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true,
      },
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: false,
      },
    });
  }, []);

  return (
    <Section>
      <MySwiperWrapper className="swiper">
        <MySwiperSlide className="swiper-wrapper">
          {images.map((image, index) => (
            <MySwiperSlide
              key={index}
              style={{
                background: `linear-gradient(to top, #0f2027, #203a4300, #2c536400), url(${image}) no-repeat 50% 50% / cover`,
              }}
            >
              <div>
                <MySwiperTitle>Series {index + 1}</MySwiperTitle>
                <ExploreLink>explore</ExploreLink>
              </div>
            </MySwiperSlide>
          ))}
        </MySwiperSlide>
        <div className="swiper-pagination"></div>
      </MySwiperWrapper>
    </Section>
  );
};

export default MySwiper;
