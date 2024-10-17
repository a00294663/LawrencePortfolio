// src/components/Contact.js
import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  padding: 2rem;
  background-color: #fff;
  text-align: center;
`;

const LinkedInLink = styled.a`
  color: #0073b1;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Contact = () => {
  return (
    <ContactSection>
      <h2>Contact</h2>
      <p>You can reach me at 
        <LinkedInLink href=" https://www.linkedin.com/in/abimbola-oyewusi-ance-742478313" target="_blank" rel="noopener noreferrer">
          437 868 1531
        </LinkedInLink> 
        and on email: bimbola04@gmail.com.
      </p>
    </ContactSection>
  );
};

export default Contact;
