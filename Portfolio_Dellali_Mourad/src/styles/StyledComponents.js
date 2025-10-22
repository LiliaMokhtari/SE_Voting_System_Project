import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
`;

export const Section = styled.section`
  padding: ${props => props.$padding || '80px 0'};
`;

export const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.$primary ? 'var(--accent-gradient)' : 'rgba(255, 255, 255, 0.01)'};
  color: ${props => props.$primary ? 'white' : 'var(--text-primary)'};
  border: ${props => props.$primary ? 'none' : '1px solid rgba(255, 255, 255, 0.08)'};
  border-radius: 6px;
  padding: 14px 28px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  letter-spacing: 0.5px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transition: all 0.6s;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover, &:focus {
    transform: translateY(-3px);
    background: ${props => props.$primary 
      ? 'linear-gradient(90deg, #6b4aee, #4a91ef)' 
      : 'rgba(255, 255, 255, 0.04)'};
    color: ${props => props.$primary ? 'white' : 'var(--accent)'};
    box-shadow: ${props => props.$primary 
      ? '0 10px 25px rgba(124, 92, 255, 0.4)' 
      : '0 5px 15px rgba(0, 0, 0, 0.2)'};
    border: ${props => props.$primary ? 'none' : '1px solid rgba(124, 92, 255, 0.2)'};
  }
  
  &:active {
    transform: translateY(-1px);
    box-shadow: ${props => props.$primary 
      ? '0 5px 15px rgba(124, 92, 255, 0.4)' 
      : '0 2px 10px rgba(0, 0, 0, 0.15)'};
  }

  svg {
    margin-left: ${props => props.$iconRight ? '8px' : '0'};
    margin-right: ${props => props.$iconLeft ? '8px' : '0'};
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(3px);
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: ${props => props.$alignItems || 'center'};
  justify-content: ${props => props.$justifyContent || 'space-between'};
  flex-direction: ${props => props.$direction || 'row'};
  flex-wrap: ${props => props.$wrap || 'nowrap'};
  gap: ${props => props.$gap || '0'};
  
  @media (max-width: 768px) {
    flex-direction: ${props => props.$mobileDirection || props.$direction || 'column'};
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.$columns || 3}, 1fr);
  gap: ${props => props.$gap || '24px'};
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

export const Card = styled.div`
  background: var(--bg-secondary);
  border-radius: 6px;
  padding: 24px;
  transition: var(--transition);
  border-top: 3px solid transparent;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.5);
    border-top: 3px solid var(--accent);
  }
`;

export const Badge = styled.span`
  display: inline-block;
  background: rgba(255, 255, 255, 0.03);
  color: ${props => props.$primary ? 'var(--accent)' : 'var(--text-secondary)'};
  border-radius: 4px;
  padding: 6px 12px;
  font-size: 14px;
  margin: 0 8px 8px 0;
  border-left: ${props => props.$primary ? '2px solid var(--accent)' : 'none'};
  font-weight: 500;
  letter-spacing: 0.5px;
`;

export const Title = styled.h2`
  position: relative;
  margin-bottom: ${props => props.$mb || '40px'};
  display: inline-block;
  font-weight: 700;
  
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 4px;
    background: var(--accent-gradient);
    border-radius: 4px;
    left: 0;
    bottom: -10px;
    max-width: 80px;
  }
`;

export const SubTitle = styled.p`
  color: var(--text-secondary);
  font-size: 18px;
  margin-bottom: 30px;
  max-width: 600px;
`;

export const SectionHeading = styled.div`
  margin-bottom: 50px;
  
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const SkillCategory = styled.div`
  margin-bottom: 40px;
  
  h3 {
    color: var(--accent);
    margin-bottom: 15px;
    font-size: 18px;
    letter-spacing: 0.5px;
    font-weight: 600;
    position: relative;
    display: inline-block;
    
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -8px;
      width: 40px;
      height: 3px;
      background: var(--accent);
      border-radius: 3px;
    }
  }
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const ContactForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  
  textarea {
    grid-column: span 2;
  }
  
  button {
    grid-column: span 2;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    
    textarea {
      grid-column: 1;
    }
    
    button {
      grid-column: 1;
    }
  }
`;

export const FormMessage = styled.p`
  margin-top: 10px;
  color: ${props => props.$error ? '#ff6b6b' : 'var(--accent)'};
`;

export const ProfileImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--accent);
  background: var(--accent);
  opacity: 0.9;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.03);
    color: var(--text-secondary);
    transition: var(--transition);
    
    &:hover {
      background: var(--accent);
      color: white;
      transform: translateY(-3px);
    }
  }
`;

export const Logo = styled.a`
  font-size: 24px;
  font-weight: 700;
  color: var(--text-primary);
  cursor: pointer;
  position: relative;
  background: linear-gradient(90deg, #fff, #efefef);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  
  &::before {
    content: '';
    position: absolute;
    left: -10px;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 20px;
    background: var(--accent-gradient);
    border-radius: 2px;
    opacity: 0.8;
  }
  
  &:hover {
    &::before {
      height: 25px;
      box-shadow: 0 0 10px rgba(124, 92, 255, 0.7);
    }
  }
`;

export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 120px;
  padding-bottom: 80px;
  position: relative;
  overflow: hidden;
  background: radial-gradient(
    circle at 15% 50%,
    rgba(124, 92, 255, 0.08) 0%,
    rgba(0, 0, 0, 0) 25%
  ), 
  radial-gradient(
    circle at 85% 30%,
    rgba(90, 161, 255, 0.08) 0%,
    rgba(0, 0, 0, 0) 25%
  );
  
  &::before {
    content: '';
    position: absolute;
    top: -50px;
    left: -50px;
    right: -50px;
    bottom: -50px;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.5;
    z-index: -1;
  }
  
  @media (max-width: 768px) {
    padding-top: 100px;
    padding-bottom: 60px;
  }
`;

export const HeroText = styled.div`
  max-width: 700px;
  position: relative;
  z-index: 1;
  backdrop-filter: blur(8px);
  border-radius: 16px;
  padding: 30px;
  background: rgba(18, 24, 38, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.05);
  
  h1 {
    margin-bottom: 20px;
    background: linear-gradient(90deg, #fff, #efefef);
    -webkit-background-clip: text;
    background-clip: text;
    text-shadow: 0 2px 12px rgba(124, 92, 255, 0.2);
  }
  
  p {
    color: var(--text-secondary);
    font-size: 20px;
    margin-bottom: 30px;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 20px;
    margin-top: 20px;
  }
`;

export const IllustrationContainer = styled.div`
  max-width: 100%;
  position: relative;
  z-index: 1;
  
  img {
    width: 100%;
    height: auto;
  }
`;

export const Footer = styled.footer`
  padding: 30px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.03);
`;