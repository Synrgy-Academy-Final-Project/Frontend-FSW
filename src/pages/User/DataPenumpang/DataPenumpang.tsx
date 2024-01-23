import React from "react";
import Footer from "../../../components/Footer.tsx";
import DetailSection from "../../../components/DetailSection.tsx";
import { Col, Container, Row, Form } from "react-bootstrap";
import styled from "styled-components";

import "bootstrap/dist/css/bootstrap.min.css";

const DataPenumpang: React.FC = () => {
  const token = localStorage.getItem("token");
  return (
    <Container>
      <Row className="align-items-center justify-content-center">
        <Col lg={2}>
          <img src="src/assets/images/Logo.png" alt="" />
        </Col>
        <Col lg={8}>
          <Row className="align-items-center flex-lg-row flex-column justify-content-center">
            <Circle style={{ backgroundColor: "var(--blue)" }}>1</Circle>
            <Line></Line>
            <Circle style={{ backgroundColor: "var(--neutral05)" }}>2</Circle>
            <Line></Line>
            <Circle style={{ backgroundColor: "var(--neutral05)" }}>3</Circle>
          </Row>
          <div className="d-flex text-center justify-content-center">
            <TextBullet>Isi Data Penumpang</TextBullet>
            <TextBullet>Pembayaran</TextBullet>
            <TextBullet>E-tiket</TextBullet>
          </div>
        </Col>
        <Col lg={2}>
          {token ? (
            <div>
              <span className="me-3 fs-5">Akun</span>
              <img src="src/assets/images/icon-user.png" alt="" />
            </div>
          ) : (
            <a className="login bg-white bg-opacity-50 rounded-4" href="/login">
              <span>Masuk</span>
            </a>
          )}
        </Col>
      </Row>
      <Div1>
        <Row className="align-items-center">
          <Col lg={1}>
            <img src="src/assets/images/3d-phone.png" alt="" />
          </Col>
          <Col lg={11} className="ps-3">
            <HeadText>
              Ayo login dan pesan tiket jadi lebih mudah dan cepat lo!
            </HeadText>
            <p>
              Masuk ke akun Anda dan nikmati layanan mudah dan cepat untuk
              mendapatkan tiket impianmu
            </p>
          </Col>
        </Row>
      </Div1>
      <Row>
        <Col>
          <DetailSection></DetailSection>
        </Col>
        <Col></Col>
      </Row>

      <Footer />
    </Container>
  );
};

const Div1 = styled.div`
  padding: 1rem;
  background-color: #e1f4ff;
  border-radius: 0.75em;
  @media (max-width: 991px) {
    margin: 0.5em 1em;
    max-width: 100%;
    padding: 1em 2em;
  }
`;

const TextBullet = styled.p`
  font: var(--fwregular) 16px/110% Open Sans, sans-serif;
  width: 24%;
`;

const HeadText = styled.p`
  margin-top: 1rem;
  font: var(--fwsemibold) 24px/125% Open Sans, sans-serif;
  color: var(--blue);
`;

const Circle = styled.div`
  width: 2em;
  height: 2em;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font: var(--fwsemibold) 20px/125% Open Sans, sans-serif;
  @media (max-width: 991px) {
    width: 3em;
    height: 3em;
  }
`;

const Line = styled.div`
  height: 3px;
  width: 10em;
  background-color: var(--neutral05);
  @media (max-width: 991px) {
    width: 1px;
    height: 10em;
  }
`;

export default DataPenumpang;
