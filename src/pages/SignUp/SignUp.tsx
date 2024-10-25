import React from "react";
import {
  Background,
  CenterColumn,
  Logo,
  Icon,
  InputItem,
  Input,
  NavBtnLink,
} from "./Data";

const SignUp = () => {
  return (
    <>
      <Background>
        <CenterColumn>
          <Logo>
            <Icon />
            Sign Up
          </Logo>
          <InputItem>
            <Input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
            ></Input>
            <Input
              type="username"
              className="form-control"
              id="username"
              placeholder="Username"
            ></Input>
            <Input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
            ></Input>
            <NavBtnLink to="/login">Sign Up!</NavBtnLink>
          </InputItem>
        </CenterColumn>
      </Background>
    </>
  );
};

export default SignUp;
