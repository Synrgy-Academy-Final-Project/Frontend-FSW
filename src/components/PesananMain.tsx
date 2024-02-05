import React from "react";
import { Main } from "./styles/PesananMain.styled";
import SidebarAkun from "./SidebarAkun";
import PesananContent from "./PesananContent";

const PesananMain: React.FC = () => {
  return (
    <>
      <Main>
        <SidebarAkun />
        <PesananContent />
      </Main>
    </>
  );
};
export default PesananMain;
