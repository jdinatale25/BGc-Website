/* ── SCROLL PROGRESS BAR ── */
window.addEventListener('scroll', () => {
  const progressBar = document.getElementById('progress-bar');
  if (progressBar) {
    progressBar.style.width = (window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100) + '%';
  }
});

/* ── NAV SHRINK ON SCROLL ── */
const nav = document.getElementById('mainNav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 80);
  });
}

/* ── FLOATING CTA ── */
const floatCta = document.getElementById('float-cta');
if (floatCta) {
  window.addEventListener('scroll', () => {
    floatCta.classList.toggle('visible', window.scrollY > 300);
  });
}

/* ── MOBILE MENU TOGGLE ── */
(function () {
  const btn = document.querySelector('.hamburger');
  const menu = document.getElementById('mobileMenu');
  if (!btn || !menu) return;

  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    const open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });

  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', function (e) {
    if (menu.classList.contains('open') && !menu.contains(e.target) && !btn.contains(e.target)) {
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
}());

/* ── SCROLL REVEAL ── */
const ro = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      ro.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => ro.observe(el));

