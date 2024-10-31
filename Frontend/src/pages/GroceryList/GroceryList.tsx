import React from "react";
import {
  PageContainer,
  IngredientsContainer,
  HeadingContainer,
  Heading,
  MyGroceryListContainer,
  InputContainer,
  Input,
} from "./GroceryList_Data";

const GroceryList = () => {
  return (
    <>
      <PageContainer>
        <HeadingContainer>
          <Heading>GROCERY LIST</Heading>
        </HeadingContainer>
        <MyGroceryListContainer>b</MyGroceryListContainer>
        <IngredientsContainer>
          <InputContainer>
            <Input
              type="search"
              className="form-control"
              id="ingredients search"
              placeholder="Search ingredients"
            ></Input>
          </InputContainer>
        </IngredientsContainer>
      </PageContainer>
    </>
  );
};

export default GroceryList;
