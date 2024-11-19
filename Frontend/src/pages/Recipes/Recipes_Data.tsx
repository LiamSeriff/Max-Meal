import styled from "styled-components";
import Button from "../../components/Button";
import RecipeCard from "../../components/RecipeCard";

export const PageContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background: #252525;
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
  grid-row-gap: 10px;
  justify-content: space-evenly;
  top: 15%;
  width: 100vw;
  height: 85%;
  border: white;
  border-style: none;
  border-width: 3px;
`;

export const StyledRecipeCard = styled(RecipeCard)`
  background-color: teal;
  width: 300px;
  height: 300px;
  margin-left: 2px;
  border-color: black;
  border-style: solid;
  border-width: 0;
`;

export const RecipeCardContainer = styled.div`
  margin-top: 10px;
  width: 300px;
  height: 300px;
`;

export const StyledRecipeButton = styled(Button)`
  background-color: teal;
  border-style: solid;
  border-color: black;
  border-width: 3px;
  border-radius: 5px;
  width: 310px;
  height: 310px;

  &:hover {
    transition: all 0.3s ease-out;
    color: white;
    background-color: white;
  }
`;

export const BlurredDiv = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  color: white;
  backdrop-filter: blur(8px);
  z-index: 100;
`;

export const CloseButton = styled(Button)`
  position: absolute;
  color: white;
  font-size: 3rem;
  right: 5%;
  top: 5%;
  background: none;
  border: none;

  &:hover {
    color: black;
  }
`;

export const PopupDiv = styled.div`
  position: absolute;
  width: 70vw;
  height: 70vh;
  margin-left: 15vw;
  margin-top: 15vh;
  background-color: white;
  border-style: solid;
  border-color: black;
  border-width: 5px;
  border-radius: 20px;
`;

export const FilterDiv = styled.div`
  position: absolute;
  right: 5%;
  top: 2%;
  width: 450px;
  height: 400px;
  background-color: white;
  z-index: 10;
  border-style: solid;
  border-color: black;
  border-width: 4px;
  border-radius: 3px;
`;
