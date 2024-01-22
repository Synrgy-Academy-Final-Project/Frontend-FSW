import React from "react";
import { TextFeature } from "./styles/Feature.styled";
import { Container} from "react-bootstrap";
import "keen-slider/keen-slider.min.css";
import styled from "styled-components";

const CtaBottom: React.FC = () => {
  return (
    <Container className="pt-3">
      <Div1>
        <DivDonut>
          <EllipsisWithHole></EllipsisWithHole>
          <EllipsisWithHole></EllipsisWithHole>
          <EllipsisWithHole></EllipsisWithHole>
        </DivDonut>
        <HeadSect>
          Mulailah Perjalanan Anda <br /> Hari ini!
        </HeadSect>
        <TextFeature className="pb-3">
          Unduh aplikasinya sekarang dan dapatkan berbagai pengalaman mudah
          Mulailah perjalanan luar biasa bersama Fly.id
        </TextFeature>
        <BtnCta className="">Dapatkan Sekarang!</BtnCta>
      </Div1>
    </Container>
  );
};

const Div1 = styled.div`
  margin: 3em 9em;
  padding: 2em 4em 4em;
  background-color: #e1f4ff;
  border-radius: 0.75em;
  text-align: center;
  @media (max-width: 991px) {
    margin: 0.5em 1em;
    max-width: 100%;
    padding: 1em 2em;
  }
`;
const HeadSect = styled.h1`
  color: var(--neutral09);
  letter-spacing: -0.25px;
  font: var(--fwbold) 32px/145% Open Sans, sans-serif;
  position: relative;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;
const BtnCta = styled.a`
  background-color: var(--blue);
  border-radius: 32px;
  color: #fff;
  padding: 1em 2em;
  cursor: pointer;
  text-decoration: none;
  @media (max-width: 991px) {
    padding: 0.5em 1em;
  }
`;
const DivDonut = styled.div`
  display: flex;
`;
const EllipsisWithHole = styled.div`
  margin-left: 0.5em;
  width: 41px;
  height: 41px;
  background: radial-gradient(circle, transparent 50%, var(--neutral05) 50%);
  border-radius: 50%;
`;

export default CtaBottom;
