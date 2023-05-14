import { MainContainer } from "./Main.styled";
import { MainImage } from "./Main.styled";
import { MainTitle } from "./Main.styled";
import { MainParagraph } from "./Main.styled";
import { MainContent } from "./Main.styled";
import { MainButton } from "./Main.styled";
import ImgWeb3 from "../../assets/images/image-web-3-desktop.jpg";
export function Main() {
  return (
    <MainContainer>
      <MainImage src={ImgWeb3} alt="Image-web-3" />
      <div>
        <MainTitle>
          The Bright <br /> Future of Web 3.0?
        </MainTitle>
        <MainContent>
          <MainParagraph>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </MainParagraph>
          <MainButton>READ MORE</MainButton>
        </MainContent>
      </div>
    </MainContainer>
  );
}
