import React from "react";
import {
  DetailForm,
  DetailWrapper,
  OrdererData,
  OrdererDataWrapper,
  OrdererHead,
  RegulerText,
  RegulerTextBold,
  SemiBoldText,
} from "./styles/DetailSection.styled";

const OrdererDetailPayment = ({ pemesan }) => {
  return (
    <>
      <DetailWrapper>
        <DetailForm>
          <SemiBoldText>Detail Pemesan</SemiBoldText>

          <OrdererDataWrapper>
            <OrdererData>
              <img src="./images/ic_user_check.png" alt="user_check" />
              <RegulerTextBold>Nama pemesan</RegulerTextBold>
              <RegulerTextBold>: {pemesan?.nama}</RegulerTextBold>
            </OrdererData>

            <OrdererData>
              <img src="./images/ic_phone_alt.png" alt="phone" />
              <RegulerText>No ponsel</RegulerText>
              <RegulerText>: {pemesan?.ponsel}</RegulerText>
            </OrdererData>

            <OrdererData>
              <img src="./images/ic_envelope.png" alt="envelope" />
              <RegulerText>Email</RegulerText>
              <RegulerText>: {pemesan?.email}</RegulerText>
            </OrdererData>
          </OrdererDataWrapper>
        </DetailForm>
      </DetailWrapper>
    </>
  );
};
export default OrdererDetailPayment;
