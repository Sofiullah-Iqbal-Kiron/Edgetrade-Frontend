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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Extra color scheme

```
import type { Config } from "tailwindcss"


const config: Config = {
    darkMode: "class",
    content: [
        "./**/*.{ts,tsx,js,jsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    50: "oklch(0.953 0.0195 260.17 / <alpha-value>)", // #e8f0fd
                    100: "oklch(0.931 0.0289 259.6 / <alpha-value>)",  // #dde9fc
                    200: "oklch(0.856 0.0604 260.1 / <alpha-value>)",  // #b9d1f8

                    400: "oklch(0.561 0.2036 259.9 / <alpha-value>)",  // #1d6ce9
                    500: "oklch(0.519 0.1877 260.0 / <alpha-value>)",  // #1a61d2
                    600: "oklch(0.476 0.1701 259.9 / <alpha-value>)",  // #1756ba

                    700: "oklch(0.457 0.1617 259.9 / <alpha-value>)",  // #1651af
                    800: "oklch(0.392 0.1349 259.6 / <alpha-value>)",  // #11418c
                    900: "oklch(0.324 0.1064 259.4 / <alpha-value>)",  // #0d3169
                    950: "oklch(0.277 0.0873 259.4 / <alpha-value>)",  // #0a2652
                },
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
}

export default config
```
