import React, { ChangeEvent, useState } from "react";
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

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
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

          <Texth5>Kata Sandi</Texth5>
          <Input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Masukkan Kata Sandi"
          />

          <Texth4>Lupa Kata Sandi?</Texth4>

          <Button>Masuk</Button>

          <Texth3>
            Belum punya akun? <Span>Daftar aja!</Span>
          </Texth3>
        </Form>
      </LoginContainer>
    </>
  );
};

export default LoginForm;
