import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { decryptToken } from "../../../utils/authUtils";

function OTPVerification() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  useEffect(() => {
    const tokenFromSession = sessionStorage.getItem("emailToken");

    if (!tokenFromSession) {
      alert("Please forgot first..");
      navigate("/forget-password");
    }
  }, [navigate]);

  const handleVerification = async () => {
    try {
      // const emailFromQueryString = new URLSearchParams(
      //   window.location.search
      // ).get("email");

      const tokenFromSession = sessionStorage.getItem("emailToken");

      

      if (!tokenFromSession) {
        alert("Please forgot first.");
        navigate("/forget-password");
      }

      const decryptedData = decryptToken(tokenFromSession);
      const emailFromToken = decryptedData.email;

      const response = await fetch(
        `https://fly-id-1999ce14c36e.herokuapp.com/api/v1/auth/verify-account-forgot?email=${emailFromToken}`,
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
        alert("Verifikasi berhasil.");
        sessionStorage.setItem("token", responseData.data.token);
        navigate("/reset-password");
      } else {
        alert(`Verifikasi gagal: ${responseData.message}`);
      }
    } catch (error) {
      console.error("Error during verification:", error);
      alert("Terjadi kesalahan dalam proses verifikasi");
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
                  className="confirm"
                  style={{ backgroundColor: "#3e7bfa", borderColor: "#3e7bfa", fontSize: '24px', paddingTop: '0' }}
                  onClick={handleVerification}
                >
                  Konfirmasi
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default OTPVerification;
