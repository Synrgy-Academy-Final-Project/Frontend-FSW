import React, { useState } from "react";
import { Main } from "./styles/PesananMain.styled";
import SidebarAkun from "./SidebarAkun";
import PesananContent from "./PesananContent";

const PesananMain: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(1);

  const handleOptionClick = (optionId: number) => {
    setSelectedOption((prevSelectedOption) =>
      prevSelectedOption === optionId ? prevSelectedOption : optionId
    );
  };

  return (
    <>
      <Main>
        <SidebarAkun handleOptionClick={handleOptionClick} />
        <PesananContent selectedOption={selectedOption} />
      </Main>
    </>
  );
};
export default PesananMain;
