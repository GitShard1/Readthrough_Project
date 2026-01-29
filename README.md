# Readthrough App

A Next.js web application that enhances reading comprehension through visual formatting, note-taking, and bookmarking features. Built with TypeScript and Tailwind CSS.

## Features

- **Alternating Bold Text**: Every other paragraph is automatically bolded for improved visual scanning
- **Paragraph Numbering**: Each paragraph is clearly labeled with a sequential number
- **Side Notes**: Write notes directly next to each paragraph for easy reference
- **Bookmarking**: Mark important paragraphs and quickly jump back to them
- **Highlighter Hotkey**: Press `Ctrl+H` (or `Cmd+H` on Mac) to toggle highlight mode and mark important text
- **Copy Notes**: Copy individual paragraph notes or all notes at once to your clipboard

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to Use

1. Visit the application in your web browser
2. Paste or type your text in the input area
3. Click "Process Text" to convert your text into the enhanced reading format
4. Use the features:
   - Add notes in the text areas next to each paragraph
   - Click "📌 Bookmark Here" to bookmark the currently visible paragraph
   - Press `Ctrl+H` (or `Cmd+H` on Mac) to enable highlighting, then select text to highlight it
   - Use "📋 Copy All Notes" to copy all your notes
   - Use "Copy Note" button on individual paragraphs to copy specific notes
   - Navigate bookmarks using the dropdown menu

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI**: React with client-side interactivity
- Responsive design for mobile and desktop
- Local storage of notes and bookmarks during the session
- Keyboard shortcuts for improved productivity

## Build for Production

To create an optimized production build:

```bash
npm run build
npm start
```

## Project Structure

- `app/` - Next.js app directory containing pages and layouts
  - `layout.tsx` - Root layout with metadata
  - `page.tsx` - Main page component
  - `globals.css` - Global styles with Tailwind directives
- `package.json` - Project dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `next.config.js` - Next.js configuration
- `postcss.config.js` - PostCSS configuration for Tailwind CSS
