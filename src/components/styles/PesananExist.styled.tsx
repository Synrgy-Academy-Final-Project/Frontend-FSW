import styled from "styled-components";

export const CodeHarga = styled.p`
  color: #000;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: unset;
`;

export const CodeText = styled.p`
  display: flex;
  height: 25.333px;
  flex-direction: column;
  justify-content: center;
  flex: 1 0 0;
  color: #000;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: unset;
`;

export const CodeWrapper = styled.div`
  display: flex;
  padding: 10px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  border-radius: 10px;
  background: var(--Light-background, #fff);
`;

export const DestinationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  align-self: stretch;
`;

export const ExistContent = styled.div`
  display: flex;
  padding: 16px 0px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  align-self: stretch;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #ededed;
`;

export const LineDash = styled.div`
  width: 100%;
  height: 1px;
  background: repeating-linear-gradient(90deg, #3e7bfa 0 3px, #0000 0 7px);
`;

export const PaymentComplete = styled.div`
  display: flex;
  padding: 1px 10px;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  border-radius: 10px;
  background: var(--Secondary-Success, #18af5e);
`;

export const RegulerNeutral = styled.p`
  color: var(--Neutral-07, #757575);
  font-size: 16px;
  font-weight: 400;
  margin-bottom: unset;
`;

export const RegulerWhite = styled.p`
  color: var(--Neutral-02, #f5f5f5);
  font-size: 14px;
  font-weight: 400;
  margin-bottom: unset;
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  align-self: stretch;
`;

export const WaitingPayment = styled.div`
  display: flex;
  padding: 1px 10px;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  border-radius: 10px;
  background: var(--Secondary-Warning, #f1a025);
`;
