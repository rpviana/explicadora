# Diana Pimentel Centro de Explicações

## Overview

This is a professional landing page and multi-page website for Diana Pimentel Centro de Explicações, a tutoring center in Trofa, Portugal. The site showcases over 10 years of educational experience, offering personalized academic support from primary school through university level in Portuguese, Mathematics, Sciences, and exam preparation.

The application is built as a modern full-stack web application with a React frontend and Express backend, featuring a contact form system with database persistence. The design emphasizes academic professionalism, trustworthiness, and clear calls-to-action for WhatsApp booking and contact form submissions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18+ with TypeScript using Vite as the build tool and development server.

**Routing**: Client-side routing implemented with Wouter, a lightweight alternative to React Router. The application supports multiple pages: Home, About (Sobre), Services (Serviços), Gallery (Galeria), Testimonials (Testemunhos), and Contact (Contactos).

**UI Component Library**: Shadcn/ui components built on Radix UI primitives, providing accessible and customizable components. The design system uses the "new-york" style variant with a custom color scheme centered around Navy Blue (primary), Gold (accent), and Clean White.

**Styling**: Tailwind CSS with custom design tokens defined in CSS variables. The color palette is specifically tailored for educational institutions emphasizing trust (Navy Blue), excellence (Gold), and clarity (White/neutrals).

**State Management**: TanStack Query (React Query) for server state management, handling API requests and caching. Local component state managed with React hooks.

**Animations**: Framer Motion for scroll-based animations and UI transitions. Custom `AnimatedSection` component provides fade-in and slide-up effects on scroll with configurable delays and directions.

**Form Handling**: React Hook Form with Zod schema validation for type-safe form processing.

### Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript.

**API Design**: RESTful API with dedicated routes for contact form submissions. Two primary endpoints:
- `POST /api/contact` - Creates new contact messages with validation
- `GET /api/contact` - Retrieves all contact messages

**Request Processing**: JSON body parsing with raw body capture for potential webhook integrations. Custom logging middleware tracks all API requests with timestamps and duration.

**Error Handling**: Centralized error handling with Zod validation errors converted to human-readable messages using zod-validation-error.

**Development Server**: Custom Vite middleware integration for hot module replacement (HMR) in development mode. Production builds serve static files from the dist/public directory.

### Data Storage Solutions

**ORM**: Drizzle ORM for type-safe database interactions with PostgreSQL dialect configuration.

**Database Schema**: Defined in `shared/schema.ts` with two main tables:
- `users` table with id, username, and password fields
- `contact_messages` table storing name, email, phone (optional), subject, message, and timestamp

**Validation Layer**: Drizzle-Zod integration generates Zod schemas from database tables, ensuring runtime validation matches database constraints.

**Storage Abstraction**: `IStorage` interface with `MemStorage` in-memory implementation for development. Production would use PostgreSQL via DATABASE_URL environment variable.

**Schema Management**: Drizzle Kit configured for schema migrations with PostgreSQL connection via environment variables.

### Authentication and Authorization

Currently implements a basic user schema foundation but no active authentication middleware. The architecture supports future implementation of:
- Username/password authentication
- Session management (connect-pg-simple ready for PostgreSQL session storage)
- Protected routes for admin features

### Design System

**Typography**: Inter or Poppins sans-serif fonts with hierarchical sizing:
- Hero headlines: 56-64px desktop, 36-42px mobile
- Page titles: 42-48px desktop, 32px mobile
- Section headers: 32-36px desktop, 24px mobile
- Body text: 16-18px with generous line-height

**Spacing System**: Tailwind's 4px base unit with consistent vertical rhythm (py-16 to py-24 for sections).

**Layout Containers**: max-w-7xl for full-width sections, max-w-4xl for content-heavy pages.

**Component Patterns**: Card-based layouts for services, testimonials, and gallery items. Responsive grid systems (2x2 on desktop, stack on mobile).

**Accessibility**: Radix UI primitives ensure ARIA compliance, keyboard navigation, and screen reader support across all interactive components.

### Build and Deployment

**Build Process**: Custom build script (`script/build.ts`) that:
1. Builds client with Vite (outputs to dist/public)
2. Bundles server with esbuild (outputs to dist/index.cjs)
3. Bundles specific dependencies to reduce cold start times

**Production Optimization**: Selective dependency bundling (allowlist) reduces file system syscalls by bundling commonly used packages into the server bundle.

**Static Asset Serving**: Express static middleware serves the built React application with fallback to index.html for client-side routing.

## External Dependencies

### Third-Party UI Libraries

- **Radix UI**: Comprehensive set of headless UI primitives (accordion, dialog, dropdown, popover, etc.) providing accessibility features
- **Lucide React**: Icon library for consistent iconography throughout the application
- **React Icons**: Additional icon set (specifically SiInstagram, SiWhatsapp for social media)
- **Embla Carousel**: Carousel/slider functionality for testimonials and gallery
- **Framer Motion**: Animation library for scroll effects and transitions

### Backend Services

- **PostgreSQL**: Primary database (configured via DATABASE_URL environment variable)
- **Drizzle ORM**: Database toolkit and ORM with PostgreSQL support
- **Express Session**: Session management middleware (connect-pg-simple for PostgreSQL-backed sessions)

### Development Tools

- **Vite**: Frontend build tool with HMR and optimized production builds
- **esbuild**: Fast JavaScript bundler for server code
- **TypeScript**: Type safety across the entire stack
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing

### Validation and Type Safety

- **Zod**: Runtime type validation for API inputs and form data
- **Drizzle-Zod**: Automatic Zod schema generation from database schemas
- **React Hook Form**: Form state management with Hookform/resolvers for Zod integration

### External Integrations

- **WhatsApp**: Direct messaging integration via wa.me links (phone: +351 919 977 198)
- **Instagram**: Social media presence (@diana_pimentel_explicadora)
- **Google Maps**: Embedded map for physical location (Sala 212, Edifício América, Trofa)

### Communication Channels

The application emphasizes three primary contact methods:
1. WhatsApp booking (floating button and header CTA)
2. Contact form with database persistence
3. Direct phone and social media links

All contact methods direct users to phone number +351 919 977 198 or the contact form for lead capture.