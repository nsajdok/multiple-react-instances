# Multiple React instances

Reproduction case for Turbopack module resolution issue where React/Apollo Client are resolved from `shared-package/node_modules` instead of `app/node_modules`, causing context errors in Pages router with Next@16

## Setup

```bash
npm run install:all
```

## Run

```bash
npm run dev
```

Visit `http://localhost:3000` to test the App Router or `/pages-router` for Pages Router.

## Issue

When `shared-package` uses React hooks (e.g., `useContext`) and Apollo Client hooks, Turbopack may resolve these dependencies from the shared package's `node_modules` instead of the app's `node_modules`, causing "Cannot read properties of null" errors.

## Structure

- `packages/app` - Next.js app with both App Router and Pages Router
- `packages/shared-package` - Shared package using React/Apollo Client hooks
