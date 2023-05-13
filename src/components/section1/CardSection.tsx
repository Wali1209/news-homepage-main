import Card from "../card/Card";
import { SectionContainer } from "./CardSection.styled";
//importing images
import retroPcs from "../../assets/images/image-top-laptops.jpg";
import topLaptops from "../../assets/images/image-top-laptops.jpg";
import gamingGrowth from "../../assets/images/image-gaming-growth.jpg";
export function CardSection() {
  return (
    <SectionContainer>
      <Card imgSrc={retroPcs} cardNumber="1" heading="Reviving Retro PCs">
        What happens when old PCs are given modern upgrades?
      </Card>
    </SectionContainer>
  );
}
