# Next Boilerplate

Modern, lightweight, production ready Next.js boilerplate

## Features

- Next
- Typescript
- Absolute Imports
- State Management: Redux(RTK(Redux Toolkit), SSR(next-redux-wrapper), Async(thunk), Logger(redux-logger))
- i18n(next-i18next)
- Environment Variables(.env)
- Style: Styled Components(JSS) - SSR, CSS Prop, GlobalStyle, Font(Google)
- Data Fetching:
  - Client: SWR
  - Server: Static Generation(Prerender with revalidate)
- Time([Day.js](https://day.js.org/))
- [isMobile](https://github.com/kaimallea/isMobile)
- Cookie - [nookies](https://github.com/maticzav/nookies#readme)(Server/Client)
- Test - [Jest](https://jestjs.io/)
- ESLint

<!--
- Fetcher
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
│ └── __test__
│ └── api
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

- Node.js >= 12.x (Recommended the latest version)
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

## 🌏 Supported Browser

| <img src="https://user-images.githubusercontent.com/1215767/34348590-250b3ca2-ea4f-11e7-9efb-da953359321f.png" alt="IE / Edge" /> IE | <img src="https://img.utdstc.com/icons/microsoft-edge-windows.png:32" alt="IE / Edge" /> Edge | <img src="https://user-images.githubusercontent.com/1215767/34348383-9e7ed492-ea4d-11e7-910c-03b39d52f496.png" alt="Firefox" /> Firefox | <img src="https://user-images.githubusercontent.com/1215767/34348387-a2e64588-ea4d-11e7-8267-a43365103afe.png" alt="Chrome" /> Chrome | <img src="https://user-images.githubusercontent.com/1215767/34348394-a981f892-ea4d-11e7-9156-d128d58386b9.png" alt="Safari" /> Safari | <img src="https://cdn-production-opera-website.operacdn.com/staticfiles/assets/images/favicon/favicon-32x32.d80e4bdc6a9f.png" alt="Opera" /> Opera |
| ------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| >= 11                                                                                                                                | >= 85                                                                                         | >= 80                                                                                                                                   | >= 84                                                                                                                                 | >= 13                                                                                                                                 | >= 70                                                                                                                                              |

## LICENSE

MIT
