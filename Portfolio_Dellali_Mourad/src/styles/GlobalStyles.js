import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --bg-primary: #010714;
    --bg-secondary: #030a1c;
    --bg-tertiary: #050d21;
    --accent: #7c5cff;
    --accent-secondary: #5aa1ff;
    --accent-gradient: linear-gradient(90deg, var(--accent), var(--accent-secondary));
    --accent-glow: 0 0 15px rgba(124, 92, 255, 0.5);
    --text-primary: #f0f3f8;
    --text-secondary: #8892b0;
    --text-tertiary: #6e7a96;
    --radius: 12px;
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    --card-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.5);
    --glass-bg: rgba(3, 10, 28, 0.6);
    --glass-border: rgba(255, 255, 255, 0.05);
    --glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    background: var(--bg-primary);
    color: var(--text-primary);
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-image: 
      linear-gradient(
        to bottom,
        rgba(3, 8, 20, 0.8),
        rgba(2, 5, 12, 1) 90%
      );
    text-rendering: optimizeLegibility;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    margin: 0 0 20px 0;
    line-height: 1.2;
  }

  h1 {
    font-size: clamp(32px, 6vw, 54px);
  }

  h2 {
    font-size: clamp(26px, 4vw, 36px);
  }

  h3 {
    font-size: clamp(22px, 3vw, 28px);
  }

  p {
    margin: 0 0 15px 0;
  }

  a {
    text-decoration: none;
    color: var(--accent);
    transition: var(--transition);
    
    &:hover,
    &:focus {
      color: var(--accent-hover);
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  section {
    margin: 0 auto;
    padding: 80px 0;

    @media (max-width: 768px) {
      padding: 60px 0;
    }
  }

  button {
    display: inline-block;
    font-family: 'Inter', sans-serif;
    cursor: pointer;
    transition: var(--transition);
    border: none;
    outline: none;
  }

  input, textarea {
    font-family: 'Inter', sans-serif;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 4px;
    color: var(--text-primary);
    padding: 14px 16px;
    font-size: 15px;
    outline: none;
    transition: var(--transition);
    width: 100%;
    
    &:focus {
      border-color: var(--accent);
      box-shadow: 0 0 0 2px rgba(124, 92, 255, 0.2);
    }
  }

  textarea {
    resize: vertical;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
  main {
    display: block;
  }
`;

export default GlobalStyles;