import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <Container fluid className="footer">
        <Row className="text-white">
          <Col md={4}>Copyright © Travellian 2020 All rights reserved</Col>
          <Col md={2}>
            <p className="menu">Menu</p>
            <p className="menu-body">Home</p>
            <p className="menu-body">Explore</p>
            <p className="menu-body">Travel</p>
            <p className="menu-body">Blog</p>
            <p className="menu-body">Pricing</p>
          </Col>
          <Col md={2}>
            <p className="menu">Informasi</p>
            <p className="menu-body">Destinations</p>
            <p className="menu-body">Supports</p>
            <p className="menu-body">Terms & Conditions</p>
            <p className="menu-body">Privacy</p>
          </Col>
          <Col md={2}>
            <p className="menu">Kontak Kami</p>
            <p className="menu-body">+123 456 789</p>
            <p className="menu-body">travellian</p>
            <p className="menu-body">1245, New Yourk, USA</p>
          </Col>
          <Col md={2}>
            <p className="menu">Ikuti Kami</p>
            {/* <p className="menu-body">+123 456 789</p>
            <p className="menu-body">travellian</p>
            <p className="menu-body">1245, New Yourk, USA</p> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
