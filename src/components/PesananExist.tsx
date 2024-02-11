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

interface Transaction {
  id: string;
  companyName: string | null;
  url: string | null;
  airplaneName: string;
  airplaneCode: string;
  departureCode: string;
  arrivalCode: string;
  totalPrice: number;
  orderCode: string | null;
}

interface PesananExistProps {
  transactions: Transaction[];
}

const PesananExist: React.FC<PesananExistProps> = ({ transactions }) => {
  return (
    <>
      <ExistContent>
        {transactions.map((transaction) => (
          <CodeWrapper key={transaction.id}>
            <TextWrapper>
              <CodeText>Kode Pesanan {transaction.orderCode}</CodeText>
              <CodeHarga>
                Rp {transaction.totalPrice.toLocaleString()}
              </CodeHarga>
            </TextWrapper>

            <LineDash />

            <DestinationWrapper>
              <img
                src="./images/ic_telegram_plane.png"
                alt="ic_telegram_plane"
              />
              <RegulerNeutral>
                {transaction.departureCode} ({transaction.airplaneCode})
              </RegulerNeutral>
              <img
                src="./images/ic_long_arrow_right.png"
                alt="ic_long_arrow_right"
              />
              <RegulerNeutral>
                {transaction.arrivalCode} ({transaction.airplaneCode})
              </RegulerNeutral>
              <RegulerNeutral>, Asuransi Perjalanan</RegulerNeutral>
            </DestinationWrapper>

            {transaction.orderCode ? (
              <PaymentComplete>
                <RegulerWhite>Pembayaran Selesai</RegulerWhite>
              </PaymentComplete>
            ) : (
              <WaitingPayment>
                <RegulerWhite>Menunggu Pembayaran</RegulerWhite>
              </WaitingPayment>
            )}
          </CodeWrapper>
        ))}
        <Line />
      </ExistContent>
    </>
  );
};

export default PesananExist;
