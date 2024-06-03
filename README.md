# alien-dom-starter

A (slightly opinionated) starter project to get started with AlienDOM.

Includes these tools:

- AlienDOM
- [TypeScript](https://www.typescriptlang.org/) (for compile-time type safety)
- [Vite](https://vitejs.dev/) (for a modern dev server & production bundler)
- [Prettier](https://prettier.io/) (for code formatting)
- [PNPM Workspaces](https://pnpm.io/workspaces) (for managing multiple packages in a single repository)

### What's not included?

First off, you'll want to check if [alien-start](https://github.com/alloc/alien-start) can set up a tool you'd like to use. When you run `pnpm use`, it will show you a list of tools you can add to your project. If you don't see what you're looking for, you can always add it manually.

To remain widely applicable, this starter project does not include the following:

- Routing
- Styling framework (like [Tailwind](https://tailwindcss.com/) or [UnoCSS](https://unocss.dev/))
- Testing framework (like [Vitest](https://vitest.dev/) or [AVA](https://github.com/avajs/ava))
- [ESLint](https://eslint.org/)
- Deployment tool (like Cloudflare's [Wrangler](https://developers.cloudflare.com/workers/wrangler/))
- Bug-tracking (like [Sentry](https://sentry.io/))
- Analytics (like [Plausible](https://plausible.io/) or [Mixpanel](https://mixpanel.com/))
- Server-side Rendering (not supported by AlienDOM yet)
- API server
- Database
- Progressive web app (PWA) features (à la [Workbox](https://developer.chrome.com/docs/workbox/))

## Getting Started

From the project page on Github, use this repository as a template to create a new repository in your own account. Then clone the neeb repository to your local machine.

Make sure [PNPM](https://pnpm.io/installation) is installed. You can use `brew install pnpm` if you have Homebrew on your machine. This step is required, because the project is set up as a PNPM workspace.

Finally, run `pnpm install` to install the dependencies. Note that you will be prompted to choose a name for your project when running this command for the first time.

### Commands

If you're using an IDE like [VS Code](https://code.visualstudio.com/) or [Cursor](https://cursor.sh/), and you prefer to avoid the command line, you can use the `Tasks: Run Task` command with `Command+Shift+P` (the “Command Palette”) so you don't have to remember the following commands.

- To start the development server for your website:

  ```sh
  pnpm dev
  ```

- To build your website for production:

  ```sh
  pnpm build
  ```

- To preview your production website:

  ```sh
  pnpm -C web vite preview
  ```

## Integrations

You can use the `pnpm use` command to bootstrap your project further. This command can add many useful tools to your project without any effort on your part. The possible integrations include:

- [alien-router](https://github.com/alloc/alien-router) (for client-side routing)
- [alien-rpc](https://github.com/alloc/alien-rpc) (for RPC-based API calls)
- Node API server
- Bun API server
- [Tusken](https://github.com/alloc/tusken) (a type-safe Postgres client)
- [UnoCSS](https://unocss.dev/) (make your own Tailwind)
- [Tauri](https://tauri.app/) (desktop/mobile apps with web technologies)

You can run `pnpm use` to see what else is available.

## Next Steps

Start writing your app by opening the `web/src/App.tsx` file.

#### Styling

To style your components, you can add CSS to the `web/src/css/global.css` file, but it's recommended to use a tool like Tailwind, UnoCSS, or CSS imports to keep your styles closer to where they're needed. This helps you avoid global styles that can be hard to maintain (i.e. it can become hard to know where a style is being used).

#### Imports

The `web` package is configured to allow modules within its `src` folder to import each other without needing to use relative paths. This is done by setting the [`baseUrl`](https://www.typescriptlang.org/tsconfig/#baseUrl) in the `web/tsconfig.json` file. For example, if you have a component in `web/src/components/MyComponent.tsx`, you can import it in `web/src/App.tsx` like this:

```ts
import { MyComponent } from 'components/MyComponent'
```

Vite is set up with the `vite-tsconfig-paths` plugin, which tells Vite how to resolve these special imports.

#### Formatting

This project is set up with Prettier. You can customize its options in the `.prettierrc` file.

If you're using [VS Code](https://code.visualstudio.com/) or [Cursor](https://cursor.sh/), there is configuration included in the `.vscode` folder that instructs those IDEs to automatically format your files with Prettier when saved (as long as you install the recommended Prettier IDE plugin). You can disable this behavior by removing the `editor.formatOnSave` setting in the `.vscode/settings.json` file.

Additionally, they will sort your imports alphabetically and remove unused imports whenever the file is saved. You can disable this behavior by removing the `editor.codeActionsOnSave` setting in the `.vscode/settings.json` file.

#### Linting

Although your IDE will warn you about TypeScript issues, it only does that for opened files. To check your entire project, you can run `pnpm lint`. This is a shortcut for running the `lint` script (which is usually `tsc -p . --noEmit`) of every package in the workspace.

#### File structure

Feel free to declare function components below the `App` component or, if you're developing a complex app, you might want to create a `components` folder and declare your components there.

Another approach is to organize components by feature (e.g. a todo list app might have a `TodoList` folder with multiple component files and CSS files inside). This approach has two benefits: it's easier to find the components you're looking for and your component names can be less verbose (since the feature folder provides ample context). Any components used across multiple features could be kept in a `src/components` folder.

When you have a utility function that multiple files need, you should consider creating a folder like `web/src/common` and declare each utility function in its own file. If you only have a couple utility functions, you may decide to just keep them all in a single file like `web/src/common.ts`.

#### Packages

This project is set up as a PNPM workspace. This means you can have multiple packages in development, each with its own `package.json` file. When a package contains app-specific code, it's usually given its own top-level folder (like the `web` package, for instance).

Other packages can be created in the `packages` folder (a common convention for multi-package repositories). The workspace is already set up to recognize sub-folders of the `packages` folder, as long as they have their own `package.json` file.

#### Web fonts

The `vite-plugin-webfont-dl` package is used by Vite to automatically download [Google web fonts](https://fonts.google.com/) used in your `web/index.html` file.

You can use Google Fonts as normal and they will be served from your own domain in production. When using Vite's dev server, the fonts are cached locally to enable offline development. From a user perspective, this approach helps with performance and privacy.

#### Type guards

For convenience, the `@alloc/is` package comes pre-installed. This is a type guard library that you can use to check the type of a value at runtime. All of its exports are both tree-shakeable and lightweight, so you can use it without worrying about bundle size. Feel free to use it in your project.

```ts
// The package is aliased to 'is' in the root 'package.json' file.
import { isFunction } from 'is'
```

It's faster to type than using `typeof` because of auto-completion, and it provides many type guards that aren't built into JavaScript (like `isPromiseLike` or `isPlainObject`). Its `isArray` guard is identical to `Array.isArray` except its TypeScript definition actually works with `readonly` array types.

Learn more [here](https://github.com/alloc/is).

#### Utility packages

[Lodash](https://lodash.com/) and [type-fest](https://github.com/sindresorhus/type-fest) are also pre-installed in the workspace's root package. They can be used anywhere in the project. To avoid wasting time writing your own utilities, it's recommended to learn them.
