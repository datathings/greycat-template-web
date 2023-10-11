# web

A GreyCat Web application template.

## Changes before development
- Ensure the versions are updated in `package.json`, mainly for `@greycat/web`
- This template application uses `app-` as a WebComponent namespace placeholder.
  Make sure to update it (or not) to whatever makes more sense for you. *(For instance, the GreyCat Explorer namespaces its WebComponents to `xp-` for "xplorer")*

## Things to know
- This template is an MPA (Multi Pages Application) that uses HTML/CSS/TypeScript and GreyCat Web.
  It gives you the ability to develop your Web components using TSX by providing a custom-made jsx-runtime that transpiles to native DOM elements. *(To learn more about `@greycat/web` refer to its documentation)*
- Make sure to import the Web Component file before using it, as Web Component have to define themselves before being used:
  ```tsx
  import './app-component'; // this line is important

  app.main.replaceChildren(<app-component />);
  ```

## npm scripts
- `clean`: deletes the webapp build directory
- `build`: build the webapp using Vite.js
- `dev`: starts the webapp dev server using Vite.js
- `lint`: lints the webapp & the server app
- `gen`: generates the TypeScript bindings from `project.gcl` into `common/project`
- `test`: runs GreyCat's test runner
