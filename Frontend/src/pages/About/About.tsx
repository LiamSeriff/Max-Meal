import React from "react";
import {
  PageContainer,
  Background,
  CenterColumn,
  HeaderContainer,
  Header,
  Body,
  BodyContainer,
  LinkContainer,
  NavBtnLink,
} from "./About_Data";

const About = () => {
  return (
    <>
      <Background>
        <CenterColumn>
          <HeaderContainer>
            <Header>About Us</Header>
          </HeaderContainer>
          <BodyContainer>
            <Body>
              About us at Max Meal, we understand that eating healthy can be
              tough, especially when you have a busy schedule or just don't know
              where to start. That's why we created this platform—to make
              healthy eating easier and more manageable for everyone. Whether
              you're trying to lose weight, maintain a specific diet, or just
              find new recipe ideas, we've got tools to help you out.
            </Body>
            <Body>
              Max Meal lets you search for recipes, save your favorites, plan
              meals using a calendar, and even generate grocery lists based on
              what you want to cook. We want to make sure that healthy eating
              isn't something you have to stress over, but something that fits
              into your daily routine. Our goal is to make eating well something
              anyone can do, no matter how busy life gets. With Max Meal, you
              can spend less time worrying about what to eat and more time
              enjoying your meals!
            </Body>
          </BodyContainer>
          <LinkContainer>
            <NavBtnLink to="/">Home Page</NavBtnLink>
            <NavBtnLink to="/login">Login</NavBtnLink>
            <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>
          </LinkContainer>
        </CenterColumn>
      </Background>
    </>
  );
};

export default About;
