import { CardContainer } from "./Card.styled";
import { CardImage } from "./Card.styled";
import { CardContent } from "./Card.styled";
import { CardNumber } from "./Card.styled";
import { CardHeading } from "./Card.styled";
import { CardText } from "./Card.styled";
interface CardProps {
  imgSrc: string;
  cardNumber: string;
  heading: string;
  children?: React.ReactNode;
}
function Card({ imgSrc, cardNumber, heading, children }: CardProps) {
  return (
    <CardContainer>
      <CardImage src={imgSrc} alt="Card Image" />
      <CardContent>
        <CardNumber>{cardNumber}</CardNumber>
        <CardHeading>{heading}</CardHeading>
        <CardText>{children}</CardText>
      </CardContent>
    </CardContainer>
  );
}

export default Card;
