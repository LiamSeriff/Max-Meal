import React from "react";
import {
  PageContainer,
  Background,
  ProfileDiv,
  ProfileHeaderContainer,
  ProfileHeader,
} from "./Profile_Data";

const Profile = () => {
  return (
    <>
      <Background>
        <ProfileDiv>
          <ProfileHeaderContainer>
            <ProfileHeader>Profile</ProfileHeader>
          </ProfileHeaderContainer>
        </ProfileDiv>
      </Background>
    </>
  );
};

export default Profile;
