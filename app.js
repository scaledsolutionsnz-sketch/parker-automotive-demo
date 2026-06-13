// Parker Automotive — interactions
(function () {
  // Intro overlay
  var intro = document.querySelector('.intro');
  if (intro) {
    window.addEventListener('load', function () {
      setTimeout(function () { intro.classList.add('done'); }, 1100);
    });
    // safety: never leave it stuck
    setTimeout(function () { intro.classList.add('done'); }, 2600);
  }

  // Nav background on scroll
  var nav = document.querySelector('.nav');
  if (nav) {
    var onScroll = function () {
      if (window.scrollY > 40) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Rolling hero
  var slides = Array.prototype.slice.call(document.querySelectorAll('.hero-slide'));
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (slides.length > 1 && !reduce) {
    var i = 0;
    setInterval(function () {
      slides[i].classList.remove('active');
      i = (i + 1) % slides.length;
      slides[i].classList.add('active');
    }, 6000);
  }

  // Reveal on scroll
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  // Mobile burger -> simple jump to contact
  var burger = document.querySelector('.burger');
  if (burger) {
    burger.addEventListener('click', function () {
      var c = document.querySelector('#contact');
      if (c) c.scrollIntoView({ behavior: 'smooth' });
    });
  }
})();
