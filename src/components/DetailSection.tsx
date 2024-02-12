import React from "react";
import { useState, useEffect } from "react";
import OrdererDetail from "./OrdererDetail";
import { DetailContainer } from "./styles/DetailSection.styled";
import PassengerDetail from "./PassengerDetail";

interface pemesanData {
  nama: string;
  ponsel: string;
  email: string;
  gender: string;
  dateOfBirth: string;
}
interface PenumpangData {
  index?: number;
  name?: string;
  date?: string;
  gender?: string;
  type?: string;
}

interface DetailDataProps {
  onPemesanChange: (detail: pemesanData) => void;
  onPenumpangChange: (detailpassengger: PenumpangData[]) => void;
  passengersData: { type: string; count: number }[];
}

const DetailSection: React.FC<DetailDataProps> = ({
  onPemesanChange,
  onPenumpangChange,
  passengersData,
}) => {
  const [pemesan, setPemesan] = useState<pemesanData>();
  const [penumpang, setPenumpang] = useState<PenumpangData[]>([]);

  useEffect(() => {
    onPemesanChange(pemesan);
  }, [pemesan, onPemesanChange]);
  useEffect(() => {
    onPenumpangChange(penumpang);
  }, [penumpang, onPenumpangChange]);

  const handlePemesanChange = (pemesanData) => {
    setPemesan(pemesanData);
  };

  const handlePassengerDetailChange = (detailpassengger: PenumpangData[]) => {
    // Lakukan sesuatu dengan nilai detailpenumpang yang diterima
    setPenumpang(detailpassengger);
    console.log("detail sec>>> ", detailpassengger);
    // Misalnya, Anda bisa memperbarui state atau melakukan operasi lainnya di sini
  };

  return (
    <>
      <DetailContainer>
        <OrdererDetail Pemesan={handlePemesanChange} />
        <PassengerDetail
          Pemesan={pemesan}
          PassengersData={passengersData}
          onDetailPassengerChange={handlePassengerDetailChange}
        />
      </DetailContainer>
    </>
  );
};
export default DetailSection;
