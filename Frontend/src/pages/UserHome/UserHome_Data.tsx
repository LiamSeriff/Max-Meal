import styled from "styled-components";
import { Link } from "react-router-dom";
import background from "../../images/ingredients-background.jpg";

export const Background = styled.div`
  background-size: cover;
  background-attachment: fixed;
  justify-content: center;
  background-image: url(${background});
`;

export const Container = styled.ul`
  position: relative;
  display: grid;
  grid-row-gap: 20px;
  align-items: center;
  position: sticky;
  height: 100vh;
  width: auto;
  margin-left: 40%;
  background: #101522;
  opacity: 90%;

  @media screen and (max-width: 800px) {
    margin-left: 30%;
  }
  @media screen and (max-width: 600px) {
    margin-left: 20%;
  }
`;

export const Header = styled.h1`
  position: absolute;
  top: 3px;
  left: 30px;
  color: white;
  font-size: 3rem;
`;

export const ContainerItem = styled.li`
  display: block;
  align-items: center;
  padding-bottom: 30px;
  margin: 0px;
`;

export const Body = styled.p`
  position: absolute;
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: left;
  text-decoration: none;
  color: white;
  font-size: 1.3rem;

  @media screen and (max-height: 600px) {
    font-size: 1rem;
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  position: static;
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
