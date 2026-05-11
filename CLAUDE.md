# Al-Folio Academic Website

Personal academic website for an economics post-doctoral researcher, built with the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme. Deployed via GitHub Pages.

## Critical Rules

- **NEVER run `git push`, `git pull`, `git fetch`, or `git remote` commands.** I handle all remote Git operations myself.
- **NEVER run `git commit` without showing me the full diff first** (`git diff --staged`) and receiving my explicit approval.
- **Always show a summary of every file changed** before staging anything. Use `git diff` or `git status` so I can review.
- If a change touches `_config.yml`, warn me explicitly — it affects the entire site and requires a rebuild.
- Do not delete or overwrite files without confirming with me first.

## .gitignore — Claude Code Files

Ensure the following entries are present in `.gitignore` so that Claude Code working files never enter version control:

```
# Claude Code
.claude/
CLAUDE.md
```

If `.gitignore` doesn't already contain these lines, add them as the very first task of any session.

## Project Structure

```
_config.yml          # Site-wide settings (name, URL, social links, nav, collections)
_pages/              # Standalone pages (about.md, publications.md, cv.md, teaching.md, …)
_posts/              # Blog posts (YYYY-MM-DD-title.md)
_bibliography/       # papers.bib — BibTeX source for the publications page
_data/               # coauthors.yml, cv.yml, and other structured data
_projects/           # Project collection entries
_news/               # News/announcement entries
_teachings/          # Course collection entries
assets/              # Images, PDFs, CSS/JS overrides (assets/img/, assets/pdf/, …)
_includes/           # Reusable HTML partials (header, footer, social, …)
_layouts/            # Page layout templates
_sass/               # SCSS style overrides
```

## Commands

```bash
# Local development (Docker, recommended)
docker compose up

# Local development (native Ruby)
bundle exec jekyll serve --liveload

# Build for production
bundle exec jekyll build --lsi
```

## Common Tasks — How-To Reference

Read this section when working on the specific task requested.

### Adding or editing a standalone page

1. Create or edit a Markdown file in `_pages/` with proper front matter:
   ```yaml
   ---
   layout: page
   title: Page Title
   permalink: /page-slug/
   description: Short description for SEO and social previews.
   nav: true              # set false to hide from the navbar
   nav_order: 5           # controls position in the navbar
   ---
   ```
2. If the page should appear in navigation, set `nav: true` and choose `nav_order`.
3. For dropdown menus, set `nav: true` and add `dropdown: true` plus `children` in `_config.yml` under the `nav` key.

### Updating publications

1. Add or edit BibTeX entries in `_bibliography/papers.bib`.
2. To highlight your own name, ensure `scholar > last_name` and `scholar > first_name` are set in `_config.yml`.
3. Co-author links are managed in `_data/coauthors.yml`.
4. Use `selected: true` in a bib entry to feature it on the about page.

### Adding a blog post

1. Create `_posts/YYYY-MM-DD-title.md` with front matter:
   ```yaml
   ---
   layout: post
   title: Post Title
   date: YYYY-MM-DD HH:MM:SS
   description: Short summary.
   tags: [economics, research]
   categories: [blog]
   ---
   ```
2. Images go in `assets/img/` and are referenced with relative paths.

### Adding a project

1. Create a Markdown file in `_projects/` with:
   ```yaml
   ---
   layout: page
   title: Project Name
   description: One-line summary.
   img: assets/img/project-thumb.jpg
   importance: 1
   category: research
   ---
   ```

### Modifying the CV

Check which CV format is configured in `_config.yml` (`resume_cv` section). Al-folio supports RenderCV (YAML-to-PDF) and JSONResume. Edit the corresponding data file, not the layout directly.

### Editing styles

Override SCSS variables or add custom styles in `_sass/_custom.scss` (or the project's designated override file). Do not edit the base theme files in `_sass/` directly — they will be overwritten on upstream updates.

### Adding research tools or interactive content

Al-folio supports embedding charts (Chart.js), diagrams (Mermaid), math (MathJax/KaTeX), and TikZ figures inside Markdown posts and pages. Use the appropriate Liquid tags or fenced code blocks as shown in the al-folio docs. For anything more complex (e.g., Stata/R output, interactive data visualisations), create a standalone HTML file in `assets/` and embed it with an `<iframe>` or include it as a custom partial in `_includes/`.

## Conventions

- **Filenames**: lowercase, hyphens for spaces (`my-new-page.md`).
- **Images**: always place in `assets/img/`, use descriptive names, and keep file sizes reasonable (compress before adding).
- **PDFs** (papers, slides): place in `assets/pdf/`.
- **Front matter**: always include `layout`, `title`, and `description` at a minimum.
- **Do not modify `_layouts/` or `_includes/` unless strictly necessary.** Prefer overrides via `_sass/` or new partials.

## Workflow

1. I open a session and describe what I want to change.
2. You propose the plan (which files to create/edit and why).
3. After my approval, you implement the changes.
4. You show me a complete diff of all modified files.
5. Only after my explicit go-ahead, you stage the changes (`git add`).
6. You prepare the commit message and show it to me. I commit and push myself.

When compacting, always preserve the list of files modified and any pending review items.
