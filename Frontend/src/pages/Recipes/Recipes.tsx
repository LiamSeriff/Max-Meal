import React from "react";
import {
  PageContainer,
  Input,
  InputContainer,
  StyledButton,
  RecipeListContainer,
  StyledRecipeCard,
} from "./Recipes_Data";
import StyledMUICard from "../../components/MaterialUIRecipe";

const Recipes = () => {
  return (
    <>
      <PageContainer>
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
          <StyledRecipeCard
            className={StyledRecipeCard}
            onClick={() => console.log("Clicked")}
          ></StyledRecipeCard>
        </RecipeListContainer>
      </PageContainer>
    </>
  );
};

export default Recipes;
