import styled from "styled-components";

export const BoldBlack = styled.h1`
  color: #000;
  font-size: 20px;
  font-weight: 700;
`;

export const RegulerBlack = styled.p`
  color: #000;
  font-size: 16px;
  font-weight: 400;
`;

export const SpanBlue = styled.span`
  color: var(--Primary-Blue, #3e7bfa);
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
`;

export const EmptyContent = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 10px;
  background: var(--Light-background, #fff);
`;
