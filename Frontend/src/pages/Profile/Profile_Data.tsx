import styled from "styled-components";
import background from "../../images/profile-background.jpg";

export const PageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: tan;
`;

export const Background = styled.div`
  position: relative;
  height: 100vh;
  background-size: cover;
  background-position-y: center;
  justify-content: center;
  background-image: url(${background});
  z-index: 1;
`;

export const ProfileDiv = styled.div`
  position: relative;
  border: white;
  border-style: solid;
  border-width: 3px;
  width: 65vw;
  height: 85vh;
  left: 35vw;
  top: 15vh;
`;

export const ProfileHeaderContainer = styled.div`
  position: absolute;
  border: white;
  opacity: 90%;
  border-style: solid;
  border-width: 3px;
  width: 15%;
  height: 10%;
  left: 5%;
  top: 7%;
  text-align: center;
`;

export const ProfileHeader = styled.h1`
  color: black;
  text-decoration: underline;
  font-size: 3rem;
`;
