import React from "react";
import { Row, Col, Table } from "react-bootstrap";
import styled from "styled-components";

const ETicket: React.FC = () => {
  return (
    <BorderDiv className="m-5">
      <HeaderDiv className="justify-content-center align-items-center bg-white rounded-3 text-center">
        <Col lg={2} className="">
          <img src={"./images/flsah-icon.png"} alt="flsah-icon" />
        </Col>
        <Col lg={8}>
          <HeadH1>E-tiketmu sudah ada!</HeadH1>
          <HeadP>selamat menikmati perjalananmu...</HeadP>
        </Col>
        <Col lg={2} className="">
          <img src={"./images/flsah-icon.png"} alt="flsah-icon" />
        </Col>
      </HeaderDiv>
      <ContentDiv className="m-2">
        <Row className="my-3">
          <Col lg={2}>
            <img src="" alt="maskapai" />
          </Col>
          <Col lg={7}>
            <Row>
              <Col lg={6}>
                <HeadCont>Garuda Indonesia</HeadCont>
                <TextCont>Kelas Ekonomi</TextCont>
              </Col>
              <Col lg={6}>
                <HeadCont>Tipe Pesawat</HeadCont>
                <TextCont>BOEING - 737</TextCont>
              </Col>
            </Row>
          </Col>
          <Col lg={3}>
            <HeadCont>Kode Pemesanan</HeadCont>
            <TextCont>123123123</TextCont>
          </Col>
        </Row>
        <svg height="2" width="100%">
          <line
            x1="0"
            y1="0"
            x2="100%"
            y2="0"
            stroke="#E0E0E0"
            strokeWidth="5"
            strokeDasharray="15"
          />
        </svg>
        <Row className="my-3">
          <Col
            lg={2}
            className="text-center d-flex flex-column justify-content-between"
          >
            <div>
              <h4 className="sb-20-b">20:15</h4>
              <p className="r-14-g mb-1">4 Oktober 2023</p>
            </div>
            <h4 className="sb-16-g my-4">2 j 0 m</h4>
            <div>
              <h4 className="sb-20-b">22:15</h4>
              <p className="r-14-g mb-1">4 Oktober 2023</p>
            </div>
          </Col>
          <Col lg={1} className="d-flex flex-column justify-content-center">
            <svg height="10" width="10">
              <circle cx="50%" cy="50%" r="5" fill="#007BFF" />
            </svg>
            <svg height="100%">
              <line
                x1="6%"
                y1="0"
                x2="6%"
                y2="100%"
                stroke="#007BFF"
                strokeWidth="2"
                strokeDasharray="5"
              />
            </svg>
            <svg height="10" width="10">
              <circle cx="50%" cy="50%" r="5" fill="#007BFF" />
            </svg>
          </Col>
          <Col lg={8} className="d-flex flex-column justify-content-between">
            <div className="title-dp">
              <h4 className="sb-16-b">Jakarta (CGK)</h4>
              <p className="r-14-g mb-1">
                Soekarno Hatta International Airport - Terminal X
              </p>
            </div>
            <div className="title-dp">
              <h4 className="sb-16-b">Bali (DPS)</h4>
              <p className="r-14-g">
                I Gusti Ngurah Rai International Airport - Terminal X
              </p>
            </div>
          </Col>
        </Row>
        <svg height="2" width="100%">
          <line
            x1="0"
            y1="0"
            x2="100%"
            y2="0"
            stroke="#E0E0E0"
            strokeWidth="5"
            strokeDasharray="15"
          />
        </svg>
        <Row className="my-3">
          <Col lg={4} className="d-flex align-items-center px-4">
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.126 11.9932C27.1587 11.994 28.8566 10.7487 29.7849 9.00943L39.7784 9.01312C40.3121 9.01332 41.0003 9.57674 41 10.6124L40.9944 31.4019C40.9941 32.4374 40.3057 33.0002 39.7722 33L30.4162 32.9965C29.4881 31.2608 27.7929 30.018 25.7633 30.0172C23.7336 30.0165 22.0378 31.2581 21.1086 32.9931L4.22158 32.9869C3.68787 32.9867 2.99972 32.4233 3 31.3876L3.00561 10.5981C3.00589 9.56256 3.69427 8.9998 4.22785 9L20.4688 9.00599C21.3961 10.7459 23.0932 11.9925 25.126 11.9932Z"
                stroke="#3E7BFA"
                strokeWidth="2"
              />
              <path
                d="M25 16V26"
                stroke="#3E7BFA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="4 4"
              />
            </svg>
            <TextCont1 className="mx-3">
              Tunjukkan e-tiket dan identitas penumpang pada saat check-in
            </TextCont1>
            <svg height="3rem" width="2%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="#E0E0E0"
                strokeWidth="5"
              />
            </svg>
          </Col>
          <Col lg={4} className="d-flex align-items-center px-4">
            <svg
              width="41"
              height="40"
              viewBox="0 0 41 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.6662 36.6668C29.8709 36.6668 37.3328 29.2049 37.3328 20.0002C37.3328 10.7954 29.8709 3.3335 20.6662 3.3335C11.4614 3.3335 3.99951 10.7954 3.99951 20.0002C3.99951 29.2049 11.4614 36.6668 20.6662 36.6668Z"
                stroke="#3E7BFA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.6665 10V20L27.3332 23.3333"
                stroke="#3E7BFA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <TextCont1 className="mx-3">
              Harap untuk check-in setidaknya 60 menit sebelum waktu
              keberangkatan
            </TextCont1>
            <svg height="3rem" width="2%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="#E0E0E0"
                strokeWidth="5"
              />
            </svg>
          </Col>
          <Col lg={4} className="d-flex align-items-center px-4">
            <svg
              width="41"
              height="40"
              viewBox="0 0 41 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1461_3459)">
                <path
                  d="M20.3335 0C9.26967 0 0.333496 8.93618 0.333496 20C0.333496 31.0639 9.26967 40.0001 20.3335 40.0001C31.3974 40.0001 40.3336 31.0639 40.3336 20C40.3336 8.93618 31.3973 0 20.3335 0ZM20.3335 36.6808C11.142 36.6808 3.65265 29.1915 3.65265 20C3.65265 10.8085 11.142 3.31915 20.3335 3.31915C29.525 3.31915 37.0144 10.8085 37.0144 20C37.0144 29.1915 29.525 36.6808 20.3335 36.6808Z"
                  fill="#3E7BFA"
                />
                <path
                  d="M20.4184 15.3193C19.4823 15.3193 18.7163 16.0853 18.7163 17.0214V30.8087C18.7163 31.7448 19.4823 32.5108 20.4184 32.5108C21.3546 32.5108 22.1205 31.7448 22.1205 30.8937V17.0215C22.1206 16.0853 21.3546 15.3193 20.4184 15.3193Z"
                  fill="#3E7BFA"
                />
                <path
                  d="M20.2485 7.4043C19.3123 7.4043 18.5464 8.17025 18.5464 9.1064V10.7234C18.5464 11.6596 19.3123 12.4255 20.2485 12.4255C21.1846 12.4255 21.8655 11.6596 21.9506 10.7234V9.1064C21.9506 8.17025 21.1846 7.4043 20.2485 7.4043Z"
                  fill="#3E7BFA"
                />
              </g>
              <defs>
                <clipPath id="clip0_1461_3459">
                  <rect
                    width="40"
                    height="40"
                    fill="white"
                    transform="translate(0.333496)"
                  />
                </clipPath>
              </defs>
            </svg>
            <TextCont1 className="mx-3">
              Tunjukkan e-tiket dan identitas penumpang pada saat check-in
            </TextCont1>
          </Col>
        </Row>
        <svg height="2" width="100%">
          <line
            x1="0"
            y1="0"
            x2="100%"
            y2="0"
            stroke="#E0E0E0"
            strokeWidth="5"
            strokeDasharray="15"
          />
        </svg>
        <Row className="mx-5 my-3">
          <Table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Nama Penumpang</th>
                <th>Jenis Tiket</th>
                <th>Bagasi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Ekonomi</td>
                <td>20Kg</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Ekonomi</td>
                <td>20Kg</td>
              </tr>
            </tbody>
          </Table>
        </Row>
        <svg height="2" width="100%">
          <line
            x1="0"
            y1="0"
            x2="100%"
            y2="0"
            stroke="#E0E0E0"
            strokeWidth="5"
            strokeDasharray="15"
          />
        </svg>
        <Row className="align-items-center my-3">
          <Col lg={1}>
            <img src="./images/hand-ticket.png" alt="" />
          </Col>
          <Col lg={11} className="ps-3">
            <HeadCont>E-tiket ini tidak perlu di print lo!</HeadCont>
            <TextCont1 className="me-5">
              Cukup tunjukkan e-tiket pada aplikasi atau mobile web saat
              melakukan check-in Jika menggunakan perangkat lain, login dengan
              email yang digunakan pada saat booking ya!
            </TextCont1>
          </Col>
        </Row>
        <Row>
          <Col lg={9}></Col>
          <Col lg={3}>
            <BlueBtn>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4.5H10.375V1.5C10.375 0.6875 9.6875 0 8.875 0H6.09375C5.28125 0 4.59375 0.6875 4.59375 1.5V4.5H3C1.65625 4.5 0.96875 6.125 1.9375 7.0625L6.4375 11.5625C7 12.1562 7.96875 12.1562 8.5625 11.5625L13.0625 7.0625C14 6.125 13.3125 4.5 12 4.5ZM7.5 10.5L3 6H6.09375V1.5H8.875V6H12L7.5 10.5ZM13.5 12.875C13.5 12.6875 13.3125 12.5 13.125 12.5H1.875C1.65625 12.5 1.5 12.6875 1.5 12.875V13.625C1.5 13.8438 1.65625 14 1.875 14H13.125C13.3125 14 13.5 13.8438 13.5 13.625V12.875Z"
                  fill="white"
                />
              </svg>
              Unduh Invoice
            </BlueBtn>
          </Col>
        </Row>
      </ContentDiv>

      <Row></Row>
    </BorderDiv>
  );
};

