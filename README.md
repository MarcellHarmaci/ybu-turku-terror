# YBU Turku Terror

Website for the Yyteri Beach Ultimate (YBU) tournament. Visitors can read tournament info, rules and news, sign up teams, and follow game lists, schedules and standings for both the main and junior tournaments. Organizers manage all of this from an admin area at `/admin`.

The site is available in Finnish (default) and English, with light and dark themes.

## Tech stack

- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vite.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Firebase](https://firebase.google.com): Authentication, Firestore, Storage and Hosting
- [react-router](https://reactrouter.com), [i18next](https://www.i18next.com), [Tiptap](https://tiptap.dev) (rich text editor for news)

## Getting started

Requires Node.js 24 (the version used in CI).

```bash
npm install
cp .env.example .env   # then fill in the Firebase web app config
npm run dev
```

The `VITE_APP_FIREBASE_*` values come from the Firebase console: **Project settings → Your apps → Web app config**.

## Scripts

| Command             | Description                                  |
| ------------------- | -------------------------------------------- |
| `npm run dev`       | Start the Vite dev server                    |
| `npm run build`     | Type-check and build to `dist/`              |
| `npm run preview`   | Serve the production build locally           |
| `npm run typecheck` | Type-check without emitting                  |
| `npm run lint`      | Run ESLint                                   |
| `npm run format`    | Format all `.ts`/`.tsx` files with Prettier  |
| `npm run deploy`    | Build and deploy to Firebase Hosting         |

## Features

### Visitor site

- **General:** tournament information, rules, team sign-up and junior team sign-up (stored in the Firestore `signup` and `signup-junior` collections)
- **Tournament:** news, teams/pools, game list, schedule, standings
- **Junior tournament:** game list, schedule, standings
- **Content pages:** custom pages built by admins in the CMS, served at `/content/:pageId` and linked from the sidebar

Game lists, schedules and standings are not stored in the app. Each one is a published CSV (for example a Google Sheet exported as CSV), and its URL is kept in the Firestore `url` collection. The page downloads and parses the CSV and shows it as a table.

### Admin area (`/admin`)

Anyone can register, but only approved admins can edit content. To approve a user, set `approved: true` on their document in the Firestore `admins` collection (the document ID is their Firebase Auth UID). Until then, they see a "waiting for approval" page.

Admins can:

- write, edit and delete news posts with a rich text editor
- set the CSV URLs for the main and junior game lists, schedules and standings
- create, rename and delete CMS pages, and design their content with a visual page builder

## Project structure

```
src/
├── RouteConfig.tsx     # all routes
├── consts.ts           # PATHS: every route path
├── firebase.ts         # Firebase initialization
├── firestore/          # generic Firestore hooks (read/subscribe, save, insert, delete…)
├── service/<entity>/   # per-collection hooks built on firestore/
├── pages/
│   ├── visitor/        # public pages
│   └── admin/          # admin pages; model/ folders hold domain types + Firestore converters
├── layout/             # visitor and admin layouts (sidebar, auth gate)
├── components/
│   ├── ui/             # shadcn/ui components and vendored libraries (ui-builder, minimal-tiptap…)
│   └── custom/         # app-specific shared components
├── context/auth/       # Firebase Auth context
└── locales/            # fi.json, en.json
```

## Development notes

- **Routes:** add new paths to `PATHS` in `src/consts.ts` and register them in `src/RouteConfig.tsx`.
- **Translations:** add visitor-facing text to both `src/locales/fi.json` and `src/locales/en.json`.
- **UI components:** add shadcn components with `npx shadcn@latest add <component>`. Don't edit files in `src/components/ui/` directly, because updating a component overwrites them. Put customizations in a wrapper in `src/components/custom/` instead.
- **Formatting:** Prettier is configured with no semicolons, double quotes and Tailwind class sorting. Run `npm run format` before committing.

## Deployment

Every push to `main` triggers the GitHub Actions workflow in `.github/workflows/`, which builds the site and deploys it to Firebase Hosting. The workflow needs these repository secrets:

- the `VITE_APP_FIREBASE_*` variables listed in `.env.example`
- `FIREBASE_SERVICE_ACCOUNT`: a service account key JSON with Firebase Hosting deploy permissions

To deploy manually, log in with `npx firebase login` and run `npm run deploy`.
