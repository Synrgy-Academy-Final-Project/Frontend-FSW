import styled from "styled-components";

export const HeadSect = styled.h1`
    color: var(--text-primary, #101012);
    letter-spacing: -0.25px;
    font: 700 32px/143% Open Sans, sans-serif;
    @media (max-width: 991px) {
        max-width: 100%;
    }
`;

export const Underlined = styled.div`
    height: 3px;
    background: var(--Primary-Blue, #3e7bfa);
    max-width: 13em;
    margin-left: 0.75em;
    @media (max-width: 992px) {
        max-width: 10em;
      }
`;

export const TextSect = styled.p`
    color: #767E86;
    padding-top: 1.25em ;
    padding-bottom: 1.15em ;
    font: 400 20px/100% Open Sans, sans-serif;
`;
export const StyledImage = styled.img`
  width: 95%;
  height: 45em;
  border-radius: 1.5em;
  padding: 0.25em;
  gap: 0.25em;
  @media (max-width: 992px) {
    height: 25em;
  }
`;

export const Col1 = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    @media (max-width: 992px) {
        margin-left: 0.5em;
        margin-top: 0.5em;
        width: 100%;

    }
`;

export const HeadContent = styled.h2`
    color: var(--text-primary, #101012);
    letter-spacing: -0.25px;
    font: 700 28px/125% Open Sans, sans-serif;
    @media (max-width: 991px) {
        max-width: 100%;
    }
`;

export const TextContent = styled.p`
    color: #172432;
    padding-top: 1.25em ;
    padding-bottom: 1.15em ;
    font: 400 16px/115% Open Sans, sans-serif;
    @media (max-width: 991px) {
        padding-top: 0em ;
        padding-bottom: 0em ;
    }
`;

export const BtnText = styled.a`
    display: flex;
    color: var(--Primary-Blue, #3e7bfa);
    font: 400 16px/115% Open Sans, sans-serif;
    text-align: left;
    cursor: pointer;
    text-decoration: none;
    // background-color: red;
`;

export const BtnIcon = styled.a`
    padding-left: 1.25em ;
`;