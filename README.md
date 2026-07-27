# CTS Chiller Maintenance Website

A modern, high-performance web application built for **CTS (Central Temperature Systems / Chiller Technical Services)** to showcase industrial chiller maintenance services, manage client inquiries, schedule service requests, and provide resources for HVAC/chiller upkeep. 

Built with the modern web stack, featuring server-side rendering (SSR) for optimal SEO and lightning-fast page loads.

---

## 🚀 Features

- **Service Showcase:** Detailed breakdowns of preventive maintenance, emergency repairs, retrofitting, and diagnostics for industrial chillers.
- **Service Request & Booking Portal:** Interactive forms for clients to request urgent repairs or schedule routine maintenance.
- **Client Dashboard / Portal (Optional):** Allow registered clients to track ongoing maintenance tickets, view service histories, and download reports.
- **Dynamic Blog / Resource Hub:** Articles, troubleshooting guides, and best practices for extending chiller lifespan.
- **Responsive & Mobile-First Design:** Fully optimized for desktop, tablet, and mobile devices used by field technicians and facility managers.
- **SEO Optimized:** Server-side rendering via Next.js to rank high on search engines for local HVAC and chiller services.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (React Framework with App Router / Pages Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) / [CSS Modules]
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) / [Radix UI] *(Update as applicable)*
- **Icons:** [Lucide React](https://lucide.dev/)
- **Form Handling & Validation:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Database / Backend:** [Prisma / PostgreSQL / Firebase / Supabase] *(Update based on your setup)*
- **Deployment:** [Vercel](https://vercel.com/)

---

## 📁 Project Structure

```text
├── public/                 # Static assets (images, logos, fonts)
├── src/
│   ├── app/                # Next.js App Router (or `pages/`)
│   │   ├── api/            # Backend API routes
│   │   ├── dashboard/      # Client/Admin dashboard pages
│   │   ├── services/       # Chiller maintenance service pages
│   │   ├── contact/        # Service request & contact page
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Homepage
│   ├── components/         # Reusable UI components (Navbar, Footer, Forms)
│   ├── lib/                # Utility functions and database connectors
│   └── styles/             # Global stylesheets
├── .env.example            # Environment variables template
├── package.json
└── README.md