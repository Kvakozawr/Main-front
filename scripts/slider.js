document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.splide').forEach(slider => {
    new Splide(slider, {
      type: 'loop',
      autoplay: true,
    }).mount();
  });
});