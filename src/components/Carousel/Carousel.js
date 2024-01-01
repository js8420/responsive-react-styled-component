import { useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { IconContext } from "react-icons";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

import { Section, Row, Heading, TextWrapper } from "../../GlobalStyle";
import { settings, data } from "./CarouselData";

import {
  CarouselRow,
  ButtonContainer,
  ImageWrapper,
  CarouselColumn,
  CardButton,
  CarouselImage,
} from "./CarouselStyle";

const Carousel = () => {
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <Section
      inverse="inverse"
      padding="50px 70px"
      maxWidth="1280px"
      margin="auto"
    >
      <CarouselRow
        justify="space-between"
        align="center"
        margin="auto"
        wrap="wrap"
      >
        <Heading
          width="auto"
          inverse="inverse"
          fontSize="clamp(1.3rem, 6vw, 3.1rem)"
        >
          Find more about us
        </Heading>
        <ButtonContainer>
          <IconContext.Provider
            value={{
              size: "3rem",
              color: "#1d609c",
            }}
          >
            <FaArrowCircleLeft onClick={sliderRef?.slickPrev} />
            <FaArrowCircleRight onClick={sliderRef?.slickNext} />
          </IconContext.Provider>
        </ButtonContainer>
      </CarouselRow>

      <Slider {...settings} ref={setSliderRef}>
        {data.map((info, index) => (
          <ImageWrapper key={index}>
            <CarouselColumn>
              <CarouselImage src={info.image} style={{ width: "100%" }} />
              <TextWrapper size="1.1rem" margin="0.4rem 0 0" weight="bold">
                {info.title}
              </TextWrapper>
              <TextWrapper size="0.9rem" margin="0.7rem" color="#4f4f4f">
                {info.description}
              </TextWrapper>
              <CardButton>Learn More</CardButton>
            </CarouselColumn>
          </ImageWrapper>
        ))}
      </Slider>
    </Section>
  );
};
export default Carousel;
