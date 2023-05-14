import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 3rem 0;
`;

export const NavItems = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  :not(:first-child) {
    margin-left: 2.5rem;
  }
`;

export const NavItem = styled.li`
  opacity: 0.8;
  cursor: pointer;
  &:hover {
    opacity: 1;
    color: hsl(5, 85%, 63%);
    transition: all 0.3 ease;
  }
`;
