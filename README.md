# nextjs-antd-tailwind

This is a nextjs-antd-tailwindcss starter pack to ease your NextJS 11 development.

For NextJS features, you can go to [NextJS](https://nextjs.org/docs/getting-started) documentation.

For base component feature, you can go to [Antd](https://ant.design/) documentation.

For base css style, you can go to [TailwindCSS](https://tailwindcss.com/) documentation.

## Features

#### Layout
- Single layout with Top Navigation Bar
- Side navigation layout for creating Dashboard

#### Login
- Login using Google
- Login using Facebook

#### Navigation Bar
- 4 plug-n-play top navigation bar components
- 1 plug-n-play footer component

#### Header
- 2 plug-n-play header components

#### Others
- Google Analytics

### Getting Started

Before getting started, you can clone this project or run following command:

```bash
yarn create next-app --example https://github.com/madebyais/nextjs-antd-tailwindcss
```

Afterward, install dependencies and rename the env local example:

```bash
yarn install && mv .env.local.example .env.local
```

And run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Component Preview

After you run the dev server, you can access [http://localhost:3000/components](http://localhost:3000/components) to preview plug-n-play components included in this project. Or you can access to `pages/components` to view more detail in code.

### Custom Theme

You can customize the theme color and others based on [Antd Custom Theme](https://ant.design/docs/react/customize-theme)

First, update the less file in [style.less](./styles/style.less).

Second, run the less compile script:

```bash
yarn run less-compile
```

### Illustration

Thanks to the creator of [undraw.co](https://undraw.co) who created an awesome open-source illustration.

If you need more illustration, you can download the svg file from [undraw.co](https://undraw.co) and put it into [svg](./public/assets/svg) folder.

You can use the svg file using [SvgImage](./components/svg/index.tsx) component.

### Author

[Ais](https://github.com/madebyais)