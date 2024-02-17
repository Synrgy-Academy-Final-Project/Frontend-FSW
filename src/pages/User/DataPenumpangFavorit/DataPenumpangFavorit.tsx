import React, { useState } from "react";
import PesananHeader from "../../../components/PesananHeader";
import Footer from "../../../components/Footer";
import { Col, Container, Row } from "react-bootstrap";
import SidebarAkun from "../../../components/SidebarAkun";
import {
  BoldBlack,
  EmptyContent,
  RegulerBlack,
  SpanBlue,
} from "../../../components/styles/PesananEmpty.styled";
import { useNavigate } from "react-router-dom";

const DataPenumpangFavorit: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(1);
  const navigate = useNavigate();
  
  const handleOptionClick = (optionId: number) => {
    setSelectedOption((prevSelectedOption) =>
      prevSelectedOption === optionId ? prevSelectedOption : optionId
    );
  };

  const handleNavigate = () => {
    navigate("/list-ticket");
  };
  return (
    <div style={{ backgroundColor: "var(--neutral02)" }}>
      <PesananHeader />
      <Container fluid className="px-5">
        <Row>
          <Col xs={12} lg={3} className="py-5">
            <SidebarAkun handleOptionClick={handleOptionClick} />
          </Col>
          <Col xs={12} lg={9} className="py-5 ps-5">
            <h1 className="tittle">Data Penumpang Favorit</h1>
            <>
              <EmptyContent>
                <BoldBlack>Masih belum punya data penumpang favorit?</BoldBlack>

                <img src="./images/notifharga.png" alt="kosong.png" />

                <RegulerBlack>
                    Ayo pesan tiketmu sekarang{" "}
                    <SpanBlue onClick={handleNavigate}>disini</SpanBlue>{" "}
                    </RegulerBlack>
              </EmptyContent>
            </>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};
export default DataPenumpangFavorit;
