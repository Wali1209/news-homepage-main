import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  &:not(:last-child) {
    margin-right: 1rem;
  }

  @media screen and (max-width: 1080px) {
    margin-top: 2rem;
  }
`;

export const CardImage = styled.img`
  max-width: 5rem;
  flex-basis: 5rem;
  margin-right: 1rem;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  /* media queries */
  @media screen and (max-width: 1080px) {
    font-size: 1rem;
  }
`;

export const CardNumber = styled.span`
  font-size: 2rem;
  color: #666;
  /* media queries */
  @media screen and (max-width: 1440px) {
    font-size: 1.75rem;
  }
  /* media queries */
  @media screen and (max-width: 1280px) {
    font-size: 1.5rem;
  }
  /* media queries */
  @media screen and (max-width: 1080px) {
    font-size: 2rem;
  }
`;

export const CardHeading = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: hsl(5, 85%, 63%);
    transition: color 0.1s ease;
  }

  /* media queries */
  @media screen and (max-width: 1440px) {
    font-size: 1rem;
  }

  /* media queries */
  @media screen and (max-width: 1280px) {
    font-size: 0.75rem;
  }
  /* media queries */
  @media screen and (max-width: 1080px) {
    font-size: 1rem;
  }
`;
export const CardText = styled.p`
  font-size: 1rem;
  opacity: 0.6;
  /* media queries */
  @media screen and (max-width: 1080px) {
    font-size: 1rem;
  }
`;
