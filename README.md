# Stream Forge Website v3

A static GitHub Pages site for https://forgeyourstream.com

## Publish

1. Upload the contents of this folder directly to the repository root.
2. In GitHub: Settings → Pages.
3. Choose:
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
4. Do not add a custom GitHub Actions workflow.

## Videos

Upload these files when ready:

- `assets/videos/mission-control.mp4`
- `assets/videos/music-overlay.mp4`
- `assets/videos/overlay-studio.mp4`

Until those files exist, the site displays branded video placeholders.

For best performance, keep each homepage clip short and compressed:
- 15–45 seconds
- 1080p or 720p
- H.264 MP4
- ideally under 10–15 MB

Full tutorials can be hosted on YouTube and linked from `tutorials.html`.

## Download button

In `index.html`, replace:

```html
href="#"
```

on the element with `id="download-link"` with your GitHub Release installer URL.
