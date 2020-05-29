(function (){
  "use strict";
  let scroll = document.querySelector('.scrollTop');
  window.addEventListener('scroll', function() {
    scroll.classList.toggle("active", window.scrollY > 500);
  });
  scroll.onclick = function() { window.scrollTo({ top: 0, behavior: 'smooth' }); }
}());