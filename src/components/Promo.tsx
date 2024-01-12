import React from "react";
import { HeadSect, Underlined, TextSect } from "./styles/AboutUs.styled";
import { DivBtn, Btn, StyledImage } from "./styles/Promo.styled";
import { Container, Row, Col } from "react-bootstrap";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Promo: React.FC = () => {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free",
    slides: {
      perView: 4,
      spacing: 15,
    },
    breakpoints: {
      "(max-width: 992px)": {
        loop: true,
        slides: {
          perView: 1,
          spacing: 5,
        },
      },
    },
  });
  const handleSlideLeft = () => {
    if (slider) {
      slider.current?.prev();
    }
  };

  const handleSlideRight = () => {
    if (slider) {
      slider.current?.next();
    }
  };

  return (
    <Container>
      <Row>
        <HeadSect>Promo</HeadSect>
        <Underlined></Underlined>
      </Row>
      <Row>
        <Col lg={10}>
          <TextSect>Our photo gallery on trip</TextSect>
        </Col>
        <Col lg={2}>
          <DivBtn>
            <Btn onClick={handleSlideLeft}>
            <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2L2 12L12 22"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            </Btn>
            <Btn onClick={handleSlideRight}>
              <svg
                width="14"
                height="24"
                viewBox="0 0 14 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 22L12 12L2 2"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Btn>
          </DivBtn>
        </Col>
      </Row>

      <div ref={sliderRef} className="keen-slider">
        <StyledImage
          className="keen-slider__slide"
          src={"src/assets/images/promo1.png"}
        />
        <StyledImage
          className="keen-slider__slide"
          src={"src/assets/images/promo2.png"}
        />
        <StyledImage
          className="keen-slider__slide"
          src={"src/assets/images/promo3.png"}
        />
        <StyledImage
          className="keen-slider__slide"
          src={"src/assets/images/promo4.png"}
        />
        <StyledImage
          className="keen-slider__slide"
          src={"src/assets/images/promo3.png"}
        />
      </div>
    </Container>
  );
};

export default Promo;
