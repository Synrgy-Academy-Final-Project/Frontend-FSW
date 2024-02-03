import React from "react";
import {
  BoldBlack,
  EmptyContent,
  RegulerBlack,
  SpanBlue,
} from "./styles/PesananEmpty.styled";

const PesananEmpty: React.FC = () => {
  return (
    <>
      <EmptyContent>
        <BoldBlack>Belum ada pesanan nih!</BoldBlack>

        <img src="./images/pana.png" alt="pana.png" />

        <RegulerBlack>
          Ayo pesan tiketmu sekarang <SpanBlue>disini</SpanBlue>{" "}
        </RegulerBlack>
      </EmptyContent>
    </>
  );
};
export default PesananEmpty;
