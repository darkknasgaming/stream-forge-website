const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}

document.getElementById('year')?.append(String(new Date().getFullYear()));

const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 }) : null;

document.querySelectorAll('.reveal').forEach(el => {
  if (observer) observer.observe(el);
  else el.classList.add('visible');
});

const canvas = document.getElementById('embers');
if (canvas && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const ctx = canvas.getContext('2d');
  let particles = [];
  const resize = () => {
    canvas.width = innerWidth * devicePixelRatio;
    canvas.height = innerHeight * devicePixelRatio;
    canvas.style.width = innerWidth + 'px';
    canvas.style.height = innerHeight + 'px';
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    particles = Array.from({ length: Math.min(64, Math.floor(innerWidth / 20)) }, () => ({
      x: Math.random() * innerWidth,
      y: Math.random() * innerHeight,
      r: Math.random() * 1.8 + .3,
      vy: Math.random() * .42 + .14,
      vx: (Math.random() - .5) * .14,
      a: Math.random() * .5 + .12
    }));
  };
  const draw = () => {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (const p of particles) {
      p.y -= p.vy;
      p.x += p.vx;
      if (p.y < -8) { p.y = innerHeight + 8; p.x = Math.random() * innerWidth; }
      ctx.beginPath();
      ctx.fillStyle = `rgba(255,120,28,${p.a})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = 'rgba(255,105,15,.6)';
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
    requestAnimationFrame(draw);
  };
  addEventListener('resize', resize);
  resize();
  draw();
}

// Keep the website from going stale when a new public release is published.
// If GitHub's API is unavailable or rate-limited, the static fallback still works.
(async () => {
  try {
    const response = await fetch('https://api.github.com/repos/darkknasgaming/Stream-Forge-Releases/releases/latest', {
      headers: { 'Accept': 'application/vnd.github+json' }
    });
    if (!response.ok) return;
    const release = await response.json();
    const tag = String(release.tag_name || '').trim();
    const display = tag
      ? tag.replace(/^v/i, 'v').replace(/-alpha\./i, ' Alpha ').replace(/-/g, ' ')
      : '';

    if (display) document.querySelectorAll('[data-latest-version]').forEach(el => { el.textContent = display; });

    if (release.published_at) {
      const date = new Date(release.published_at);
      if (!Number.isNaN(date.getTime())) {
        const formatted = new Intl.DateTimeFormat(undefined, { year: 'numeric', month: 'short', day: 'numeric' }).format(date);
        document.querySelectorAll('[data-latest-date]').forEach(el => { el.textContent = `Published ${formatted}`; });
      }
    }

    const installer = Array.isArray(release.assets)
      ? release.assets.find(asset => /\.exe$/i.test(asset.name || '') && !/\.blockmap$/i.test(asset.name || ''))
      : null;
    const target = installer?.browser_download_url || release.html_url;
    if (target) document.querySelectorAll('[data-download-link]').forEach(el => { el.href = target; });
  } catch {
    // Static fallback points to /releases/latest and remains usable.
  }
})();
