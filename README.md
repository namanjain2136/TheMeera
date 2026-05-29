# The Meera Website

A modern React website built with Vite, Tailwind CSS, and TanStack React Start. This project appears to be a small hospitality or accommodations site with pages for home, about, and room detail routes.

## Features

- Vite-powered React application
- TanStack Router for route handling
- Tailwind CSS for styling
- Radix UI components and custom UI primitives
- Dynamic room detail routes (`rooms/$slug`)
- Responsive site layout with gallery and inquiry form components

## Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview the production build locally:

```bash
npm run preview
```

## Available Scripts

- `npm run dev` — Start the Vite development server
- `npm run build` — Create a production build
- `npm run build:dev` — Build using development mode
- `npm run preview` — Preview the built site locally
- `npm run lint` — Run ESLint across the project
- `npm run format` — Format files with Prettier

## Project Structure

- `src/` — Application source files
- `src/routes/` — Route components and pages
- `src/assets/` — Static assets and shared UI components
- `src/components/` — Custom site components like `Navbar`, `Footer`, and `GallerySection`
- `package.json` — Project dependencies and scripts
- `vite.config.ts` — Vite configuration
- `tsconfig.json` — TypeScript configuration

## Technologies

- React 19
- Vite
- TypeScript
- Tailwind CSS
- TanStack React Router
- Radix UI
- ESLint + Prettier

## Notes

This project is configured as a private repository in `package.json`, but it can be published or deployed to a static hosting platform once the content and routing are finalized.
