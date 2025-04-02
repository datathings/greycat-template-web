# web

## Install
```sh
pnpm i
```

## GreyCat
Ensure the `@library` versions are what you are expecting in `project.gcl` and then:
```sh
greycat install
greycat codegen
```

## Dev
Start GreyCat in one terminal:
```sh
greycat serve --user=1
```
...and Vite.js dev server in another:
```sh
pnpm dev
```
Open [http://localhost:5173](http://localhost:5173)

## Build
```sh
pnpm build
```
