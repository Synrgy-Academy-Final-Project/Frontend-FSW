import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as Yup from "yup";
import { Col, Container, Row } from "react-bootstrap";

const NewPassword = () => {
  const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState();
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [errors, setErrors] = useState<{fullname?: string; email?: string; password?: string }>(
    {}
  );

  const base_url = "https://fly-id-1999ce14c36e.herokuapp.com";

  const navigate = useNavigate();

  const handleRegister = async (e: React.MouseEvent) => {
    e.preventDefault();

    try {
      // Skema validasi Yup
      const schema = Yup.object().shape({
        fullname: Yup.string().required("Nama lengkap wajib diisi"),
        email: Yup.string()
          .email("Format email tidak valid")
          .required("Email wajib diisi"),
        password: Yup.string()
          .min(8, "Minimal 8 karakter")
          .matches(
            /^(?=.*[A-Z])(?=.*[!@#$%^&*()-_+=]).*$/,
            "Minimal 1 huruf besar dan 1 simbol"
          )
          .matches(/\S/, "Kata sandi tidak boleh mengandung spasi")
          .required("Password wajib diisi"),
      });

      // Lakukan validasi menggunakan Yup
      await schema.validate({ fullname, email, password }, { abortEarly: false });

      const payload = {
        fullName: fullname,
        email: email,
        password: password,
        role: "ROLE_USER",
      };

      const response = await fetch(base_url + "/api/v1/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const responseJson = await response.json();

      if (response.status !== 200) {
        alert("Error: " + responseJson.message);
      } else {
        alert("Registrasi berhasil");
        navigate("/login");
      }
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const yupErrors: { nama?: string; email?: string; password?: string } =
          {};
        error.inner.forEach((e) => {
          if (e.path) {
            yupErrors[e.path as "nama" | "email" | "password"] = e.message;
          }
        });
        setErrors(yupErrors);
      } else {
        console.error("Error during registration:", error);
        alert("Terjadi kesalahan dalam proses registrasi");
      }
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col lg={6} className="d-flex flex-column justify-content-between" style={
          { backgroundColor: 'var(--Primary-Blue, #3e7bfa)', height:'100vh' }
          } >
          <Logo
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dba9f4064d49315575cf802f06c628b0a0518710a290c7a56314ddd366a613e9?apiKey=2604b2664f3b46639d3f69d070e760e6&"
          />
          <WelcomeText>
            Masukkan kata sandi baru Anda, pastikan kata sandi mudah diingat ya!
          </WelcomeText>
          <Img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e8a8e1eb60abcc657dff83a471b91814c049836c24a41ad5fe3d1d1c3de08fb?apiKey=2604b2664f3b46639d3f69d070e760e6&"
          />
        </Col>
        <Col lg={6} className="d-flex justify-content-center mt-3">
          <RegisterForm>
            <h3>
              {" "}
              <b>Kata Sandi Baru</b>
            </h3>
            <FormGroup>
              <Label>Kata Sandi Baru</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Masukkan kata sandi"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {/* Menampilkan pesan error dari Yup jika ada */}
              {errors.password && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    paddingBottom: "10px",
                  }}
                >
                  {errors.password}
                </div>
              )}
            </FormGroup>
            <FormGroup>
              <Label>Ulang Kata Sandi Baru</Label>
              <Input
                type="password"
                name="repassword"
                id="repassword"
                placeholder="Masukkan ulang kata sandi"
                value={repassword}
                onChange={(e) => setRepassword(e.target.value)}
                required
              />
              {/* Menampilkan pesan error dari Yup jika ada */}
              {errors.password && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    paddingBottom: "10px",
                  }}
                >
                  {errors.password}
                </div>
              )}
            </FormGroup>
            <Button onClick={handleRegister}>Submit</Button>
            <p>
              Sudah Punya Akun? <Login>Masuk aja!</Login>
            </p>
          </RegisterForm>
        </Col>
      </Row>
    </Container>
  );
};

const Logo = styled.img`
  padding-left: 2em;
  padding-top: 0.5em;
  align-self: flex-start;
  width: 7em;
`;

const Img = styled.img`
  width: 90%;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const WelcomeText = styled.div`
  padding: 2em;
  color: var(--Neutral-01, #fff);
  letter-spacing: -0.75px;
  font: 700 32px/125% Open Sans, sans-serif;
  @media (max-width: 991px) {
    margin: 40px 0 0 10px;
    font-size: 24px;
  }
`;

const RegisterForm = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin: 2em;
`;

const FormGroup = styled.div`
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: var(--Primary-Blue, #3e7bfa);
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid #c2c2c2;
  border-radius: 0.5em;
  padding: 0.5em;
  font-size: 14px;
`;

const Button = styled.button`
  background-color: var(--Primary-Blue, #3e7bfa);
  color: #ffffff;
  border: none;
  border-radius: 0.5em;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
`;
const Login = styled.span`
  color: var(--Primary-Blue, #3e7bfa);
`;
export default NewPassword;
