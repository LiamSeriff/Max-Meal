import React from "react";
import {
  PageContainer,
  Input,
  InputContainer,
  StyledButton,
  RecipeListContainer,
  StyledRecipeCard,
} from "./Recipes_Data";
import ActionAreaCard from "../../components/MaterialUIRecipe";
import { Button } from "@mui/material";

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
            className={StyledButton}
            onClick={() => console.log("Clicked")}
          ></StyledRecipeCard>
          <ActionAreaCard />
        </RecipeListContainer>
      </PageContainer>
    </>
  );
};

export default Recipes;
