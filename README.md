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

The contact form posts to [FormSubmit](https://formsubmit.co) using `info@castrightcatch.com`. The public site still shows `jwatts@castrightcatch.com`. The first live submission sends a confirmation email that must be approved before messages start arriving.

## Brand assets

Original files live in `brand-assests/`. Optimized copies used by the site are in `public/images/`.
