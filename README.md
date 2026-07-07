# Lazydev Frontend

Next.js 16 frontend for Lazydev. The app currently provides the shared layout, header, and UI primitives used for the marketplace interface.

## Requirements

- Node.js 20 LTS
- pnpm

## Commands

```sh
pnpm install
pnpm dev
pnpm lint
pnpm build
```

The development server runs on `http://localhost:3000`.

## Structure

- `app/`: App Router entrypoints, layout, and global styles
- `components/`: product components and shared UI primitives
- `lib/`: reusable utilities

## Notes

- Styling uses Tailwind CSS v4 with shadcn/ui primitives.
- The root layout already mounts the shared header for every route.
