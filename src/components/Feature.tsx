import React from "react";
import { HeadSect } from "./styles/PopularPlaces.styled";
import {
  HeadSect2,
  IconFeature,
  HeadFeature,
  TextFeature,
} from "./styles/Feature.styled";
import { Container, Row, Col } from "react-bootstrap";
import "keen-slider/keen-slider.min.css";

const Feature: React.FC = () => {
  return (
    <Container>
      <Row className="mt-3 pt-3 ">
        <Col lg={3} className="pt-lg-4 pb-3">
          <HeadSect2>
            Layanan <b>terbaik</b> untuk
          </HeadSect2>
          <HeadSect style={{borderBottom: "3px solid var(--blue)",}}>Perjalanan Anda</HeadSect>
        </Col>

        <Col lg={3} className="pb-3">
          <div className="mb-3">
            <IconFeature>
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M41 38.5V17.25C41 16.8619 40.9096 16.4791 40.7361 16.132C40.5625 15.7848 40.3105 15.4829 40 15.25L22.5 2.125C22.0673 1.80044 21.5409 1.625 21 1.625C20.4591 1.625 19.9327 1.80044 19.5 2.125L2 15.25C1.68951 15.4829 1.4375 15.7848 1.26393 16.132C1.09036 16.4791 1 16.8619 1 17.25V38.5C1 39.163 1.26339 39.7989 1.73223 40.2678C2.20107 40.7366 2.83696 41 3.5 41H13.5C14.163 41 14.7989 40.7366 15.2678 40.2678C15.7366 39.7989 16 39.163 16 38.5V31C16 30.337 16.2634 29.7011 16.7322 29.2322C17.2011 28.7634 17.837 28.5 18.5 28.5H23.5C24.163 28.5 24.7989 28.7634 25.2678 29.2322C25.7366 29.7011 26 30.337 26 31V38.5C26 39.163 26.2634 39.7989 26.7322 40.2678C27.2011 40.7366 27.837 41 28.5 41H38.5C39.163 41 39.7989 40.7366 40.2678 40.2678C40.7366 39.7989 41 39.163 41 38.5Z"
                  fill="#F1A025"
                  stroke="#F1A025"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </IconFeature>
          </div>
          <HeadFeature>Pemesanan mudah</HeadFeature>
          <TextFeature>
            Dapatkan pengalaman mudah dalam pemesanan tiket Anda
          </TextFeature>
        </Col>
        <Col lg={3} className="pb-3">
          <div className="mb-3">
            <IconFeature>
              <svg
                width="51"
                height="42"
                viewBox="0 0 51 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34.8335 10.5V11H35.3335H45.3335C47.8074 11 49.8335 13.0261 49.8335 15.5V23C49.8335 25.4739 47.8074 27.5 45.3335 27.5H30.8335V25.5C30.8335 23.8489 29.4846 22.5 27.8335 22.5H22.8335C21.1824 22.5 19.8335 23.8489 19.8335 25.5V27.5H5.3335C2.83464 27.5 0.833496 25.4989 0.833496 23V15.5C0.833496 13.0261 2.85964 11 5.3335 11H15.3335H15.8335V10.5C15.8335 5.25114 20.0846 1 25.3335 1C30.5824 1 34.8335 5.25114 34.8335 10.5ZM20.8335 11H30.3335H30.8335V10.5C30.8335 7.47386 28.3596 5 25.3335 5C22.3074 5 19.8335 7.47386 19.8335 10.5H20.3085V11H20.3335H20.8335ZM27.8335 33.5C29.3144 33.5 30.5521 32.415 30.7916 31H47.3335V40.5C47.3335 42.9739 45.3074 45 42.8335 45H7.8585C5.38464 45 3.3585 42.9739 3.3585 40.5V31H19.8754C20.1149 32.415 21.3526 33.5 22.8335 33.5H27.8335Z"
                  fill="#3E7BFA"
                  stroke="#3E7BFA"
                />
              </svg>
            </IconFeature>
          </div>
          <HeadFeature>Bermacam pilihan</HeadFeature>
          <TextFeature>
            Terdapat banyak pilihan untuk penerbangan Anda
          </TextFeature>
        </Col>
        <Col lg={3} className="pb-3">
          <div className="mb-3">
            <IconFeature>
              <svg
                width="45"
                height="42"
                viewBox="0 0 45 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39.2366 40.0981L36.4109 42.9237L26.1058 24.0108L25.7859 23.4237L25.3132 23.8964L15.5632 33.6464L15.387 33.8226L15.4216 34.0693L16.262 40.0726L14.2852 42.0495L10.2304 34.6351L10.1602 34.5066L10.0317 34.4363L2.61728 30.3816L4.59414 28.4047L10.5974 29.2452L10.8441 29.2797L11.0203 29.1036L20.7703 19.3536L21.243 18.8808L20.656 18.5609L1.74304 8.25582L4.56868 5.43017L28.1675 11.4843L28.4416 11.5546L28.643 11.3558L38.393 1.73083L38.3953 1.72855C39.0058 1.11808 39.7518 0.8125 40.6667 0.8125C41.5817 0.8125 42.3277 1.11808 42.9382 1.72855C43.5487 2.33903 43.8542 3.08504 43.8542 4C43.8542 4.91496 43.5487 5.66097 42.9382 6.27144L42.9359 6.27373L33.3109 16.0237L33.1121 16.2251L33.1824 16.4992L39.2366 40.0981Z"
                  fill="#18AF5E"
                  stroke="#18AF5E"
                />
              </svg>
            </IconFeature>
          </div>
          <HeadFeature>Penerbangan terbaik</HeadFeature>
          <TextFeature>
            Memberikan pengalaman terbaik dalam penerbangan Anda
          </TextFeature>
        </Col>
      </Row>
    </Container>
  );
};

export default Feature;
