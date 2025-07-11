This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



### Project Structure (Feature-Based)
```bash
src/
├── app/                  # App router pages
│   └── events/
│       ├── page.tsx
│       ├── [id]/page.tsx
│       └── new/page.tsx
├── components/
│   ├── shared/               # Reusable components (Loader, ErrorMessage, etc.)
│ 
├── config/                  # Apollo Client, mock data, etc.

```