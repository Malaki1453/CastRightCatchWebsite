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

A Netlify function then sends a branded HTML email (with the company emblem) to `info@castrightcatch.com` through [Resend](https://resend.com).

### One-time setup

Add **one** environment variable in Netlify. Leave the others unset.

1. Create an account at [resend.com](https://resend.com).
2. Add and verify the domain `castrightcatch.com` (Resend will give you DNS records to add where the domain is hosted).
3. Create an API key. It starts with `re_`.
4. In Netlify, go to **Project configuration → Environment variables → Add a variable**:
   - **Key:** `RESEND_API_KEY`
   - **Value:** paste the full `re_...` key from Resend
   - Scopes: Production, and include **Functions** / **Runtime**
5. Do **not** add `CONTACT_EMAIL` or `RESEND_FROM` unless you are filling them in. Blank values will break sending. The code already emails `info@castrightcatch.com`.
6. Redeploy after saving the variable.
7. Keep the generic Netlify form email **off**.

Until the domain is verified, Resend will not send from `info@castrightcatch.com`. After DNS verifies, send a test from the live contact page. Function errors show up in Netlify under **Logs → Functions**.

## Brand assets

Original files live in `brand-assests/`. Optimized copies used by the site are in `public/images/`.
