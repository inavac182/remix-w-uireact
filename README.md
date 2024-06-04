# remix-w-uireact
Example project with Remix using @UiReact library

# @UiReact Info

This is an example project fully configured with [Remix](https://remix.run/), [Styled components](https://styled-components.com) and [@UiReact](https://uireact.io) library working propertly.

## Theme Switcher

You can use your appearance settings to change the theme or implement your own theme provider to change themes in the UI.

![Theme appearance](./public/theme-selector.gif)

## Styling

Important file to mention is `global.css` this file imports the styles from the @UiReact dependencies. You will need to add each CSS file here as needed when installing a new package.

If you create and want to use your own theme style variables, make sure you delete: 

```
/* DELETE THIS IMPORT IF YOU WILL PROVIDE YOUR OWN THEME VARIABLES */
@import url(../node_modules/@uireact/foundation/dist/index.css);

```

Also, the font family variable is declared in this file as in this Remix example the font is linked through the default export 
of links in `app/routes/_index.tsx`. The CSS variable is then used throughout the components to use the correct font name.

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

# Remix + Vite Info

📖 See the [Remix docs](https://remix.run/docs) and the [Remix Vite docs](https://remix.run/docs/en/main/guides/vite) for details on supported features.

## Development

Run the Vite dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`
