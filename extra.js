// Scroll progress bar
const progress = document.querySelector('.progress');
if (progress) {
  window.addEventListener('scroll', () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = h > 0 ? (window.scrollY / h) * 100 + '%' : '0';
  }, { passive: true });
}

// Header shadow on scroll
const header = document.querySelector('.site-header');
if (header) {
  window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 10
      ? '0 6px 20px rgba(0,0,0,0.25)'
      : '0 2px 12px rgba(0,0,0,0.15)';
  }, { passive: true });
}
