import styled from "styled-components";

interface Props {
  children?: string;
  className: string;
  image: string;
  header: string;
  body: string;
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

const RecipeCard = ({ className, image, header, body }: Props) => {
  return (
    <>
      <div className={className}>
        <ImageContainer>
          <StyledCardImage src={image} alt="..." />
        </ImageContainer>
        <div>
          <StyledHeader4>{header}</StyledHeader4>
          <p>{body}</p>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
