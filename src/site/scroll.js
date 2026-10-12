// Scrolls an element into view, smoothly unless the visitor's device
// asks for reduced motion (the CSS setting doesn't cover JS scrolling).
export function scrollToEl(el) {
  if (!el) return;
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
}

export function scrollToId(id) {
  scrollToEl(document.getElementById(id));
}
