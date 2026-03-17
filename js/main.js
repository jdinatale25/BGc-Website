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

/* ── FAQ ACCORDION ── */
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const open = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!open) item.classList.add('open');
}

/* ── CONTACT FORM ── */
function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);

  // Collect checked services
  const services = [...form.querySelectorAll('input[name="services"]:checked')]
    .map(cb => cb.value).join(', ') || 'None selected';

  // Build mailto body as fallback
  const body = [
    `First Name: ${data.get('firstName')}`,
    `Last Name: ${data.get('lastName')}`,
    `Email: ${data.get('email')}`,
    `Phone: ${data.get('phone') || 'Not provided'}`,
    `Business: ${data.get('business') || 'Not provided'}`,
    `Heard about us: ${data.get('hearAbout') || 'Not provided'}`,
    `Services: ${services}`,
    ``,
    `Message:`,
    data.get('message'),
  ].join('\n');

  const subject = encodeURIComponent(`New Inquiry from ${data.get('firstName')} ${data.get('lastName')}`);
  const bodyEncoded = encodeURIComponent(body);

  // Open mailto — replace with Netlify/Formspree for a true backend submission
  window.location.href = `mailto:jake@blueprintgrowthco.com?subject=${subject}&body=${bodyEncoded}`;

  // Show success message
  form.reset();
  const successMsg = document.getElementById('successMsg');
  if (successMsg) {
    successMsg.style.display = 'block';
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
