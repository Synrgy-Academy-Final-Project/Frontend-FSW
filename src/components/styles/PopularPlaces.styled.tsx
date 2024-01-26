import styled from "styled-components";

export const HeadSect = styled.h1`
    color: var(--neutral09); 
    letter-spacing: -0.25px;
    font: var(--fwbold) 32px/145% Open Sans, sans-serif;
    position: relative;
    border-bottom: 3px solid var(--blue);
    @media (max-width: 991px) {
        max-width: 100%;
    }
`;
export const TextSect = styled.p`
    color: var(--neutral07);
    padding-top: 1.25em ;
    padding-bottom: 1.15em ;
    font: var(--fwregular) 20px/100% Open Sans, sans-serif;
`;
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
  border: 3px solid var(--lightblue);
  border-radius: 10px;
  padding: 0.75em;
  margin-right: 0.75em;
  transition: stroke 0.5s ease;
  svg {
    margin-right: 5px;
    stroke: var(--lightblue);
    transition: stroke 0.5s ease;
  }
  &:hover {
    border: 3px solid var(--blue);
    svg {
      stroke: var(--blue);
    }
  }
`;