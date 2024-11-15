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
  button,
} from "./SignUp_Data";

const SignUp = () => {    
  const [email, setEmail] = useState("");  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async (e: React.FormEvent) => {
    console.log("handlesubmit before try message");
    e.preventDefault();
  
    const userData = { email, username, password };

    try {
      console.log("trying to send a post request using axios");
      const response = await axios.post('http://localhost:5001/api/signup', userData);
      console.log("trying to send a post request using axios");
      console.log(response.data);
    } catch(error) {
      console.log("axios failed in the signup tsx");
      console.error("There was an error signing up:", error);
      alert("Error signing up!");
    }
  };

  return (
    <>
      <Background>
        <CenterColumn>
          <Logo>
            <Icon />
            Sign Up
          </Logo>
          <form onSubmit={handleSubmit}>
            <InputItem>
              <Input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="text" // Changed to "text" for username field
                className="form-control"
                id="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputItem>
            <button type="submit">Sign Up</button>
          </form>
          <NavBtnLink to="/login">Already have an account? Log in</NavBtnLink> {/* Optional navigation link */}
        </CenterColumn>
      </Background>
    </>
  );
};

export default SignUp;
