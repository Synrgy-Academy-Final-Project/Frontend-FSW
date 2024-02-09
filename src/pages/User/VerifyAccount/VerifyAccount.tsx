import { Col, Row, Container, Form, Button } from "react-bootstrap";
import "./VerifyAccount.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { decryptToken } from "../../../utils/authUtils";

function VerifyAccount() {
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");
  const [isResending, setIsResending] = useState(false);

  useEffect(() => {
    const tokenFromSession = sessionStorage.getItem("registrationToken");

    if (!tokenFromSession) {
      alert("Please register first..");
      navigate("/register");
    }
  }, [navigate]);

  const handleVerification = async () => {
    try {
      // const emailFromQueryString = new URLSearchParams(
      //   window.location.search
      // ).get("email");

      const tokenFromSession = sessionStorage.getItem("registrationToken");

      if (!tokenFromSession) {
        alert("Please register first.");
        navigate("/register");
      }

      const decryptedData = decryptToken(tokenFromSession);
      const emailFromToken = decryptedData.email;

      const response = await fetch(
        `https://fly-id-1999ce14c36e.herokuapp.com/auth/verify-account?email=${emailFromToken}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            otp: otp,
          }),
        }
      );

      const responseData = await response.json();

      if (response.status === 200) {
        alert("Verifikasi berhasil. Anda dapat masuk sekarang.");
        navigate("/login");
        // Hapus token registrasi
        sessionStorage.removeItem("registrationToken");
      } else {
        alert(`Verifikasi gagal: ${responseData.message}`);
      }
    } catch (error) {
      console.error("Error during verification:", error);
      alert("Terjadi kesalahan dalam proses verifikasi");
    }
  };

  const handleResendOTP = async () => {
    try {
      const tokenFromSession = sessionStorage.getItem("registrationToken");

      if (!tokenFromSession) {
        alert("Please register first.");
        navigate("/register");
      }

      // Mendekripsi token untuk mendapatkan informasi email
      const decryptedData = decryptToken(tokenFromSession);
      const emailFromToken = decryptedData.email;

      setIsResending(true);

      const response = await fetch(
        `https://fly-id-1999ce14c36e.herokuapp.com/api/v1/auth/regenerate-otp?email=${emailFromToken}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const responseData = await response.json();

      if (response.status === 200) {
        alert("OTP berhasil dikirim ulang");
      } else {
        alert(`Gagal mengirim ulang OTP: ${responseData.message}`);
      }
    } catch (error) {
      console.error("Error during OTP resend:", error);
      alert("Terjadi kesalahan dalam proses pengiriman ulang OTP");
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div>
      <Container fluid>
        <Row>
          <Col className="left">
            <div style={{ textAlign: "left", marginTop: "20px" }}>
              <img
                src="./images/logo.png"
                alt="Logo"
                style={{ width: "100px", height: "100px" }}
              />
            </div>

            <div style={{ textAlign: "center" }}>
              <h2 className="text-white fw-bold">Masukkan kode dulu yuk!</h2>
            </div>

            <div style={{ textAlign: "left" }}>
              <img
                src="./images/icon-1.png"
                alt="Logo"
                style={{ width: "90%" }}
              />
            </div>
          </Col>
          <Col className="right my-auto d-flex justify-content-center pt-5">
            <div>
              <h3 className="tittle fw-bold">Konfirmasi kode OTP</h3>
              <Form style={{ width: "400px" }}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    style={{ height: "56px" }}
                  />
                </Form.Group>
              </Form>
              <div className="pt-2">
                <Button
                  style={{ backgroundColor: "#3e7bfa", borderColor: "#3e7bfa" }}
                  className="confirm"
                  onClick={handleVerification}
                >
                  Konfirmasi
                </Button>
                <h5 className="text-confirm">
                  Belum dapat kode konfirmasi?{" "}
                  <span
                    style={{
                      color: "#3e7bfa",
                      fontSize: "18px",
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                    onClick={handleResendOTP}
                  >
                    {isResending ? "Mengirim ulang..." : "Kirim ulang"}
                  </span>
                </h5>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default VerifyAccount;
