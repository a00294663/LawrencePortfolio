// src/components/Contact.js
import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  padding: 2rem;
  background-color: #fff;
`;

const Contact = () => {
  return (
    <ContactSection>
      <h2>Contact</h2>
      <p>You can reach me at [Your Email].</p>
    </ContactSection>
  );
};

export default Contact;
