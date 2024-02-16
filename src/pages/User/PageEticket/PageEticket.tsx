import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Footer from "../../../components/Footer";
import FormCodePromo from "../../../components/FormCodePromo";
import { useLocation } from "react-router";

const TextBullet = styled.p`
  font: var(--fwregular) 16px/110% Open Sans, sans-serif;
  width: 24%;
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

const HeaderDiv = styled.div`
  display: flex;
  margin: 0rem 12rem;
`;

const HeadP = styled.p`
  color: var(--blue);
  letter-spacing: -0.75px;
  font: var(--fwsemibold) 24px/115% Open Sans, sans-serif;
  margin: 0;
`;

const HeadH1 = styled.h1`
  color: var(--blue);
  letter-spacing: -0.75px;
  font: var(--fwbold) 48px/135% Open Sans, sans-serif;
  margin: 0;
`;

const BlueButton = styled.button`
  background-color: var(--blue);
  padding: 0.7rem 2rem;
  font: var(--fwbold) 16px/105% Open Sans, sans-serif;
  border-radius: 0.5rem;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: var(--darkblue);
  }
`;

export default function PageEticket() {
  const [pdfUrl, setPdfUrl] = useState("");
  
  const urlParams = new URLSearchParams(window.location.search);
  const orderId = urlParams.get('order_id');
  const token = localStorage.getItem("token");
  const base_url = "https://fly-id-1999ce14c36e.herokuapp.com";

  const user = async () => {
    try {
      const responseUser = await fetch(base_url + "/user-detail/logged-in-user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (responseUser.status === 500) {
        localStorage.removeItem("token");
        throw new Error("Token tidak valid!");
      }
    } catch (error) {
      console.error("Error during user API request:", error);
    }
  }

  const fetchData = async () => {
    try {
      const response = await fetch(base_url + `/report/eticket-link/${orderId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/pdf",
          Authorization: `Bearer ${token}`,
        },
      });
      const sendEmail = await fetch(base_url + `/report/eticket/${orderId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/pdf",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200 && sendEmail.status === 200) {
        const blob = await response.blob(); 
        const url = URL.createObjectURL(blob); 
        setPdfUrl(url);
      } else {
        console.error("Error fetching PDF:", response);
      }
    } catch (error) {
      console.error("Error during API request:", error);
    }
  };

  useEffect(() => {
    fetchData();

    const interval = setInterval(() => {
      user();
    }, 1500000);
    return () => clearInterval(interval);
  }, [orderId]);
  
  return (
    <>
      <Container className="mt-3">
        <Row className="align-items-center justify-content-center">
          <Col lg={2}>
            <img
              src="https://i.ibb.co/Tc8PssV/Logo-white.png"
              alt="logo-white"
            />
          </Col>
          <Col lg={8}>
            <Row className="align-items-center flex-lg-row flex-column justify-content-center">
              <Circle style={{ backgroundColor: "var(--neutral05)" }}>1</Circle>
              <Line></Line>
              <Circle style={{ backgroundColor: "var(--neutral05)" }}>2</Circle>
              <Line></Line>
              <Circle style={{ backgroundColor: "var(--blue)" }}>3</Circle>
            </Row>
            <div className="d-flex text-center justify-content-center">
              <TextBullet>Isi Data Penumpang</TextBullet>
              <TextBullet>Pembayaran</TextBullet>
              <TextBullet>E-tiket</TextBullet>
            </div>
          </Col>
          <Col lg={2}>
            {token ? (
              <div className="d-flex align-items-center">
                <span className="me-3 fs-5">Akun</span>
                <i className="user-avatar"></i>
              </div>
            ) : (
              <a
                className="login bg-white bg-opacity-50 rounded-4"
                href="/login"
              >
                <span>Masuk</span>
              </a>
            )}
          </Col>
        </Row>
        <div
          className="pt-3 text-center"
          style={{ backgroundColor: "rgba(62, 123, 250, 0.2)" }}
        >
          <HeaderDiv className="justify-content-center align-items-center bg-white py-3">
            <Col lg={2} className="">
              <img src={"./images/flsah-icon.png"} alt="flsah-icon" />
            </Col>
            <Col lg={8}>
              <HeadH1>E-tiketmu sudah ada!</HeadH1>
              <HeadP>selamat menikmati perjalananmu...</HeadP>
            </Col>
            <Col lg={2} className="">
              <img src={"./images/flsah-icon.png"} alt="flsah-icon" />
            </Col>
          </HeaderDiv>
          <div className="px-3" style={{ height: "50rem" }}>
            {pdfUrl && (
              <iframe
                src={pdfUrl}
                title="PDF Document"
                width="72%"
                height="100%"
              />
            )}
          </div>
          {pdfUrl && (
          <BlueButton className="m-3">
            <a
              href={pdfUrl}
              download="FlyId-Invoice.pdf"
              style={{ color: "white", textDecoration: "none" }}
            >
              Unduh Invoice
            </a>
          </BlueButton>
          )}
        </div>
        <Footer />
      </Container>
    </>
  );
}
