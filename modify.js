var logoLink = document.querySelector('.logoLink');
logoLink.classList.remove('interact-button');
logoLink.setAttribute('href', '#');

let pageHeader = document.querySelector('.header');
pageHeader.style.background = 'red';
document.addEventListener('scroll', function() {
  let scrollPosition = window.scrollY;

  // Change background color depending on scroll position 
  if (scrollPosition > 100) {
      pageHeader.style.backgroundColor = 'red';
  } else {
      pageHeader.style.backgroundColor = 'transparent';
  }
});