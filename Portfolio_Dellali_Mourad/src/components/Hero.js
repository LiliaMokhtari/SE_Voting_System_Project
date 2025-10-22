import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { Container, Button, FlexContainer, HeroSection, HeroText } from '../styles/StyledComponents';
import heroIllustration from '../assets/hero-illustration.svg';

const HighlightedText = styled.span`
  color: var(--accent);
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 30%;
    background-color: rgba(124, 92, 255, 0.15);
    bottom: 0;
    left: 0;
    z-index: -1;
    border-radius: 3px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;
  
  @media (max-width: 576px) {
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    
    a {
      width: 100%;
    }
  }
`;

const HeroIllustration = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 600px;
  z-index: 1;
  
  img {
    width: 100%;
    height: auto;
    filter: drop-shadow(0 10px 16px rgba(0, 0, 0, 0.2));
  }
`;

const FloatingShape = styled(motion.div)`
  position: absolute;
  background: ${props => props.$gradient ? 'var(--accent-gradient)' : 'var(--accent)'};
  opacity: ${props => props.$opacity || 0.8};
  border-radius: ${props => props.$radius || '12px'};
  filter: blur(${props => props.$blur || '0px'});
  z-index: -1;
`;

const ParticlesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
`;

const Particle = styled(motion.div)`
  position: absolute;
  z-index: 0;
  pointer-events: none;
  will-change: transform, opacity;
`;

const GlowEffect = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(124, 92, 255, 0.15) 0%, rgba(124, 92, 255, 0) 70%);
  top: -150px;
  right: -100px;
  z-index: -1;
`;

const TypedTextContainer = styled.span`
  position: relative;
  display: inline;
  
  &::after {
    content: '|';
    position: relative;
    right: 0;
    animation: blink 1s infinite step-start;
  }
  
  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(36px, 8vw, 60px);
  line-height: 1.1;
  margin-bottom: 24px;
  font-weight: 700;
  letter-spacing: -0.5px;
`;

const HeroSubtitle = styled(motion.p)`
  font-size: clamp(18px, 3vw, 22px);
  line-height: 1.5;
  color: var(--text-secondary);
  margin-bottom: 32px;
  max-width: 540px;
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  
  span {
    color: var(--text-secondary);
    font-size: 14px;
    margin-bottom: 8px;
  }
  
  .arrow {
    width: 20px;
    height: 20px;
    border-right: 2px solid var(--accent);
    border-bottom: 2px solid var(--accent);
    transform: rotate(45deg);
  }
