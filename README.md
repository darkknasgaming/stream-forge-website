# Stream Forge Website v4

Static GitHub Pages site for https://forgeyourstream.com

## What changed

- Updated product positioning for Stream Forge 9.4.207-era features.
- Added PRISM Live Studio support and Live Docks.
- Added built-in Music, Song Requests, Remote, community tools, Full Backup and Ko-fi positioning.
- Removed the obsolete paid/Pro pricing plan. Stream Forge is presented as free software with optional Ko-fi support.
- Replaced empty video placeholders with useful current product sections.
- Added a real setup guide for OBS/PRISM, Browser Source audio, Live Docks, Music, Remote and updates.
- Added a clearly labelled future Forge Modules direction section without presenting unreleased features as available.
- Added automatic latest-release lookup from the public GitHub Releases API. The site falls back safely to `/releases/latest` if the API cannot be reached.
- Added a root 404 page and cleaned obsolete duplicate HTML files out of `assets/`.

## Publish

Upload the contents of this folder to the repository root, preserving:

- `index.html`
- `tutorials.html`
- `404.html`
- `styles.css`
- `script.js`
- `assets/stream-forge-logo.png`
- `CNAME`
- `.nojekyll`

GitHub Pages should continue using the `main` branch and repository root.

## Downloads

The site's download links always have a static fallback to:

`https://github.com/darkknasgaming/Stream-Forge-Releases/releases/latest`

When the page loads, `script.js` also checks the public GitHub Releases API. If available, it updates the displayed version/date and points Download buttons directly at the latest `.exe` asset.

This means future public releases should not require a website edit just to update the download version.

## Videos

The old empty demo-video section was removed from the public homepage so visitors no longer see placeholder text such as `Add mission-control.mp4`.

The `assets/videos/` folder is retained for future real clips.
