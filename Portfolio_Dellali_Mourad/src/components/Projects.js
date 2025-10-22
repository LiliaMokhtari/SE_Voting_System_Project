import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container, Section, Grid, Card, Badge, Title, SubTitle, SectionHeading } from '../styles/StyledComponents';
import styled from 'styled-components';

const ProjectCard = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--bg-secondary);
  transition: all 0.3s ease;
  position: relative;
`;

const ProjectTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 20px;
  color: var(--text-primary);
  font-weight: 600;
`;

const ProjectDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 20px;
  font-size: 15px;
  line-height: 1.6;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const ProjectLinks = styled.div`
  margin-top: auto;
  
  a {
    display: inline-block;
    background: var(--accent);
    color: white;
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.3s ease;
    text-align: center;
    
    &:hover {
      background: #6b4aee;
      transform: translateY(-2px);
    }
  }
`;

const ProjectsContainer = styled.div`
  margin-top: 50px;
`;

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  
  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      }
    },
  };
  
  const projects = [
    {
      title: 'Crop Prediction and Classification',
      description: 'ML project for classifying and predicting crop yields. See repository for models and notebooks.',
      tags: ['Python', 'Scikit-learn', 'TensorFlow', 'Data Science'],
      github: 'https://github.com/Aiimene/Crop-Prediction-and-Classification'
    },
    {
      title: 'El_Do_Gears (EldoGears)',
      description: 'Full-stack project with product design available in Figma. Repository and design link included.',
      tags: ['React', 'Node.js', 'Design'],
      github: 'https://github.com/ENSIA-AI/El_Do_Gears',
      design: 'https://www.figma.com/design/RSX5u1fy7ehzIF57cNAFTb/EldoGears?node-id=0-1&t=97L51xiaTPzgKroq-1'
    },
    {
      title: 'WordPress Plugin — LeadForm (example)',
      description: 'A WordPress plugin example (LeadForm). Product page and screenshots included; this highlights plugin integration and usage.',
      tags: ['WordPress', 'PHP', 'Plugin'],
      product: 'https://optimaxi.shop/product/%D8%AE%D9%84%D8%A7%D8%B7-%D9%85%D8%B7%D8%A8%D8%AE-%D9%85%D8%AA%D8%B9%D8%AF%D8%AF-%D8%A7%D9%84%D9%88%D8%B8%D8%A7%D8%A6%D9%81-%D9%82%D9%88%D8%A9-800-%D9%88%D8%A7%D8%B7%D8%8C-6-%D9%85%D9%84',
      github: 'https://github.com/Mourad-Dellali/lead-form-plugin'
    },
    {
      title: 'Interactive CodePen Demo',
      description: 'Small interactive front-end demo hosted on CodePen.',
      tags: ['JavaScript', 'UI', 'CodePen'],
      live: 'https://codepen.io/Law7/pen/ExMaaGw'
    }
  ];

  return (
    <Section id="projects">
      <Container>
        <SectionHeading>
          <Title>Selected Projects</Title>
          <SubTitle>A selection of recent work in UI, front-end development, and design.</SubTitle>
        </SectionHeading>
        
        <ProjectsContainer 
          ref={ref}
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          <Grid>
            {projects.map((project, index) => (
              <ProjectCard 
                key={index}
                as={motion.div}
                variants={cardVariants}
              >
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTags>
                  {project.tags && project.tags.map((tag, i) => (
                    <Badge key={i}>{tag}</Badge>
                  ))}
                </ProjectTags>
                <ProjectLinks>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                  )}
                  {project.design && (
                    <a href={project.design} target="_blank" rel="noopener noreferrer" style={{ marginLeft: 8 }}>Design</a>
                  )}
                  {project.product && (
                    <a href={project.product} target="_blank" rel="noopener noreferrer" style={{ marginLeft: 8 }}>Product</a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" style={{ marginLeft: 8 }}>Live</a>
                  )}
                  {!project.github && !project.design && !project.product && !project.live && (
                    <a href={project.link || '#'} target="_blank" rel="noopener noreferrer">View Project</a>
                  )}
                </ProjectLinks>
              </ProjectCard>
            ))}
          </Grid>
        </ProjectsContainer>
      </Container>
    </Section>
  );
};

export default Projects;