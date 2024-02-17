import React, { useState } from "react";
import Footer from "../../../components/Footer.tsx";
import DetailBooking from "../../../components/DetailSection.tsx";
import DetailHarga from "../../../components/DetailHarga.tsx";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../../components/ModalPesanTiket.css";
import { useLocation } from "react-router";

const DataPenumpang: React.FC = () => {
  const token = localStorage.getItem("token");

  const formatDate = (dateTimeString: string) => {
    const departureDate = new Date(dateTimeString);
    const monthNames = new Intl.DateTimeFormat("id-ID", { month: "long" })
      .formatToParts(departureDate)
      .find((part) => part.type === "month").value;
    const day = departureDate.getDate();
    const year = departureDate.getFullYear();

    const hour = departureDate.getHours();
    const minute = departureDate.getMinutes();

    return {
      formattedDate: `${day} ${monthNames} ${year}`,
      formattedTime: `${hour.toString().padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")}`,
    };
  };

  const calculateDuration = (departureTime: string, arrivalTime: string) => {
    const departureDate = new Date(departureTime);
    const arrivalDate = new Date(arrivalTime);

    // Calculate the difference in milliseconds
    const durationInMilliseconds =
      arrivalDate.getTime() - departureDate.getTime();
    // Convert milliseconds to hours and minutes
    const durationInHours = Math.floor(
      durationInMilliseconds / (60 * 60 * 1000)
    );
    const durationInMinutes = Math.floor(
      (durationInMilliseconds % (60 * 60 * 1000)) / (60 * 1000)
    );

    return `${durationInHours} j ${durationInMinutes} m`;
  };

  const location = useLocation();
  const { tickets, passengersData } = location.state || {};

  interface pemesanData {
    nama: string;
    ponsel: string;
    email: string;
    dateOfBirth: string;
  }
  interface PenumpangData {
    index?: number;
    name?: string;
    date?: string;
    gender?: string;
    type?: string;
  }
  const [penumpangData, setPenumpangData] = useState<PenumpangData[]>([]);
  const [pemesanData, setPemesanData] = useState<pemesanData>();
  const handlePemesanChange = (pemesanData: pemesanData) => {
    setPemesanData(pemesanData);
  };
  const handlePenumpangChange = (penumpangData: PenumpangData[]) => {
    setPenumpangData(penumpangData);
  };

  const bookingData = {
    tickets: tickets,
    pemesan: pemesanData,
    penumpang: penumpangData,
  };

  return (
    <Container>
      <Row className="align-items-center justify-content-center">
        <Col lg={2}>
          <img src="https://i.ibb.co/Tc8PssV/Logo-white.png" alt="logo-white" />
        </Col>
        <Col lg={8}>
          <Row className="align-items-center flex-lg-row flex-column justify-content-center">
            <Circle style={{ backgroundColor: "var(--blue)" }}>1</Circle>
            <Line></Line>
            <Circle style={{ backgroundColor: "var(--neutral05)" }}>2</Circle>
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
          {token ? (
            <div className="d-flex align-items-center">
              <span className="me-3 fs-5">Akun</span>
              <i className="user-avatar"></i>
            </div>
          ) : (
            <a className="login bg-primary bg-opacity-75 rounded-4 text-white" href="/login">
              <>Masuk</>
            </a>
          )}
        </Col>
      </Row>
      <Div1 className="my-4">
        <Row className="align-items-center">
          <Col lg={1} >
            <img src="./images/3d-phone.png" alt="" className="ps-3" />
          </Col>
          <Col lg={11} >
            <HeadText>
              Masukkan data Anda dengan benar sesuai kartu identitas
            </HeadText>
          </Col>
        </Row>
      </Div1>
      <Row>
        <Col xl={6}>
          <div>
            <DetailBooking
              onPemesanChange={handlePemesanChange}
              onPenumpangChange={handlePenumpangChange}
              passengersData={passengersData}
            ></DetailBooking>
          </div>
        </Col>
        <Col xl={6}>
          <div className="row align-items-center">
            <div className="col text-center my-auto">
              <div className="maskapai">
                <img
                  src={tickets?.urlLogo}
                  width={"120px"}
                  alt={tickets.companyName}
                />
              </div>
            </div>
            <div className="col text-center pt-3">
              <div>
                <h4 className="sb-20-b">{tickets?.departureCityCode}</h4>
              </div>
              <div className="date-detail">
                <h5 className="r-16-b">
                  {formatDate(tickets?.departureTime).formattedDate}
                </h5>
              </div>
            </div>
            <div className="col text-center">
              <img
                src="./images/plane.png"
                alt=""
                style={{ width: "35px" }}
              />
            </div>
            <div className="col text-center pt-3">
              <div>
                <h4 className="sb-20-b">{tickets?.arrivalCityCode}</h4>
              </div>
              <div className="date-detail">
                <h5 className="r-16-b">
                  {formatDate(tickets?.arrivalTime).formattedDate}
                </h5>
              </div>
            </div>
          </div>
          <hr style={{ borderTop: "2px solid #A0A0A0" }} />
          <div className="border-detail">
            <div className="row">
              <div className="col-3 text-center d-flex flex-column justify-content-between">
                <h4 className="sb-20-b">
                  {formatDate(tickets?.departureTime).formattedTime}
                </h4>
                <h4 className="sb-16-g">
                  {calculateDuration(
                    tickets?.departureTime,
                    tickets?.arrivalTime
                  )}
                </h4>
                <h4 className="sb-20-b">
                  {formatDate(tickets?.arrivalTime).formattedTime}
                </h4>
              </div>
              <div className="col-1 d-flex flex-column justify-content-center">
                <svg height="10" width="10">
                  <circle cx="50%" cy="50%" r="4" fill="#007BFF" />
                </svg>
                <svg height="100%">
                  <line
                    x1="18%"
                    y1="0"
                    x2="18%"
                    y2="100%"
                    stroke="#007BFF"
                    strokeWidth="2"
                    strokeDasharray="5"
                  />
                </svg>
                <svg height="10" width="10">
                  <circle cx="50%" cy="50%" r="4" fill="#007BFF" />
                </svg>
              </div>
              <div className="col-8">
                <div className="title-dp">
                  <h4 className="sb-16-b">{tickets?.departureCityCode}</h4>
                  <p className="r-14-g mb-1">{tickets?.departureNameAirport}</p>
                </div>
                <svg height="2" width="480">
                  <line
                    x1="0"
                    y1="0"
                    x2="100%"
                    y2="0"
                    stroke="#E0E0E0"
                    strokeWidth="4"
                    strokeDasharray="20"
                  />
                </svg>
                <div className="content-dp">
                  <div className="row list-dp">
                    <div className="col-1 justify-content-center">
                      <img
                        src="./images/Shopping Bag.png"
                        alt=""
                        className="pt-1"
                      />
                    </div>
                    <div className="col-11">
                      <p className="r-14-b my-2">
                        Bagasi kabin 1 item (
                        {tickets?.airplaneServices.cabinBaggage} kg)
                      </p>
                    </div>
                  </div>
                  <div className="row list-dp">
                    <div className="col-1 justify-content-center">
                      <img
                        src="./images/Shopping Bag.png"
                        alt=""
                        className="pt-1"
                      />
                    </div>
                    <div className="col-11">
                      <p className="r-14-b my-2">
                        Bagasi 1 item ({tickets?.airplaneServices.baggage} kg)
                      </p>
                    </div>
                  </div>
                  <div className="row list-dp">
                    <div className="col-1 justify-content-center">
                      <img
                        src="./images/Utensils.png"
                        alt=""
                        className="pt-1"
                      />
                    </div>
                    <div className="col-11">
                      <p
                        className={
                          tickets?.airplaneServices.meals
                            ? "r-14-b my-2"
                            : "r-14-g my-2"
                        }
                      >
                        Makanan di pesawat
                      </p>
                    </div>
                  </div>
                  <div className="row list-dp">
                    <div className="col-1 justify-content-center">
                      <img
                        src="./images/File Minus.png"
                        alt=""
                        className="pt-1"
                      />
                    </div>
                    <div className="col-11">
                      <p
                        className={
                          tickets?.airplaneServices.travelInsurance
                            ? "r-14-b my-2"
                            : "r-14-g my-2"
                        }
                      >
                        {tickets?.airplaneServices.travelInsurance
                          ? "Dengan "
                          : "Tanpa "}
                        ansuransi perjalanan
                      </p>
                    </div>
                  </div>
                  <div className="row list-dp">
                    <div className="col-1 justify-content-center">
                      <img
                        src="./images/youtube square.png"
                        alt=""
                        className="pt-1"
                      />
                    </div>
                    <div className="col-11">
                      <p
                        className={
                          tickets?.airplaneServices.inflightEntertainment
                            ? "r-14-b my-2"
                            : "r-14-g my-2"
                        }
                      >
                        Hiburan di pesawat
                      </p>
                    </div>
                  </div>
                  <div className="row list-dp">
                    <div className="col-1 justify-content-center">
                      <img
                        src="./images/usb.png"
                        alt=""
                        className="pt-1"
                      />
                    </div>
                    <div className="col-11">
                      <p
                        className={
                          tickets?.airplaneServices.electricSocket
                            ? "r-14-b my-2"
                            : "r-14-g my-2"
                        }
                      >
                        Stopkontak atau USB
                      </p>
                    </div>
                  </div>
                  <div className="row list-dp">
                    <div className="col-1 justify-content-center">
                      <img
                        src="./images/Wifi Slash.png"
                        alt=""
                        className="pt-1"
                      />
                    </div>
                    <div className="col-11">
                      <p
                        className={
                          tickets?.airplaneServices.wifi
                            ? "r-14-b my-2"
                            : "r-14-g my-2"
                        }
                      >
                        WiFi
                      </p>
                    </div>
                  </div>
                  <div className="row list-dp">
                    <div className="col-1">
                      <img
                        src="./images/Calendar Alt.png"
                        alt=""
                        className="pt-1"
                      />
                    </div>
                    <div className="col-4">
                      <p
                        className={
                          tickets?.airplaneServices.reschedule
                            ? "r-14-s my-1"
                            : "r-14-g my-1"
                        }
                      >
                        {tickets?.airplaneServices.reschedule
                          ? "Bisa "
                          : "Tidak bisa "}
                        reschedule
                      </p>
                    </div>
                    <div className="col-1">
                      <img
                        src="./images/Money Check Edit Alt.png"
                        alt=""
                      />
                    </div>
                    <div className="col-6">
                      <p className="r-14-s my-1">
                        Bisa refund {tickets?.airplaneServices.refund}%
                      </p>
                    </div>
                  </div>
                </div>
                <svg height="2" width="480">
                  <line
                    x1="0"
                    y1="0"
                    x2="100%"
                    y2="0"
                    stroke="#E0E0E0"
                    strokeWidth="4"
                    strokeDasharray="20"
                  />
                </svg>
                <div className="title-dp">
                  <h4 className="sb-16-b">{tickets?.arrivalCityCode}</h4>
                  <p className="r-14-g">{tickets?.arrivalNameAirport}</p>
                </div>
              </div>
            </div>
          </div>
          <DetailHarga bookingData={bookingData} passengersData={passengersData} />
        </Col>
      </Row>

      <Footer />
    </Container>
  );
};

const Div1 = styled.div`
  padding: 1rem;
  background-color: #e1f4ff;
  border-radius: 0.75em;
  @media (max-width: 991px) {
    margin: 0.5em 1em;
    max-width: 100%;
    padding: 1em 2em;
  }
`;

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

export default DataPenumpang;
