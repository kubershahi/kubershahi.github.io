# al-folio Project Guide for AI Agents

## Architecture Overview

This is an **al-folio** academic portfolio site built with Jekyll 4.x. It's a static site generator that compiles Liquid templates, YAML data, BibTeX bibliographies, and Markdown content into HTML.

**Key Components:**

- **Jekyll Collections**: `_posts/`, `_projects/`, `_news/`, `_books/` - Markdown files that become site content
- **Layouts** (`_layouts/`): Reusable page templates (e.g., `about.liquid`, `post.liquid`, `cv.liquid`)
- **Includes** (`_includes/`): Modular components like `news.liquid`, `selected_papers.liquid`, `social.liquid`
- **Data Files** (`_data/`): YAML structured data - `cv.yml`, `repositories.yml`, `socials.yml`
- **Configuration** (`_config.yml`): Site-wide settings, Jekyll plugin configuration, theme options
- **Bibliography** (`_bibliography/papers.bib`): Academic publications in BibTeX format, rendered via jekyll-scholar

## Critical Developer Workflows

### Local Development

**Recommended**: Use Docker to avoid Ruby dependency issues:

```bash
docker compose pull
docker compose up
```

Site runs at `http://localhost:8080` with live reload.

**Alternative** (legacy): `bundle exec jekyll serve` (requires Ruby, Bundler, and all gems installed locally)

### Deployment

- **Automatic**: Pushing to `main` triggers `.github/workflows/deploy.yml` which builds and deploys to `gh-pages` branch
- Site must be at `<username>.github.io` for personal pages
- Changes to `_config.yml` require rebuild; other changes are live on refresh

### Code Formatting

Run Prettier before committing (enforced by CI):

```bash
npx prettier --write "**/*.{html,js,liquid,md}"
```

## Project-Specific Conventions

### Frontmatter Patterns

All Markdown files use Jekyll frontmatter. Example from `_pages/about.md`:

```yaml
---
layout: about
title: about
permalink: /
subtitle: Computer Science Graduate Student...
profile:
  align: right
  image: profile_pic.png
announcements:
  enabled: true
  limit: 3
---
```

**Collections** (`_posts/`, `_projects/`, `_news/`): Filenames MUST follow `YYYY-MM-DD-title.md` format for posts.

### Bibliography System

Publications use jekyll-scholar with custom BibTeX keywords:

- `selected={true}`: Display on homepage
- `abbr={Conference}`: Show conference badge
- `pdf`, `html`, `code`, `slides`: Generate buttons
- `preview={image.gif}`: Thumbnail image

Example from `_bibliography/papers.bib`:

```bibtex
@article{PhysRev.47.777,
  abbr={PhysRev},
  title={Can Quantum-Mechanical Description...},
  selected={true},
  pdf={example.pdf}
}
```

### Sass Architecture

Styles in `_sass/` follow this structure:

- `_base.scss`: Core typography, elements
- `_themes.scss`: Color schemes (light/dark mode)
- `_layout.scss`: Page structure, grid
- `_variables.scss`: Reusable dimensions, breakpoints
- `_cv.scss`, `_distill.scss`: Page-specific styles

**Important**: Sass changes require Jekyll rebuild.

### Custom Plugins

Located in `_plugins/`, these extend Jekyll:

- `jekyll-scholar`: Render BibTeX bibliographies
- `cache-bust.rb`: Add cache-busting to assets
- `hide-custom-bibtex.rb`: Filter BibTeX display
- `google-scholar-citations.rb`: Fetch live citation counts

## Integration Points

### Data Flow

1. User edits Markdown in `_pages/` or collections
2. Frontmatter + `_config.yml` determine layout selection
3. Layout includes Liquid components from `_includes/`
4. Components pull data from `_data/*.yml` or `_bibliography/*.bib`
5. Jekyll compiles to HTML in `_site/` (git-ignored)
6. GitHub Actions deploys `_site/` to `gh-pages` branch

### External Dependencies

- **Ruby Gems**: See `Gemfile` - critical gems include `jekyll-scholar`, `jekyll-paginate-v2`
- **JavaScript**: Minimal - MathJax/KaTeX for equations, bootstrap for UI
- **CSS**: Bootstrap + custom Sass
- **Docker**: Base image `amirpourmand/al-folio` (Jekyll + Ruby pre-installed)

## Common Gotchas

1. **Config Changes**: Editing `_config.yml` requires restart/rebuild (not live reloaded)
2. **Permalinks**: Must be unique; duplicates cause build failures
3. **Bibliography**: BibTeX syntax errors break builds silently - validate `.bib` files
4. **Images**: Store in `assets/img/`, reference as `assets/img/filename.png` (Jekyll prepends baseurl)
5. **GitHub Pages**: Repository name MUST match `<username>.github.io` for personal sites
6. **Liquid Syntax**: Use `{% %}` for logic, `{{ }}` for output, `.liquid` extension for templates

## Key Files to Reference

- [\_config.yml](_config.yml) - Site configuration (required for almost all changes)
- [\_layouts/about.liquid](_layouts/about.liquid) - Homepage structure
- [\_includes/news.liquid](_includes/news.liquid) - News section component pattern
- [\_data/cv.yml](_data/cv.yml) - CV data structure (fallback if no JSON resume)
- [CUSTOMIZE.md](CUSTOMIZE.md) - Detailed customization guide
- [INSTALL.md](INSTALL.md) - Setup and deployment instructions

## Content Modification Quick Reference

| Task              | Files to Edit                               | Reload Required?     |
| ----------------- | ------------------------------------------- | -------------------- |
| Add blog post     | `_posts/YYYY-MM-DD-title.md`                | No                   |
| Update bio        | `_pages/about.md`                           | No                   |
| Add publication   | `_bibliography/papers.bib`                  | No                   |
| Change colors     | `_sass/_themes.scss`                        | Yes (rebuild)        |
| Update CV         | `_data/cv.yml` or `assets/json/resume.json` | No                   |
| Add social links  | `_data/socials.yml`                         | No                   |
| Modify site title | `_config.yml`                               | Yes (restart server) |
