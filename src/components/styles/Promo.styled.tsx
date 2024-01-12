import styled from "styled-components";

export const StyledImage = styled.img`
  width: 95%;
  border-radius: 1.5em;
  padding: 0.25em;
  gap: 0.25em;
  @media (max-width: 992px) {
    height: 25em;
  }
`;

export const DivBtn = styled.div`
  display: flex;
  justify-content: center;
`;

export const Btn = styled.button`
  width: 4em;
  border: 3px solid var(--Light-Blue, #B1C5FF);
  border-radius: 10px;
  padding: 0.75em;
  margin-right: 0.75em;
  transition: stroke 0.5s ease;
  svg {
    margin-right: 5px;
    stroke: var(--Light-Blue, #B1C5FF);
    transition: stroke 0.5s ease;
  }
  &:hover {
    border: 3px solid var(--Primary-Blue, #3e7bfa);
    svg {
      stroke: var(--Primary-Blue, #3e7bfa);
    }
  }
`;