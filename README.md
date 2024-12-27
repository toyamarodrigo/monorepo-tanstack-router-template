# Monorepo with Tanstack Router

This monorepo is a template for a monorepo with Tanstack Router.

## Stack

- [React 19](https://react.dev/)
- [React Compiler Beta](https://github.com/react-compiler/react-compiler)
- [Tanstack Router](https://tanstack.com/router)
- [Tanstack Query](https://tanstack.com/query)
- [React Hook Form](https://react-hook-form.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)
- [Zod](https://zod.dev/)
- [pnpm](https://pnpm.io/)
- [ESLint](https://eslint.org/)

## How to use

```bash
# Clone the repo
git clone https://github.com/your-repo/monorepo-with-tanstack-router.git
```

```bash
# Install dependencies
pnpm install
```

```bash
# Run the development server
pnpm dev
```

## Structure

- `apps/web`: The main application
- `packages/ui`: The UI library
- `packages/eslint-config`: The ESLint configuration
- `packages/typescript-config`: The TypeScript configuration

```bash
repo/
├── apps/
│       ├── web/ # (main application)
│       │       ├── src/ # (components, styles, etc.)
│       │       ├── lib/ # (utils, hooks, etc.)
│       │       ├── routes/ # (Tanstack Router routes)
│       │       │       ├── __root.tsx
│       │       │       ├── about.tsx
│       │       │       ├── index.tsx
│       │       │       └── ...
│       │       ├── .gitignore
│       │       ├── components.json
│       │       ├── eslint.config.mjs
│       │       ├── index.html
│       │       ├── package.json
│       │       ├── postcss.config.js
│       │       ├── tailwind.config.js
│       │       ├── tsconfig.app.json
│       │       ├── tsconfig.json
│       │       ├── tsconfig.node.json
│       │       └── vite.config.js
│       └── many_apps/ # (other apps)
│               └── ...
│
├── packages/ # (shared libraries)
│       ├── ui/ # (shadcn/ui)
│       │       ├── src/ # (components, styles, etc.)
│       │       ├── components.json
│       │       ├── eslint.config.js
│       │       ├── package.json
│       │       ├── postcss.config.js
│       │       ├── tailwind.config.js
│       │       ├── tsconfig.json
│       │       └── tsconfig.lint.json
│       │
│       ├── eslint-config/ # (ESLint configuration)
│       │       ├── create-config.d.ts
│       │       ├── eslint.config.js
│       │       ├── package.json
│       │       └── tsconfig.json
│       │
│       ├── typescript-config/ # (TypeScript configuration)
│       │       ├── base.json
│       │       ├── package.json
│       │       └── react-library.json
│       │
│       └── many_packages/ # (other packages)
│               └── ...
├── .gitignore
├── eslint.config.mjs
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── README.md
└── tsconfig.json
```
