import { NavContainer } from "./Nav.styled";
import { NavItems } from "./Nav.styled";
import { NavItem } from "./Nav.styled";
import WDotLogo from "../../assets/images/logo.svg";
export function Nav() {
  return (
    <>
      <NavContainer>
        <img src={WDotLogo} alt="W. Logo" />
        <NavItems>
          <NavItem>Home</NavItem>
          <NavItem>New</NavItem>
          <NavItem>Popular</NavItem>
          <NavItem>Trending</NavItem>
          <NavItem>Categories</NavItem>
        </NavItems>
      </NavContainer>
    </>
  );
}
