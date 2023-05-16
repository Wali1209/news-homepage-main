import { StyledNewsHomePage, CardContainer } from "./NewsHomePage.styled";
import { Nav } from "../navigation-bar/Nav";
import { Main } from "../main/Main";
import Aside from "../aside/Aside";
import Card from "../card/Card";
import retroPcs from "../../assets/images/image-retro-pcs.jpg";
import topLaptops from "../../assets/images/image-top-laptops.jpg";
import growthGaming from "../../assets/images/image-gaming-growth.jpg";
export function NewsHomePage() {
  return (
    <>
      <StyledNewsHomePage>
        <Nav />
        <div>
          <Main />
          <Aside />
        </div>
        <CardContainer>
          <Card imgSrc={retroPcs} cardNumber="01" heading="Reviving Retro PCs">
            What happens when old PCs are given modern upgrades?
          </Card>
          <Card
            imgSrc={topLaptops}
            cardNumber="02"
            heading="Top 10 Laptops of 2022"
          >
            Our best picks for various needs and budgets.
          </Card>
          <Card
            imgSrc={growthGaming}
            cardNumber="03"
            heading="The Growth of Gaming"
          >
            How the pandemic has sparked fresh opportunities.
          </Card>
        </CardContainer>
      </StyledNewsHomePage>
    </>
  );
}
