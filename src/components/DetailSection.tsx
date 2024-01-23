import React from "react";
import OrdererDetail from "./OrdererDetail";
import { DetailContainer } from "./styles/DetailSection.styled";
import PassengerDetail from "./PassengerDetail";

const DetailSection: React.FC = () => {
  return (
    <>
      <DetailContainer>
        <OrdererDetail />
        <PassengerDetail />
      </DetailContainer>
    </>
  );
};
export default DetailSection;
