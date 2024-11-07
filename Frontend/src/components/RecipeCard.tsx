import styled from "styled-components";
import image from "../images/bbq-chicken-pizza.jpeg";

interface Props {
  children?: string;
  className: string;
  onClick: () => void;
}

const StyledCardImage = styled.img`
  height: 160px;
  width: 100%;
`;

const ImageContainer = styled.div``;

const RecipeCard = ({ className }: Props) => {
  return (
    <>
      <div className={className}>
        <ImageContainer>
          <StyledCardImage src={image} alt="..." />
        </ImageContainer>
        <div>
          <h4>Card title</h4>
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
