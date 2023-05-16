import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import {
  NavContainer,
  NavItem,
  NavItems,
  CloseButton,
  BarsButton,
} from "./Nav.styled";
import WDotLogo from "../../assets/images/logo.svg";

export function Nav() {
  let navRef =
    useRef<HTMLUListElement>() as React.MutableRefObject<HTMLUListElement>;

  const showNav = () => {
    navRef.current.classList.toggle("resposive-nav");
  };

  return (
    <>
      <NavContainer>
        <img src={WDotLogo} alt="W. Logo" />
        <NavItems ref={navRef}>
          <NavItem>Home</NavItem>
          <NavItem>New</NavItem>
          <NavItem>Popular</NavItem>
          <NavItem>Trending</NavItem>
          <NavItem>Categories</NavItem>
          <CloseButton onClick={showNav}>
            <FaTimes />
          </CloseButton>
        </NavItems>
        <BarsButton onClick={showNav}>
          <FaBars />
        </BarsButton>
      </NavContainer>
    </>
  );
}
