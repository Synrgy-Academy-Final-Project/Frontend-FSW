import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { useEffect, useState } from "react";

import DetailHargaPay from "../../../components/DetailHargaPay";
import DetailPerjalanan from "../../../components/DetailPerjalanan";
import DetailSectionPayment from "../../../components/DetailSectionPayment";
import FormPembayaran from "../../../components/FormPembayaran";
import Footer from "../../../components/Footer";
import FormCodePromo from "../../../components/FormCodePromo";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";

const TextBullet = styled.p`
  font: var(--fwregular) 16px/110% Open Sans, sans-serif;
  width: 24%;
`;

const HeadText = styled.p`
  margin-top: 1rem;
  font: var(--fwsemibold) 24px/125% Open Sans, sans-serif;
  color: var(--blue);
`;

const Circle = styled.div`
  width: 2em;
  height: 2em;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font: var(--fwsemibold) 20px/125% Open Sans, sans-serif;
  @media (max-width: 991px) {
    width: 3em;
    height: 3em;
  }
`;

const Line = styled.div`
  height: 3px;
  width: 10em;
  background-color: var(--neutral05);
  @media (max-width: 991px) {
    width: 1px;
    height: 10em;
  }
`;

interface Header {
  label?: string;
}
interface User {
  firstName?: string;
  lastName?: string;
}

export default function PembayaranPage() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate()
  const [discount, setDiscount] = useState({
    value: 0,
    promoCode: ""
  });

  const base_url = "https://fly-id-1999ce14c36e.herokuapp.com";
  const [user, setUser] = useState<User>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(base_url + "/user-detail/logged-in-user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 500) {
          localStorage.removeItem("token");
          throw new Error("Token tidak valid!");
        }

        const responseJson = await response.json();

        if (response.status === 200) {
          setUser({
            firstName: responseJson.data.usersDetails.firstName,
            lastName: responseJson.data.usersDetails.lastName,
          });
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (token) {
      fetchUser();
    }
  }, [token]);

  const location = useLocation();
  const { bookingData } = location.state || {};
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDiscountChange = (discountData: any) => {
    setDiscount(discountData);
  };

  const hargaAwal = {
    admin: 15000,
    asuransi: 0
  };
  const jumlahPenumpang = bookingData?.penumpang.length
  
  return (
    <>
      <Container className="mt-3">
        <Row className="align-items-center justify-content-center">
          <Col lg={2}>
            <button onClick={() => navigate("/")}><img src="https://i.ibb.co/Tc8PssV/Logo-white.png" alt="logo-white" /></button>
          </Col>
          <Col lg={8}>
            <Row className="align-items-center flex-lg-row flex-column justify-content-center">
              <Circle style={{ backgroundColor: "var(--neutral05)" }}>1</Circle>
              <Line></Line>
              <Circle style={{ backgroundColor: "var(--blue)" }}>2</Circle>
              <Line></Line>
              <Circle style={{ backgroundColor: "var(--neutral05)" }}>3</Circle>
            </Row>
            <div className="d-flex text-center justify-content-center">
              <TextBullet>Isi Data Penumpang</TextBullet>
              <TextBullet>Pembayaran</TextBullet>
              <TextBullet>E-tiket</TextBullet>
            </div>
          </Col>
          <Col lg={2}>
            {token && user ? (
              <div className="d-flex align-items-center">
                <span className="me-3 fs-5">{user.firstName}</span>
                <i className="user-avatar"></i>
              </div>
            ) : (
              <a
                className="login bg-primary bg-opacity-75 rounded-4 text-white"
                href="/login"
              >
                <>Masuk</>
              </a>
            )}
          </Col>
        </Row>
        <Row className="mt-3">
          <Col lg={6}>
            <DetailSectionPayment bookingData={bookingData}/>
          </Col>
          <Col lg={6}>
            <DetailPerjalanan penumpang={jumlahPenumpang} pesawat={bookingData?.tickets}/>
            <FormCodePromo onDiscountChange={handleDiscountChange} />
            <DetailHargaPay penumpang={bookingData?.penumpang} harga={bookingData?.harga} diskon={discount}/>
          </Col>
        </Row>
        <Row>
          <FormPembayaran bookingData={bookingData} discount={discount}/>
        </Row>
        {/* </div>
      <div className="row">
        <div className="col-8">
          <DetailSectionPayment />
        </div>
        <div className="col-6">
          <DetailPerjalanan />;
          <DetailHarga />
        </div>
      </div> */}
        <Footer />
      </Container>
    </>
  );
}
