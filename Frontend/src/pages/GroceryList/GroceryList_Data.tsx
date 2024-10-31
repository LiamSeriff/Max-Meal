import styled from "styled-components";

export const PageContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: tan;
`;

export const IngredientsContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 15vh;
  left: 5vw;
  height: 70vh;
  width: 30vw;
  border: black;
  border-style: solid;
`;

export const HeadingContainer = styled.div`
  position: absolute;
  top: 3vh;
  left: 5vw;
  height: 10vh;
  width: 30vw;
  border: black;
  border-style: solid;
  display: flex;
  justify-content: center;
`;

export const MyGroceryListContainer = styled.div`
  position: absolute;
  top: 3vh;
  left: 45vw;
  height: 82vh;
  width: 45vw;
  border: black;
  border-style: solid;
`;

export const InputContainer = styled.div`
  position: absolute;
  top: 2%;
  left: 2%;
  height: 5%;
  width: 96%;
`;

export const Input = styled.input`
  border-color: black;
  border-width: 3px;
  border-style: solid;
`;

export const Heading = styled.h1`
  position: absolute;
  top: 25%;
  font-size: 3rem;
  color: black;
`;
