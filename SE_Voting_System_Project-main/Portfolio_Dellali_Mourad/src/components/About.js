import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container, Section, Title, FlexContainer, ProfileImage, SectionHeading } from '../styles/StyledComponents';
import styled from 'styled-components';
import avatarImg from '../assets/avatar.svg';

const AboutContainer = styled(FlexContainer)`
  gap: 40px;
`;

const AboutContent = styled.div`
  flex: 2;
`;

const AboutImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const HighlightText = styled.span`
  color: var(--accent);
`;

const AboutText = styled.p`
  margin-bottom: 20px;
`;

const AboutList = styled.ul`
  list-style-position: inside;
  margin-top: 20px;
  
  li {
    margin-bottom: 15px;
    position: relative;
    padding-left: 25px;
    color: var(--text-secondary);
    
    &:before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--accent);
      font-size: 18px;
    }
    
    strong {
      color: var(--text-primary);
      margin-right: 6px;
    }
  }
`;

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <Section id="about" ref={ref}>
      <Container>
        <SectionHeading>
          <Title>About Me</Title>
        </SectionHeading>
        
        <AboutContainer 
          $mobileDirection="column" 
          $alignItems="flex-start" 
          as={motion.div}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <AboutImageContainer>
            <ProfileImage 
              as={motion.div}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <img src={avatarImg} alt="Mourad Dellali" />
            </ProfileImage>
          </AboutImageContainer>
          
          <AboutContent>
            <AboutText>
              I'm a <HighlightText>passionate web developer from Algeria</HighlightText> focused on building modern, efficient, and user-friendly digital solutions. My goal is to bring impactful ideas to life through clean code and intuitive design. I enjoy solving complex problems and turning them into simple, elegant interfaces.
            </AboutText>
            
            <AboutText>
              Currently, I'm working on expanding my skills in both frontend and backend development, with a particular focus on creating applications that can scale globally from Algeria.
            </AboutText>
            
            <AboutList>
              <li><strong>Languages:</strong> Arabic (native), French (fluent), English (advanced)</li>
              <li><strong>Location:</strong> Algeria</li>
              <li><strong>Interests:</strong> Entrepreneurship, tech startups, UI/UX, productivity systems</li>
            </AboutList>
          </AboutContent>
        </AboutContainer>
      </Container>
    </Section>
  );
};

export default About;