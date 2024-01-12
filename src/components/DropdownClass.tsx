import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";

const Kelas1 = styled.div`
  align-self: stretch;
  position: relative;
  letter-spacing: -0.75px;
  line-height: 28px;
  font-weight: 600;
`;
const KelasWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #9e9e9e;
  cursor: pointer;
  &:hover {
    color: #333;
  }
`;
const Ekonomi = styled.div`
  position: relative;
  letter-spacing: 0.15px;
  line-height: 24px;
`;
const FrameChild = styled.div<{ isSelected: boolean }>`
  position: relative;
  border-radius: 50%;
  border: 1px solid #c2c2c2;
  box-sizing: border-box;
  width: 15px;
  height: 15px;
  background-color: ${(props) => (props.isSelected ? "#3498db" : "transparent")};
`;
const EkonomiParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const KelasInner = styled.div`
  width: 264px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const KelasRoot = styled.div`
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
  color: #1c1c1e;
  font-family: "Open Sans";
`;

const Kelas: FunctionComponent = () => {
  const [selectedClass, setSelectedClass] = useState<string | null>(null);

  const handleClassSelect = (className: string) => {
    setSelectedClass(className === selectedClass ? null : className);
  };

  return (
    <KelasRoot>
      <KelasWrapper onClick={() => handleClassSelect("Kelas")}>
        <Kelas1>Kelas</Kelas1>
      </KelasWrapper>
      <KelasInner>
        <EkonomiParent onClick={() => handleClassSelect("Ekonomi")}>
          <Ekonomi>Ekonomi</Ekonomi>
          <FrameChild isSelected={selectedClass === "Ekonomi"} />
        </EkonomiParent>
      </KelasInner>
      <KelasInner>
        <EkonomiParent onClick={() => handleClassSelect("Ekonomi Premium")}>
          <Ekonomi>Ekonomi Premium</Ekonomi>
          <FrameChild isSelected={selectedClass === "Ekonomi Premium"} />
        </EkonomiParent>
      </KelasInner>
      <KelasInner>
        <EkonomiParent onClick={() => handleClassSelect("Bisnis")}>
          <Ekonomi>Bisnis</Ekonomi>
          <FrameChild isSelected={selectedClass === "Bisnis"} />
        </EkonomiParent>
      </KelasInner>
      <KelasInner>
        <EkonomiParent onClick={() => handleClassSelect("Kelas Utama")}>
          <Ekonomi>Kelas Utama</Ekonomi>
          <FrameChild isSelected={selectedClass === "Kelas Utama"} />
        </EkonomiParent>
      </KelasInner>
    </KelasRoot>
  );
};

export default Kelas;
