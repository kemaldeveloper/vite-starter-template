# Vite Starter Template

Modern starter template for Multi Page Applications with TypeScript, Tailwind CSS, and Flowbite.

## Features

- ⚡️ **Vite** - Fast build tool and dev server
- 🎯 **TypeScript** - Type safety
- 🎨 **Tailwind CSS 4** - Utility-first CSS framework
- 🧩 **Flowbite** - Component library with design tokens
- 📏 **ESLint** - Code linting with TypeScript support
- 💅 **Prettier** - Code formatting
- 🪝 **Husky + lint-staged** - Pre-commit hooks
- 📱 **Multi Page Application** - Easy page management

## Getting Started

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview
```

## Code Quality

```bash
# Run ESLint
yarn lint

# Fix ESLint issues automatically
yarn lint:fix

# Check for linting issues (CI mode)
yarn lint:check
```

## Project Structure

```
src/
├── main.ts          # Main entry point
└── global.css       # Global styles

*.html               # Page templates
eslint.config.js     # ESLint configuration
vite.config.ts       # Vite configuration
```

## Adding New Pages

1. Create new HTML file in root (e.g., `about.html`)
2. Add entry to `vite.config.ts`:

```typescript
build: {
  rolldownOptions: {
    input: {
      index: 'index.html',
      catalog: 'components.html',
      about: 'about.html', // Add new page here
    },
  },
},
```

## Git Setup

To enable pre-commit hooks:

```bash
git init
yarn prepare
```

This will automatically run ESLint and Prettier on staged files before each commit.

## ESLint Configuration

The project uses a modern ESLint flat config with:

- TypeScript support
- Browser globals (document, window, console)
- HTML script tag linting
- Prettier compatibility
- Custom rules for code quality

## Tailwind & Flowbite

The project uses Tailwind CSS 4 with Flowbite design system:

- Semantic design tokens (`brand`, `neutral-primary-medium`, etc.)
- Pre-built components
- Dark/light theme support
- Responsive design utilities

## Development Tips

- Use semantic Flowbite tokens instead of hardcoded colors
- TypeScript strict mode is enabled
- Console statements are warnings (remove in production)
- Unused variables starting with `_` are ignored by ESLint