const BorderDiv = styled.div`
  border: 2px dashed var(--blue);
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 20px;
`;

const HeaderDiv = styled.div`
  display: flex;
  margin: 1rem 13rem;
`;

const HeadP = styled.p`
  color: var(--blue);
  letter-spacing: -0.75px;
  font: var(--fwsemibold) 24px/115% Open Sans, sans-serif;
  margin: 0;
`;

const HeadH1 = styled.h1`
  color: var(--blue);
  letter-spacing: -0.75px;
  font: var(--fwbold) 48px/135% Open Sans, sans-serif;
  margin: 0;
`;

const ContentDiv = styled.div`
  background-color: var(--neutral01);
  border: 2px var(--neutral05);
`;

const HeadCont = styled.h3`
  color: var(--neutral09);
  letter-spacing: -0.5px;
  font: var(--fwbold) 22px/115% Open Sans, sans-serif;
  padding-bottom: 1.5rem;
  margin: 0;
`;

const TextCont = styled.p`
  color: var(--blue);
  letter-spacing: -0.75px;
  font: var(--fwsemibold) 18px/105% Open Sans, sans-serif;
  margin: 0;
`;

const TextCont1 = styled.p`
  color: var(--neutral08);
  letter-spacing: -0.75px;
  font: var(--fwregular) 16px/115% Open Sans, sans-serif;
  margin: 0;
`;

const BlueBtn = styled.button`
width:100%;
  background-color: var(--blue);
  color: var(--neutral01);
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    margin-right: 8px;
  }
  &:hover {
    background-color: var(--darkblue);
  }
`;

export default ETicket;
