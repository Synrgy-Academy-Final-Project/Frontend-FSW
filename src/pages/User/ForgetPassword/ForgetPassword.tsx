import React, { useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import "./ForgetPassword.css";
import * as Yup from "yup";
import { encryptData } from "../../../utils/authUtils";
import { useNavigate } from "react-router-dom";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{
    email?: string;
  }>({});

  const base_url = "https://fly-id-1999ce14c36e.herokuapp.com";

  const navigate = useNavigate();

  const handleSumbit = async (e: React.MouseEvent) => {
    e.preventDefault();

    try {
      // Skema validasi Yup
      const schema = Yup.object().shape({
        email: Yup.string()
          .email("Format email tidak valid")
          .required("Email wajib diisi"),
        password: Yup.string(),
      });

      // Lakukan validasi menggunakan Yup
      await schema.validate({ email }, { abortEarly: false });

      const payload = {
        email: email,
      };

      const response = await fetch(
        base_url + "/api/v1/auth/forgot-password",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const responseJson = await response.json();

      if (response.status !== 200) {
        alert("Error: " + responseJson.message);
      } else {
        alert("Forget Password berhasil");
        const token = encryptData({ email: email });
        sessionStorage.setItem("emailToken", token);
        navigate("/verify-account-forgot");
      }
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const yupErrors: { email?: string } = {};
        error.inner.forEach((e) => {
          if (e.path) {
            yupErrors[e.path as "email"] = e.message;
          }
        });
        setErrors(yupErrors);
      } else {
        console.error("Error during forget password:", error);
        alert("Terjadi kesalahan dalam proses forget password");
      }
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
              <h2 className="text-white fw-bold">Lupa Kata Sandi.</h2>
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
              <h3 className="tittle fw-bold pb-3" style={{ fontSize: "24px" }}>
                Lupa Kata Sandi ?
              </h3>
              <h5>
                Masukkan alamat email yang terhubung <br />
                dengan akun anda .
              </h5>
              <Form style={{ width: "400px" }}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Email"
                    style={{ height: "56px" }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  {errors.email && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "14px",
                        paddingBottom: "10px",
                      }}
                    >
                      {errors.email}
                    </div>
                  )}
                </Form.Group>
              </Form>
              <div className="pt-2">
                <Button
                  className="confirm"
                  style={{ backgroundColor: "#3e7bfa", borderColor: "#3e7bfa", fontSize: '24px', paddingTop: '0' }}
                  onClick={handleSumbit}
                >
                  Submit
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
