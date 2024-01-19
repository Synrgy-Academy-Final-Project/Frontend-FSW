import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import "./ForgetPassword.css";

export default function ForgetPassword() {
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
                dengan akun anda
              .</h5>
              <Form style={{ width: "400px" }}>
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Email" style={{ height: "56px" }} />
                </Form.Group>
              </Form>
              <div className="pt-2">
                <Button
                  style={{ backgroundColor: "#3e7bfa", borderColor: "#3e7bfa" }}
                  className="confirm"
                  //   onClick={handleVerification}
                >
                  Sumbit
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
