# appx
boilerplate of react native and expo

## features
* typescript
* redux and redux toolkit
* react navigation v5
* context api
* prettier
* set alias for importing components
* localization

## directory organization

```
├── components
│   ├── atoms
│   ├── molecules
│   │   ├── [PAGE_DIR]
│   │   └── common
│   └── organisms
│       ├── [PAGE_DIR]
│       └── common
├── const
│   ├── types.d.ts
│   └── variables.ts
├── container
│   └── [PAGE_DIR]Container.tsx
├── context
│   └── index.ts
├── hoc
├── pages
├── route
│   └── Route.tsx
└── store
    ├── module
    └── store.ts
```

## USAGE
```
$ npm i
$ cp .env-sample .env
```
and rewite name and slug in app.json
```[app.jsonn]
before
    "name": "appx",
    "slug": "appx",
after
    "name": YOUR_PROJECT_NAME,
    "slug": YOUR_PROJECT_SLUG",
```