import PesananHeader from "../../../../components/PesananHeader";
import { Col, Container, Row } from "react-bootstrap";
import SidebarAkun from "../../../../components/SidebarAkun";
import FormProfile from "../../../../components/FormProfile";
import Footer from "../../../../components/Footer";
import "./ProfileEdit.css";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const ProfileEdit = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const editStatus = localStorage.getItem("isEditClicked");
    // Jika tidak ada status edit atau status edit bukan true, arahkan kembali ke halaman profile
    if (!editStatus || editStatus !== "true") {
      navigate("/profile");
    }
  }, [navigate]);

  const handleOptionClick = (optionId: number) => {
    let isConfirmed;
    switch (optionId) {
      case 1:
        isConfirmed = window.confirm("Apakah Anda yakin?");
        if (isConfirmed) {
          localStorage.removeItem("token");
          localStorage.removeItem("isEditClicked");
          alert("Berhasil");
          navigate("/pesanan");
        } else {
          alert("Gagal");
        }
        break;
      case 2:
        isConfirmed = window.confirm("Apakah Anda yakin?");
        if (isConfirmed) {
          localStorage.removeItem("token");
          localStorage.removeItem("isEditClicked");
          alert("Berhasil");
          navigate("/notifikasi-harga");
        } else {
          alert("Gagal");
        }
        break;
      case 3:
        isConfirmed = window.confirm("Apakah Anda yakin?");
        if (isConfirmed) {
          localStorage.removeItem("token");
          localStorage.removeItem("isEditClicked");
          alert("Berhasil");
          navigate("/favorit");
        } else {
          alert("Gagal");
        }
        break;
      case 4:
        isConfirmed = window.confirm("Apakah Anda yakin?");
        if (isConfirmed) {
          localStorage.removeItem("token");
          localStorage.removeItem("isEditClicked");
          alert("Berhasil");
          navigate("/data-penumpang-favorit");
        } else {
          alert("Gagal");
        }
        break;
      case 5:
        isConfirmed = window.confirm("Apakah Anda yakin?");
        if (isConfirmed) {
          localStorage.removeItem("token");
          localStorage.removeItem("isEditClicked");
          alert("Berhasil");
          navigate("/profile");
        } else {
          alert("Gagal");
        }
        break;

      case 6:
        isConfirmed = window.confirm("Apakah Anda yakin?");
        if (isConfirmed) {
          localStorage.removeItem("token");
          localStorage.removeItem("isEditClicked");
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
    <div className="profileedit">
      <PesananHeader />
      <Container fluid className="px-5">
        <Row>
          <Col xs={12} md={4} className="py-5">
            <SidebarAkun handleOptionClick={handleOptionClick} />
          </Col>
          <Col xs={12} md={8} className="py-5 ps-5">
            <h1 className="tittle">Pengaturan Akun</h1>
            <FormProfile />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default ProfileEdit;
