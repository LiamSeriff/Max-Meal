import styled from "styled-components";
import image from "../images/bbq-chicken-pizza.jpeg";

interface Props {
  children?: string;
  className: string;
  onClick: () => void;
}

const StyledCardImage = styled.img`
  width: 290px;
  height: 100px;
`;

const RecipeCard = ({ className }: Props) => {
  return (
    <>
      <div className={className}>
        <StyledCardImage src={image} alt="..." />
        <div>
          <h5>Card title</h5>
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#">Go somewhere</a>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
