This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# SYNTAX NOTES

1.Install next app

```
npx create-react-app
```

2.if you want to install exact version of the dependency of some libraries you can use

```
npm install --legacy-peer-deps
```

3. Set up sanity backend

```
sudo npm install -g @sanity/cli
sanity init
```

### Keep in my mind you need to change nodemodules in git ignore

4. set up sanity studio

```
sanity start
```

5.Create schema in sanity

```
export default {
    name: '',
    title: '',
    type: '',
    fields: [
        {
            name: ''
            title: '',
            type:''
        }
    ]
}
```

## TypeError next/babel

if you get error in index.js that it can not find the babel

Create a .babelrc file in root folder and
write

```
{
   "presets": ["next/babel"],
   "plugins": []
}
```

then in your root folder write in .eslintrc.json file

```
{
  "extends": ["next/babel", "next/core-web-vitals"]
}

```

## [Set up TAILWINDCSS click to see documentation](https://v2.tailwindcss.com/docs/guides/nextjs)

1. install via npm

```
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p
```

2. configure path

```
// tailwind.config.js
  module.exports = {

   content: [
    './pages/**/*.{js,ts,jsx,tsx}',         './components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
```

3.include tailwind in your css in the globals.css file

```

@tailwind base;
@tailwind components;
@tailwind utilities;
```

4.import into your app.js

```
import '../styles/globals.css'
```
