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

const Home = () => {
  return (
    <>
      <Background>
        <CenterColumn>
          <Logo>
            <Icon />
            Max Meal
          </Logo>
          <NavItemBtn>
            <NavBtnLink to="/login">Login</NavBtnLink>
            <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>
            <AboutBtnLink to="/about">About</AboutBtnLink>
          </NavItemBtn>
        </CenterColumn>
      </Background>
    </>
  );
};

export default Home;
