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

export default function PembayaranPage() {
  const token = localStorage.getItem("token");
  const orderId = "5f2e731c-8a06-47e4-9cd3-f72ed1b6b8a6"
  const [pdfUrl, setPdfUrl] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch(`https://fly-id-1999ce14c36e.herokuapp.com/report/eticket-link/${orderId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/pdf",
          Authorization: `Bearer ${token}`,
        }
      });

      if (response.status === 200) {
        const blob = await response.blob(); // Convert response to Blob object
        const url = URL.createObjectURL(blob); // Create a URL object from the Blob
        const link = document.createElement("a"); // Create a link element
        setPdfUrl(url); // Set the URL to state
      } else {
        console.error("Failed to fetch PDF:", response.statusText);
      }
    } catch (error) {
      console.error("Error during API request:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Fetch data only once when the component mounts

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
        <div className="mt-3" style={{ backgroundColor: "rgba(62, 123, 250, 0.2)" }}>
            <div>
                {pdfUrl && (
                    <iframe src={pdfUrl} typeof="pdf" title="PDF Document" width="100%" height="100%" />                    
                    
                )}                
            </div>
            <a href={pdfUrl} target="_blank" rel="noopener noreferrer">Buka PDF</a>
        </div>
        <Footer />
      </Container>
    </>
  );
}
