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

const NotifHargaPage: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(1);
  const handleOptionClick = (optionId: number) => {
    setSelectedOption((prevSelectedOption) =>
      prevSelectedOption === optionId ? prevSelectedOption : optionId
    );
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
            <h1 className="tittle">Notifikasi Harga</h1>
            <>
              <EmptyContent>
                <BoldBlack>Masih belum punya notifikasi harga?</BoldBlack>

                <img src="./images/notifharga.png" alt="notifharga.png" />

                <RegulerBlack>
                    Ayo tambahin notifikasimu{" "}
                    <SpanBlue >disini</SpanBlue>{" "}
                    biar update harga terkini!
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
export default NotifHargaPage;