`;

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);
  
  useEffect(() => {
    let rafId = null;
    const pos = { x: 0, y: 0 };

    const handleMouseMove = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      if (rafId === null) {
        rafId = window.requestAnimationFrame(() => {
          setMousePosition({ x: pos.x, y: pos.y });
          rafId = null;
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);
  
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  
  const childVariants = {
    hidden: { y: 30, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      }
    },
  };
  
  const textVariants = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.3 }
    }
  };
  
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        damping: 12
      }
    }
  };
  
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  
  const particles = React.useMemo(() => Array.from({ length: 12 }, (_, i) => {
    const shapes = ['circle', 'square', 'triangle'];
    const size = `${Math.floor(Math.random() * 15) + 5}px`;
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    const opacity = (Math.random() * 0.15) + 0.05;
    const colors = ['var(--accent)', 'var(--accent-secondary)', '#5aa1ff', '#7c5cff'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    return {
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size,
      shape,
      opacity,
      color,
      delay: Math.random() * 5,
      duration: Math.random() * 15 + 15
    };
  }), []);
  
  
  const nameText = "Mourad Dellali".split("");

  return (
    <HeroSection id="home" ref={ref}>
      <GlowEffect />
      
      <ParticlesContainer>
        {particles.map((particle) => (
          <Particle
            key={particle.id}
            as={motion.div}
            style={{
              width: particle.size,
              height: particle.size,
              background: particle.color,
              left: particle.left,
              top: particle.top,
              borderRadius: particle.shape === 'circle' ? '50%' : particle.shape === 'triangle' ? '0' : '3px',
              opacity: particle.opacity,
              clipPath: particle.shape === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : undefined
            }}
            initial={{ 
              opacity: 0,
              rotate: 0
            }}
            animate={{ 
              y: [0, -100, 0],
              rotate: [0, 180, 360],
              opacity: [0, particle.opacity, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              repeatType: "loop",
              duration: particle.duration,
              delay: particle.delay,
              ease: "linear"
            }}
          />
        ))}
      </ParticlesContainer>
      
      <Container>
        <FlexContainer 
          $mobileDirection="column-reverse"
          $alignItems="center"
          $gap="60px"
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <HeroText as={motion.div} variants={childVariants}>
            <HeroTitle variants={childVariants}>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Hi, I'm{" "}
              </motion.span>
              <HighlightedText>
                <motion.span variants={textVariants} initial="hidden" animate="show">
                  {nameText.map((letter, index) => (
                    <motion.span
                      key={index}
                      variants={letterVariants}
                      style={{ 
                        display: "inline-block",
                        marginRight: letter === " " ? "8px" : "0" 
                      }}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                </motion.span>
              </HighlightedText>
            </HeroTitle>
            <HeroSubtitle 
              variants={childVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              Web Developer & Digital Innovator from Algeria building modern, efficient, and user-friendly digital solutions.
            </HeroSubtitle>
            <ButtonContainer 
              as={motion.div} 
              variants={childVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <Button 
                href="#projects" 
                $primary
                as={motion.a}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 5px 15px rgba(124, 92, 255, 0.4)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                See my work
              </Button>
              <Button 
                href="#contact"
                as={motion.a}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(255, 255, 255, 0.05)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                Contact me
              </Button>
            </ButtonContainer>
          </HeroText>
          
          <HeroIllustration
            variants={childVariants}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              delay: 0.3,
              duration: 0.8,
              ease: "easeOut"
            }}
            style={{
              transform: `perspective(1000px) rotateY(${(mousePosition.x - window.innerWidth / 2) / 50}deg) rotateX(${-(mousePosition.y - window.innerHeight / 2) / 50}deg)`
            }}
          >
            
            <FloatingShape
              as={motion.div}
              initial={{ opacity: 0.6 }}
              animate={{ 
                y: [0, -15, 0], 
                rotate: [0, 5, 0],
                opacity: [0.6, 0.7, 0.6] 
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 6,
                ease: "easeInOut" 
              }}
              gradient
              style={{
                width: '180px',
                height: '180px',
                top: '-30px',
                right: '10%',
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                filter: 'blur(2px)'
              }}
            />
            <FloatingShape
              as={motion.div}
              initial={{ opacity: 0.4 }}
              animate={{ 
                y: [0, 20, 0], 
                x: [0, -10, 0],
                rotate: [0, -5, 0],
                opacity: [0.4, 0.5, 0.4] 
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 7,
                delay: 1,
                ease: "easeInOut" 
              }}
              style={{
                width: '120px',
                height: '120px',
                bottom: '10%',
                left: '-5%',
                borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                background: 'var(--accent-secondary)',
                filter: 'blur(3px)'
              }}
            />
            <motion.img 
              src={heroIllustration} 
              alt="Creative web development illustration"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ 
                filter: "drop-shadow(0 20px 30px rgba(0, 0, 0, 0.3))"
              }}
            />
            
            <motion.div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)',
                opacity: 0.5,
                borderRadius: '10px',
                pointerEvents: 'none',
                zIndex: 1,
                transform: `translateX(${(mousePosition.x - window.innerWidth / 2) / 20}px) translateY(${(mousePosition.y - window.innerHeight / 2) / 20}px)`
              }}
            />
          </HeroIllustration>
        </FlexContainer>
      </Container>
      
      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          delay: 2,
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop"
        }}
        onClick={scrollToProjects}
      >
        <span>Scroll down</span>
        <motion.div 
          className="arrow"
          animate={{ y: [0, 5, 0] }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop"
          }}
        />
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;