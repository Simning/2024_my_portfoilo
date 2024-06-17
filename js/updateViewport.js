function updateViewportWidth() {
  const viewportWidth = window.innerWidth + 'px';
  document.documentElement.style.setProperty('--viewport-width', viewportWidth);
}

window.addEventListener('resize', updateViewportWidth);

updateViewportWidth();