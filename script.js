const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -35px 0px' });
reveals.forEach((el) => observer.observe(el));

const bar = document.getElementById('scrollBar');
const updateProgress = () => {
  const doc = document.documentElement;
  const max = doc.scrollHeight - doc.clientHeight;
  const progress = max > 0 ? (doc.scrollTop / max) * 100 : 0;
  bar.style.width = `${progress}%`;
};
addEventListener('scroll', updateProgress, { passive: true });
updateProgress();
