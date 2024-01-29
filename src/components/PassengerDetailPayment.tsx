import React from "react";
import {
  DetailForm,
  DetailWrapper,
  OrdererData,
  OrdererDataWrapper,
  RegulerText,
  RegulerTextBold,
  SemiBoldText,
} from "./styles/DetailSection.styled";

const PassengerDetailPayment: React.FC = () => {
  return (
    <>
      <DetailWrapper>
        <DetailForm>
          <SemiBoldText>Detail Pemesan</SemiBoldText>

          <OrdererDataWrapper>
            <OrdererData>
              <img src="./images/ic_user_check.png" alt="user_check" />
              <RegulerTextBold>Nama pemesan</RegulerTextBold>
              <RegulerTextBold>: Ariella</RegulerTextBold>
            </OrdererData>

            <OrdererData>
              <img src="./images/ic_phone_alt.png" alt="phone" />
              <RegulerText>No ponsel</RegulerText>
              <RegulerText>: 081222333444</RegulerText>
            </OrdererData>

            <OrdererData>
              <img src="./images/ic_envelope.png" alt="envelope" />
              <RegulerText>Email</RegulerText>
              <RegulerText>: ariella@gmail.com</RegulerText>
            </OrdererData>
          </OrdererDataWrapper>
        </DetailForm>
      </DetailWrapper>
    </>
  );
};
export default PassengerDetailPayment;
