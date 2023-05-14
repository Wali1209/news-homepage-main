import { Nav } from "../navigation-bar/Nav";
import { StyledNewsHomePage } from "./NewsHomePage.styled";
import { Main } from "../main/Main";
import Aside from "../aside/Aside";
import { CardSection } from "../section1/CardSection";
export function NewsHomePage() {
  return (
    <>
      <StyledNewsHomePage>
        <Nav />
        <div>
          <Main />
          <Aside />
        </div>
        <CardSection />
      </StyledNewsHomePage>
    </>
  );
}
