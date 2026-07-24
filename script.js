
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

document.getElementById('year')?.append(String(new Date().getFullYear()));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const canvas = document.getElementById('embers');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let particles = [];
  const resize = () => {
    canvas.width = innerWidth * devicePixelRatio;
    canvas.height = innerHeight * devicePixelRatio;
    canvas.style.width = innerWidth + 'px';
    canvas.style.height = innerHeight + 'px';
    ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);
    particles = Array.from({length: Math.min(70, Math.floor(innerWidth/18))}, () => ({
      x: Math.random()*innerWidth,
      y: Math.random()*innerHeight,
      r: Math.random()*1.8+.3,
      vy: Math.random()*.45+.15,
      vx: (Math.random()-.5)*.15,
      a: Math.random()*.55+.15
    }));
  };
  const draw = () => {
    ctx.clearRect(0,0,innerWidth,innerHeight);
    for (const p of particles) {
      p.y -= p.vy; p.x += p.vx;
      if (p.y < -8) { p.y = innerHeight+8; p.x = Math.random()*innerWidth; }
      ctx.beginPath();
      ctx.fillStyle = `rgba(255,120,28,${p.a})`;
      ctx.shadowBlur = 8; ctx.shadowColor = 'rgba(255,105,15,.65)';
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill();
    }
    requestAnimationFrame(draw);
  };
  addEventListener('resize', resize);
  resize(); draw();
}

document.querySelectorAll('video').forEach(video => {
  const fallback = video.parentElement?.querySelector('.video-fallback');
  const hideFallback = () => { if (fallback) fallback.style.display = 'none'; };
  video.addEventListener('loadeddata', hideFallback);
  video.addEventListener('canplay', hideFallback);
});
