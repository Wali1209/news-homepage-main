import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 3rem 0;
  position: relative;
`;

export const NavItems = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  &:not(:first-child) {
    margin-left: 2.5rem;
  }
  &.resposive-nav {
    transform: translateX(0%);
    transition: 1s;
  }
  /* media queries */
  @media screen and (max-width: 768px) {
    &:not(:first-child) {
      margin-left: 1.5rem;
    }
    @media screen and (max-width: 620px) {
      height: 100%;
      width: 80%;
      font-weight: 700;
      padding: 10rem 1.5rem;
      position: fixed;
      top: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      background-color: #fff;
      z-index: 999;
      transform: translateX(100%);
      transition: transform 0.1s ease;
    }
  }
`;

export const NavItem = styled.li`
  margin: 0 1.5rem;
  opacity: 0.8;
  cursor: pointer;

  &:hover {
    opacity: 1;
    color: hsl(5, 85%, 63%);
    transition: all 0.3 ease;
  }
  @media screen and (max-width: 960px) {
    margin: 0 1rem;
  }
  /* media queries */
  @media screen and (max-width: 620px) {
    margin-bottom: 2rem;
  }
`;

export const CloseButton = styled.button`
  font-size: 2rem;
  visibility: hidden;
  opacity: 0;
  display: none;
  border: none;
  background-color: #fff;
  color: #000;

  /* media Queries */
  @media screen and (max-width: 620px) {
    visibility: visible;
    opacity: 1;
    display: inline-block;
    position: absolute;
    top: 2rem;
    right: 2rem;
    font-weight: lighter;
  }
`;
export const BarsButton = styled.button`
  font-size: 2rem;
  visibility: hidden;
  opacity: 0;
  display: none;

  /* media Queries */
  @media screen and (max-width: 620px) {
    visibility: visible;
    opacity: 1;
    display: inline-block;
    background-color: #fff;
    border: none;
    transform: scaleX(2);
  }
`;
