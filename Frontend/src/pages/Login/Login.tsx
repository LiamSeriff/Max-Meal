import React, { useState } from "react";
import axios from "axios";
import {
  Background,
  CenterColumn,
  Logo,
  Icon,
  InputItem,
  Input,
  NavBtnLink,
} from "./Login_Data";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5001/api/login", { username, password });
      
      if (response.data.success) {
        // If login is successful, navigate to the user's home page
        navigate("/user-home");
      } else {
        alert("Login failed. Please check your username and password.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Error during login!");
    }
  };

  return (
    <>
      <Background>
        <CenterColumn>
          <Logo>
            <Icon />
            Login
          </Logo>
          <form onSubmit={handleLogin}>
            <InputItem>
              <Input
                type="text"
                id="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Login</button>
            </InputItem>
          </form>
        </CenterColumn>
      </Background>
    </>
  );
};

export default Login;
