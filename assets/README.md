# Stream Forge Website v2

Official static website for **forgeyourstream.com**. Designed for GitHub Pages with no build step.

## Publish

1. Extract the ZIP.
2. Upload every file and folder to the root of your public GitHub website repository.
3. In **Settings → Pages**, select **Deploy from a branch**, then `main` and `/ (root)`.
4. Keep the included `CNAME` file.

## Adding real short demo videos

Record clips at 1920×1080 or 1280×720, ideally 15–45 seconds. Export muted/autoplay-friendly files as WebM and/or MP4.

Place them in:

```text
assets/videos/mission-control.webm
assets/videos/music-overlay.webm
assets/videos/overlay-studio.webm
```

Then replace the image inside a `.video-shell` in `index.html` with:

```html
<video autoplay muted loop playsinline poster="assets/images/mission-control-alt.png">
  <source src="assets/videos/mission-control.webm" type="video/webm">
  <source src="assets/videos/mission-control.mp4" type="video/mp4">
</video>
```

Keep homepage clips compressed. A good target is below 4–6 MB each.

## Adding YouTube tutorials

On `tutorials.html`, replace a tutorial card image with a responsive YouTube iframe, or link each card to the full YouTube tutorial. Full tutorials are better hosted on YouTube; the homepage should use short local clips.

## Change the download link

Open `download.html` and replace the GitHub Releases URL if needed:

```text
https://github.com/darkknasgaming/Stream-Forge/releases
```

## Main files

- `index.html` — homepage
- `tutorials.html` — tutorial library
- `download.html` — release/download page
- `assets/css/styles.css` — all styling
- `assets/js/site.js` — reveal animations and year
- `CNAME` — custom domain
