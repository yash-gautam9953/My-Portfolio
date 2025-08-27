# Developer Portfolio Project

## Overview

This is a modern, futuristic developer portfolio built as a full-stack application showcasing projects and skills. The application features a dark theme with glassmorphism design elements, neon gradient accents, and animated particle backgrounds. It serves as both a portfolio showcase and a demonstration of modern web development practices.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: TailwindCSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Animations**: Custom particle background system with glassmorphism effects
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server (minimal setup)
- **Purpose**: Serves static React application only
- **Development**: Hot module replacement and error overlay integration

### Data Management
- **Architecture**: Static data files for easy content management
- **Projects**: Managed via `client/src/data/projects.js` with detailed instructions
- **Skills**: Managed via `client/src/data/skills.js` with category organization
- **Manual Updates**: Simple JavaScript objects that can be edited directly

### Content Management Instructions
- **Adding Projects**: Edit `client/src/data/projects.js` and follow embedded instructions
- **Adding Skills**: Edit `client/src/data/skills.js` to add new skills or categories
- **Icons**: Pre-configured icon set from Lucide React library
- **No Database**: All content is managed through local data files

### Key Design Patterns
- **Simplified Structure**: Clean `client/` and minimal `server/` directories
- **Component Architecture**: Modular UI components with consistent theming
- **Static Content**: No database or API dependencies for easy maintenance
- **Development Experience**: Hot reloading, error overlays, and TypeScript checking

### Performance Optimizations
- **Bundle Splitting**: Vite handles code splitting automatically
- **Asset Optimization**: PostCSS with Autoprefixer for CSS processing
- **Development**: Runtime error modal for better debugging experience
- **Static Assets**: Optimized builds with tree shaking and minification