import React, { ChangeEvent, useState } from "react";
import * as yup from "yup";
import {
  Button,
  Form,
  Input,
  LoginContainer,
  Span,
  Texth2,
  Texth3,
  Texth4,
  Texth5,
} from "./styles/LoginForm.styled";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );
  const navigate = useNavigate();

  const base_url = "https://fly-id-1999ce14c36e.herokuapp.com";

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e:React.MouseEvent) => {
    e.preventDefault();
    try {
      //Validasi 
      const validasi = yup.object().shape({
        email: yup
          .string()
          .email("*Format email tidak valid")
          .required("*Email harus diisi"),
        password: yup.string().required("*Password harus diisi"),
      });

      // Validasi input
      await validasi.validate({ email, password }, { abortEarly: false });

      const payload = {
        email: email,
        password: password,
      };

      const response = await fetch(base_url + "/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const responseJson = await response.json();

      if (response.status !== 200) {
        alert("error: " + responseJson.message);
      } else {
        alert("Login berhasil");
        localStorage.setItem("token", responseJson.data.token);
        navigate("/header");
      }
    } catch (error) {
      // Tangkap error validasi dan perbarui state errors
      const yupErrors: { email?: string; password?: string } = {};
      if (error instanceof yup.ValidationError) {
        error.inner.forEach((e) => {
          if (e.path) {
            yupErrors[e.path as "email" | "password"] = e.message;
          }
        });
        setErrors(yupErrors);
      }
    }
  };

  return (
    <>
      <LoginContainer>
        <Form>
          <Texth2>Masuk akun</Texth2>

          <Texth5>Email</Texth5>
          <Input
            type="text"
            value={email}
            onChange={handleEmailChange}
            placeholder="Masukkan email"
          />
          {errors.email && (
            <div
              style={{ color: "red", fontSize: "14px", paddingBottom: "10px" }}
            >
              {errors.email}
            </div>
          )}

          <Texth5>Kata Sandi</Texth5>
          <Input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Masukkan Kata Sandi"
          />
          {errors.password && (
            <div
              style={{ color: "red", fontSize: "14px", paddingBottom: "5px" }}
            >
              {errors.password}
            </div>
          )}

          <Texth4>Lupa Kata Sandi?</Texth4>

          <Button onClick={handleLogin}>Masuk</Button>

          <Texth3>
            Belum punya akun? <Span>Daftar aja!</Span>
          </Texth3>
        </Form>
      </LoginContainer>
    </>
  );
};

export default LoginForm;
