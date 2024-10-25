import styled from "styled-components";
import { LuSalad } from "react-icons/lu";
import { Container, Button } from "../../globalStyles";
import { Link } from "react-router-dom";
import background from "../../images/meal-prep-background-large.jpeg";

export const Background = styled.div`
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-attachment: fixed;
  justify-content: center;
  background-image: url(${background});
  z-index: 1;
`;

export const CenterColumn = styled.ul`
  background: #101522;
  height: 100vh;
  display: grid;
  justify-content: center;
  align-items: center;
  place-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 10%;
  z-index: 10;
  margin-left: 33%;
  margin-right: 33%;
  opacity: 90%;
`;

export const NavcolumnContainer = styled.div`
  display: flex;
  justify-content: space-between;
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

export const NavItemBtn = styled.li`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  padding-bottom: 20px;
`;

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
