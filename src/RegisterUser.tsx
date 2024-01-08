import { FormEvent, useState } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

const RegisterUser = () => {
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>();
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  return (
    <Container>
      <Background>
          <Logo
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dba9f4064d49315575cf802f06c628b0a0518710a290c7a56314ddd366a613e9?apiKey=2604b2664f3b46639d3f69d070e760e6&"
          />
          <WelcomeText>Selamat datang. <br />Mulailah perjalanan Anda bersama kami</WelcomeText>
          <Img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e8a8e1eb60abcc657dff83a471b91814c049836c24a41ad5fe3d1d1c3de08fb?apiKey=2604b2664f3b46639d3f69d070e760e6&"
          />
      </Background>
      <DivForm>
        <RegisterForm>
            <h3> <b>Yuk Buat Akun!</b></h3>
            <FormGroup>
              <Label>Nama Lengkap</Label>
              <Input
                  type="username"
                  name="username"
                  id="username"
                  placeholder="Masukkan nama lengkap"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
              />
            </FormGroup>
            <FormGroup>
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
            </FormGroup>
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
            </FormGroup>
            <Button>Daftar</Button>
            <p>Sudah Punya Akun? <Login>Masuk aja!</Login></p>
        </RegisterForm>
      </DivForm>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: center;
    gap: 0px;
  }
`;

const Background = styled.div`
  background-color: var(--Primary-Blue, #3e7bfa);
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

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

const DivForm = styled.div`
  width: 100%;
  padding: 3em 0em;
  display: flex;
  justify-content: center;
  @media (max-width: 991px) {
    padding: 0;
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
export default RegisterUser;
