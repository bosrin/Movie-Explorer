# 🎬 Product Requirements Document (PRD)
## Project: Movie Explorer Application

---

## 1. Executive Summary & Objective

**Movie Explorer** is a modern, responsive Single Page Application (SPA) built with **React (JavaScript)** and **Tailwind CSS**. The application allows users to discover, search, and explore TV shows and movies using data from the public **TVMaze API**.

The project delivers a clean, intuitive, and visually engaging user experience with dynamic routing, instant title search, an interactive movie details modal, and a complete **Light/Dark theme system**.

---

## 2. Academic Integrity & Human-Centric Code Policy

> [!CAUTION]
> ### ⚠️ Plagiarism & AI Policy Adherence
> * **Zero Tolerance:** Plagiarism will result in 0 marks.
> * **No Copying:** Do not copy code from peers, public templates, or duplicate online repositories.
> * **Human-Readable & Idiomatic Code:** All source code must be written with natural human development practices:
>   - Clean, standard React component structure and idiomatic JavaScript (ES6+).
>   - Realistic and meaningful naming conventions (no robotic or obscure variable names).
>   - Logical, reusable component separation and practical state management.
>   - Meaningful developer comments explaining *why* decisions were made, avoiding generic automated docstrings.
>   - 100% original implementation meeting the exact project brief.

---

## 3. Technology Stack & Dependencies

| Layer | Technology | Purpose / Justification |
| :--- | :--- | :--- |
| **Framework** | **React (v18+)** | Core UI library using **JavaScript (ES6+)** (Strictly NO TypeScript as specified). |
| **Build Tool** | **Vite** | Fast, lightweight development server and production bundler. |
| **Routing** | **React Router DOM (v6+)** | Multi-page SPA navigation (`/` Home and `/movies` Movie Explorer). |
| **Styling** | **Tailwind CSS (v3+)** | Utility-first CSS configured with `darkMode: 'class'` for seamless theme switching. |
| **Class Utilities** | **clsx** + **tailwind-merge** | Conditional class merging via a standard `cn()` helper function. |
| **Icons** | **Lucide React** (or custom SVGs) | Clean, accessible vector icons for search, stars, calendar, theme toggles, and close buttons. |
| **Data Source** | **TVMaze REST API** | Free, open-access API requiring no API keys or rate-limit friction. |
| **Storage** | **Browser LocalStorage** | Persistence of user theme preference (`light` vs. `dark`). |

---

## 4. Architecture & Directory Structure

A modular, scalable, and developer-friendly directory layout designed for readability and maintenance:

