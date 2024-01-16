import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";

const Title = styled.div`
  font-family: "Open Sans",sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px; /* 140% */
  letter-spacing: -0.75px;
  margin-bottom: 10px;
  color: #9E9E9E;
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
  color: #9E9E9E;
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

const DropdownPassenger: FunctionComponent = () => {
    const [adultCount, setAdultCount] = useState(1);
    const [childCount, setChildCount] = useState(1);
    const [babyCount, setBabyCount] = useState(1);

    const handleDecrease = (type: "adult" | "child" | "baby") => {
        if (type === "adult" && adultCount > 0) setAdultCount(adultCount - 1);
        if (type === "child" && childCount > 0) setChildCount(childCount - 1);
        if (type === "baby" && babyCount > 0) setBabyCount(babyCount - 1);
    };

    const handleIncrease = (type: "adult" | "child" | "baby") => {
        if (type === "adult") setAdultCount(adultCount + 1);
        if (type === "child") setChildCount(childCount + 1);
        if (type === "baby") setBabyCount(babyCount + 1);
    };

    return (
        <JumlahPenumpangRoot>
            <Title>Jumlah Penumpang</Title>
            <PassengerType>
                <Icon style={{ backgroundImage: "url('https://i.ibb.co/J7GDYSF/User-Tie.png')" }} />
                <PassengerInfo>
                    <PassengerLabel>Dewasa</PassengerLabel>
                    <PassengerSubLabel>(12 tahun ke atas)</PassengerSubLabel>
                </PassengerInfo>
                <CounterButton onClick={() => handleDecrease("adult")}>-</CounterButton>
                <CountDisplay>{adultCount}</CountDisplay>
                <CounterButton onClick={() => handleIncrease("adult")}>+</CounterButton>
            </PassengerType>

            <PassengerType>
                <Icon style={{ backgroundImage: "url('https://i.ibb.co/NKs7K2C/Child-2.png')" }} />
                <PassengerInfo>
                    <PassengerLabel>Anak-anak</PassengerLabel>
                    <PassengerSubLabel>(2 - 11 tahun)</PassengerSubLabel>
                </PassengerInfo>
                <CounterButton onClick={() => handleDecrease("child")}>-</CounterButton>
                <CountDisplay>{childCount}</CountDisplay>
                <CounterButton onClick={() => handleIncrease("child")}>+</CounterButton>
            </PassengerType>

            <PassengerType>
                <Icon style={{ backgroundImage: "url('https://i.ibb.co/ykBTKPd/Baby.png')" }} />
                <PassengerInfo>
                    <PassengerLabel>Bayi</PassengerLabel>
                    <PassengerSubLabel>(di bawah 2 tahun)</PassengerSubLabel>
                </PassengerInfo>
                <CounterButton onClick={() => handleDecrease("baby")}>-</CounterButton>
                <CountDisplay>{babyCount}</CountDisplay>
                <CounterButton onClick={() => handleIncrease("baby")}>+</CounterButton>
            </PassengerType>
        </JumlahPenumpangRoot>
    );
};

export default DropdownPassenger;
