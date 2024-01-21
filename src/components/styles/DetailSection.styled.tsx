import styled from "styled-components";

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex: 1 0 0;
`;

export const OrdererWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const OrdererHead = styled.div`
  display: flex;
  padding-bottom: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
`;

export const SemiBoldText = styled.h1`
  color: var(--Neutral-09, #1c1c1e);
  font-size: 20px;
  font-weight: 600;
  margin-bottom: unset;
`;

export const RegulerTextNeutral = styled.h2`
  color: var(--Neutral-07, #757575);
  font-size: 16px;
  font-weight: 400;
  margin-bottom: unset;
`;

export const OrdererForm = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  border-radius: 10px;
  border: 1px solid var(--Primary-Blue, #3e7bfa);
  background: var(--Light-background, #fff);
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 40px;
  align-self: stretch;
`;

export const LabelRadio = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const InputRadio = styled.input`
  display: flex;
  width: 24px;
  height: 24px;
  padding: 4px;
  justify-content: center;
  align-items: center;
  color: var(--Neutral-05, #c2c2c2);
`;

export const RegulerTextBlack = styled.h2`
  color: #000;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: unset;
`;

export const FormInput = styled.div`
  display: flex;
  padding-bottom: 5px;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  align-self: stretch;
`;

export const StarIcon = styled.span`
  color: var(--Secondary-Danger, #cb3a31);
`;

export const Input = styled.input`
  display: flex;
  height: 48px;
  padding: 12px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  align-self: stretch;
  border-radius: 10px;
  border: 1px solid var(--Neutral-03, #ededed);
  outline: none;
`;
