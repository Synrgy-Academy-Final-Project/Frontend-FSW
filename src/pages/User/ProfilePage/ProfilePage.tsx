import React from "react";
import PesananHeader from "../../../components/PesananHeader";
import "./ProfilePage.css";
import Footer from "../../../components/Footer";
import { Col, Container, Row } from "react-bootstrap";
import SidebarAkun from "../../../components/SidebarAkun";
import InformationProfile from "../../../components/InformationProfile";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();

  const handleOptionClick = (optionId: number) => {
    let isConfirmed;
    switch (optionId) {
      case 1:
        navigate("/pesanan");
        break;
      case 2:
        navigate("/notifikasi-harga");
        break;
      case 3:
        navigate("/favorit");
        break;
      case 4:
        navigate("/data-penumpang-favorit");
        break;
      case 5:
        navigate("/profile");
        break;
      case 6:
        isConfirmed = window.confirm("Apakah Anda yakin?");
        if (isConfirmed) {
          localStorage.removeItem("token");
          alert("Logout Berhasil");
          navigate("/login");
        } else {
          alert("Logout dibatalkan");
        }
        break;
      default:
        break;
    }
  };
  return (
    <div className="profilepage">
      <PesananHeader />
      <Container fluid className="px-5">
        <Row>
          <Col xs={12} md={4} className="py-5">
            <SidebarAkun handleOptionClick={handleOptionClick} />
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
