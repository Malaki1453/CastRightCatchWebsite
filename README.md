# Cast Right Catch Co.

Marketing site for Cast Right Catch Co., a seafood wholesale company based in Orting, Washington.

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## Pages

- `/` Home
- `/about` Mission, story, and the meaning of the name
- `/contact` Inquiry form
- `/privacy` Privacy policy
- `/thanks` Form confirmation

## Local development

Node.js 22.12+ is required. If `node` is not recognized in a new terminal, add `E:\nodejs` to your PATH (that is where Node is installed on this machine). From this folder:

```sh
npm install
npm run dev
```

The site runs at [http://localhost:4321](http://localhost:4321).

On Windows, if PowerShell blocks `npm`, call `npm.cmd` instead:

```sh
npm.cmd install
npm.cmd run dev
```

## Build

```sh
npm run build
npm run preview
```

Production files are written to `dist/`.

## Contact form

The contact form uses [Netlify Forms](https://docs.netlify.com/forms/setup/). A static copy of the fields lives in `public/__forms.html` so Netlify can detect the form at deploy time. The visible contact page posts to that file, then redirects to `/thanks`.

After deploying:

1. In the Netlify dashboard, enable **Forms > Form detection** if it is off, then redeploy.
2. Enable form notifications so submissions are emailed to the team.

## Brand assets

Original files live in `brand-assests/`. Optimized copies used by the site are in `public/images/`.
