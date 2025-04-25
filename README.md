# web

## After cloning
- Update the versions in `project.gcl`:
  - `@library("std", REQUIRED_VERSION);`
  - `@library("explorer", REQUIRED_VERSION);`
- Update the version of `@greycat/web` in `package.json`:
  - `"@greycat/web": "https://get.greycat.io/files/sdk/web/testing/<MAJOR_MINOR>/<VERSION>.tgz"`

> To find the latest versions of the libraries go to [get.greycat.io](https://get.greycat.io)

## Install
```sh

```

## Installation & Initialization

**Make sure you've read the section "[After cloning](#after-cloning)" before this step**

```sh
greycat install
greycat codegen
pnpm install
```

> We are using `pnpm`, but any Package Manager would work here (eg. `npm`, `yarn`, etc.)

## Dev
Start GreyCat in one terminal:
```sh
greycat serve --user=1
```
and Vite.js dev server in another:
```sh
pnpm dev
```
Open [http://localhost:5173](http://localhost:5173)

> The option `--user=1` we passed to `greycat` is to bypass authentication in dev. With this option all requests made to GreyCat will be impersonated to be the "root" user.

## Build
```sh
pnpm build
```
