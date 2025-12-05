# Portfolio Website – Product Requirements Document (PRD)

## 1. Overview

This project is a personal portfolio website built with Next.js and React. It showcases projects, skills, and experience, and serves as a central hub for the owner’s online presence.

The app is implemented with Next.js 15 (App Router) and uses Tailwind CSS for styling. Commits and releases are managed with `@programinglive/commiter` to enforce consistent commit messages and automated versioning/changelogs.

## 2. Goals

- Provide a fast, responsive portfolio site that works well on desktop and mobile.
- Clearly present projects, skills, and contact information.
- Make it easy for visitors and potential clients/employers to understand what the owner does.
- Keep deployment and releases simple and automated via npm scripts.

## 3. Non‑Goals

- No complex CMS integration in the initial version (content can be static or code-driven).
- No authentication or user accounts.
- No blog engine in the first release (can be added later).

## 4. Target Users

- Recruiters and hiring managers
- Potential freelance/contract clients
- Other developers viewing the owner’s work

## 5. Core Use Cases

- View the home page with a short introduction and hero section.
- Browse a list/grid of projects with titles, tech stack, and short descriptions.
- View details for a specific project (optional in initial version; can be a modal or dedicated page).
- View a list of skills/technologies.
- Access contact methods (email, social links, GitHub, LinkedIn, etc.).

## 6. Functional Requirements

### 6.1 Pages & Navigation

- Home page
  - Hero section with name, role, and a short tagline.
  - Prominent call-to-action buttons (e.g., “View Projects”, “Contact”).
- Projects section/page
  - List of projects with: name, brief description, tech stack, and link(s) (GitHub, live demo).
- About section/page
  - Short professional summary and background.
- Skills section
  - Clear list of primary technologies and tools.
- Contact section
  - At minimum: email and links to main social profiles.

Navigation must be clear and consistent across the site (header and/or footer links).

### 6.2 Content Management

- Content can be defined in TypeScript/JavaScript configuration objects or simple JSON/TS modules.
- No external database is required for the initial release.

### 6.3 Accessibility

- All interactive elements must be keyboard accessible.
- Provide descriptive `alt` text for key images/avatars.
- Use semantic HTML structure where possible.

## 7. Non‑Functional Requirements

- **Performance**
  - Fast initial load and smooth navigation (leveraging Next.js optimizations).
- **Responsiveness**
  - Fully responsive across common breakpoints (mobile, tablet, desktop).
- **SEO**
  - Basic SEO metadata for main pages (title, description, open graph tags where appropriate).
- **Security**
  - Keep dependencies up to date and promptly patch known vulnerabilities (e.g., Next.js/React security releases).

## 8. Technology Stack

- **Framework**: Next.js 15 (React 18)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons/Graphics**: `@heroicons/react` and/or SVG icons
- **Tooling**:
  - ESLint + `eslint-config-next`
  - Husky + commitlint for git hooks and commit message enforcement
  - `@programinglive/commiter` for release automation

## 9. Release & Versioning Process

Releases are managed using `@programinglive/commiter` and standard-version under the hood.

- **Commit messages**
  - Follow conventional format: `type(scope): subject`
  - Example: `feat(projects): add case study for portfolio app`
- **Release commands** (from project root):
  - `npm run release` – auto-detects version bump based on commits.
  - `npm run release major` – force major version.
  - `npm run release minor` – force minor version.
  - `npm run release patch` – force patch version.
- **Outputs of a release run**
  - Bumped version in `package.json` and `package-lock.json`.
  - Updated `CHANGELOG.md`.
  - Release commit created.
  - Git tag created (e.g., `v0.1.1`).

After running a release command, changes and tags must be pushed:

```bash
git push --follow-tags origin main
```

## 10. Future Enhancements (Backlog)

- Add a blog or articles section.
- Add project detail pages with more extensive write-ups.
- Add light/dark theme toggle.
- Integrate basic analytics (e.g., privacy-friendly page view tracking).
- Add multilingual support if needed.
