// src/components/Skills.js
import React from 'react';
import styled from 'styled-components';

const SkillsSection = styled.section`
  padding: 2rem;
  background-color: #f9f9f9;
`;

const Skills = () => {
  return (
    <SkillsSection>
      <h2>Skills</h2>
      <p>Here are some of my skills.</p>
    </SkillsSection>
  );
};

export default Skills;
