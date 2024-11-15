import styled from "styled-components";
import { LuSalad } from "react-icons/lu";
import { Link } from "react-router-dom";
import background from "../../images/meal-prep-background-large.jpeg";

export const Background = styled.div`
  background-size: cover;
  background-position-y: center;
  background-attachment: scroll;
  justify-content: center;
  background-image: url(${background});
  z-index: 1;
`;

export const CenterColumn = styled.div`
  background: #101522;
  height: 100vh;
  display: grid;
  grid-auto-rows: 200px;
  justify-content: center;
  align-items: center;
  place-items: center;
  font-size: 1.2rem;
  position: sticky;
  z-index: 10;
  margin-left: 33%;
  margin-right: 33%;
  opacity: 90%;
`;

export const Logo = styled.h1`
  color: white;
  justify-self: top;
  text-decoration: none;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
`;

export const Icon = styled(LuSalad)`
  margin-right: 0.5rem;
`;

export const InputItem = styled.li`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
`;

export const Input = styled.input``;

export const NavBtnLink = styled(Link)`
  display: flex;
  position: sticky;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 60px;
  width: 190px;
  border: white;
  color: white;
  font-size: 1.5rem;
  border-style: solid;
  outline: none;
`;
