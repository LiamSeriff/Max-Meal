import styled from "styled-components";

export const PageContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: tan;
`;

export const IngredientsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-y: auto;
  position: absolute;
  top: 15vh;
  left: 5vw;
  height: 70vh;
  width: 30vw;
  border: black solid 1px;
  padding: 10px;
`;

export const HeadingContainer = styled.div`
  position: absolute;
  top: 3vh;
  left: 5vw;
  height: 10vh;
  width: 30vw;
  border: black solid 1px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MyGroceryListContainer = styled.div`
  position: absolute;
  top: 3vh;
  left: 45vw;
  height: 82vh;
  width: 45vw;
  border: black solid 1px;
  overflow-y: auto;
  padding: 10px;
`;

export const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 2px solid black;
`;

export const Heading = styled.h1`
  font-size: 3rem;
  color: black;
`;

export const FilterButton = styled.button`
  background-color: teal;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: darkcyan;
  }
`;

export const IngredientItem = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
  font-size: 1.2rem;
`;

export const GrocerySection = styled.div`
  margin-bottom: 20px;

  h3 {
    font-size: 1.5rem;
    color: black;
    border-bottom: 1px solid black;
    padding-bottom: 5px;
  }

  img {
    display: block;
    margin-top: 10px;
    width: 80px;
    height: auto;
  }
`;
