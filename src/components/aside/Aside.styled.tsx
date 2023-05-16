import styled from "styled-components";

export const AsideContainer = styled.aside`
  width: 25%;
  background-color: #000;
  color: #fff;
  padding: 2rem;

  /* media Queries */
  @media screen and (max-width: 1440px) {
    width: 35%;
  }
  @media screen and (max-width: 1120px) {
    padding: 1.5rem;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const AsideTitle = styled.h1`
  font-size: 2rem;
  color: hsl(35, 77%, 62%);

  /* media queries */
  @media screen and (max-width: 1120px) {
    font-size: 1.5rem;
  }
`;

export const Article = styled.article`
  &:not(:first-child) {
    margin-top: 2rem;
  }
  &:not(:last-child)::after {
    content: "";
    display: block;
    border-bottom: 1px solid hsla(36, 100%, 99%, 50%);
  }
`;

export const ArticleTitle = styled.h2`
  color: hsl(36, 100%, 99%);
  font-size: 1rem;
  font-weight: 800;
  margin: 1rem 0;
  cursor: pointer;
  &:hover {
    color: hsl(35, 77%, 62%);
    transition: color 0.3s ease;
  }

  /* media queries */
  @media screen and (max-width: 1120px) {
    font-size: 0.75rem;
  }
`;

export const ArticleParagraph = styled.p`
  font-size: 1rem;
  margin: 1rem 0;
  color: hsl(233, 8%, 79%);

  /* media queries */
  @media screen and (max-width: 1120px) {
    font-size: 0.75rem;
  }
`;
