import React from "react";
import {
  BoldBlack,
  EmptyContent,
  RegulerBlack,
  SpanBlue,
} from "./styles/PesananEmpty.styled";
import { useNavigate } from "react-router-dom";

const PesananEmpty: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/list-ticket");
  };

  return (
    <>
      <EmptyContent>
        <BoldBlack>Belum ada pesanan nih!</BoldBlack>

        <img src="./images/pana.png" alt="pana.png" />

        <RegulerBlack>
          Ayo pesan tiketmu sekarang{" "}
          <SpanBlue onClick={handleNavigate}>disini</SpanBlue>{" "}
        </RegulerBlack>
      </EmptyContent>
    </>
  );
};
export default PesananEmpty;
