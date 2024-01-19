import { useState } from "react";
import { Col, Container, Row, Form, Button, InputGroup } from "react-bootstrap";
import "./ResetPassword.css";
import { BsEye, BsEyeSlash } from "react-icons/bs";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleRePasswordVisibility = () => {
    setShowRePassword(!showRePassword);
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
              <h2 className="tittle-left text-white fw-bold text-start" >
                Masukkan kata sandi baru Anda, pastikan kata sandi mudah diingat
                ya!
              </h2>
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
                Kata Sandi Baru
              </h3>

              <Form style={{ width: "400px" }}>
                <Form.Group controlId="password" className="mb-4">
                  <Form.Label className="password-label">
                    Kata Sandi Baru
                  </Form.Label>
                  <InputGroup>
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      style={{ height: "56px" }}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputGroup.Text>
                      <Button
                        variant="link"
                        onClick={togglePasswordVisibility}
                        style={{
                          border: "none",
                          background: "none",
                          padding: "0",
                          color: showPassword ? "grey" : "black",
                        }}
                      >
                        {showPassword ? <BsEyeSlash /> : <BsEye />}
                      </Button>
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>

                <Form.Group controlId="password" className="mb-4">
                  <Form.Label className="password-label">
                    Ulangi Kata Sandi Baru
                  </Form.Label>
                  <InputGroup>
                    <Form.Control
                      type={showRePassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={rePassword}
                      style={{ height: "56px" }}
                      onChange={(e) => setRePassword(e.target.value)}
                    />
                    <InputGroup.Text>
                      <Button
                        variant="link"
                        onClick={toggleRePasswordVisibility}
                        style={{
                          border: "none",
                          background: "none",
                          padding: "0",
                          color: showRePassword ? "grey" : "black",
                        }}
                      >
                        {showRePassword ? <BsEyeSlash /> : <BsEye />}
                      </Button>
                    </InputGroup.Text>
                  </InputGroup>
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
