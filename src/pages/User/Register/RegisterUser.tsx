import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as Yup from "yup";
import { Col, Container, Row } from "react-bootstrap";
import { encryptData } from "../../../utils/authUtils";

const RegisterUser = () => {
  const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState();
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
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
        // navigate(`/verify-account?email=${encodeURIComponent(email)}`);
        const token = encryptData({ email: email });
        sessionStorage.setItem("registrationToken", token);
        navigate("/verify-account");
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
            Selamat datang. <br />
            Mulailah perjalanan Anda bersama kami
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
              <b>Yuk Buat Akun!</b>
            </h3>
            <FormGroup>
              <Label>Nama Lengkap</Label>
              <Input
                type="fullname"
                name="fullname"
                id="fullname"
                placeholder="Masukkan nama lengkap"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                required
              />
              {/* Menampilkan pesan error dari Yup jika ada */}
              {errors.fullname && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    paddingBottom: "10px",
                  }}
                >
                  {errors.fullname}
                </div>
              )}
            </FormGroup>
            {/* <FormGroup>
                <Label>Nomor Ponsel</Label>
                <Input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Masukkan nomor ponsel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    pattern="0?[0-9]*" 
                    title="Harap masukkan hanya angka" 
                    required 
                />
              </FormGroup> */}
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Masukkan email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {/* Menampilkan pesan error dari Yup jika ada */}
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
            </FormGroup>
            <FormGroup>
              <Label>Kata Sandi</Label>
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
            <Button className="my-3" onClick={handleRegister}>Daftar</Button>
            <p>
              Sudah Punya Akun? <Login href="/login" >Masuk aja!</Login>
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
const Login = styled.a`
  text-decoration: none;
  color: var(--Primary-Blue, #3e7bfa);
`;
export default RegisterUser;
