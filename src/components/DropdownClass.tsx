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

const OptionLabel = styled.label`
  font-size: 16px;
  color: #333;
  margin-bottom: 16px; 
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const RadioButton = styled.div<{ isSelected: boolean }>`
  width: 20px; 
  height: 20px; 
  border-radius: 50%;
  border: 2px solid #c2c2c2;
  background-color: ${(props) => (props.isSelected ? "#3498db" : "transparent")};
  cursor: pointer;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px; 
  background-color: #fff;
  border-radius: 12px; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  width: 280px; 
`;

const DropdownClass: FunctionComponent = () => {
    const [selectedClass, setSelectedClass] = useState<string | null>(null);

    const handleClassSelect = (className: string) => {
        setSelectedClass(className === selectedClass ? null : className);
    };

    return (
        <OptionsContainer>
            <Title>Kelas</Title>
            <OptionLabel onClick={() => handleClassSelect("Ekonomi")}>
                Ekonomi
                <RadioButton isSelected={selectedClass === "Ekonomi"} />
            </OptionLabel>
            <OptionLabel onClick={() => handleClassSelect("Ekonomi Premium")}>
                Ekonomi Premium
                <RadioButton isSelected={selectedClass === "Ekonomi Premium"} />
            </OptionLabel>
            <OptionLabel onClick={() => handleClassSelect("Bisnis")}>
                Bisnis
                <RadioButton isSelected={selectedClass === "Bisnis"} />
            </OptionLabel>
            <OptionLabel onClick={() => handleClassSelect("Kelas Utama")}>
                Kelas Utama
                <RadioButton isSelected={selectedClass === "Kelas Utama"} />
            </OptionLabel>
        </OptionsContainer>
    );
};

export default DropdownClass;
