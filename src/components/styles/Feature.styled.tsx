import styled from "styled-components";

export const HeadSect2 = styled.h1`
    color: var(--neutral09); 
    letter-spacing: -0.25px;
    font: var(--fwregular) 24px/145% Open Sans, sans-serif;
    position: relative;
    @media (max-width: 991px) {
        max-width: 100%;
    }
`;
export const IconFeature = styled.i`
    width : 60px;
    height : 60px;

`;

export const HeadFeature= styled.h3`
    color: var(--neutral09); 
    letter-spacing: -0.5px;
    font: var(--fwbold) 24px/100% Open Sans, sans-serif;
    position: relative;
`;

export const TextFeature = styled.p`
    color: var(--neutral07);
    padding-top: 0.25em ;
    font: var(--fwregular) 16px/100% Open Sans, sans-serif;
`;
