import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import {
  PageContainer,
  Input,
  InputContainer,
  StyledButton,
  RecipeListContainer,
  StyledRecipeCard,
  StyledRecipeButton,
  BlurredDiv,
  CloseButton,
  PopupDiv,
} from "./Recipes_Data";

const RecipeList = [
  {
    image: "src/images/bbq-chicken-pizza.jpeg",
    header: "BBQ Chicken Pizza",
    body: "BBQ Chicken pizza is...",
    tags: [],
  },
  {
    image: "src/images/cheese-pizza.jpg",
    header: "Cheese Pizza",
    body: "Cheese pizza is...",
    tags: ["Vegetarian"],
  },
  {
    image: "src/images/pepperoni-pizza.jpeg",
    header: "Pepperoni Pizza",
    body: "Pepperoni pizza is...",
    tags: [],
  },
  {
    image: "src/images/sausage-pizza.jpeg",
    header: "Sausage Pizza",
    body: "Sausage pizza is...",
    tags: [],
  },
  {
    image: "src/images/supreme-pizza.jpeg",
    header: "Supreme Pizza",
    body: "Supreme pizza is...",
    tags: [],
  },
  {
    image: "src/images/veggie-pizza.jpeg",
    header: "Veggie Pizza",
    body: "Veggie pizza is...",
    tags: ["Vegetarian"],
  },
];

function RecipePopup() {
  return console.log("clicked");
}

const Recipes = () => {
  const [open, setOpen] = useState(false);
  const [recipeList, setRecipeList] = useState(RecipeList);

  return (
    <>
      <PageContainer>
        {open && (
          <BlurredDiv>
            <CloseButton className={CloseButton} onClick={() => setOpen(!open)}>
              <MdOutlineClose />
            </CloseButton>
            <PopupDiv></PopupDiv>
          </BlurredDiv>
        )}
        <InputContainer>
          <Input
            type="search"
            className="form-control"
            id="recipe search"
            placeholder="Search Recipes"
          ></Input>
          <StyledButton
            className={StyledButton}
            onClick={() => console.log("Clicked")}
          >
            Filter
          </StyledButton>
        </InputContainer>
        <RecipeListContainer>
          {RecipeList.map((section, index) => (
            <StyledRecipeButton
              className={StyledRecipeButton}
              onClick={() => setOpen(!open)}
            >
              <StyledRecipeCard
                className={StyledRecipeCard}
                image={section.image}
                header={section.header}
                body={section.body}
              ></StyledRecipeCard>
            </StyledRecipeButton>
          ))}
        </RecipeListContainer>
      </PageContainer>
    </>
  );
};

export default Recipes;
