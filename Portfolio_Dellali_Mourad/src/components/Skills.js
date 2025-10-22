import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container, Section, Badge, Title, SectionHeading, SkillCategory, SkillsContainer } from '../styles/StyledComponents';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut'
      }
    },
  };

  const skills = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'React'],
    backend: ['Node.js', 'Express', 'PHP', 'Laravel'],
    database: ['MySQL', 'MongoDB'],
    tools: ['Git', 'VS Code', 'Figma'],
    cs_fundamentals: [
      'C++',
      'C',
      'Data Structures',
      'Algorithms',
      'Discrete Mathematics',
      'Operating Systems',
      'Computer Networks',
      'Databases',
      'Software Engineering',
      'Linear Algebra',
      'Calculus',
      'Probability & Statistics',
      'Object Oriented Programming',
      'Compilers (intro)',
      'AI / Machine Learning (basics)'
    ],
    languages: ['Python', 'Java', 'C#', 'Go', 'Rust', 'C++'],
    frameworks: ['React', 'Next.js', 'Express', 'Django', 'Laravel'],
    devops: ['Docker', 'Kubernetes', 'GitHub Actions', 'CI/CD', 'AWS (EC2, S3)'],
    testing: ['Jest', 'Mocha', 'Cypress', 'Selenium'],
    mobile: ['React Native', 'Flutter (basics)'],
    accessibility: ['WCAG', 'ARIA', 'a11y testing'],
    data_ml: ['Pandas', 'NumPy', 'scikit-learn', 'TensorFlow', 'PyTorch']
  };

  return (
    <Section id="skills" ref={ref}>
      <Container>
        <SectionHeading>
          <Title>Skills</Title>
        </SectionHeading>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          <SkillCategory as={motion.div} variants={itemVariants}>
            <h3>Frontend</h3>
            <SkillsContainer>
              {skills.frontend.map((skill, index) => (
                <Badge 
                  as={motion.span} 
                  key={index}
                  variants={itemVariants}
                  $primary={true}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </Badge>
              ))}
            </SkillsContainer>
          </SkillCategory>
          
          <SkillCategory as={motion.div} variants={itemVariants}>
            <h3>Backend</h3>
            <SkillsContainer>
              {skills.backend.map((skill, index) => (
                <Badge 
                  as={motion.span} 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </Badge>
              ))}
            </SkillsContainer>
          </SkillCategory>
          
          <SkillCategory as={motion.div} variants={itemVariants}>
            <h3>Database</h3>
            <SkillsContainer>
              {skills.database.map((skill, index) => (
                <Badge 
                  as={motion.span} 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </Badge>
              ))}
            </SkillsContainer>
          </SkillCategory>
          
          <SkillCategory as={motion.div} variants={itemVariants}>
            <h3>Tools</h3>
            <SkillsContainer>
              {skills.tools.map((skill, index) => (
                <Badge 
                  as={motion.span} 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </Badge>
              ))}
            </SkillsContainer>
          </SkillCategory>

          <SkillCategory as={motion.div} variants={itemVariants}>
            <h3>Languages & Frameworks</h3>
            <SkillsContainer>
              {[...new Set([...skills.languages, ...skills.frameworks])].map((skill, index) => (
                <Badge as={motion.span} key={index} variants={itemVariants} whileHover={{ scale: 1.05 }}>{skill}</Badge>
              ))}
            </SkillsContainer>
          </SkillCategory>

          <SkillCategory as={motion.div} variants={itemVariants}>
            <h3>DevOps / Cloud</h3>
            <SkillsContainer>
              {skills.devops.map((skill, index) => (
                <Badge as={motion.span} key={index} variants={itemVariants} whileHover={{ scale: 1.05 }}>{skill}</Badge>
              ))}
            </SkillsContainer>
          </SkillCategory>

          <SkillCategory as={motion.div} variants={itemVariants}>
            <h3>Testing & Mobile</h3>
            <SkillsContainer>
              {skills.testing.map((skill, index) => (
                <Badge as={motion.span} key={`t-${index}`} variants={itemVariants} whileHover={{ scale: 1.05 }}>{skill}</Badge>
              ))}
              {skills.mobile.map((skill, index) => (
                <Badge as={motion.span} key={`m-${index}`} variants={itemVariants} whileHover={{ scale: 1.05 }}>{skill}</Badge>
              ))}
            </SkillsContainer>
          </SkillCategory>

          <SkillCategory as={motion.div} variants={itemVariants}>
            <h3>Accessibility & Data / ML Tools</h3>
            <SkillsContainer>
              {skills.accessibility.map((skill, index) => (
                <Badge as={motion.span} key={`a-${index}`} variants={itemVariants} whileHover={{ scale: 1.05 }}>{skill}</Badge>
              ))}
              {skills.data_ml.map((skill, index) => (
                <Badge as={motion.span} key={`d-${index}`} variants={itemVariants} whileHover={{ scale: 1.05 }}>{skill}</Badge>
              ))}
            </SkillsContainer>
          </SkillCategory>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Skills;