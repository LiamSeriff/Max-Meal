import React from "react";
import {
  Background,
  Container,
  Header,
  Body,
  NavBtnLink,
  ContainerItem,
} from "./Data";

const UserHome = () => {
  return (
    <>
      <Background>
        <Container>
          <Header>Welcome User,</Header>
          <ContainerItem>
            <NavBtnLink to="/grocery-list">Grocery List</NavBtnLink>
            <Body>
              The Grocery List feature helps users organize and manage their
              shopping efficiently. Users can add ingredients directly from
              their saved recipies or manually input items.
            </Body>
          </ContainerItem>
          <ContainerItem>
            <NavBtnLink to="/recipes">Recipies</NavBtnLink>
            <Body>
              The Recipes section allows users to discover, save, and organize
              healthy recipes. Filter through a variety of meals, dietary
              preferences, and view detailed nutritional information.
            </Body>
          </ContainerItem>
          <ContainerItem>
            <NavBtnLink to="/meal-planner">Meal Planner</NavBtnLink>
            <Body>
              The Meal Planner helps users plan their meals ahead of time by
              creating a customization weekly or monthly schedule. Users can
              drag and drop saved recipes int to planner.
            </Body>
          </ContainerItem>
          <ContainerItem>
            <NavBtnLink to="/profile">Profile</NavBtnLink>
            <Body>
              The Profile section allows users to manage their personal
              information, dietary preferences, and saved settings. Users can
              update their health goals, track dietary progress, and personalize
              meal suggestions based on their nutritional needs.
            </Body>
          </ContainerItem>
        </Container>
      </Background>
    </>
  );
};

export default UserHome;
