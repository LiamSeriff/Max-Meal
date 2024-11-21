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
  top: 5vh;
  left: 35vw;
  height: 7vh;
  width: auto;
`;

export const Input = styled.input`
  position: relative;
  border-color: black;
  border-width: 3px;
  border-style: solid;
  margin-right: 5px;
  height: 7vh;
  width: 25vw;
  font-size: 1rem;
`;

export const StyledButton = styled(Button)`
  font-family: "Source Sans Pro", sans-serif;
  font-size: 1rem;
  color: white;
  background-color: #009f97;
  border-style: solid;
  border-color: black;
  border-width: 3px;
  border-radius: 5px;
  width: 10vw;
  height: 7vh;
  margin-right: 5px;

  &:hover {
    transition: all 0.3s ease-out;
    color: white;
    background-color: #009f97;
    border-color: white;
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
  background-color: #009f97;
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
  background-color: #009f97;
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
  height: 90vh;
  margin-left: 15vw;
  margin-top: 5vh;
  background-color: white;
  border-style: solid;
  border-color: black;
  border-width: 5px;
  border-radius: 20px;
  color: black;
  padding: 50px;
  overflow-y: auto;
`;

export const FilterDiv = styled.div`
  position: absolute;
  right: 4%;
  top: 2%;
  width: 25vw;
  height: 45vh;
  padding: 5px;
  background-color: white;
  z-index: 10;
  border-style: solid;
  border-color: black;
  border-width: 4px;
  border-radius: 3px;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const CheckboxInput = styled.input`
  margin: 4px;
  height: 20px;
  width: 20px;

  &:hover {
    cursor: pointer;
  }
`;

export const FilterLabel = styled.label`
  user-select: none;
  font-size: 20px;

  &:hover {
    cursor: pointer;
  }
`;

export const FilterFieldset = styled.fieldset`
  display: grid;
  grid-template-columns: repeat(auto-fill, 12.5vw 12.5vw);
`;

export const FilterHeader = styled.h3`
  user-select: none;
  text-decoration: underline;
`;

export const StyledForm = styled.form`
  height: 7vh;
`;