```text
movie-explorer/
├── public/
│   ├── favicon.ico
│   └── placeholder-poster.svg      # Fallback for missing movie posters
├── src/
│   ├── assets/                     # Static media & hero graphics
│   ├── components/
│   │   ├── common/                 # Reusable atomic UI elements
│   │   │   ├── Button.jsx          # Customizable button (variants: primary, outline, ghost)
│   │   │   ├── Input.jsx           # Styled text input with icon slot
│   │   │   ├── Badge.jsx           # Genre and status badges
│   │   │   ├── Modal.jsx           # Base accessible modal dialog with backdrop
│   │   │   └── ThemeToggle.jsx     # Smooth Sun/Moon theme switcher
│   │   ├── layout/                 # Layout structure components
│   │   │   ├── Navbar.jsx          # Header with logo, nav links, theme toggle, mobile drawer
│   │   │   ├── Footer.jsx          # Brand info, copyright 2026, social links
│   │   │   └── Layout.jsx          # Wrapper layout holding Navbar, Outlet, and Footer
│   │   └── movies/                 # Movie-domain specific components
│   │       ├── MovieCard.jsx       # Card displaying poster, title, rating, year & CTA
│   │       ├── MovieGrid.jsx       # Responsive grid layout with loading skeletons & empty state
│   │       ├── SearchBar.jsx       # Debounced search input with clear button
│   │       └── MovieDetailsModal.jsx # Detailed show modal with HTML summary, genres, metadata
│   ├── context/
│   │   └── ThemeContext.jsx        # Context & Provider for Dark/Light mode state + LocalStorage
│   ├── hooks/
│   │   ├── useTheme.js             # Convenient hook to access theme context
│   │   ├── useDebounce.js          # Custom hook to optimize search API query rate
│   │   └── useMovies.js            # Custom hook handling API fetch, loading, error, and search
│   ├── pages/
│   │   ├── HomePage.jsx            # Landing page: Hero banner, featured shows, CTA
│   │   ├── MoviesPage.jsx          # Movie listing page: Search bar, filter pills, movie grid
│   │   └── NotFoundPage.jsx        # 404 fallback page with return to home button
│   ├── services/
│   │   └── tvmazeApi.js            # Centralized API service functions (getAllShows, searchShows)
│   ├── utils/
│   │   ├── cn.js                   # clsx + tailwind-merge helper function
│   │   └── formatters.js           # Text cleaning (HTML tag stripping), date formatters
│   ├── App.jsx                     # Route configuration and Provider wrappers
│   ├── index.css                   # Tailwind directives & base styles
│   └── main.jsx                    # Application root mount
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 5. Detailed Feature Requirements

### 5.1 Theme System (Light & Dark Mode)
* **Default Detection:** Inspects `localStorage.getItem('theme')` first; falls back to system preference (`window.matchMedia('(prefers-color-scheme: dark)')`).
* **DOM Application:** Adds or removes the `dark` class on `document.documentElement` (`<html class="dark">`).
* **Visual Styling:**
  - **Light Theme:** Slate-50 background, clean white cards (`bg-white`), slate-900 text, crisp borders.
  - **Dark Theme:** Deep slate-950/zinc-900 background, dark-charcoal cards (`bg-slate-900`/`bg-zinc-800`), slate-100 text, subtle borders.
* **Persistent:** Changes survive browser refresh and tab closures.

### 5.2 Navigation & Layout
* **Navbar:**
  - Brand Logo with film icon and `MovieExplorer` typography.
  - Navigation links: "Home" (`/`) and "Browse Shows" (`/movies`) with active link styling.
  - Theme Toggle icon button with smooth transition.
  - Responsive mobile menu (hamburger toggle) for viewport widths `< 768px`.
* **Footer:**
  - Application title and tagline.
  - Copyright statement: `© 2026 MovieExplorer. All rights reserved.`
  - Attribution to TVMaze API.
  - Links to GitHub and documentation.

### 5.3 Home Page (`/`)
* **Hero Banner:**
  - Cinematic gradient overlay over backdrop imagery.
  - Prominent headline: e.g., *"Discover Unlimited TV Shows & Movies"*.
  - Engaging subtext describing the platform.
  - High-visibility Call-To-Action (CTA) button linking directly to `/movies`.
* **Featured Shows Carousel/Grid:**
  - Quick curated display of top-rated shows to immediately immerse visitors.
* **Why Choose Us / Features Showcase:**
  - Cards highlighting Fast Search, Rich Metadata, and Multi-Device responsiveness.

### 5.4 Movie Listing Page (`/movies`)
* **Search Functionality:**
  - Prominent search input with icon slot and clear (`✕`) button.
  - Debounced execution (300-400ms) or direct form search calling `GET https://api.tvmaze.com/search/shows?q=:query`.
  - Automatically resets back to popular shows when the search input is emptied.
* **Movie Cards & Responsive Grid:**
  - Layout: `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6`.
  - Card components include:
    - Poster image with fallback image handler for `null` images.
    - Title with truncation for long names.
    - Premiered year (e.g. `2024`) and rating badge (e.g. `⭐ 8.5` or `N/A`).
    - Interactive "See Details" button triggering the modal.
    - Hover lift effects (`hover:-translate-y-1 hover:shadow-xl transition-all duration-300`).
* **Loading & Empty States:**
  - Skeleton cards during network requests.
  - Friendly empty state when no results match the user query.
  - Error banner with a "Retry" button on network failure.

### 5.5 Movie Details Modal
* **Trigger:** Opens upon clicking "See Details" on any card or pressing Enter.
* **Content:**
  - High-res poster / backdrop image banner.
  - Title, Premiered date, Runtime, Country/Network, and Status (e.g. Running, Ended).
  - Star rating with numerical score.
  - Genre pill tags (e.g. Drama, Sci-Fi, Thriller).
  - Sanitized show summary / synopsis.
  - External link button: "Visit Official Site" (if available).
