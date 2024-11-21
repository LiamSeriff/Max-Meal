import styled from "styled-components";

interface Props {
  children?: string;
  className: string;
  image: string;
  header: string;
  ingredients: string;
}

const StyledCardImage = styled.img`
  height: 160px;
  width: 100%;
  border: black;
  border-style: solid;
  border-width: 2px;
  border-radius: 2px;
`;

const StyledHeader4 = styled.h4`
  text-decoration: underline;
`;

const ImageContainer = styled.div``;

const RecipeCard = ({ className, image, header, ingredients }: Props) => {
  return (
    <>
      <div className={className}>
        <ImageContainer>
          <StyledCardImage src={image} alt="Loading..." />
        </ImageContainer>
        <div>
          <StyledHeader4>{header}</StyledHeader4>
          <p>{ingredients}</p>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
