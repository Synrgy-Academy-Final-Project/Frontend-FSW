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
  oderCode: string;
  totalPrice: number;
  departureCode: string;
  departureCityCode: string;
  arrivalCode: string;
  arrivalCityCode: string;
  transactionStatus: string;
}

interface PesananExistProps {
  transactions: Transaction[];
}

const PesananExist: React.FC<PesananExistProps> = ({ transactions }) => {
  return (
    <>
      <ExistContent >
        {transactions.map((transaction, index) => (
          <CodeWrapper key={index}>
            <TextWrapper>
              <CodeText>Kode Pesanan: {transaction.oderCode}</CodeText>
              <CodeHarga>
                Rp {transaction.totalPrice.toLocaleString()}
              </CodeHarga>
            </TextWrapper>

            <LineDash></LineDash>

            <DestinationWrapper>
              <RegulerNeutral>{transaction.departureCityCode}</RegulerNeutral>
              <img
                src="./images/ic_long_arrow_right.png"
                alt="ic_long_arrow_right"
              />
              <RegulerNeutral>{transaction.arrivalCityCode}</RegulerNeutral>
            </DestinationWrapper>

            {transaction.transactionStatus === "Pembayaran Berhasil" ? (
              <PaymentComplete>
                <RegulerWhite>{transaction.transactionStatus}</RegulerWhite>
              </PaymentComplete>
            ) : (
              <WaitingPayment>
                <RegulerWhite>{transaction.transactionStatus}</RegulerWhite>
              </WaitingPayment>
            )}
            <Line></Line>
          </CodeWrapper>
        ))}
      </ExistContent>
    </>
  );
};

export default PesananExist;
