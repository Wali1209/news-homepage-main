import styled from "styled-components";

export const MainContainer = styled.main`
  width: 75%;
  display: inline-block;
  margin-right: 2rem;
  > div {
    display: flex;
    width: 100%;
    padding: 2rem 0;
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
`;

export const MainContent = styled.div`
  width: 60%;
  padding: 0 3rem;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
`;

export const MainParagraph = styled.p`
  opacity: 0.6;
  width: 100%;
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
`;
