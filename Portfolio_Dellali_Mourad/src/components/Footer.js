import React from 'react';
import { Container, Footer as StyledFooter, FlexContainer, SocialLinks } from '../styles/StyledComponents';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FiGlobe } from 'react-icons/fi';
import styled from 'styled-components';

const FooterText = styled.p`
  color: var(--text-secondary);
  font-size: 14px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexContainer 
          $justifyContent="space-between" 
          $alignItems="center"
          $mobileDirection="column-reverse"
          $gap="20px"
        >
          <FooterText>
            © {new Date().getFullYear()} Mourad Dellali. Built with care.
          </FooterText>
          
          <SocialLinks>
            <a href="https://github.com/mouraddellali" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub size={20} />
            </a>
            <a href="https://mouraddellali.dev" target="_blank" rel="noopener noreferrer" aria-label="Portfolio">
              <FiGlobe size={20} />
            </a>
            <a href="https://linkedin.com/in/mouraddellali" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn size={20} />
            </a>
          </SocialLinks>
        </FlexContainer>
      </Container>
    </StyledFooter>
  );
};

export default Footer;