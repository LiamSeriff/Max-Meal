interface Props {
  children?: string;
  className: string;
  onClick: () => void;
}

const RecipeCard = ({ className }: Props) => {
  return (
    <>
      <div className={className}>
        <img src="..." alt="..." />
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
