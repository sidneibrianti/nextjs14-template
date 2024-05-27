# Criação do Template

```bash
npm install @nextui-org/react framer-motion
```

```Javascipt
// tailwind.config.js
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
};
```

```Typescript
// app/providers.tsx
'use client'

import {NextUIProvider} from '@nextui-org/react'

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}
```

```Typescript

export default function RootLayout({

  children

}: Readonly<{

  children: React.ReactNode;

}>) {

  return (

    <html lang="pt-br" className="dark">

      <body className={inter.className}>

        <Providers>{children}</Providers>

      </body>

    </html>

  );

}
```

## Uso do Template

```bash
npx create-next-app@latest --example https://github.com/sidneibrianti/nextjs14-template/tree/nextui
```
