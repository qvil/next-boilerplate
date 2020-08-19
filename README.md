# Nextjs Boilerplate

Modern & Lightweight Next.js boilerplate

## Features

- Next
- Typescript
- Absolute Imports
- Redux(RTK(Redux Toolkit), SSR(next-redux-wrapper))
- i18n(Custom server)
- Environment Variables(.env)
- Styled Components(JSS) - SSR, css prop
<!-- - Fetcher
- Swr
- Prerender with revalidate -->
<!-- - Redux(RTK(Redux Toolkit), SSR(next-redux-wrapper), Async(thunk)) -->

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
│   └── index.d.ts
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
