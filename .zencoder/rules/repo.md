# Repository Overview

- **Name**: my-v0-project
- **Framework**: Next.js 15.2.4 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Libraries**: Radix UI, shadcn/ui patterns, lucide-react
- **Forms/Validation**: react-hook-form, zod
- **Build/Run**:
  - Dev: `pnpm dev`
  - Build: `pnpm build`
  - Start: `pnpm start`
  - Lint: `pnpm lint`

## Structure
- **app/**: Next.js app directory with routes like `page.tsx`, `about`, `blog`, `contact`, `booking`, `quote`, and `services/*`.
- **components/**: Reusable UI components and shadcn style primitives.
- **lib/**: Utilities (e.g., `utils.ts`).
- **public/**: Static assets.
- **styles/**: Global styles.

## Package Management
- **Preferred**: pnpm (lockfile present). Use `pnpm install` to avoid npm peer-dep conflicts.

## Notable Notes
- **React**: ^19 with Next 15.2.4.
- **Known conflicts**: `vaul@0.9.9` peer deps expect React <=18 under npm. pnpm handles this better. If needed, remove `vaul` or upgrade to `^1.1.2`.