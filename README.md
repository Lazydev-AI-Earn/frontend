# Lazydev Frontend

Next.js 16 frontend for the Lazydev-AI-Earn project.

## Requirements

- Node.js 20 LTS
- pnpm

## Local Setup

```sh
pnpm install
pnpm dev
```

The app runs at:

```txt
http://localhost:3000
```

## Core Commands

```sh
pnpm dev
pnpm lint
pnpm build
pnpm start
```

## Project Structure

- `app/`: App Router entrypoints and global styles
- `components/`: landing page and reusable UI components
- `lib/`: shared frontend utilities

## Current State

The repository includes reusable landing page components such as `Hero`, `Header`,
and `Profile`, but the current home route in `app/page.tsx` renders an empty
`<main>` shell. Keep that in mind when validating user-facing changes.
