(function () {
  document.getElementById('yr').textContent = new Date().getFullYear();
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Scroll reveal for items below the hero
  var items = document.querySelectorAll('.tool, .rep, .services li, .timeline .job, .contact');
  items.forEach(function (el, i) { el.classList.add('reveal'); el.style.transitionDelay = (i % 4) * 70 + 'ms'; });
  if (!('IntersectionObserver' in window) || reduce) { items.forEach(function (el) { el.classList.add('in'); }); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  items.forEach(function (el) { io.observe(el); });
})();
