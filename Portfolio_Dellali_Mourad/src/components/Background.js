import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
`;

const Grid = styled.div`
  position: absolute;
  width: 200%;
  height: 200%;
  top: -50%;
  left: -50%;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px);
  background-size: 50px 50px;
  transform: perspective(500px) rotateX(60deg);
  opacity: 0.3;
`;

const Gradient = styled(motion.div)`
  position: absolute;
  width: 800px;
  height: 800px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(124, 92, 255, 0.15) 0%, rgba(90, 161, 255, 0.05) 50%, rgba(0, 0, 0, 0) 70%);
  top: -300px;
  right: -200px;
  filter: blur(50px);
  opacity: 0.5;
`;

const Gradient2 = styled(motion.div)`
  position: absolute;
  width: 700px;
  height: 700px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(124, 92, 255, 0.1) 0%, rgba(90, 161, 255, 0.03) 50%, rgba(0, 0, 0, 0) 70%);
  bottom: -300px;
  left: -200px;
  filter: blur(40px);
  opacity: 0.4;
`;

const Particle = styled(motion.div)`
  position: absolute;
  pointer-events: none;
  will-change: transform, opacity;
`;

const GeometricShape = styled(motion.div)`
  position: absolute;
  background: ${props => props.$gradient ? 'var(--accent-gradient)' : props.$color || 'var(--accent)'};
  opacity: ${props => props.$opacity || 0.05};
  width: ${props => props.$width || '150px'};
  height: ${props => props.$height || '150px'};
  border-radius: ${props => props.$borderRadius || '30% 70% 70% 30% / 30% 30% 70% 70%'};
  filter: blur(${props => props.$blur || '0px'});
`;

const Background = () => {
  // Generate random particles (memoized and smaller count for performance)
  const particles = useMemo(() => {
    return Array.from({ length: 18 }, (_, i) => {
      const size = Math.floor(Math.random() * 4) + 2 + 'px';
      const opacity = (Math.random() * 0.3 + 0.1).toFixed(2);
      const shapes = ['square', 'circle'];
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      const colors = [
        'rgba(124, 92, 255, 0.3)', 
        'rgba(90, 161, 255, 0.3)', 
        'rgba(255, 255, 255, 0.3)'
      ];
      const color = colors[Math.floor(Math.random() * colors.length)];
      const blur = Math.random() > 0.7 ? '1px' : '0px';
      
      return {
        id: i,
        size,
        opacity,
        shape,
        color,
        blur,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 5,
        duration: Math.random() * 20 + 20
      };
    });
  }, []);

  return (
    <BackgroundContainer aria-hidden="true">
      <Grid />
      <Gradient 
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.5, 0.6, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      <Gradient2 
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.4, 0.5, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      
      <GeometricShape
        $width="250px"
        $height="250px"
        $borderRadius="30% 70% 70% 30% / 30% 30% 70% 70%"
        style={{ top: '25%', right: '15%' }}
        animate={{
          borderRadius: [
            "30% 70% 70% 30% / 30% 30% 70% 70%", 
            "40% 60% 50% 50% / 40% 40% 60% 60%", 
            "30% 70% 70% 30% / 30% 30% 70% 70%"
          ],
          rotate: [0, 10, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        $gradient
        $opacity={0.07}
      />
      
      <GeometricShape
        $width="180px"
        $height="180px"
        $borderRadius="60% 40% 30% 70% / 60% 30% 70% 40%"
        style={{ bottom: '20%', left: '10%' }}
        animate={{
          borderRadius: [
            "60% 40% 30% 70% / 60% 30% 70% 40%", 
            "50% 50% 40% 60% / 50% 40% 60% 50%", 
            "60% 40% 30% 70% / 60% 30% 70% 40%"
          ],
          rotate: [0, -10, 0],
          scale: [1, 1.08, 1]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 3
        }}
        $color="rgba(90, 161, 255, 0.15)"
        $opacity={0.08}
      />
      
  {particles.map(particle => (
        <Particle
          key={particle.id}
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            left: particle.left,
            top: particle.top,
            borderRadius: particle.shape === 'circle' ? '50%' : '3px',
            opacity: particle.opacity,
            filter: `blur(${particle.blur})`
          }}
          animate={{
            y: [0, -100, -200],
            opacity: [0, particle.opacity, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear"
          }}
        />
      ))}
    </BackgroundContainer>
  );
};

export default Background;