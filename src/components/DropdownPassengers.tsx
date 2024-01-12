import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";

const JumlahPenumpang1 = styled.div`
  align-self: stretch;
  position: relative;
  letter-spacing: -0.75px;
  line-height: 28px;
  font-weight: 600;
`;
const JumlahPenumpangWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #9e9e9e;
`;
const UserTie1 = styled.div`
left:20%;
  position: relative;
  width: 15px; /* Adjust the width to match the actual width of the logo */
  height: 15px; /* Adjust the height to match the actual height of the logo */
  background-image: url('https://i.ibb.co/TqkjZ3Q/child.png');
  background-size: cover;
  background-position: center;
  text-indent: -9999px; /* Hide the text content */
`;

const UserTieIcon = styled.div`
  position: relative;
  width: 30px; /* Adjust the width to match the actual width of the logo */
  height: 30px; /* Adjust the height to match the actual height of the logo */
  background-image: url('https://i.ibb.co/J7GDYSF/User-Tie.png');
  background-size: cover;
  background-position: center;
  text-indent: -9999px; /* Hide the text content */
`;
const UserTie = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
  text-align: center;
`;
const Dewasa = styled.div`
  position: relative;
  letter-spacing: 0.15px;
  line-height: 24px;
`;
const TahunKeAtas = styled.div`
  position: relative;
  font-size: 12px;
  line-height: 18px;
  color: #9e9e9e;
`;
const DewasaParent = styled.div`
  flex: 1;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: #1c1c1e;
`;
const B = styled.b`
  position: relative;
  letter-spacing: -0.75px;
  line-height: 28px;
`;
const Wrapper = styled.div`
  border-radius: 10px;
  border: 1px solid #b1c5ff;
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px 10px 10px;
  text-align: center;
  font-size: 24px;
  color: #b1c5ff;
  cursor: pointer;
  &:hover {
    color: #3e7bfa;
  }
`;
const Container = styled.div`
  border-radius: 10px;
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;
  color: #1c1c1e;
`;
const Div1 = styled.div`
  position: relative;
  letter-spacing: -0.75px;
  line-height: 28px;
  font-weight: 600;
`;
const Frame = styled.div`
  border-radius: 10px;
  border: 1px solid #3e7bfa;
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    border-color: #b1c5ff;
  }
`;
const UserTieParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const Baby1 = styled.div`
  position: absolute;
  top: 16.67%;
  left: 15%;
  line-height: 100%;
  width: 24px;
  height: 24px;
  background-image: url('https://i.ibb.co/ykBTKPd/Baby.png'); /* Replace with your image URL */
  background-size: cover;
  background-position: center;
  text-indent: -9999px; /* Hide the text content */
`;
const JumlahPenumpangRoot = styled.div`
  position: relative;
  border-radius: 10px;
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  gap: 10px;
  text-align: left;
  font-size: 16px;
  color: #3e7bfa;
  font-family: "Open Sans";
`;

const JumlahPenumpang: FunctionComponent = () => {
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(1);
  const [babyCount, setBabyCount] = useState(1);

  const handleDecrease = (type: string) => {
    switch (type) {
      case "adult":
        setAdultCount((prevCount) => (prevCount > 0 ? prevCount - 1 : prevCount));
        break;
      case "child":
        setChildCount((prevCount) => (prevCount > 0 ? prevCount - 1 : prevCount));
        break;
      case "baby":
        setBabyCount((prevCount) => (prevCount > 0 ? prevCount - 1 : prevCount));
        break;
      default:
        break;
    }
  };

  const handleIncrease = (type: string) => {
    switch (type) {
      case "adult":
        setAdultCount((prevCount) => prevCount + 1);
        break;
      case "child":
        setChildCount((prevCount) => prevCount + 1);
        break;
      case "baby":
        setBabyCount((prevCount) => prevCount + 1);
        break;
      default:
        break;
    }
  };

  return (
    <JumlahPenumpangRoot>
      <JumlahPenumpangWrapper>
        <JumlahPenumpang1>Jumlah Penumpang</JumlahPenumpang1>
      </JumlahPenumpangWrapper>
      <UserTieParent>
        <UserTie>
          <UserTieIcon></UserTieIcon>
        </UserTie>
        <DewasaParent>
          <Dewasa>Dewasa</Dewasa>
          <TahunKeAtas>(12 tahun ke atas)</TahunKeAtas>
        </DewasaParent>
        <Wrapper onClick={() => handleDecrease("adult")}>
          <B>-</B>
        </Wrapper>
        <Container>
          <Dewasa>{adultCount}</Dewasa>
        </Container>
        <Frame onClick={() => handleIncrease("adult")}>
          <Div1>+</Div1>
        </Frame>
      </UserTieParent>
      <UserTieParent>
        <UserTie>
          <UserTie1></UserTie1>
        </UserTie>
        <DewasaParent>
          <Dewasa>Anak-anak</Dewasa>
          <TahunKeAtas>(2 - 11 tahun)</TahunKeAtas>
        </DewasaParent>
        <Wrapper onClick={() => handleDecrease("child")}>
          <B>-</B>
        </Wrapper>
        <Container>
          <Dewasa>{childCount}</Dewasa>
        </Container>
        <Frame onClick={() => handleIncrease("child")}>
          <Div1>+</Div1>
        </Frame>
      </UserTieParent>
      <UserTieParent>
        <UserTie>
          <Baby1></Baby1>
        </UserTie>
        <DewasaParent>
          <Dewasa>Bayi</Dewasa>
          <TahunKeAtas>(dibawah 2 tahun)</TahunKeAtas>
        </DewasaParent>
        <Wrapper onClick={() => handleDecrease("baby")}>
          <B>-</B>
        </Wrapper>
        <Container>
          <Dewasa>{babyCount}</Dewasa>
        </Container>
        <Frame onClick={() => handleIncrease("baby")}>
          <Div1>+</Div1>
        </Frame>
      </UserTieParent>
    </JumlahPenumpangRoot>
  );
};

export default JumlahPenumpang;
