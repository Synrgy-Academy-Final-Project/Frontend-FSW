import styled from "styled-components";

export const BoldText = styled.h1`
  color: var(--Primary-Blue, #3e7bfa);
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 50px;
`;

export const AboutUsWrapper = styled.div`
  display: flex;
  width: 1440px;
  padding: 10px 48px;
  justify-content: center;
  align-items: center;
  gap: 48px;
  margin-bottom: 20px;
`;

export const RegularText = styled.p`
  color: var(--Neutral-08, #505050);
  font-size: 16px;
  font-weight: 400;
`;

export const Feature = styled.div`
  display: flex;
  width: 100%;
  padding: 16px 48px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
`;

export const FeatTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  align-self: stretch;
`;

export const FeatTitle = styled.h2`
  color: #172432;
  text-align: center;
  font-size: 24px;
  font-weight: 400;
`;

export const FeatTitleBold = styled.span`
  color: #172432;
  font-size: 32px;
  font-weight: 700;
`;

export const Line = styled.div`
  width: 550px;
  height: 3px;
  background: #3e7bfa;
`;

export const FeatMainWrapper = styled.div`
  display: flex;
  padding: 16px 0px;
  justify-content: center;
  align-items: center;
  gap: 30px;
  align-self: stretch;
`;

export const FeatCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  flex: 1 0 0;
  align-self: stretch;
`;

export const BoldFeatText = styled.div`
  align-self: stretch;
  color: var(--text-color, #252b42);
  text-align: center;
  font-size: 20px;
  font-weight: 700;
`;

export const RegulerFeatText = styled.div`
  align-self: stretch;
  color: var(--Neutral-07, #757575);
  text-align: center;
  font-size: 16px;
  font-weight: 400;
`;

export const OptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 150px;
  margin-bottom: 220px;
`;

export const OptionCard = styled.div`
  display: inline-flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  background: rgba(62, 123, 250, 0.05);
  width: 332px;
`;

export const BoldOptionText = styled.div`
  align-self: stretch;
  color: var(--text-color, #252b42);
  font-size: 20px;
  font-weight: 700;
  width: 90%;
`;

export const RegularOptionText = styled.div`
  align-self: stretch;
  color: var(--Neutral-07, #757575);
  font-size: 16px;
  font-weight: 400;
  width: 90%;
`;

export const OptionButton = styled.button`
  display: flex;
  height: 40px;
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  align-self: stretch;
  border-radius: 10px;
  box-shadow: 0px 24px 12px 0px rgba(88, 154, 228, 0.04);
  color: var(--Primary-Blue, #3e7bfa);
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
`;

export const OptionImage = styled.img`
  width: 100%;
`;
