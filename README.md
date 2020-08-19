# Nextjs Boilerplate

Modern & Lightweight Next.js boilerplate

## Features

- Next
- Typescript
- Absolute Imports
- State Management: Redux(RTK(Redux Toolkit), SSR(next-redux-wrapper))
- i18n(next-i18next)
- Environment Variables(.env)
- Style: Styled Components(JSS) - SSR, CSS Prop, GlobalStyle, Font(Google)
<!--
- Redux(Async(thunk))
- Fetcher
- Swr
- Prerender with revalidate
- Time
- Test
- Custom server
- Storybook?
  -->

## Folder structure

```

├── public
│ └── static
│   └── locales
│     └── {locale}
│       └── {namespace}.json
├── src
│ └── components
│ └── constants
│ └── lib
│   └── i18n.ts
│ └── pages
│   └── api
│ └── redux
│   └── slices
│   └── reducer.ts
│   └── store.ts
│ └── types
│ └── .gitignore
│ └── package.json
│ └── tsconfig.json
└── README.md
```

## Coding Convention

- Folder naming: camelCase
- Components naming: PascalCase

## Prerequisites

- Node.js >= 10.13 (Recommended the latest version)
- (Yarn(Recommended))

## Install

```
yarn
# or
npm install
```

## Development

```
yarn dev
# or
npm run dev
```

## Build

```
yarn build
# or
npm run build
```

## Start

```
yarn start
# or
npm start
```

## LICENSE

MIT
