# EZ Tech Consultants Website

Modern website for EZ Tech Consultants, a boutique MSP serving small to medium businesses.

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

### Setup Cloudflare Pages

1. Create a new project in Cloudflare Pages
2. Connect your GitHub repository
3. Add the following environment variables in GitHub Secrets:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`

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
