import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";

const Title = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px; /* 140% */
  letter-spacing: -0.75px;
  margin-bottom: 10px;
  color: #9e9e9e;
`;

const PassengerType = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const Icon = styled.div`
  margin-right: 10px;
  display: flex;
  width: 24px;
  height: 24px;
  padding: 4px 5px;
  justify-content: center;
  align-items: center;
`;

const PassengerInfo = styled.div`
  flex-grow: 1;
`;

const PassengerLabel = styled.div`
  font-size: 16px;
  color: #333;
`;

const PassengerSubLabel = styled.div`
  font-size: 12px;
  color: #9e9e9e;
`;

const CounterButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #b1c5ff;
  color: #b1c5ff;
  margin: 0 5px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: 0.15px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    color: #3e7bfa;
    border-color: #3e7bfa;
  }

  &:active {
    background-color: #3e7bfa;
    color: white;
  }

  &:focus {
    outline: none;
  }
`;

const CountDisplay = styled.div`
  min-width: 35px;
  text-align: center;
  font-size: 16px;
  color: #333;
`;

const JumlahPenumpangRoot = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 320px;
`;

const DropdownPassenger: FunctionComponent<{
  onChangeCount: (count: number, type: string) => void;
}> = ({ onChangeCount }) => {
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);
  const [babyCount, setBabyCount] = useState(0);

  const handleDecrease = (
    type: "adult" | "child" | "baby",
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    if (type === "adult" && adultCount > 0) {
      setAdultCount(adultCount - 1);
      onChangeCount(adultCount - 1, "adult"); // Meneruskan jumlah penumpang dan typenya ke TicketList
    }
    if (type === "child" && childCount > 0) {
      setChildCount(childCount - 1);
      onChangeCount(childCount - 1, "child"); // Meneruskan jumlah penumpang dan typenya ke TicketList
    }
    if (type === "baby" && babyCount > 0) {
      setBabyCount(babyCount - 1);
      onChangeCount(babyCount - 1, "baby"); // Meneruskan jumlah penumpang dan typenya ke TicketList
    }
  };

  const handleIncrease = (
    type: "adult" | "child" | "baby",
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    if (type === "adult") {
      setAdultCount(adultCount + 1);
      onChangeCount(adultCount + 1, "adult"); // Meneruskan jumlah penumpang dan typenya ke TicketList
    }
    if (type === "child") {
      setChildCount(childCount + 1);
      onChangeCount(childCount + 1, "child"); // Meneruskan jumlah penumpang dan typenya ke TicketList
    }
    if (type === "baby") {
      setBabyCount(babyCount + 1);
      onChangeCount(babyCount + 1, "baby"); // Meneruskan jumlah penumpang dan typenya ke TicketList
    }
  };

  return (
    <JumlahPenumpangRoot>
      <Title>Jumlah Penumpang</Title>
      <PassengerType>
        <Icon
          style={{
            backgroundImage: "url('https://i.ibb.co/J7GDYSF/User-Tie.png')",
          }}
        />
        <PassengerInfo>
          <PassengerLabel>Dewasa</PassengerLabel>
          <PassengerSubLabel>(12 tahun ke atas)</PassengerSubLabel>
        </PassengerInfo>
        <CounterButton onClick={(event) => handleDecrease("adult", event)}>
          -
        </CounterButton>
        <CountDisplay>{adultCount}</CountDisplay>
        <CounterButton onClick={(event) => handleIncrease("adult", event)}>
          +
        </CounterButton>
      </PassengerType>

      <PassengerType>
        <Icon
          style={{
            backgroundImage: "url('https://i.ibb.co/NKs7K2C/Child-2.png')",
          }}
        />
        <PassengerInfo>
          <PassengerLabel>Anak-anak</PassengerLabel>
          <PassengerSubLabel>(2 - 11 tahun)</PassengerSubLabel>
        </PassengerInfo>
        <CounterButton onClick={(event) => handleDecrease("child", event)}>
          -
        </CounterButton>
        <CountDisplay>{childCount}</CountDisplay>
        <CounterButton onClick={(event) => handleIncrease("child", event)}>
          +
        </CounterButton>
      </PassengerType>

      <PassengerType>
        <Icon
          style={{
            backgroundImage: "url('https://i.ibb.co/ykBTKPd/Baby.png')",
          }}
        />
        <PassengerInfo>
          <PassengerLabel>Bayi</PassengerLabel>
          <PassengerSubLabel>(di bawah 2 tahun)</PassengerSubLabel>
        </PassengerInfo>
        <CounterButton onClick={(event) => handleDecrease("baby", event)}>
          -
        </CounterButton>
        <CountDisplay>{babyCount}</CountDisplay>
        <CounterButton onClick={(event) => handleIncrease("baby", event)}>
          +
        </CounterButton>
      </PassengerType>
    </JumlahPenumpangRoot>
  );
};

export default DropdownPassenger;
