import React from "react";
import { Icon1, Logo, StyledCta, Texth1 } from "./styles/Cta.styled";

const Cta: React.FC = () => {
  return (
    <>
      <StyledCta>
        <Logo src="./images/logo.png" alt="logo" />
        <Texth1>Hi, Berjumpa Lagi! Masuk dan Dapatkan Tiketnya!</Texth1>
        <Icon1 src="./images/icon-1.png" alt="icon-1" />
      </StyledCta>
    </>
  );
};

export default Cta;
