// src/components/About.js
import React from 'react';
import styled from 'styled-components';
import profilePic from '/workspaces/LawrencePortfolio/my-portfolio/src/components/Assets/profile-pic.jpg';

const AboutSection = styled.section`
  padding: 2rem;
  background-color: #ffffff; /* Changed to white */
  text-align: center;
`;

const ProfileImage = styled.img`
  width: 150px;
  border-radius: 50%;
  margin-top: 1rem;
  border: 2px solid #ddd;
`;

const About = () => {
  return (
    <AboutSection>
      <h2>About Me</h2>
      <ProfileImage src={profilePic} alt="Profile" />
      <p>Hello! I'm Lawrence Abimbola Oyewusi, a mobile application developer and social work enthusiast. 
        It will interest you to know that I have a degree in Electronic and Electrical Engineering from a Nigerian university.
        I love creating beautiful and functional web applications.</p>
    </AboutSection>
  );
};

export default About;
