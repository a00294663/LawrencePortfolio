// src/components/Projects.js
import React from 'react';
import styled from 'styled-components';

const ProjectsSection = styled.section`
  padding: 2rem;
  background-color: #fff;
`;

const Projects = () => {
  return (
    <ProjectsSection>
      <h2>Projects</h2>
      <p>Here are some of my projects.</p>
    </ProjectsSection>
  );
};

export default Projects;
