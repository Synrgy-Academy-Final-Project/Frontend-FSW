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
import { Row, Col, Form } from "react-bootstrap";

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

        <SemiBoldText>Fasilitas Tambahan</SemiBoldText>
        <DetailForm>
          <Row>
            <div className="d-flex align-items-center">
              <div>
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 4C11 1.8125 9.1875 0 7 0C4.78125 0 3 1.8125 3 4H0V13.5C0 14.9062 1.09375 16 2.5 16H11.5C12.875 16 14 14.9062 14 13.5V4H11ZM7 1.5C8.375 1.5 9.5 2.625 9.5 4H4.5C4.5 2.625 5.59375 1.5 7 1.5ZM12.5 13.5C12.5 14.0625 12.0312 14.5 11.5 14.5H2.5C1.9375 14.5 1.5 14.0625 1.5 13.5V5.5H3V6.75C3 7.1875 3.3125 7.5 3.75 7.5C4.15625 7.5 4.5 7.1875 4.5 6.75V5.5H9.5V6.75C9.5 7.1875 9.8125 7.5 10.25 7.5C10.6562 7.5 11 7.1875 11 6.75V5.5H12.5V13.5Z"
                    fill="#333333"
                  />
                </svg>
              </div>
              <RegulerTextBold className="ps-3">Tambah Bagasi</RegulerTextBold>
              <div style={{ marginLeft: "auto" }}>
                <i className="w-25">
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.75 0.21875L0.125 0.8125C0 0.96875 0 1.21875 0.125 1.34375L5.78125 7L0.125 12.6875C0 12.8125 0 13.0625 0.125 13.2188L0.75 13.8125C0.90625 13.9688 1.125 13.9688 1.28125 13.8125L7.84375 7.28125C7.96875 7.125 7.96875 6.90625 7.84375 6.75L1.28125 0.21875C1.125 0.0625 0.90625 0.0625 0.75 0.21875Z"
                      fill="#3E7BFA"
                    />
                  </svg>
                </i>
              </div>
            </div>
            <RegulerText className="w-100 my-2">
              Barang bawaanmu banyak? Tambah bagasi saja!
            </RegulerText>
            <RegulerText
              style={{
                color: "var(--blue)",
                marginLeft: "auto",
                paddingLeft: "3rem",
              }}
            >
              Rp 250.000
            </RegulerText>
          </Row>
        </DetailForm>
        <DetailForm>
          <Row>
            <div className="d-flex align-items-center">
              <div>
                <svg
                  width="18"
                  height="14"
                  viewBox="0 0 18 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 5.15625V3C15 1.34375 13.6562 0 12 0H6C4.34375 0 3 1.34375 3 3V5.15625C1.90625 5.5 1.09375 6.40625 1 7.53125C0.9375 8.4375 1.28125 9.3125 2 9.875V12.75C2 13.4688 2.53125 14 3.25 14H6C6.125 14 6.9375 14 6.96875 13H11C11.0312 13.9688 11.875 14 12 14H14.75C15.4375 14 16 13.4688 16 12.75V9.875C16.6875 9.3125 17.0625 8.46875 16.9688 7.53125C16.875 6.40625 16.0625 5.5 15 5.15625ZM5.5 12.5H3.5V9.0625L3.125 8.84375C2.6875 8.59375 2.46875 8.125 2.5 7.65625C2.53125 7.03125 3.15625 6.5 3.875 6.5H4.25C4.9375 6.5 5.5 7.0625 5.5 7.75V12.5ZM11 8.5V11.5H7V8.5H11ZM11.0938 7H6.875C6.5625 5.9375 5.625 5.15625 4.5 5.03125V3C4.5 2.1875 5.15625 1.5 6 1.5H12C12.8125 1.5 13.5 2.1875 13.5 3V5.03125C12.3438 5.15625 11.4062 5.9375 11.0938 7ZM14.8438 8.84375L14.5 9.0625V12.5H12.5V7.75C12.5 7.0625 13.0312 6.5 13.75 6.5H14.125C14.8125 6.5 15.4375 7.03125 15.4688 7.65625C15.5312 8.15625 15.2812 8.59375 14.8438 8.84375Z"
                    fill="#333333"
                  />
                </svg>
              </div>
              <RegulerTextBold className="ps-3">Pilih Kursi</RegulerTextBold>
              <div style={{ marginLeft: "auto" }}>
                <i className="w-25">
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.75 0.21875L0.125 0.8125C0 0.96875 0 1.21875 0.125 1.34375L5.78125 7L0.125 12.6875C0 12.8125 0 13.0625 0.125 13.2188L0.75 13.8125C0.90625 13.9688 1.125 13.9688 1.28125 13.8125L7.84375 7.28125C7.96875 7.125 7.96875 6.90625 7.84375 6.75L1.28125 0.21875C1.125 0.0625 0.90625 0.0625 0.75 0.21875Z"
                      fill="#3E7BFA"
                    />
                  </svg>
                </i>
              </div>
            </div>
            <RegulerText className="w-100 my-2">
              Ayo amankan kursi pilihanmu
            </RegulerText>
            <RegulerText
              style={{
                color: "var(--blue)",
                marginLeft: "auto",
                paddingLeft: "3rem",
              }}
            >
              Rp 100.000
            </RegulerText>
          </Row>
        </DetailForm>
        <DetailForm>
          <Row>
            <div className="d-flex align-items-center">
              <div>
                <svg
                  width="12"
                  height="16"
                  viewBox="0 0 12 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5312 3.0625L8.9375 0.4375C8.65625 0.1875 8.28125 0 7.875 0H1.5C0.65625 0 0 0.6875 0 1.5V14.5C0 15.3438 0.65625 16 1.5 16H10.5C11.3125 16 12 15.3438 12 14.5V4.125C11.9688 3.71875 11.8125 3.34375 11.5312 3.0625ZM8 1.625L10.375 4H8V1.625ZM10.5 14.5H1.5V1.5H6.5V4.75V4.78125C6.5 5.1875 6.8125 5.53125 7.21875 5.53125C7.21875 5.53125 7.21875 5.5 7.25 5.5H10.5V14.5ZM6.71875 7C6.71875 6.71875 6.46875 6.5 6.21875 6.5H5.71875C5.4375 6.5 5.21875 6.71875 5.21875 7V8.78125H3.46875C3.1875 8.78125 2.96875 9 2.96875 9.28125V9.78125C2.96875 10.0625 3.1875 10.2812 3.46875 10.2812H5.21875V12.0312C5.21875 12.3125 5.4375 12.5312 5.71875 12.5312H6.21875C6.46875 12.5312 6.71875 12.3125 6.71875 12.0312V10.2812H8.46875C8.75 10.2812 8.96875 10.0625 8.96875 9.78125V9.28125C8.96875 9 8.75 8.78125 8.46875 8.78125H6.71875V7Z"
                    fill="#333333"
                  />
                </svg>
              </div>
              <RegulerTextBold className="ps-3 w-50">
                Asuransi Perjalanan
              </RegulerTextBold>
              <div style={{ marginLeft: "auto" }}>
                <Form.Check checked={true} />
                <i className="w-25"></i>
              </div>
            </div>
            <RegulerText className="w-100 my-2">
              Tambahkan asuransi agar perjalananmu tenang sampai tujuan
            </RegulerText>
            <RegulerText
              style={{
                color: "var(--blue)",
                marginLeft: "auto",
                paddingLeft: "3rem",
              }}
            >
              Rp 75.000
            </RegulerText>
          </Row>
        </DetailForm>
      </DetailWrapper>
    </>
  );
};
export default OrdererDetailPayment;