* **Interactivity & Accessibility:**
  - Close button (`✕`) at the top right.
  - Secondary "Close" button at the bottom.
  - Closes on backdrop click.
  - Closes on `Escape` key press.
  - Prevents background document scroll (`overflow: hidden` on `document.body`) while open.

---

## 6. API Integration Specification

The application integrates with the public **TVMaze API**:

1. **Fetch All Shows:**
   - **Endpoint:** `GET https://api.tvmaze.com/shows`
   - **Response:** Array of show objects.
   - **Usage:** Initial view on the Movie Listing page and Home featured section.
   
2. **Search Shows by Title:**
   - **Endpoint:** `GET https://api.tvmaze.com/search/shows?q=:query`
   - **Response:** Array of objects shaped as `{ score: number, show: ShowObject }`.
   - **Normalization:** Normalize search responses to match standard `show` schema for component reusability.

3. **Data Resilience Handling:**
   - Fallback image placeholder when `show.image?.medium` or `original` is null.
   - Fallback `N/A` rating when `show.rating?.average` is null.
   - Safe regex/DOM parser to strip raw HTML tags (`<p>`, `<b>`) from `show.summary`.

---

## 7. Component & Utility Design Principles

* **`cn(...)` Utility:**
  ```javascript
  import { clsx } from 'clsx';
  import { twMerge } from 'tailwind-merge';

  export function cn(...inputs) {
    return twMerge(clsx(inputs));
  }
  ```
* **Pure Functional Components:** Use standard React hooks (`useState`, `useEffect`, `useMemo`, `useCallback`, `useContext`).
* **Clean Prop Contracts:** Well-defined props with logical defaults.
* **Separation of Concerns:** Keep API calls inside `services/tvmazeApi.js` and data orchestration inside custom hooks.

---

## 8. Step-by-Step Implementation Roadmap

1. **Step 1: Project Setup & Tooling**
   - Initialize Vite React project with plain JavaScript (`npm create vite@latest . -- --template react`).
   - Install dependencies: `tailwindcss`, `postcss`, `autoprefixer`, `react-router-dom`, `clsx`, `tailwind-merge`, `lucide-react`.
   - Configure `tailwind.config.js` with `darkMode: 'class'` and custom theme colors.

2. **Step 2: Core Utilities & Theme Context**
   - Implement `src/utils/cn.js` and `src/utils/formatters.js`.
   - Create `ThemeContext.jsx` with light/dark toggling and `localStorage` synchronization.

3. **Step 3: Layout Components**
   - Build `Navbar.jsx` with responsive drawer, logo, and `ThemeToggle.jsx`.
   - Build `Footer.jsx` with copyright, branding, and links.
   - Build `Layout.jsx` with React Router `<Outlet />`.

4. **Step 4: API Service & Custom Hooks**
   - Implement `services/tvmazeApi.js` with error handling.
   - Build `useDebounce.js` and `useMovies.js` for clean state management.

5. **Step 5: Movie Components & Modal**
   - Create `MovieCard.jsx` with poster, rating, badges, and button.
   - Create `MovieGrid.jsx` with skeleton loaders and empty state.
   - Create `SearchBar.jsx` with clear button.
   - Build `MovieDetailsModal.jsx` with smooth entrance animation, escape key listener, and body scroll lock.

6. **Step 6: Pages & Routing**
   - Develop `HomePage.jsx` (Hero banner, features, preview).
   - Develop `MoviesPage.jsx` (Search, listing, details modal integration).
   - Develop `NotFoundPage.jsx`.
   - Configure React Router in `App.jsx`.

7. **Step 7: Verification & Polishing**
   - Responsive check (mobile, tablet, desktop).
   - Theme check (all components look balanced in both light and dark mode).
   - Accessibility & keyboard navigation check.
   - Production build validation (`npm run build`).

---

## 9. Deliverables & Submission Checklist

- [x] Comprehensive Product Requirements Document (`PRD.md`).
- [ ] Working React + Vite application adhering to JavaScript (no TypeScript).
- [ ] Responsive UI across mobile, tablet, and desktop screens.
- [ ] Functioning TVMaze API search & listing.
- [ ] Interactive Movie Details Modal with backdrop & escape listener.
- [ ] Light / Dark mode toggle with persistent local storage.
- [ ] 100% human-crafted, original code compliant with plagiarism policies.
- [ ] Public GitHub repository and live deployment URL ready for submission.
