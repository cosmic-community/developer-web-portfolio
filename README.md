# Professional Developer Portfolio

![Portfolio Preview](https://imgix.cosmicjs.com/bc53e240-7ec0-11f0-8dcc-651091f6a7c0-photo-1611224923853-80b023f02d71-1755802670553.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, professional developer portfolio website built with Next.js that showcases your projects, skills, work experience, and client testimonials. The site dynamically pulls content from your Cosmic CMS bucket, making it easy to update your portfolio without touching code.

## ✨ Features

- **Dynamic Project Showcase**: Display your projects with filtering by status and featured projects
- **Skills Matrix**: Organized skill display by categories with proficiency levels and years of experience
- **Work Experience Timeline**: Professional history with achievements and technologies used
- **Client Testimonials**: Customer feedback with ratings and linked projects
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **SEO Optimized**: Proper meta tags and structured content for search engines
- **Performance Focused**: Fast loading times with optimized images using Cosmic's imgix integration

## Clone this Bucket

## Clone this Bucket and Code Repository

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Bucket and Code Repository](https://img.shields.io/badge/Clone%20this%20Bucket-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=68a76b4dffd08cae13b80313&clone_repository=68a78648aa80e567c0a2225c)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a web developer portfolio with projects, skills, work experience, and testimonials"

### Code Generation Prompt

> "Build a Next.js website that uses my existing objects in this bucket"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Cosmic
- **Image Optimization**: Cosmic's imgix integration
- **Deployment**: Vercel-ready

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with your portfolio content

### Installation

1. Clone this repository:
```bash
git clone <repository-url>
cd developer-portfolio
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Fill in your Cosmic credentials in `.env.local`:
```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
```

4. Run the development server:
```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

## 📖 Cosmic SDK Examples

### Fetching Projects
```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: projects } = await cosmic.objects
  .find({
    type: 'projects'
  })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Getting Featured Projects
```typescript
const { objects: featuredProjects } = await cosmic.objects
  .find({
    type: 'projects',
    'metadata.featured': true
  })
  .depth(1)
```

### Fetching Skills by Category
```typescript
const { objects: skills } = await cosmic.objects
  .find({
    type: 'skills'
  })
  .sort('metadata.proficiency')
  .depth(1)
```

## 🎨 Cosmic CMS Integration

This portfolio integrates with four main Cosmic object types:

- **Projects**: Showcase your work with images, descriptions, tech stacks, and live/GitHub links
- **Skills**: Display your technical abilities organized by category with proficiency levels
- **Work Experience**: Professional history with achievements and technologies
- **Testimonials**: Client feedback with ratings and project relationships

Content is automatically pulled from your Cosmic bucket and displayed with responsive design and optimal performance.

## 🚀 Deployment Options

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Netlify
1. Push code to GitHub
2. Create new site from Git
3. Set build command: `bun run build`
4. Set publish directory: `out`
5. Add environment variables
6. Deploy

Remember to add your environment variables (`COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`) in your deployment platform's settings.
<!-- README_END -->