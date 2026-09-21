// Faint agent-network animation behind the about-page header.
(function () {
  const canvas = document.querySelector(".agents-bg");
  const header = document.querySelector(".post-header");
  if (!canvas || !header) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  header.prepend(canvas);
  const ctx = canvas.getContext("2d");
  const agents = [];
  const linkDist = 110;
  let width, height, color, visible = true, frame = 0;

  function resize() {
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    width = rect.width;
    height = rect.height;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function readColor() {
    color = getComputedStyle(document.documentElement).getPropertyValue("--global-theme-color").trim();
  }

  resize();
  readColor();
  window.addEventListener("resize", resize);

  const count = Math.round(Math.min(46, width / 18));
  for (let i = 0; i < count; i++) {
    agents.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
    });
  }

  new IntersectionObserver(([entry]) => (visible = entry.isIntersecting)).observe(header);

  function tick() {
    requestAnimationFrame(tick);
    if (!visible || document.hidden) return;
    if (++frame % 60 === 0) readColor();

    ctx.clearRect(0, 0, width, height);
    for (const a of agents) {
      a.x += a.vx;
      a.y += a.vy;
      if (a.x < 0 || a.x > width) a.vx *= -1;
      if (a.y < 0 || a.y > height) a.vy *= -1;
    }

    ctx.strokeStyle = color;
    for (let i = 0; i < agents.length; i++) {
      for (let j = i + 1; j < agents.length; j++) {
        const d = Math.hypot(agents[i].x - agents[j].x, agents[i].y - agents[j].y);
        if (d < linkDist) {
          ctx.globalAlpha = (1 - d / linkDist) * 0.18;
          ctx.beginPath();
          ctx.moveTo(agents[i].x, agents[i].y);
          ctx.lineTo(agents[j].x, agents[j].y);
          ctx.stroke();
        }
      }
    }

    ctx.globalAlpha = 0.35;
    ctx.fillStyle = color;
    for (const a of agents) {
      ctx.beginPath();
      ctx.arc(a.x, a.y, 1.8, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }

  tick();
})();
