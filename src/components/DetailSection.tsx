import React from "react";
import {useState, useEffect} from "react";
import OrdererDetail from "./OrdererDetail";
import { DetailContainer } from "./styles/DetailSection.styled";
import PassengerDetail from "./PassengerDetail";

interface DetailData {
  pemesan:{
    nama: string,
    ponsel: string,
    email: string,
    dateOfBirth: string,
  };
  penumpang:{
    nameAdult: string;
    nameKids: string;
    nameBaby: string;
    dateAdult: string;
    dateKids: string;
    dateBaby: string;
    genAdult: string;
    genKids: string;
    genBaby: string;
    phone: string;
  }
}

interface DetailDataProps {
  onDetailChange: (detail: DetailData) => void;
}

const DetailSection: React.FC<DetailDataProps> = ({ onDetailChange }) => {
  const [pemesan, setPemesan] = useState({
    nama: "",
    ponsel: "",
    email: "",
    gender: "",
    dateOfBirth: ""
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlePemesanChange = (pemesanData: any) => {
    setPemesan(pemesanData);
  };

  const [penumpang, setPenumpang] = useState({
    nameAdult: "",
    nameKids: "",
    nameBaby: "",
    dateAdult: "",
    dateKids: "",
    dateBaby: "",
    genAdult: "",
    genKids: "",
    genBaby: "",
    phone: "",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlePenumpangChange = (penumpangData: any) => {
    setPenumpang(penumpangData);
  };

  
  useEffect(() => {
    const handleDetailChange = () => {
      const detailData: DetailData = {
        pemesan: {
          nama: pemesan?.nama,
          ponsel: pemesan?.ponsel,
          email: pemesan?.email,
          dateOfBirth: pemesan?.dateOfBirth,
        },
        penumpang: {
          nameAdult: penumpang?.nameAdult,
          nameKids: penumpang?.nameKids,
          nameBaby: penumpang?.nameBaby,
          dateAdult: penumpang?.dateAdult,
          dateKids: penumpang?.dateKids,
          dateBaby: penumpang?.dateBaby,
          genAdult: penumpang?.genAdult,
          genKids: penumpang?.genKids,
          genBaby: penumpang?.genBaby,
          phone: penumpang?.phone,
        },
      };
      onDetailChange(detailData);
    };

    handleDetailChange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    pemesan?.nama,
    pemesan?.ponsel,
    pemesan?.email,
    penumpang?.nameAdult,
    penumpang?.nameKids,
    penumpang?.nameBaby,
    penumpang?.dateAdult,
    penumpang?.dateBaby,
    penumpang?.dateKids,
    penumpang?.genAdult,
    penumpang?.genKids,
    penumpang?.genBaby,
    penumpang?.phone,
  ]);

  return (
    <>
      <DetailContainer>
       <OrdererDetail Pemesan={handlePemesanChange} />
        <PassengerDetail Penumpang={handlePenumpangChange} Pemesan={pemesan} />
      </DetailContainer>
    </>
  );
};
export default DetailSection;
