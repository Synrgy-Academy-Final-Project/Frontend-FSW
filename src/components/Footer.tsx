import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer ">
      <Container>
        <div className="">
          <img
            src="https://i.ibb.co/TWvyNTj/Logo-1.png"
            alt="Logo FlyID"
            style={{ width: "100px", marginBottom: "20px" }}
          />
          <Row>
            <Col md={4}>
              <p className="menu">Ikuti Kami</p>
              <br />
              <p className="menu-body">info@flyid.com</p>
            </Col>
            <Col md={4}>
              <p className="menu">Menu</p>
              <p className="menu-body">Beranda</p>
              <p className="menu-body">Tiket Pesawat</p>
              <p className="menu-body">Tempat Populer</p>
              <p className="menu-body">Tentang Kami</p>
            </Col>
            <Col md={4}>
              <p className="menu">Informasi</p>
              <p className="menu-body">Penerbangan</p>
              <p className="menu-body">Support</p>
              <p className="menu-body">Terms & Conditions</p>
              <p className="menu-body">Privacy</p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
