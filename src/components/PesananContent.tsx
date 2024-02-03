import React from "react";
// import PesananEmpty from "./PesananEmpty";
import PesananExist from "./PesananExist";
import { BoldBlack, TrackWrapper } from "./styles/PesananContent.styled";

const PesananContent: React.FC = () => {
  return (
    <>
      <TrackWrapper>
        <BoldBlack>Pesanan</BoldBlack>
        {/* <PesananEmpty /> */}
        <PesananExist />
      </TrackWrapper>
    </>
  );
};
export default PesananContent;
