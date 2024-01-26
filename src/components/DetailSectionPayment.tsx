import React from "react";
import { DetailContainer } from "./styles/DetailSection.styled";
import OrdererDetailPayment from "./OrdererDetailPayment";
import PassengerDetailPayment from "./PassengerDetailPayment";

const DetailSectionPayment: React.FC = () => {
  return (
    <>
      <DetailContainer>
        <PassengerDetailPayment />
        <OrdererDetailPayment />
      </DetailContainer>
    </>
  );
};
export default DetailSectionPayment;
