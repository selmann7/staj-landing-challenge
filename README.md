# Mini Landing Page & Component Library

A professional landing page and UI component library built for a staj mülakatı challenge.

## 🚀 Tech Stack

- **Framework**: React 19
- **Language**: TypeScript
- **Styling**: SCSS Modules + CSS Variables
- **Build Tool**: Vite
- **Linting**: ESLint + Prettier

## 🏗️ Architecture

The project follows a modular and scalable structure:

- `src/components/ui/`: Atomic UI components with encapsulated styles.
- `src/sections/`: High-level landing page sections.
- `src/styles/`: Global styles, variables, and mixins.
- `src/hooks/`: Custom React hooks (e.g., theme management).
- `docs/`: Architecture Decision Records (ADRs).

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

## ✨ Key Features

- **Theme Support**: Fully functional Dark/Light mode.
- **Responsive**: Mobile-first design with 3 breakpoints.
- **Accessible**: Semantic HTML and ARIA labels.
- **Performance**: Lazy-loading ready and optimized styles.
- **Type-Safe**: 100% TypeScript coverage.

## 📄 Documentation

- [ADR-001: Technical Stack](./docs/adr-001.md)
- [Changelog](./CHANGELOG.md)

## 🤝 Commit Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` for new features.
- `fix:` for bug fixes.
- `docs:` for documentation changes.
- `style:` for styling changes.
- `refactor:` for code refactoring.
