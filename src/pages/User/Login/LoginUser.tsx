import React from "react";
import LoginForm from "../../../components/LoginForm";
import { Container } from "../../../components/styles/LoginForm.styled";
import Cta from "../../../components/Cta";

const LoginUser: React.FC = () => {
  return (
    <>
      <Container>
        <Cta />
        <LoginForm />
      </Container>
    </>
  );
};

export default LoginUser;
