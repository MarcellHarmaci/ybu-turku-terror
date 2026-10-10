# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Website for the YBU Turku Terror tournament: a public visitor site plus an `/admin` area for editing content. React 19 + TypeScript + Vite SPA, Tailwind v4 + shadcn/ui, Firebase (Auth, Firestore, Storage, Hosting).

## Commands

- `npm run dev`: Vite dev server
- `npm run build`: `tsc -b && vite build` (type errors fail the build)
- `npm run typecheck`: type-check only
- `npm run lint`: ESLint
- `npm run format`: Prettier on all `.ts/.tsx` files
- `npm run deploy`: build + `firebase deploy`

There is no test suite. Verify changes with `npm run typecheck` and `npm run lint`.

Firebase config comes from `VITE_APP_FIREBASE_*` env vars (see `.env.example`). CI ([.github/workflows](.github/workflows)) deploys to Firebase Hosting on every push to `main`.

## Architecture

**Routing**: all routes are declared in [src/RouteConfig.tsx](src/RouteConfig.tsx), and every path string lives in the `PATHS` object in [src/consts.ts](src/consts.ts). Always reference `PATHS`, never hardcoded paths. There are two layout trees:
- `VisitorLayout` ([src/layout/visitor](src/layout/visitor)) for the public pages.
- `AdminLayout` ([src/layout/admin](src/layout/admin)), which gates all admin routes. Unauthenticated users see `AuthPage`. Authenticated users need `admins/{uid}.approved === true` in Firestore (`useIsAllowedtoEdit`), otherwise they see `WaitingForApproval`.

**Data layer** (three tiers):
1. [src/firestore/](src/firestore/): generic hooks over the Firestore SDK (`useDocument`, `useDocuments`, `useDocumentOnce`, `useSave`, `useInsert`, `useUpdate`, `useDelete`, …). Read hooks subscribe via `onSnapshot` and return `{ data, isLoading, error }`. Write hooks return the action plus `{ loading, success, error, reset }`. Hooks that take a `config` object (e.g. `{ skip }`) need it memoized with `useMemo`, otherwise they resubscribe on every render.
2. `model/` folders next to the feature pages (e.g. [src/pages/admin/cms/model/](src/pages/admin/cms/model/)): `domain.ts` holds the app types, and `data.ts` holds the `Db*` Firestore types plus a `FirestoreDataConverter` that maps between them (e.g. injecting `snapshot.id` as `id`). Firestore rejects `undefined` values, so converters strip them before writing.
3. [src/service/<entity>/](src/service/): thin, one-line hooks that bind a collection name and converter, e.g. `usePages = () => useDocuments<Page, DbPage>("page", pageConverter)`. Components should consume these, not the generic hooks directly.

Firestore collections in use include `admins`, `url`, `page`, `page-content`, `news`, `signup` and `signup-junior`.

**URL-backed pages**: game list, schedule and standings (for both the main and junior tournaments) are not built in the app. Admins store a published CSV URL in the `url` collection (via `UrlEditor`), and the visitor pages download and parse it client-side into a table (`CsvTable`, using papaparse).

**CMS pages**: admins create pages (`page` collection: metadata such as `title`) and build their content with the visual UI builder in [src/components/ui/ui-builder/](src/components/ui/ui-builder/). The content (`page-content` collection: `layer` tree + `variables`, same doc id as the page) is rendered on `/content/:pageId` by `LayerRenderer`, using the component registries in `src/lib/ui-builder/registry/`. CMS pages also appear in the visitor sidebar (`SidebarCmsPageGroup`).

**i18n**: i18next with Finnish (`fi`, default) and English (`en`). The translation files are [src/locales/fi.json](src/locales/fi.json) and [src/locales/en.json](src/locales/en.json). Add user-facing visitor strings to both.

**UI**: `src/components/ui/` holds shadcn/ui components (style `radix-nova`, added with `npx shadcn@latest add <name>`) plus vendored larger pieces (`ui-builder`, `minimal-tiptap`, `auto-form`). App-specific shared components go in `src/components/custom/`. Use the `@/` import alias for `src/`. Never directly overwrite shadcn components in `src/components/ui/`, because they could be erased when updating those components. If customization is needed, then a wrapper must be created in `src/components/custom/`. If a shadcn component is updated then the wrappers need to be validated if the properties they use are still compatible with the new version.

## Conventions

- Prettier: no semicolons, double quotes, trailing commas `es5`, Tailwind class sorting (including inside `cn`/`cva`).
- Admin pages and components: don't add accessibility extras (`sr-only` text, aria labels).
