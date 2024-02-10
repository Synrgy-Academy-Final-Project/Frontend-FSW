import React from "react";
import PesananHeader from "../../../components/PesananHeader";
import "./ProfilePage.css";
import Footer from "../../../components/Footer";
import { Col, Container, Row } from "react-bootstrap";
import SidebarAkun from "../../../components/SidebarAkun";
import InformationProfile from "../../../components/InformationProfile";

const ProfilePage = () => {
  return (
    <div className="profilepage">
      <PesananHeader />
      <Container fluid className="px-5">
        <Row>
          <Col xs={12} md={4} className="py-5">
            <SidebarAkun></SidebarAkun>
          </Col>
          <Col xs={12} md={8} className="py-5 ps-5">
            <h1 className="tittle">Pengaturan Akun</h1>
            <InformationProfile />
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default ProfilePage;
