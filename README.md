# EZ Tech Consultants

Professional website for EZ Tech Consultants - Your Trusted IT Partner.

## Overview

Modern, responsive website built with Hugo and hosted on Cloudflare Pages.

## Features

- Responsive Design
- Mobile-First Approach
- Fast Loading
- Contact Form Integration
- SEO Optimized

## Technology Stack

- Hugo Static Site Generator
- Tailwind CSS
- Cloudflare Pages
- Modern JavaScript

## Local Development

1. Install Hugo (Extended version):
```bash
brew install hugo
```

2. Clone the repository:
```bash
git clone https://github.com/yourusername/eztechconsultants.git
cd eztechconsultants
```

3. Start the development server:
```bash
hugo server -D
```

The site will be available at `http://localhost:1313/`

## Deployment

The site is automatically deployed to Cloudflare Pages when changes are pushed to the main branch.

## Content Management

### Adding Blog Posts
```bash
hugo new content/blog/my-post.md
```

### Adding Services
Edit `/content/services.md`

### Modifying Contact Form
The contact form uses Formspree. Update the endpoint in `/themes/eztechconsultants/layouts/partials/contact-form.html`

## Customization

### Logo and Branding
- Logo: `/themes/eztechconsultants/static/images/logo.svg`
- Favicon: `/themes/eztechconsultants/static/images/favicon.svg`
- Colors and styles: `/themes/eztechconsultants/static/css/styles.css`

### Navigation
Edit the menu in `hugo.toml`
