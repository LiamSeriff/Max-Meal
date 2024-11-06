import React from "react";
import {
  Background,
  CenterColumn,
  NavcolumnContainer,
  Logo,
  Icon,
  NavItemBtn,
  NavBtnLink,
  AboutBtn,
  AboutBtnLink,
} from "./Home_Data";
import { Button } from "../../globalStyles";
import backgroundImg from "../../images/meal-prep-background-large.jpeg";

const Home = () => {
  return (
    <>
      <Background>
        <AboutBtn>
          <AboutBtnLink to="/about">About</AboutBtnLink>
        </AboutBtn>
        <CenterColumn>
          <Logo>
            <Icon />
            Max Meal
          </Logo>
          <NavItemBtn>
            <NavBtnLink to="/login">Login</NavBtnLink>
            <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>
          </NavItemBtn>
        </CenterColumn>
      </Background>
    </>
  );
};

export default Home;
