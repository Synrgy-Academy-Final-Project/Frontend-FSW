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

const OrdererDetailPayment: React.FC = () => {
  return (
    <>
      <DetailWrapper>
        <DetailForm>
          <SemiBoldText>Detail Penumpang 1 Dewasa</SemiBoldText>
          <OrdererDataWrapper>
            <OrdererData>
              <img src="./images/ic_user_check.png" alt="user_check" />
              <RegulerTextBold>Nama pemesan</RegulerTextBold>
              <RegulerTextBold>: Ariella</RegulerTextBold>
            </OrdererData>
          </OrdererDataWrapper>

          <SemiBoldText>Detail Penumpang 1 Anak</SemiBoldText>
          <OrdererDataWrapper>
            <OrdererData>
              <img src="./images/ic_user_check.png" alt="user_check" />
              <RegulerTextBold>Nama penumpang</RegulerTextBold>
              <RegulerTextBold>: Arisa</RegulerTextBold>
            </OrdererData>

            <OrdererData>
              <img src="./images/ic_calendar_check.png" alt="calendar_check" />
              <RegulerText>Tanggal lahir</RegulerText>
              <RegulerText>: 01/01/2019</RegulerText>
            </OrdererData>
          </OrdererDataWrapper>

          <SemiBoldText>Detail Penumpang 1 Bayi</SemiBoldText>
          <OrdererDataWrapper>
            <OrdererData>
              <img src="./images/ic_user_check.png" alt="user_check" />
              <RegulerTextBold>Nama penumpang</RegulerTextBold>
              <RegulerTextBold>: Alex</RegulerTextBold>
            </OrdererData>

            <OrdererData>
              <img src="./images/ic_calendar_check.png" alt="calendar_check" />
              <RegulerText>Tanggal lahir</RegulerText>
              <RegulerText>: 01/01/2022</RegulerText>
            </OrdererData>
          </OrdererDataWrapper>
        </DetailForm>
      </DetailWrapper>
    </>
  );
};
export default OrdererDetailPayment;
