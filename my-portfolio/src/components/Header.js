// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  background-color: #1e90ff; /* Change this to your preferred color */
  color: white;

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      color: #f0f8ff; /* Change to a lighter shade for hover effect */
    }
  }
`;

const Header = () => {
  return (
    <Nav>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/contact">Contact</Link>
    </Nav>
  );
};

export default Header;
