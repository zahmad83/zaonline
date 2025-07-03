# Portfolio Website - Zeeshan Ahmad

## Overview

This is a professional portfolio website for Zeeshan Ahmad, an ICT Specialist with 15+ years of experience in system administration, infrastructure management, and technical support across international organizations. The application is built as a full-stack web application showcasing his professional experience, skills, and achievements.

## System Architecture

The application follows a modern full-stack architecture with clear separation between frontend and backend concerns:

- **Frontend**: React-based SPA using TypeScript, Vite for build tooling, and Tailwind CSS with shadcn/ui components
- **Backend**: Express.js server with TypeScript, providing REST API endpoints
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design
- **State Management**: TanStack Query for server state management and data fetching

## Key Components

### Frontend Architecture
- **React Router**: Using Wouter for lightweight client-side routing
- **Component Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming support
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **State Management**: TanStack Query for server state, React hooks for local state

### Backend Architecture
- **Server Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **API Design**: RESTful endpoints with proper error handling
- **Request Logging**: Custom middleware for API request/response logging
- **Data Validation**: Zod schemas for runtime type checking

### Database Schema
- **contacts table**: Stores contact form submissions with fields for name, email, subject, message, and timestamp
- **Type Safety**: Drizzle generates TypeScript types from schema definitions
- **Validation**: Zod schemas derived from database schema for consistent validation

### Development Setup
- **Build System**: Vite for fast development and optimized production builds
- **TypeScript**: Strict type checking across frontend, backend, and shared code
- **Hot Reload**: Vite dev server with HMR for rapid development
- **Path Aliases**: Configured for clean imports (@/, @shared/, etc.)

## Data Flow

1. **Contact Form Submission**: Users fill out contact form → Frontend validates with Zod → POST to /api/contact → Backend validates and stores in database → Success/error feedback to user
2. **Page Navigation**: Single-page application with smooth scrolling between sections
3. **Responsive Design**: Mobile-first approach with responsive breakpoints
4. **Error Handling**: Comprehensive error boundaries and user feedback via toast notifications

## External Dependencies

### Production Dependencies
- **UI Framework**: React 18 with TypeScript
- **Database**: @neondatabase/serverless for PostgreSQL connection
- **ORM**: Drizzle ORM for database operations
- **Component Library**: Radix UI primitives with shadcn/ui styling
- **HTTP Client**: Native fetch with TanStack Query wrapper
- **Form Handling**: React Hook Form with Hookform Resolvers
- **Validation**: Zod for schema validation
- **Styling**: Tailwind CSS with class-variance-authority
- **Date Handling**: date-fns for date manipulation

### Development Dependencies
- **Build Tool**: Vite with React plugin
- **TypeScript**: Strict configuration with path mapping
- **Linting**: ESLint configuration (implied by framework setup)
- **Hot Reload**: Vite HMR with error overlay

## Deployment Strategy

The application is configured for deployment on Replit with:

- **Production Build**: Vite builds optimized static assets to dist/public
- **Server Bundle**: esbuild bundles server code for Node.js runtime
- **Environment Variables**: DATABASE_URL required for PostgreSQL connection
- **Static Serving**: Express serves built frontend assets in production
- **Process Management**: Single process serving both API and static files

### Build Commands
- `npm run dev`: Development server with hot reload
- `npm run build`: Production build (frontend + backend bundling)
- `npm run start`: Production server
- `npm run db:push`: Push database schema changes

## Changelog
- July 02, 2025: Initial portfolio setup with full-stack architecture
- July 02, 2025: Added professional photo integration with UN MINURSO branding
- July 02, 2025: Enhanced projects section with Windows 11 deployment and ICT infrastructure modernization projects

## Recent Changes
- Professional headshot integrated in hero section with circular frame styling
- Projects section expanded to 6 key achievements including current UN MINURSO work
- Grid layout optimized for responsive display (2 columns on tablets, 3 on desktop)
- Windows 11 Enterprise Deployment project added showcasing current role responsibilities
- WHO ICT Infrastructure Modernization project detailed with LAN upgrade, enterprise networking equipment

## User Preferences

Preferred communication style: Simple, everyday language.
Portfolio focus: Professional presentation for job seeking in ICT field with emphasis on international organization experience.