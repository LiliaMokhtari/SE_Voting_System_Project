import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Container, Logo } from '../styles/StyledComponents';

const NavBar = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  z-index: 100;
  background: ${({ $scrolled }) => 
    $scrolled ? 'rgba(1, 7, 20, 0.85)' : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => 
    $scrolled ? 'blur(15px)' : 'none'};
  box-shadow: ${({ $scrolled }) => 
    $scrolled ? '0 10px 30px -10px rgba(0, 0, 0, 0.5)' : 'none'};
  transition: var(--transition);
  border-bottom: ${({ $scrolled }) =>
    $scrolled ? '1px solid rgba(124, 92, 255, 0.1)' : 'none'};
`;

const NavInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const NavLinks = styled.nav`
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    width: 75%;
    max-width: 300px;
    height: 100vh;
    background: var(--bg-secondary);
    box-shadow: -10px 0px 30px -15px rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 50px;
    transform: ${({ $isOpen }) => 
      $isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: var(--transition);
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const NavItem = styled(motion.li)`
  margin: 0 15px;
  
  @media (max-width: 768px) {
    margin: 0;
  }
`;

const NavLink = styled.a`
  color: var(--text-primary);
  font-weight: 500;
  transition: var(--transition);
  padding: 10px;
  position: relative;
  border-radius: 4px;
  
  &:hover {
    color: var(--accent);
    background: rgba(255, 255, 255, 0.02);
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: var(--accent-gradient);
    transition: width 0.3s ease;
    border-radius: 2px;
  }
  
  &:hover::after {
    width: 80%;
    box-shadow: 0 0 8px rgba(124, 92, 255, 0.5);
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: var(--text-primary);
  z-index: 200;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Hamburger = styled.div`
  width: 30px;
  height: 2px;
  background: ${({ $isOpen }) => 
    $isOpen ? 'transparent' : 'var(--text-primary)'};
  position: relative;
  transition: var(--transition);
  
  &:before, &:after {
    content: '';
    position: absolute;
    width: 30px;
    height: 2px;
    background: var(--text-primary);
    left: 0;
    transition: var(--transition);
  }
  
  &:before {
    top: ${({ $isOpen }) => $isOpen ? '0' : '-8px'};
    transform: ${({ $isOpen }) => $isOpen ? 'rotate(45deg)' : 'none'};
  }
  
  &:after {
    bottom: ${({ $isOpen }) => $isOpen ? '0' : '-8px'};
    transform: ${({ $isOpen }) => $isOpen ? 'rotate(-45deg)' : 'none'};
  }
`;

const Backdrop = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
  
  @media (min-width: 769px) {
    display: none;
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: -20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <>
      <NavBar $scrolled={scrolled}>
        <Container>
          <NavInner>
            <Logo href="#home">Mourad Dellali</Logo>
            <HamburgerButton onClick={toggleMenu} aria-label="Menu">
              <Hamburger $isOpen={isOpen} />
            </HamburgerButton>
            <NavLinks $isOpen={isOpen}>
              <NavList as={motion.ul} variants={container} initial="hidden" animate="show">
                <NavItem variants={item}>
                  <NavLink href="#projects" onClick={closeMenu}>Projects</NavLink>
                </NavItem>
                <NavItem variants={item}>
                  <NavLink href="#skills" onClick={closeMenu}>Skills</NavLink>
                </NavItem>
                <NavItem variants={item}>
                  <NavLink href="#about" onClick={closeMenu}>About</NavLink>
                </NavItem>
                <NavItem variants={item}>
                  <NavLink href="#contact" onClick={closeMenu}>Contact</NavLink>
                </NavItem>
              </NavList>
            </NavLinks>
          </NavInner>
        </Container>
      </NavBar>
      <Backdrop $isOpen={isOpen} onClick={closeMenu} />
    </>
  );
};

export default Header;