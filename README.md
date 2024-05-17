# remix-w-uireact
Example project with Remix using @UiReact library

# @UiReact Info

This is an example project fully configured with [Remix](https://remix.run/), [Styled components](https://styled-components.com) and [@UiReact](https://uireact.io) library working propertly.

## Theme Switcher

You can use your appearance settings to change the theme or implement your own theme provider to change themes in the UI.

![Theme appearance](./public/theme-selector.gif)

## Styling

In this example we are using a mix of styled-components and CSS modules with SASS for styling just for demoing purposes. We highly suggest you only use one in your app's code as that will bring consistency and make it easier to maintain.

As @UiReact uses styled-components you will have to keep it installed, although if is not your favorite you can only use CSS Modules in your apps code and leave styled-components for the library components.

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
