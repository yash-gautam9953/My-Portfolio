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
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ESM modules
- **API Pattern**: RESTful API design with `/api/projects` endpoints
- **Data Layer**: In-memory storage implementation with interface for future database integration
- **Validation**: Zod schemas for request/response validation
- **Development**: Hot module replacement and error overlay integration

### Data Storage Solutions
- **Current**: In-memory storage using Map data structures
- **Schema**: Drizzle ORM schema definitions prepared for PostgreSQL migration
- **Validation**: Drizzle-Zod integration for type-safe schema validation
- **Future Ready**: Database configuration prepared for Neon PostgreSQL

### Authentication and Authorization
- **Current**: No authentication implemented
- **Prepared**: Session management infrastructure with connect-pg-simple
- **Architecture**: Cookie-based session handling ready for implementation

### External Dependencies
- **Database**: Neon PostgreSQL (configured but not yet connected)
- **Fonts**: Google Fonts (Inter family) for typography
- **Icons**: Lucide React for consistent iconography
- **Development**: Replit-specific tooling for development environment
- **Deployment**: Production build system with esbuild for server bundling

### Key Design Patterns
- **Monorepo Structure**: Organized into `client/`, `server/`, and `shared/` directories
- **Type Safety**: End-to-end TypeScript with shared schema definitions
- **Component Architecture**: Modular UI components with consistent theming
- **API Design**: RESTful endpoints with standardized error handling
- **Development Experience**: Hot reloading, error overlays, and TypeScript checking

### Performance Optimizations
- **Bundle Splitting**: Vite handles code splitting automatically
- **Asset Optimization**: PostCSS with Autoprefixer for CSS processing
- **Development**: Runtime error modal for better debugging experience
- **Production**: Optimized builds with tree shaking and minification