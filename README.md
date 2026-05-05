# Indi Demo Web

A React + TypeScript frontend for the Indi Demo project. It displays users fetched
from the Indi Demo backend and is the surface that Indi will iteratively update
when backend contracts change.

## Prerequisites

- Node.js 18+ and npm
- The **indi-demo-backend** service must be running locally on
  `http://localhost:8080`. The frontend talks to its `/api/users` endpoints.

## Running locally

```bash
npm install
npm start
```

The app runs on [http://localhost:3000](http://localhost:3000). API calls in
development are proxied to `http://localhost:8080` (see the `proxy` field in
`package.json`), so CORS isn't needed during development.

## Project structure

```
src/
  api/
    users.ts          # fetch-based API client (CRUD over /api/users)
  components/
    UserList.tsx      # fetches users on mount, renders the list
    UserProfile.tsx   # presentational card for a single user
  types/
    User.ts           # shared User interface
  App.tsx             # app shell, mounts UserList
  App.css             # layout + card styling
```

## User type

```ts
interface User {
  id: string;
  name: string;
  email: string;
}
```

## What Indi will update when the backend changes

When the backend contract evolves (new fields, renamed endpoints, new
resources), Indi keeps this frontend in sync by updating:

- `src/types/User.ts` — the `User` interface mirrors the backend DTO.
- `src/api/users.ts` — request paths, methods, and response types.
- `src/components/UserProfile.tsx` — rendered fields when the shape grows.
- `src/components/UserList.tsx` — new fetch flows or filters.
- `package.json` `proxy` — if the backend port or base path moves.
