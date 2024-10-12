// src/components/About.js
import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 2rem;
  background-color: #f9f9f9;
`;

const About = () => {
  return (
    <AboutSection>
      <h2>About Me</h2>
      <p>Hello! I'm Lawrence Abimbola Oyewusi, a mobile application developer and social work enthusiast. 
        It will interest you to know that I have a degree in Eletronic and Electrical Engineering from a Nigerian university
        I love creating beautiful and functional web applications.</p>
    </AboutSection>
  );

};

export default About;
