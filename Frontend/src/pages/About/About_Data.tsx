import styled from "styled-components";
import { Link } from "react-router-dom";
import background from "../../images/ingredients-background.jpg";

export const PageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: tan;
`;

export const Background = styled.div`
  position: relative;
  background-size: cover;
  background-position-y: center;
  justify-content: center;
  background-image: url(${background});
`;

export const CenterColumn = styled.div`
  position: relative;
  background: #101522;
  height: 100vh;
  width: 60%;
  display: grid;
  font-size: 1.2rem;
  margin-left: 20%;
  opacity: 95%;
`;

export const HeaderContainer = styled.div`
  position: absolute;
  border-bottom: 3px solid;
  border-color: white;
  margin-top: 20px;
  width: 100%;
  text-align: center;
  opacity: 1 !important;
`;

export const Header = styled.h1`
  color: white;
  font-size: 3rem;
`;

export const BodyContainer = styled.div`
  background: #101522;
  position: absolute;
  margin-top: 10%;
  text-align: center;
  margin-left: 15%;
  margin-right: 15%;
`;

export const Body = styled.p`
  color: white;
  font-size: 1.5rem;
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

export const LinkContainer = styled.div`
  position: absolute;
  display: inline-flex;
  justify-content: space-evenly;
  place-items: center;
  margin-top: 60%;
  width: 100%;
`;
