import styled from "styled-components";

export const MainContainer = styled.main`
  width: 75%;
  display: inline-block;
  margin-right: 2rem;
  > div {
    display: flex;
    width: 100%;
    padding: 2rem 0;
    /* media Queries */
    @media screen and (max-width: 512px) {
      flex-direction: column;
    }
  }

  /* media Queries */
  @media screen and (max-width: 1440px) {
    width: 65%;
  }
  /* media Queries */
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const MainImage = styled.img`
  min-width: 100%;
  width: 100%;
  height: 300px;
`;

export const MainTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.2;
  width: 40%;

  /* media Queries */
  @media screen and (max-width: 1330px) {
    font-size: 2.5rem;
  }
  /* media Queries */
  @media screen and (max-width: 1120px) {
    font-size: 2rem;
  }
  /* media Queries */
  @media screen and (max-width: 920px) {
    font-size: 1.5rem;
    width: 35%;
  }
  /* media Queries */
  @media screen and (max-width: 512px) {
    width: 100%;
    font-size: 2.5rem;
  }
`;

export const MainContent = styled.div`
  width: 60%;
  padding: 0 3rem;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* media Queries */
  @media screen and (max-width: 920px) {
    padding: 0 2rem;
    width: 65%;
  }
  /* media Queries */
  @media screen and (max-width: 512px) {
    width: 100%;
    margin: 0;
    padding: 0;
    margin-top: 1rem;
  }
`;

export const MainParagraph = styled.p`
  opacity: 0.6;
  width: 100%;
  /* media Queries */
  @media screen and (max-width: 1120px) {
    font-size: 0.75rem;
  }
  /* media Queries */
  @media screen and (max-width: 512px) {
    font-size: 1rem;
  }
`;

export const MainButton = styled.button`
  width: 10rem;
  padding: 0.75rem 0;
  letter-spacing: 0.1rem;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: #222;
  background-color: hsl(5, 85%, 63%);
  color: #fff;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  align-self: flex-start;

  &:is(:hover, :focus) {
    background-color: #000;
    transition: background-color 0.3s ease;
  }

  /* media Queries */
  @media screen and (max-width: 1330px) {
    margin-top: 1rem;
  }
  @media screen and (max-width: 1120px) {
    font-size: 0.5rem;
  }
  /* media Queries */
  @media screen and (max-width: 512px) {
    font-size: 0.75rem;
  }
`;
