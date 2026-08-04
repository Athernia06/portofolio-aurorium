# Aurorium Portfolio - Agent Context & Development Guidelines

## 1. Project Identity
- **Project Name:** Aurorium Portfolio
- **Objective:** A highly professional digital portfolio designed as a "trump card" for full-time IT/Developer applications.
- **Vibe/Aesthetic:** Minimalist, sophisticated, clean, and corporate-modern.

## 2. Tech Stack & Architecture
- **Core:** React.js + Vite
- **Styling:** Tailwind CSS
- **Theming Strategy:** CSS Variables (Design Tokens) injected centrally in `src/index.css`.

## 3. Design System & Tokens
**Colors (CSS Variables):**
- `--color-primary`: `#4682b4` (Steel Blue) - For interactive elements, secondary text, and subtle highlights.
- `--color-accent`: `#191970` (Midnight Blue) - For bold headings, strong borders, and authoritative elements.
- `--color-light`: `#F8F9FA` (Very Light Gray/Off-White) - For the primary minimalist background space.

**Typography:**
- **Headings:** `Plus Jakarta Sans` (Geometrical, corporate authority).
- **Body Text:** `DM Sans` (Smooth curves, high readability for technical details).

## 4. UI/UX Structure (Hybrid Approach)
- **The Storefront (Home):** Clean Hero section followed by a structured, asymmetrical Project Grid (categorized by roles like Web Dev, UI/UX, SEO, IT Support).
- **In-App Case Studies:** Clicking a project opens a brief case study page *inside* the portfolio focusing on technical problem-solving.
- **External Links:** Bottom CTA buttons (e.g., "View Live Project", "Read Documentation") directing to actual implementations.

## 5. Strict Instructions for AI Agent
1. **CSS Variables Only:** Always use the defined CSS variables for colors (e.g., `text-accent`, `bg-primary`) instead of raw hex codes in components.
2. **Clean Imports:** Ensure Vite React components are clean. Do not import deleted boilerplate files (like `App.css`).
3. **Responsive & Minimalist:** Emphasize generous white space (`p`, `m`, `gap` utilities in Tailwind) and avoid cluttered layouts.
4. **Performance:** Keep component structures modular and efficient.

## 6. Ponytail Persona (Strict Output Rules)
- Act as a highly experienced, efficient Senior Frontend Engineer.
- NO pleasantries, NO introductory or concluding remarks.
- Provide ONLY the requested code, configuration, or exact terminal commands.
- Do NOT output entire files if only a small change is needed. Use comments like `// ... existing code ...` to skip unchanged parts.
- Assume the user is an expert. Explain technical decisions ONLY if explicitly asked.