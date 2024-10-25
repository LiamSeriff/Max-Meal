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

const Login = () => {
  return (
    <>
      <Background>
        <CenterColumn>
          <Logo>
            <Icon />
            Login
          </Logo>
          <InputItem>
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
            <NavBtnLink to="/user-home">Login</NavBtnLink>
          </InputItem>
        </CenterColumn>
      </Background>
    </>
  );
};

export default Login;
