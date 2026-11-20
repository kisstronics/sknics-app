# Knics

Brand home and product hub for the Knics application suite.

## Products linked from this site

| App | Role |
|-----|------|
| **Our Roots** | Family trees and relationships |
| **Between** | Multiplayer card game |
| **Claw** | Personal AI assistant |
| **Fin Goat** | Wealth tracking and screeners |

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Configure product URLs

Copy `.env.example` to `.env` and override destinations if needed:

```env
VITE_APP_ROOTS_URL=https://roots.sknics.com
VITE_APP_BETWEEN_URL=https://cards.sknics.com
VITE_APP_CLAW_URL=https://claw.sknics.com
VITE_APP_FINGOAT_URL=https://finance.sknics.com
```

## Stack

- React + Vite + TypeScript
- React Router
- Light / dark theme (same visual language as other Knics clients)
