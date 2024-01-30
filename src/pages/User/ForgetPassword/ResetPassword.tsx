import { useEffect, useState } from "react";
import { Col, Container, Row, Form, Button, InputGroup } from "react-bootstrap";
import "./ResetPassword.css";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import * as Yup from "yup";
import { decryptToken } from "../../../utils/authUtils";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const [errors, setErrors] = useState<{
    newPassword?: string;
    confirmationPassword?: string;
  }>({});
  const navigate = useNavigate();

  const base_url = "https://fly-id-1999ce14c36e.herokuapp.com";

  useEffect(() => {
    const tokenFromSession = sessionStorage.getItem("emailToken");

    if (!tokenFromSession) {
      alert("Please forgot password first..");
      navigate("/forget-password");
    }
  }, [navigate]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleRePasswordVisibility = () => {
    setShowRePassword(!showRePassword);
  };

  const handleSumbit = async (e: React.MouseEvent) => {
    e.preventDefault();

    try {
      const schema = Yup.object().shape({
        newPassword: Yup.string()
          .min(8, "Minimal 8 karakter")
          .matches(
            /^(?=.*[A-Z])(?=.*[!@#$%^&*()-_+=]).*$/,
            "Minimal 1 huruf besar dan 1 simbol"
          )
          .matches(/\S/, "Kata sandi tidak boleh mengandung spasi")
          .required("Password wajib diisi"),
        confirmationPassword: Yup.string()
          .min(8, "Minimal 8 karakter")
          .matches(
            /^(?=.*[A-Z])(?=.*[!@#$%^&*()-_+=]).*$/,
            "Minimal 1 huruf besar dan 1 simbol"
          )
          .matches(/\S/, "Kata sandi tidak boleh mengandung spasi")
          .oneOf([Yup.ref("newPassword")], "Kata sandi tidak sesuai")
          .required("Password wajib diisi"),
      });

      await schema.validate(
        { newPassword, confirmationPassword },
        { abortEarly: false }
      );
      const tokenFromSession = sessionStorage.getItem("emailToken");
      const token = sessionStorage.getItem("token");

      const payload = {
        newPassword: newPassword,
        confirmationPassword: confirmationPassword,
        token:token
      };

      

      // if (!tokenFromSession) {
      //   alert("Please forgot password first.");
      //   navigate("/forget-password");
      // }

      const decryptedData = decryptToken(tokenFromSession);
      const emailFromToken = decryptedData.email;

      const response = await fetch(
        base_url + `/api/v1/auth/change-password?email=${emailFromToken}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const responseData = await response.json();

      if (response.status === 200) {
        alert("Berhasil membuat kata sandi baru");
        navigate("/login");
        // Hapus token 
        sessionStorage.removeItem("emailToken");
        sessionStorage.removeItem("token");
      } else {
        alert(`Terjadi kesalahan: ${responseData.message}`);
      }
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const yupErrors: {
          newPassword?: string;
          confirmationPassword?: string;
        } = {};
        error.inner.forEach((e) => {
          if (e.path) {
            yupErrors[e.path as "newPassword" | "confirmationPassword"] =
              e.message;
          }
        });
        setErrors(yupErrors);
      } else {
        console.error("Error :", error);
        alert("Terjadi kesalahan");
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
              <h2 className="tittle-left text-white fw-bold text-start">
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
                      value={newPassword}
                      style={{ height: "56px" }}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
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
                  {errors.newPassword && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "14px",
                        paddingBottom: "10px",
                      }}
                    >
                      {errors.newPassword}
                    </div>
                  )}
                </Form.Group>

                <Form.Group controlId="password" className="mb-4">
                  <Form.Label className="password-label">
                    Ulangi Kata Sandi Baru
                  </Form.Label>
                  <InputGroup>
                    <Form.Control
                      type={showRePassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={confirmationPassword}
                      style={{ height: "56px" }}
                      onChange={(e) => setConfirmationPassword(e.target.value)}
                      required
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
                  {errors.confirmationPassword && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "14px",
                        paddingBottom: "10px",
                      }}
                    >
                      {errors.confirmationPassword}
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
