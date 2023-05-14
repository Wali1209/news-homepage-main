import Card from "../card/Card";
import { SectionContainer } from "./CardSection.styled";
//importing images
import retroPcs from "../../assets/images/image-top-laptops.jpg";
import topLaptops from "../../assets/images/image-top-laptops.jpg";
import gamingGrowth from "../../assets/images/image-gaming-growth.jpg";
export function CardSection() {
  return (
    <SectionContainer>
      <Card imgSrc={retroPcs} cardNumber="01" heading="Reviving Retro PCs">
        What happens when old PCs are given modern upgrades?
      </Card>
      <Card
        imgSrc={topLaptops}
        cardNumber="02"
        heading="Top 10 Laptops of 2022s"
      >
        Our best picks for various needs and budgets.
      </Card>
      <Card
        imgSrc={gamingGrowth}
        cardNumber="03"
        heading="The Growth of Gaming"
      >
        How the pandemic has sparked fresh opportunities
      </Card>
    </SectionContainer>
  );
}
