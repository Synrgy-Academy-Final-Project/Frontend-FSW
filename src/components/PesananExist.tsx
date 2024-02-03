import React from "react";
import {
  CodeHarga,
  CodeText,
  CodeWrapper,
  DestinationWrapper,
  ExistContent,
  Line,
  LineDash,
  PaymentComplete,
  RegulerNeutral,
  RegulerWhite,
  TextWrapper,
  WaitingPayment,
} from "./styles/PesananExist.styled";

const PesananExist: React.FC = () => {
  return (
    <>
      <ExistContent>
        <CodeWrapper>
          <TextWrapper>
            <CodeText>Kode Pesanan 111222333</CodeText>
            <CodeHarga>Rp 1.475.000</CodeHarga>
          </TextWrapper>

          <LineDash></LineDash>

          <DestinationWrapper>
            <img src="./images/ic_telegram_plane.png" alt="ic_telegram_plane" />
            <RegulerNeutral>Jakarta (CGK)</RegulerNeutral>
            <img
              src="./images/ic_long_arrow_right.png"
              alt="ic_long_arrow_right"
            />
            <RegulerNeutral>Yogyakarta (YIA)</RegulerNeutral>
            <RegulerNeutral>, Asuransi Perjalanan</RegulerNeutral>
          </DestinationWrapper>

          <WaitingPayment>
            <RegulerWhite>Menunggu Pembayaran (51:00)</RegulerWhite>
          </WaitingPayment>
        </CodeWrapper>

        <Line></Line>

        <CodeWrapper>
          <TextWrapper>
            <CodeText>Kode Pesanan 111222333</CodeText>
            <CodeHarga>Rp 1.475.000</CodeHarga>
          </TextWrapper>

          <LineDash></LineDash>

          <DestinationWrapper>
            <img src="./images/ic_telegram_plane.png" alt="ic_telegram_plane" />
            <RegulerNeutral>Jakarta (CGK)</RegulerNeutral>
            <img
              src="./images/ic_long_arrow_right.png"
              alt="ic_long_arrow_right"
            />
            <RegulerNeutral>Yogyakarta (YIA)</RegulerNeutral>
            <RegulerNeutral>, Asuransi Perjalanan</RegulerNeutral>
          </DestinationWrapper>

          <PaymentComplete>
            <RegulerWhite>Pembayaran Selesai</RegulerWhite>
          </PaymentComplete>
        </CodeWrapper>
      </ExistContent>
    </>
  );
};

export default PesananExist;
