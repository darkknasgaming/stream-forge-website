# Stream Forge Website

Official static website for **Stream Forge** at `forgeyourstream.com`.

## Preview locally

Open `index.html` in a browser, or run a small local server:

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Publish with GitHub Pages

1. Create a public GitHub repository, for example `stream-forge-website`.
2. Upload every file in this project to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **GitHub Actions**.
5. The included workflow will deploy the site automatically after each push to `main`.
6. In the Pages settings, confirm the custom domain is `forgeyourstream.com` and enable **Enforce HTTPS** after DNS is verified.

## Namecheap DNS

In Namecheap **Advanced DNS**, point the domain at GitHub Pages using the records shown in GitHub's current custom-domain documentation. GitHub may update recommended records, so verify them before changing DNS.

## Before public launch

Update these placeholders in `index.html`:

- Download button URL
- GitHub/support links
- Confirmed OBS/Streamlabs support wording
- Version number when shown
- Privacy and terms pages

## Brand asset

`assets/stream-forge-logo.png` is used as the hero artwork and favicon. Replace it with an optimized production asset later if desired.
