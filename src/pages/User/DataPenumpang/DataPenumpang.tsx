import React from "react";
import Footer from "../../../components/Footer.tsx";
import DetailBooking from "../../../components/DetailSection.tsx";
import DetailHarga from "../../../components/DetailHarga.tsx";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../../components/ModalPesanTiket.css";

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
      <Div1 className="my-4">
        <Row className="align-items-center">
          <Col lg={1}>
            <img src="src/assets/images/3d-phone.png" alt="" />
          </Col>
          <Col lg={11} className="ps-5">
            <HeadText>
              Ayo masuk dan pesan tiket jadi lebih mudah dan cepat lo!
            </HeadText>
            <p>
              Masuk ke akun Anda dan nikmati layanan mudah dan cepat untuk
              mendapatkan tiket impianmu
            </p>
          </Col>
        </Row>
      </Div1>
      <Row>
        <Col xl={6}>
          <div>
            <DetailBooking></DetailBooking>
          </div>
        </Col>
        <Col xl={6}>
          <div className="row align-items-center">
            <div className="col text-center my-auto">
              <div className="maskapai">
                <img src="src/assets/images/XMLID_29_.png" alt="" />
              </div>
            </div>
            <div className="col text-center pt-3">
              <div>
                <h4 className="sb-20-b">Jakarta (CGK)</h4>
              </div>
              <div className="date-detail">
                <h5 className="r-16-b">4 Oktober 2023</h5>
              </div>
            </div>
            <div className="col text-center">
              <img
                src="src/assets/images/Plane.png"
                alt=""
                style={{ width: "35px" }}
              />
            </div>
            <div className="col text-center pt-3">
              <div>
                <h4 className="sb-20-b">Bali (DPS)</h4>
              </div>
              <div className="date-detail">
                <h5 className="r-16-b">4 Oktober 2023</h5>
              </div>
            </div>
          </div>
          <hr style={{ borderTop: "2px solid #A0A0A0" }} />
          <div className="border-detail">
            <div className="row">
              <div className="col-3 text-center d-flex flex-column justify-content-between">
                <h4 className="sb-20-b">20:15</h4>
                <h4 className="sb-16-g">2 j 0 m</h4>
                <h4 className="sb-20-b">22:15</h4>
              </div>
              <div className="col-1 d-flex flex-column justify-content-center">
                <svg height="10" width="10">
                  <circle cx="50%" cy="50%" r="4" fill="#007BFF" />
                </svg>
                <svg height="100%">
                  <line
                    x1="18%"
                    y1="0"
                    x2="18%"
                    y2="100%"
                    stroke="#007BFF"
                    strokeWidth="2"
                    strokeDasharray="5"
                  />
                </svg>
                <svg height="10" width="10">
                  <circle cx="50%" cy="50%" r="4" fill="#007BFF" />
                </svg>
              </div>
              <div className="col-8">
                <div className="title-dp">
                  <h4 className="sb-16-b">Jakarta (CGK)</h4>
                  <p className="r-14-g mb-1">
                    Soekarno Hatta International Airport
                  </p>
                </div>
                <svg height="2" width="480">
                  <line
                    x1="0"
                    y1="0"
                    x2="100%"
                    y2="0"
                    stroke="#E0E0E0"
                    strokeWidth="4"
                    strokeDasharray="20"
                  />
                </svg>
                <div className="content-dp">
                  <div className="row list-dp">
                    <div className="col-1 justify-content-center">
                      <img src="src/assets/images/Shopping Bag.png" alt="" />
                    </div>
                    <div className="col-11">
                      <p className="r-14-b my-2">Bagasi kabin 1 item (7 kg)</p>
                    </div>
                  </div>
                  <div className="row list-dp">
                    <div className="col-1 justify-content-center">
                      <img src="src/assets/images/Shopping Bag.png" alt="" />
                    </div>
                    <div className="col-11">
                      <p className="r-14-b my-2">Bagasi 1 item (20 kg)</p>
                    </div>
                  </div>
                  <div className="row list-dp">
                    <div className="col-1 justify-content-center">
                      <img src="src/assets/images/Utensils.png" alt="" />
                    </div>
                    <div className="col-11">
                      <p className="r-14-b my-2">Makanan di pesawat</p>
                    </div>
                  </div>
                </div>
                <svg height="2" width="480">
                  <line
                    x1="0"
                    y1="0"
                    x2="100%"
                    y2="0"
                    stroke="#E0E0E0"
                    strokeWidth="4"
                    strokeDasharray="20"
                  />
                </svg>
                <div className="title-dp">
                  <h4 className="sb-16-b">Bali (DPS)</h4>
                  <p className="r-14-g">
                    I Gusti Ngurah Rai International Airport
                  </p>
                </div>
              </div>
            </div>
          </div>
          <DetailHarga></DetailHarga>
        </Col>
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
