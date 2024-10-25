import React, { useState, useEffect } from "react";
import {
  Background,
  CenterColumn,
  NavcolumnContainer,
  Logo,
  Icon,
  NavItemBtn,
  NavBtnLink,
} from "./Navcolumn.elements";
import { Button } from "../../globalStyles";
import backgroundImg from "../../images/meal-prep-background-large.jpeg";

const Navcolumn = () => {
  const [button, setButton] = useState(true);

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
          </NavItemBtn>
        </CenterColumn>
      </Background>
    </>
  );
};

export default Navcolumn;
