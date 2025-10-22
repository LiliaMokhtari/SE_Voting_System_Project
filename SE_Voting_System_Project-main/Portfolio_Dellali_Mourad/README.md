# Mourad Dellali - React Portfolio

A modern, animated portfolio website for web developers and designers built with React, Styled Components, and Framer Motion.

![Mourad Dellali Portfolio](https://img.shields.io/badge/Portfolio-React-61DAFB)

## Features

- ⚡ Modern React with functional components and hooks
- 🎨 Styled with styled-components
- 🌙 Dark theme with purple/blue accent colors
- 🎭 Smooth animations with Framer Motion
- 📱 Fully responsive for all screen sizes
- 🔍 SEO optimized
- 🚀 Fast performance

## Quick Start

### Prerequisites

Make sure you have Node.js and npm installed:

```powershell
node --version
npm --version
```

### Installation

1. Clone the repository or download the files

2. Navigate to the project directory:

```powershell
cd /d F:\Portfolio
```

3. Install dependencies:

```powershell
npm install
```

4. Start the development server:

```powershell
npm start
```

This will launch the development server at [http://localhost:3000](http://localhost:3000).

## Build for Production

To create an optimized production build:

```powershell
npm run build
```

This will generate a `build` folder with all your optimized files.

## Deployment

You can deploy this portfolio to various platforms:

### Netlify

1. Create an account on [Netlify](https://www.netlify.com/)
2. Install Netlify CLI: `npm install -g netlify-cli`
3. Run: `netlify deploy`

### Vercel

1. Create an account on [Vercel](https://vercel.com/)
2. Install Vercel CLI: `npm install -g vercel`
3. Run: `vercel deploy`

### GitHub Pages

1. Update the `package.json` with your repository name:

```json
"homepage": "https://mouraddellali.github.io/portfolio"
```

2. Install GitHub Pages package: `npm install gh-pages --save-dev`
3. Add these scripts to `package.json`:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

4. Run: `npm run deploy`

## Customizing

1. Update personal information in component files
2. Replace the SVG illustrations in the `src/assets` folder
3. Add your actual projects in `src/components/Projects.js`
4. Modify the color scheme in `src/styles/GlobalStyles.js` if desired

## Technologies Used

- React
- Styled Components
- Framer Motion
- React Icons
- React Intersection Observer

## Notes
Contact form is client-side demo only. Integrate a backend or third-party form handling service to accept messages in production.
