// // 1. Select the '.menuBurger' element from the DOM.
let menuBurger = document.querySelector('.menu-burger'),
// // 2. Select the '.basculant' element from the DOM.
basculant =  document.querySelector('.basculant')

// // 3. Add a 'click' event listener to the '.basculant' element.
basculant.addEventListener('click', function () {
// // 4. Toggle the 'active' class on the '.menuBurger' element.
menuBurger.classList.toggle('active')
});

// // ANIMATION RETOUR HAUT DE PAGE !CLAUDE!
document.querySelector('.anchor').addEventListener('click', function(e) {
  e.preventDefault();
  
  const targetId = this.getAttribute('href').substring(1);
  const targetElement = document.getElementById(targetId);
  
  if (targetElement) {
    const startPosition = window.pageYOffset;
    const targetPosition = targetElement.offsetTop;
    const distance = targetPosition - startPosition;
    const duration = 2000; // 5 secondes
    let start = null;
    
    function animation(currentTime) {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    requestAnimationFrame(animation);
  }
});
// // FIN ANIMATION RETOUR HAUT DE PAGE !CLAUDE!