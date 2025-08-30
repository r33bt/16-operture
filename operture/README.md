# Next.js Landing Page Setup Guide

A streamlined guide to set up a professional landing page using Next.js 15, shadcn/ui, and Supabase - updated for 2025.

## Quick Start

`powershell
# Navigate to your project directory
cd "C:\Users\user\alphadev2\_active-projects\16-operture"

# Create Next.js project with latest defaults (includes TypeScript, Tailwind, App Router, Turbopack)
npx create-next-app@latest . --yes

# Install Supabase client
npm install @supabase/supabase-js

# Install essential utilities
npm install clsx tailwind-merge date-fns lucide-react

# Initialize shadcn/ui (uses the latest CLI)
npx shadcn@latest init --defaults

# Install commonly used shadcn/ui components for landing pages
npx shadcn@latest add button card badge separator avatar navigation-menu
`

## System Requirements

- **Node.js**: 18.18 or later
- **OS**: Windows (including WSL), macOS, or Linux
- **Browser**: Modern browser for development

## Project Structure

`
src/
├── app/
│   ├── page.tsx              # Landing page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── ui/                   # shadcn/ui components
│   ├── landing/              # Landing page components
│   │   ├── hero.tsx
│   │   ├── features.tsx
│   │   └── cta.tsx
│   └── layout/               # Layout components
├── lib/
│   ├── supabase.ts           # Supabase client
│   └── utils.ts              # Utility functions
└── types/
    └── index.ts              # TypeScript types
`

## Environment Setup

### 1. Supabase Configuration

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Copy your project URL and anon key from **Settings → API**
3. Update `.env.local` with your actual values

### 2. Development Workflow

`bash
# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint

# Type checking
npx tsc --noEmit
`

## Deployment to Vercel

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

## Troubleshooting

### shadcn/ui Issues
If components aren't installing properly:
`bash
rm components.json
npx shadcn@latest init --defaults
npx shadcn@latest add button card badge
`

### PowerShell Permissions
If you get execution policy errors:
`powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
`

## Key Updates from Previous Versions

- **Next.js 15**: Now includes React 19 support and Turbopack by default
- **shadcn/ui CLI**: Updated to `npx shadcn@latest`
- **create-next-app**: `--yes` flag uses sensible defaults automatically
- **Simplified structure**: Focus on landing page essentials only

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS](https://tailwindcss.com)
