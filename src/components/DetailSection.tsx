import React from "react";
import OrdererDetail from "./OrdererDetail";
import { DetailContainer } from "./styles/DetailSection.styled";

const DetailSection: React.FC = () => {
  return (
    <>
      <DetailContainer>
        <OrdererDetail />
      </DetailContainer>
    </>
  );
};
export default DetailSection;
