import React from "react";
import PesananEmpty from "./PesananEmpty";
import PesananExist from "./PesananExist";
import { BoldBlack, TrackWrapper } from "./styles/PesananContent.styled";

interface PesananContentProps {
  selectedOption: number | null;
}

const PesananContent: React.FC<PesananContentProps> = ({ selectedOption }) => {
  const renderSelectedComponent = () => {
    switch (selectedOption) {
      case 1:
        return <PesananExist />;
      case 2:
        return <PesananEmpty />;
      default:
        return <PesananEmpty />;
    }
  };

  return (
    <>
      <TrackWrapper>
        <BoldBlack>Pesanan</BoldBlack>
        {/* <PesananEmpty /> */}
        {/* <PesananExist /> */}
        {renderSelectedComponent()}
      </TrackWrapper>
    </>
  );
};
export default PesananContent;
