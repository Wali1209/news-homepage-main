import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  border-radius: 0.5rem;

  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

export const CardImage = styled.img`
  width: 5.5rem;
  min-height: 100%;
  object-fit: cover;
  margin-right: 1rem;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardNumber = styled.span`
  font-size: 2rem;
  color: #666;
`;

export const CardHeading = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: hsl(5, 85%, 63%);
    transition: color 0.1s ease;
  }
`;
export const CardText = styled.p`
  font-size: 1rem;
  opacity: 0.6;
`;
