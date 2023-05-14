import { AsideContainer } from "./Aside.styled";
import { AsideTitle } from "./Aside.styled";
import { Article } from "./Aside.styled";
import { ArticleTitle } from "./Aside.styled";
import { ArticleParagraph } from "./Aside.styled";

function Aside() {
  return (
    <AsideContainer>
      <AsideTitle>New</AsideTitle>
      <Article>
        <ArticleTitle>Hydrogen VS Electric Cars</ArticleTitle>
        <ArticleParagraph>
          Will hydrogen-fueled cars ever catch up to EVs?
        </ArticleParagraph>
      </Article>
      <Article>
        <ArticleTitle>The Downsides of AI Artistry</ArticleTitle>
        <ArticleParagraph>
          What are the possible adverse effects of on-demand AI image
          generation?
        </ArticleParagraph>
      </Article>
      <Article>
        <ArticleTitle>Is VC Funding Drying Up?</ArticleTitle>
        <ArticleParagraph>
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </ArticleParagraph>
      </Article>
    </AsideContainer>
  );
}

export default Aside;
