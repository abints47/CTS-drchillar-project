# CTS - Chiller Technical Services L.L.C

<div align="center">

[![Live Site](https://img.shields.io/badge/Live%20Site-cts--drchillar.vercel.app-blue?style=for-the-badge&logo=vercel)](https://cts-drchillar.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3+-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge)](#license)

**SKILL TO CHILL**

A modern, responsive business website for Chiller Technical Services L.L.C., delivering professional HVAC and industrial cooling solutions across the UAE.

[View Live Site](https://cts-drchillar.vercel.app) • [Report Issue](https://github.com/abints47/CTS-drchillar-project/issues) • [Contact Support](#contact--support)

</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Environment Variables](#environment-variables)
- [Running Locally](#running-locally)
- [Building for Production](#building-for-production)
- [Deployment](#deployment)
- [Pages & Routes](#pages--routes)
- [Features in Detail](#features-in-detail)
- [Performance Optimizations](#performance-optimizations)
- [SEO & Metadata](#seo--metadata)
- [Contact & Support](#contact--support)
- [License](#license)

---

## 🎯 Overview

**CTS - Chiller Technical Services L.L.C** is a leading provider of water chillers, cooling towers, A/C units, cold rooms, and comprehensive maintenance services across the United Arab Emirates. This website serves as the company's primary digital storefront and customer engagement platform.

The site combines professional design with robust functionality to:
- Showcase cutting-edge cooling and refrigeration products
- Deliver detailed service information with technical specifications
- Provide educational content through an integrated blog
- Enable seamless customer inquiries via multiple contact channels
- Generate leads through WhatsApp, email, and phone integration

**Company Details:**
- 🏢 **Location:** Industrial Area #02, Ajman, UAE
- 📞 **Phone:** +971 67434537
- 💬 **WhatsApp:** +971 67434537
- 📧 **Email:** info@drchiller.com
- 🌐 **Website:** [cts-drchillar.vercel.app](https://cts-drchillar.vercel.app)

---

## ✨ Key Features

### 🎨 User Experience
- **Fully Responsive Design** — Optimized for desktop, tablet, and mobile devices with fluid layouts and touch-friendly interfaces
- **Modern Visual Interface** — Clean, professional aesthetic with smooth animations and intuitive navigation
- **Accessibility** — WCAG-compliant components ensuring usability for all users
- **Fast Load Times** — Optimized image delivery and lazy loading for superior performance

### 📊 Product & Service Management
- **Dynamic Product Pages** — Individual pages for each product category with detailed specifications:
  - Water Chillers, Coolers & Heat Pumps
  - Heat Exchange & Cooling Towers
  - A/C Units & Air Curtains
  - Cold Rooms & Ice Block Machines
  - Industrial Chillers
- **Service Showcase** — Comprehensive service pages including:
  - A/C Chiller & Genset Rentals
  - Chilled Water Pipelines & Flushing
  - AC Chillers & Cold Rooms Maintenance
  - Coil Manufacturing & Replacement
  - Overhauling & Winding
  - Annual Maintenance Contracts (AMC)
  - Custom A/C Services

### 📝 Blog & Content
- **Educational Articles** — Regular industry insights, maintenance tips, and cooling solutions
- **SEO-Optimized Posts** — Structured for search visibility and organic traffic
- **Category Organization** — Articles tagged by topic for easy discovery
- **Reading Time Estimates** — Helpful indicators for user engagement

### 💼 Lead Generation & Contact
- **Multi-Channel Communication:**
  - WhatsApp integration for instant messaging
  - Direct phone and email contact links
  - Integrated contact forms with validation
  - Location map with directions
- **Call-to-Action Buttons** — Strategically placed CTAs throughout the site
- **Business Hours Information** — Clear availability details

### 🔍 SEO & Performance
- **Meta Tags & Structured Data** — Optimized for search engines with proper semantic markup
- **Open Graph Integration** — Rich preview cards for social media sharing
- **Schema Markup** — Business, Product, and LocalBusiness schema for enhanced SERP visibility
- **Sitemap & Robots.txt** — Auto-generated for search engine crawling
- **Image Optimization** — Next.js Image component for automatic WebP conversion and responsive sizing

---

## 🛠 Technology Stack

| Category | Technology | Purpose |
|----------|-----------|---------|
| **Framework** | Next.js 14+ | Modern React framework with App Router |
| **Language** | TypeScript & JavaScript | Type-safe development and interoperability |
| **Styling** | Tailwind CSS 3+ | Utility-first CSS framework for rapid UI development |
| **Image Optimization** | Next.js Image | Automatic format conversion, lazy loading, responsive sizing |
| **Deployment** | Vercel | Serverless hosting with automatic deployments |
| **Package Manager** | npm / yarn / pnpm | Dependency management |
| **Version Control** | Git | Source code management |
| **Hosting** | Vercel Edge Network | Global CDN for fast content delivery |

### Optional Integrations (Recommended)
- **Email Service:** SendGrid, Mailgun, or AWS SES for contact form submissions
- **Analytics:** Google Analytics 4 or Mixpanel for user behavior tracking
- **CMS (Optional):** Contentful, Strapi, or Sanity for blog management
- **Contact Form Handler:** Formspree, EmailJS, or custom backend API
- **Chat Widget:** Intercom or Zendesk for real-time support

---

## 📂 Project Structure

```
CTS-drchillar-project/
│
├── app/                              # Next.js App Router
│   ├── layout.tsx                    # Root layout with global providers
│   ├── page.tsx                      # Homepage
│   ├── (pages)/                      # Page routes
│   │   ├── About/
│   │   │   ├── page.tsx
│   │   │   └── layout.tsx
│   │   ├── Products/
│   │   │   ├── page.tsx              # Products overview
│   │   │   ├── [category]/
│   │   │   │   └── page.tsx          # Individual product pages
│   │   │   └── layout.tsx
│   │   ├── Services/
│   │   │   ├── page.tsx              # Services overview
│   │   │   ├── [service]/
│   │   │   │   └── page.tsx          # Individual service pages
│   │   │   └── layout.tsx
│   │   ├── Contact/
│   │   │   ├── page.tsx
│   │   │   └── layout.tsx
│   │   └── blog/
│   │       ├── page.tsx              # Blog listing
│   │       ├── [slug]/
│   │       │   └── page.tsx          # Individual blog posts
│   │       └── layout.tsx
│   │
│   ├── api/                          # API routes (optional)
│   │   └── contact/
│   │       └── route.ts              # Contact form handler
│   │
│   └── globals.css                   # Global styles
│
├── components/                       # Reusable React components
│   ├── common/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   └── MobileMenu.tsx
│   ├── hero/
│   │   ├── HeroSection.tsx
│   │   └── HeroBanner.tsx
│   ├── products/
│   │   ├── ProductCard.tsx
│   │   ├── ProductGrid.tsx
│   │   └── ProductDetails.tsx
│   ├── services/
│   │   ├── ServiceCard.tsx
│   │   ├── ServiceGrid.tsx
│   │   └── ServiceHighlight.tsx
│   ├── blog/
│   │   ├── BlogCard.tsx
│   │   ├── BlogGrid.tsx
│   │   ├── BlogPost.tsx
│   │   └── RelatedPosts.tsx
│   ├── contact/
│   │   ├── ContactForm.tsx
│   │   ├── ContactInfo.tsx
│   │   └── LocationMap.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Modal.tsx
│       └── LoadingSpinner.tsx
│
├── public/                           # Static assets
│   ├── images/
│   │   ├── hero/                     # Hero section images
│   │   ├── products/                 # Product images
│   │   │   ├── water-chillers.jpg
│   │   │   ├── heat-exchangers.webp
│   │   │   └── ...
│   │   ├── services/                 # Service images
│   │   └── blog/                     # Blog post images
│   ├── logo.png                      # Company logo
│   ├── favicon.ico
│   └── robots.txt
│
├── lib/                              # Utility functions
│   ├── api.ts                        # API client functions
│   ├── utils.ts                      # Helper functions
│   ├── constants.ts                  # App constants
│   └── seo.ts                        # SEO utilities
│
├── styles/                           # Style modules (if using CSS Modules)
│   ├── components/
│   └── pages/
│
├── content/                          # Content data (optional)
│   ├── blog/                         # Blog post markdown files
│   │   ├── preventative-chiller-maintenance.md
│   │   ├── temporary-ac-rentals.md
│   │   └── ...
│   ├── products.json                 # Product catalog data
│   └── services.json                 # Service data
│
├── .env.local                        # Environment variables (local)
├── .env.example                      # Environment variables template
├── next.config.js                    # Next.js configuration
├── tailwind.config.ts                # Tailwind CSS configuration
├── tsconfig.json                     # TypeScript configuration
├── package.json                      # Project dependencies
├── package-lock.json
├── .gitignore
└── README.md                         # This file
```

---

## 📋 Prerequisites

Before you begin, ensure your system has the following installed:

- **Node.js:** v18.0.0 or later
  - Download from [nodejs.org](https://nodejs.org)
  - Verify installation: `node --version`
  
- **npm, yarn, or pnpm:** Package manager for installing dependencies
  - npm comes with Node.js
  - Verify installation: `npm --version`

- **Git:** For version control
  - Download from [git-scm.com](https://git-scm.com)
  - Verify installation: `git --version`

- **Code Editor:** Recommended: VS Code, WebStorm, or Sublime Text

- **Modern Web Browser:** For testing during development

---

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
# Using HTTPS
git clone https://github.com/abints47/CTS-drchillar-project.git

# Or using SSH (if configured)
git clone git@github.com:abints47/CTS-drchillar-project.git

# Navigate to project directory
cd CTS-drchillar-project
```

### 2. Install Dependencies

Choose your preferred package manager:

```bash
# Using npm
npm install

# Or using yarn
yarn install

# Or using pnpm
pnpm install
```

### 3. Configure Environment Variables

```bash
# Copy the example environment file
cp .env.example .env.local
```

Then edit `.env.local` with your configuration (see [Environment Variables](#environment-variables) section).

### 4. Verify Installation

```bash
# Check Node version
node --version  # Should be v18+

# Check npm version
npm --version   # Should be v8+

# List installed packages
npm list
```

---

## 🏃 Running Locally

### Development Mode

Start the development server with hot reload:

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

**Features in development mode:**
- Fast Refresh for instant code updates
- Detailed error messages and stack traces
- Unminified source code for debugging
- Vercel Analytics integration disabled

### Test Your Changes

1. Open browser to `http://localhost:3000`
2. Navigate through pages to verify functionality
3. Test responsive design using browser DevTools (F12)
   - Toggle device toolbar for mobile preview
   - Test tablet and desktop viewports
4. Check console for warnings or errors
5. Test contact forms and links

### Stop the Development Server

Press `Ctrl + C` in your terminal to stop the server.

---

## 🔨 Building for Production

### Create Optimized Build

```bash
# Build the project
npm run build
```

**Build process:**
- Compiles TypeScript and JavaScript
- Optimizes CSS and JavaScript bundles
- Generates static pages where possible
- Validates internal links
- Performs image optimization
- Creates `.next` directory with production-ready code

### Test Production Build Locally

```bash
# Start production server
npm start
```

Access the site at `http://localhost:3000` (built files are served)

### Verify Build Output

```bash
# Check build size
npm run build -- --stats

# Analyze bundle
npm run build -- --analyze
```

### Common Build Errors & Solutions

| Error | Solution |
|-------|----------|
| "Cannot find module" | Run `npm install` and verify all imports |
| "TypeScript error" | Check `tsconfig.json` and fix type issues |
| "Image not found" | Verify image paths are correct in `/public` |
| "Environment variable missing" | Add to `.env.local` and rebuild |

---

## 🌐 Deployment

### Deployment to Vercel (Recommended)

This project is configured for seamless deployment on Vercel.

#### Option 1: Using Vercel CLI

```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Deploy to production
vercel --prod
```

#### Option 2: GitHub Integration (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Configure environment variables in Vercel dashboard
6. Click "Deploy"
7. Vercel automatically deploys on every push to main branch

#### Configure Environment Variables on Vercel

1. Go to project settings on vercel.com
2. Navigate to **Environment Variables**
3. Add all variables from `.env.example`
4. Redeploy to apply changes

**Current Live Deployment:**
- URL: [https://cts-drchillar.vercel.app](https://cts-drchillar.vercel.app)
- Auto-deployments enabled on: main branch
- Preview deployments: Enabled for pull requests

---

## 📄 Pages & Routes

### Public Pages

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Landing page with hero, offerings, and featured products |
| `/About` | About | Company background, mission, values, and team info |
| `/Products` | Products | Main product catalog with categories |
| `/Products/water-chillers` | Product Detail | Water chillers, coolers & heat pumps |
| `/Products/heat-exchangers` | Product Detail | Heat exchange & cooling towers |
| `/Products/ac-units` | Product Detail | A/C units & air curtains |
| `/Products/cold-rooms` | Product Detail | Cold rooms & ice block machines |
| `/Services` | Services | Main services overview |
| `/Services/AC-chillers` | Service Detail | A/C chiller & genset rentals |
| `/Services/Water-chillers` | Service Detail | Chilled water pipelines & flushing |
| `/Services/Coldroom-Maintenance` | Service Detail | AC chillers & cold rooms maintenance |
| `/Services/coil-Manufacture` | Service Detail | Coil manufacturing & replacement |
| `/Services/overhauling` | Service Detail | Overhauling & winding services |
| `/Services/amc` | Service Detail | Annual maintenance contracts |
| `/Contact` | Contact | Contact form, business info, map |
| `/blog` | Blog | All blog articles listing |
| `/blog/[slug]` | Blog Post | Individual blog post with details |

### Dynamic Routes

```
/Products/[category]      → Individual product page
/Services/[service]       → Individual service page
/blog/[slug]             → Individual blog post
```

### API Routes (Optional)

```
POST   /api/contact       → Handle contact form submissions
GET    /api/blog          → Fetch blog posts (if using API)
POST   /api/subscribe     → Newsletter subscription
```

---

## 🎨 Features in Detail

### 1. Responsive Design System

- **Mobile-First Approach:** Designed for mobile, enhanced for larger screens
- **Breakpoints:** xs (320px), sm (640px), md (768px), lg (1024px), xl (1280px)
- **Flexible Grids:** Products and services display in 1-4 columns based on screen size
- **Touch-Friendly:** Button sizes and spacing optimized for touch devices

### 2. Product Management

**Product Categories:**
- Water Chillers, Coolers & Heat Pumps
- Heat Exchange & Cooling Towers
- A/C Units & Air Curtains
- Cold Rooms & Ice Block Machines
- Industrial Chillers

**Each product page includes:**
- High-quality images (optimized with Next.js Image)
- Product specifications and technical details
- Performance metrics and benefits
- Pricing information (if available)
- Availability status
- Related products section
- Call-to-action buttons for inquiries

### 3. Service Showcase

**Service Categories:**
- A/C Chiller & Genset Rentals
- Chilled Water Pipelines & Flushing
- AC Chillers & Cold Rooms Maintenance
- Coil Manufacturing & Replacement
- Overhauling & Winding
- Annual Maintenance Contracts (AMC)

**Service page features:**
- Service description and scope
- Process workflow with steps
- Benefits and advantages
- Pricing models or quotes
- Service coverage areas (Dubai, Ajman, etc.)
- Testimonials (optional)
- Request service buttons

### 4. Blog & Content System

**Blog Features:**
- Markdown-based or CMS-integrated articles
- Author information and publish dates
- Reading time estimates
- Category tagging and filtering
- Related articles recommendations
- Social sharing buttons
- Comments section (optional)
- Newsletter subscription prompt

**SEO-Friendly Articles:**
- Meta descriptions
- Canonical URLs
- Structured data (Article schema)
- Open Graph tags for social sharing

### 5. Lead Generation

**Multi-Channel Communication:**
- WhatsApp integration (click-to-chat)
- Direct phone number linking
- Email contact forms
- Address with Google Maps embed
- Business hours display
- Live chat widget support (optional)

**Contact Form Features:**
- Name, email, phone, message fields
- Subject line selection
- Service selection dropdown
- Form validation
- CAPTCHA protection (optional)
- Success/error notifications
- Email confirmation to user
- Admin notification emails

### 6. Search Engine Optimization

**On-Page SEO:**
- Proper heading hierarchy (H1, H2, H3)
- Meta titles and descriptions
- Alt text for all images
- Internal linking strategy
- Mobile-friendly design
- Fast page load times

**Technical SEO:**
- XML sitemap generation
- Robots.txt configuration
- Structured data (JSON-LD)
- Open Graph tags
- Twitter Card metadata
- Canonical URLs
- Breadcrumb navigation

**Local SEO:**
- Business schema markup
- Company name, address, phone (NAP)
- Service area definition
- Local business schema
- Google Maps integration

---

## 🔍 SEO & Metadata

### Site Metadata

```typescript
// app/layout.tsx
export const metadata = {
  title: 'CTS - Chiller Technical Services | HVAC Expert in UAE',
  description: 'Professional chiller maintenance, HVAC repair, and cooling solutions in the UAE.',
  keywords: 'chiller maintenance, HVAC repair, cooling solutions, UAE',
  authors: [{ name: 'CTS Team' }],
  creator: 'CTS',
  publisher: 'Vercel',
  formatDetection: {
    email: true,
    telephone: true,
  },
}
```

### Open Graph Tags

```html
<meta property="og:title" content="CTS - Chiller Technical Services" />
<meta property="og:description" content="Professional cooling solutions" />
<meta property="og:image" content="https://cts-drchillar.vercel.app/og-image.jpg" />
<meta property="og:url" content="https://cts-drchillar.vercel.app" />
<meta property="og:type" content="website" />
```

### Structured Data

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "CTS - Chiller Technical Services L.L.C",
  "image": "https://cts-drchillar.vercel.app/logo.png",
  "description": "HVAC and industrial cooling solutions",
  "telephone": "+971 67434537",
  "email": "info@drchiller.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Industrial Area #02",
    "addressLocality": "Ajman",
    "addressCountry": "AE"
  }
}
```

### Sitemap

Auto-generated at `/sitemap.xml`. Includes all pages, products, services, and blog posts.

### Robots.txt

```
User-agent: *
Allow: /
Disallow: /admin
Disallow: /api

Sitemap: https://cts-drchillar.vercel.app/sitemap.xml
```

---

## 📊 Analytics & Monitoring

### Google Analytics 4 Integration

```typescript
// Track page views, events, and user behavior
import { analytics } from '@/lib/analytics'

analytics.trackPageView()
analytics.trackEvent('contact_form_submitted', { service: 'AMC' })
```

### Key Metrics to Monitor

- Page views and unique visitors
- Traffic sources (organic, direct, referral)
- User engagement (scroll depth, time on page)
- Conversion rates (contact form submissions)
- Device type distribution
- Geographic distribution
- Top performing pages and products

### Vercel Analytics

Automatically included with Vercel deployment:
- Web Analytics (page views, unique visitors)
- Core Web Vitals (LCP, FID, CLS)
- Edge Function performance
- Deployment logs and errors

---

## 🐛 Debugging & Troubleshooting

### Common Issues

**Issue: Build fails with "Cannot find module"**
```bash
# Solution: Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

**Issue: Images not loading**
```bash
# Check public folder path
# Verify image extensions are correct
# Check Next.js image configuration in next.config.js
```

**Issue: Slow build times**
```bash
# Check for unnecessary dependencies
npm ls

# Profile build
npm run build -- --profile
```

**Issue: Environment variables not working**
```bash
# Verify .env.local exists
# Restart dev server
# Check variable names (must start with NEXT_PUBLIC_ for client-side)
```

### Enable Debug Logging

```bash
# Set debug environment variable
DEBUG=* npm run dev

# Or for specific package
DEBUG=next:* npm run dev
```

---

## 🤝 Contributing

### Development Workflow

1. Create a feature branch
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes
   - Follow existing code style
   - Use TypeScript for new components
   - Test responsiveness on mobile

3. Commit changes
   ```bash
   git commit -am "Add feature: description"
   ```

4. Push to branch
   ```bash
   git push origin feature/your-feature-name
   ```

5. Create Pull Request on GitHub

### Code Style Guidelines

- Use TypeScript for all new code
- Follow Tailwind CSS utility-first approach
- Use semantic HTML
- Write descriptive variable and function names
- Add comments for complex logic
- Format code with Prettier (if configured)

### Testing

```bash
# Run tests (if configured)
npm test

# Run tests in watch mode
npm test -- --watch
```

---

## 📜 License

This project is **proprietary and confidential**. All rights reserved.

© 2026 CTS - Chiller Technical Services L.L.C. All rights reserved.

**Unauthorized copying, distribution, modification, or use of this code is strictly prohibited.**

For licensing inquiries, contact: [info@drchiller.com](mailto:info@drchiller.com)

---

## 📚 Additional Resources

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

### Tools & Utilities
- [Vercel Deployment Guide](https://vercel.com/docs/deployments/overview)
- [Google PageSpeed Insights](https://pagespeed.web.dev)
- [SEO Audit Tools](https://www.semrush.com)
- [Responsive Design Checker](https://responsivedesignchecker.com)

### Performance Monitoring
- [Vercel Analytics](https://vercel.com/analytics)
- [Google Analytics](https://analytics.google.com)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)

---

## 🙏 Acknowledgments

- **Framework:** Next.js Team
- **Styling:** Tailwind Labs
- **Deployment:** Vercel
- **Design & Development:** Maktal SEO
- **Company:** CTS - Chiller Technical Services L.L.C.

---

## 📝 Changelog

### Version 1.0 (Current)
- ✅ Initial project setup with Next.js App Router
- ✅ Responsive design for all devices
- ✅ Product and service pages
- ✅ Blog section with articles
- ✅ Contact form integration
- ✅ SEO optimization
- ✅ Vercel deployment

### Planned Features
- 📋 Advanced filtering on products/services
- 💬 Live chat widget integration
- 📊 Customer testimonials section
- 🎥 Video content integration
- 🛒 Online booking system (rentals)
- 📱 Mobile app (future)

---

**Last Updated:** January 2026  
**Maintained By:** CTS Development Team  
**Next Review:** July 2026

---

<div align="center">

**Made with ❤️ by CTS - Chiller Technical Services L.L.C**

[Back to Top](#cts---chiller-technical-services-llc)

</div>