tailwind.config = {
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
      }
    }
  }
}

// Smooth Scrolling effect 

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// Nav Bar 

let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});


// Menu toogle on mobile
const navToggle = document.querySelector('.nav-toggle');
const menuToggle = document.querySelector('.menu-toggle');

navToggle.addEventListener('click', function (e) {
  this.classList.toggle('open');
  menuToggle.classList.toggle('active');
  e.stopPropagation();
});


// Dropdown toogle on mobile

const dropdown = document.querySelector('.dropdown a');

dropdown.addEventListener('click', function (e) {
  this.nextElementSibling.classList.toggle('show');
  this.parentNode.classList.toggle('active');
  e.stopPropagation();
});