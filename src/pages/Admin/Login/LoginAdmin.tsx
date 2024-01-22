import React, { useState, ChangeEvent } from "react";
import styled from "styled-components";

interface LoginAdminProps {}

const LoginAdmin: React.FC<LoginAdminProps> = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <Div>
      <Div2>
        <Column>
          <Div3>
            <Img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/dba9f4064d49315575cf802f06c628b0a0518710a290c7a56314ddd366a613e9?apiKey=2604b2664f3b46639d3f69d070e760e6&"
            />
            <Div4>Hi, Berjumpa Lagi!</Div4>
            <Img2
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e8a8e1eb60abcc657dff83a471b91814c049836c24a41ad5fe3d1d1c3de08fb?apiKey=2604b2664f3b46639d3f69d070e760e6&"
            />
          </Div3>
        </Column>
        <Column2>
          <Div5>
            <Div6>Masuk Admin</Div6>
            <Div7>Email</Div7>
            <Input
              type="email"
              placeholder="Masukkan email"
              value={email}
              onChange={handleEmailChange}
            />
            <Div9>Kata Sandi</Div9>
            <Div11>
              <Input
                type="password"
                placeholder="Masukkan kata sandi"
                value={password}
                onChange={handlePasswordChange}
              />
            </Div11>
            <Div13 className="btn">Masuk</Div13>
          </Div5>
        </Column2>
      </Div2>
    </Div>
  );
};
const Input = styled.input`
  width: 100%;
  font: 400 16px/150% Open Sans, sans-serif;
  border-radius: 12px;
  border: 1px solid var(--Neutral-05, #c2c2c2);
  border-radius: 10px;
  border: 1px solid var(--Neutral-05, #c2c2c2);
  display: flex;
  margin-top: 16px;
  justify-content: space-between;
  gap: 20px;
  padding: 16px 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;
const Div = styled.div`
  background-color: #fff;
`;

const Div2 = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div3 = styled.div`
  background-color: var(--Primary-Blue, #3e7bfa);
  display: flex;
  flex-grow: 1;
  padding-left: 34px;
  flex-direction: column;
  align-items: start;
  width: 100%;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    padding-left: 20px;
  }
`;

const Img = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 110px;
  overflow: hidden;
  max-width: 100%;
`;

const Div4 = styled.div`
  color: var(--Neutral-01, #fff);
  letter-spacing: -0.75px;
  margin: 390px 0 0 111px;
  font: 700 32px/125% Open Sans, sans-serif;
  @media (max-width: 991px) {
    margin: 40px 0 0 10px;
  }
`;

const Img2 = styled.img`
  aspect-ratio: 3;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
  margin-top: 210px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 30%;
  margin: auto; /* Center the column horizontally */

  @media (max-width: 991px) {
    width: 80%; /* Adjust the width for smaller screens */
  }
`;

const Div5 = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;
  padding: 0 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Div6 = styled.div`
  color: var(--text-primary, #101012);
  letter-spacing: -0.25px;
  font: 700 28px/143% Open Sans, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div7 = styled.div`
  color: var(--Primary-Blue, #3e7bfa);
  letter-spacing: 0.15px;
  margin-top: 24px;
  font: 400 16px/150% Open Sans, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div9 = styled.div`
  color: var(--Primary-Blue, #3e7bfa);
  letter-spacing: 0.15px;
  margin-top: 16px;
  font: 400 16px/150% Open Sans, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div11 = styled.div`
  color: var(--Neutral-06, #9e9e9e);
  letter-spacing: 0.15px;
  font: 400 16px/150% Open Sans, sans-serif;
`;

const Div13 = styled.div`
  color: var(--white, #fff);
  letter-spacing: -0.75px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: var(--Primary-Blue, #3e7bfa);
  margin-top: 16px;
  padding: 9px 60px;
  font: 700 20px/150% Open Sans, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

export default LoginAdmin;
