# Design Guidelines: Diana Pimentel Centro de Explicações

## Design Approach
**System-Based with Educational Focus**: Combining Material Design's content clarity with custom academic professionalism. Drawing inspiration from educational platforms like Khan Academy and Coursera for trustworthy, accessible layouts.

## Core Design Principles
- **Academic Trust**: Professional, credible presentation that appeals to parents and students
- **Welcoming Clarity**: Clean, uncluttered layouts that reduce cognitive load
- **Action-Oriented**: Clear pathways to WhatsApp booking and contact form completion

## Color System
- **Primary Navy Blue**: Trust, professionalism, academic authority (headers, CTAs, accents)
- **Clean White**: Clarity, spaciousness, backgrounds
- **Soft Gold**: Excellence, achievement, highlights and success indicators
- **Supporting Neutrals**: Light grays for cards and sections

## Typography Hierarchy
**Font Family**: Inter or Poppings (sans-serif, modern, readable)
- **Hero Headlines**: Extra large, bold weight (56-64px desktop, 36-42px mobile)
- **Page Titles**: Large, semibold (42-48px desktop, 32px mobile)
- **Section Headers**: Medium-large, semibold (32-36px desktop, 24px mobile)
- **Body Text**: Regular weight, generous line-height (16-18px)
- **Card Titles**: Medium, medium weight (20-24px)
- **Metadata/Labels**: Small, uppercase, tracked spacing (12-14px)

## Layout System
**Spacing Foundation**: Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- **Page Padding**: py-16 to py-24 for sections (responsive: py-12 mobile, py-20 desktop)
- **Container Max-Width**: max-w-7xl for full sections, max-w-4xl for content-heavy pages
- **Card Spacing**: p-6 to p-8 internally, gap-6 to gap-8 in grids
- **Component Margins**: mb-6 for headings, mb-4 for paragraphs

## Multi-Page Architecture

### Home Page
- **Hero Section**: Full-width with background pattern or study environment image, centered content with headline + subheadline + dual CTAs (80vh height)
- **Quick Stats Bar**: 3-4 column grid showcasing "10+ Anos", "Sucesso Comprovado", "Apoio Personalizado"
- **Services Preview**: 4-card grid linking to Services page (2x2 on desktop, stack on mobile)
- **Testimonials Carousel**: 3 rotating cards with 5-star ratings
- **CTA Footer Section**: Strong booking prompt with WhatsApp integration

### About Page
- **Introduction Hero**: Medium-height section with educator profile image + mission statement (split layout)
- **Experience Timeline**: Visual representation of 10+ years teaching journey
- **Teaching Philosophy**: 2-column layout (image + text blocks)
- **Team Section**: Card-based layout if multiple educators, otherwise detailed single profile

### Services Page
- **Service Cards Grid**: Large, detailed cards for each subject (Portuguese, Math, Sciences, Exam Prep)
- **Card Structure**: Icon header, title, detailed description, bullet points of what's included, pricing info if applicable
- **Layout**: 2-column desktop (md:grid-cols-2), single column mobile
- **Visual Enhancement**: Subject-specific icons, subtle background patterns per card

### Gallery Page
- **Masonry or Grid Layout**: 3-4 columns on desktop showcasing Sala 212 and study environment
- **Category Filters**: Tabs or buttons for "Espaço", "Aulas", "Eventos"
- **Image Cards**: Hover effects revealing captions, lightbox expansion on click
- **Location Highlight**: Featured section for "Sala 212 - Edifício América" with map integration

### Testimonials Page
- **Large Review Cards**: 3-column grid (stacks to 1 on mobile)
- **Card Elements**: Student name, photo placeholder, 5-star rating, quote, year/grade
- **Statistics Section**: Achievement metrics, exam success rates in bold typography
- **Social Proof**: Instagram feed integration section

### Contact Page
- **Two-Column Layout**: Form on left (60%), contact information + map on right (40%)
- **Form Design**: Clean inputs with navy borders, gold focus states, generous padding
- **Contact Methods Grid**: Phone, Instagram, WhatsApp as clickable cards with icons
- **Map Integration**: Embedded Google Maps for Trofa location
- **Office Hours**: Clearly displayed availability information

## Navigation & Header
- **Sticky Navigation**: Navy background, white text, transitions on scroll
- **Logo**: Text-based "Diana Pimentel - Centro de Explicações" (left-aligned)
- **Menu Links**: Horizontal desktop, hamburger mobile (Início, Sobre, Serviços, Galeria, Testemunhos, Contactos)
- **Primary CTA**: "Marcar Aula" button (gold background, prominent placement)

## Component Library

### Cards
- **Service Cards**: White background, subtle shadow, navy border on hover, icon + title + description + link
- **Testimonial Cards**: Light background, rounded corners, star rating + quote + author
- **Contact Method Cards**: Clickable, icon-led, hover lift effect

### Buttons
- **Primary CTA**: Gold background, navy text, rounded, medium size (px-6 py-3)
- **Secondary**: Navy outline, navy text, white background
- **WhatsApp Floating**: Green circle (56x56px), white icon, fixed bottom-right, shadow, pulse animation

### Forms
- **Input Fields**: White background, navy border, rounded corners, p-3, focus:gold ring
- **Labels**: Above inputs, navy text, small, semibold
- **Submit Button**: Full-width on mobile, gold primary style

### Icons
- **Library**: Lucide React throughout
- **Usage**: Service cards, contact methods, navigation enhancements, social media
- **Size**: 24-32px for card headers, 20px inline, 40px for hero features

## Images
**Hero Image**: Professional study environment or abstract academic pattern (students at desks, books, modern classroom) - full-width background with overlay for text readability

**About Page Image**: Professional headshot of Diana Pimentel or teaching in action

**Gallery Images**: 12-16 high-quality photos of Sala 212, study sessions, classroom environment, organized materials

**Service Card Icons**: Subject-specific visual representations (not photos, use Lucide icons)

## Animations
**Framer Motion Implementation**: Smooth, professional, minimal distraction
- **Scroll Animations**: Fade-in + slide-up on section entry (stagger children by 100ms)
- **Page Transitions**: Subtle fade between routes (200ms duration)
- **Hover States**: Gentle lift on cards (2-4px translateY), scale on buttons (1.02)
- **Loading**: Skeleton screens for images, smooth opacity transitions

## Responsive Breakpoints
- **Mobile**: Single column, stacked navigation, full-width cards, touch-optimized CTAs
- **Tablet (md:)**: 2-column grids, horizontal navigation appears
- **Desktop (lg:)**: 3-4 column grids, full layout width, hover interactions active

## SEO & Meta
Each page includes specific meta tags:
- **Home**: "Explicações Trofa", "Centro Explicações Trofa", "Diana Pimentel"
- **Services**: Subject-specific keywords ("Explicações Português Trofa", "Preparação Exames Nacionais")
- **Contact**: Location-based ("Sala 212 Edifício América Trofa")