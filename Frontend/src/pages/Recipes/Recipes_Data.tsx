import styled from "styled-components";
import Button from "../../components/Button";
import RecipeCard from "../../components/RecipeCard";

export const PageContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: tan;
`;

export const InputContainer = styled.div`
  position: absolute;
  display: flex;
  top: 5%;
  left: 30%;
  height: 60px;
  width: 40%;
`;

export const Input = styled.input`
  border-color: black;
  border-width: 3px;
  border-style: solid;
  margin-right: 5px;
`;

export const StyledButton = styled(Button)`
  font-family: "Source Sans Pro", sans-serif;
  font-size: 16px;
  color: white;
  background-color: teal;
  border-style: solid;
  border-color: black;
  border-width: 3px;
  border-radius: 5px;
  width: 70px;

  &:hover {
    transition: all 0.3s ease-out;
    color: white;
    background-color: #007777;
  }
`;

export const RecipeListContainer = styled.div`
  position: absolute;
  display: grid;
  overflow-y: auto;
  grid-template-columns: repeat(auto-fill, 300px);
  justify-content: space-evenly;
  top: 15%;
  width: 100vw;
  height: 85%;
  border: white;
  border-style: solid;
  border-width: 3px;
`;

export const StyledRecipeCard = styled(RecipeCard)`
  background-color: coral;
  width: 300px;
  height: 300px;
  margin: 5px;
  border-color: black;
  border-style: solid;
  border-width: 2px;
`;
