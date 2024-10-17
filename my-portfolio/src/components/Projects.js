// src/components/Projects.js
import React from 'react';
import styled from 'styled-components';
import serenifyIcon from '/workspaces/LawrencePortfolio/my-portfolio/src/components/Assets/serenfify_logo.png'; // Replace with actual path
import receiptOrganizerIcon from '/workspaces/LawrencePortfolio/my-portfolio/src/components/Assets/Receipt Organizer.jpg';
import multiCalculatorIcon from '/workspaces/LawrencePortfolio/my-portfolio/src/components/Assets/multicalcualtor.jpg';
import weatherMonitoringIcon from '/workspaces/LawrencePortfolio/my-portfolio/src/components/Assets/weather monitoring system.jpg';

const ProjectsSection = styled.section`
  padding: 2rem;
  background-color: #fff;
  text-align: center;
`;

const ProjectItem = styled.div`
  margin: 1rem 0;
`;

const ProjectImage = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 10px;
  border-radius: 8px;
`;

const Projects = () => {
  return (
    <ProjectsSection>
      <h2>Projects</h2>
      <ProjectItem>
        <ProjectImage src={serenifyIcon} alt="Serenify App" />
        <h3>Serenify App</h3>
        <p>A meditation app to help you relax and unwind.</p>
      </ProjectItem>
      <ProjectItem>
        <ProjectImage src={receiptOrganizerIcon} alt="Receipt Organizer" />
        <h3>Receipt Organizer</h3>
        <p>An app to organize and track your receipts digitally.</p>
      </ProjectItem>
      <ProjectItem>
        <ProjectImage src={multiCalculatorIcon} alt="MultiCalculator" />
        <h3>MultiCalculator</h3>
        <p>A versatile calculator that supports various operations.</p>
      </ProjectItem>
      <ProjectItem>
        <ProjectImage src={weatherMonitoringIcon} alt="Weather Monitoring System" />
        <h3>Weather Monitoring System</h3>
        <p>A system to track and monitor weather conditions.</p>
      </ProjectItem>
    </ProjectsSection>
  );
};

export default Projects;
