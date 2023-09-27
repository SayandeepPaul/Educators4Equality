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


// Home Section 

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// swiper 

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});


// About us hidden content section 


// our advisors 

'use strict'
var testim = document.getElementById("testim"),
  testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
  testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
  testimleftArrow = document.getElementById("left-arrow"),
  testimRightArrow = document.getElementById("right-arrow"),
  testimSpeed = 4500,
  currentSlide = 0,
  currentActive = 0,
  testimTimer
  ;
window.onload = function () {

  // Testim Script


  function playSlide(slide) {
    for (var k = 0; k < testimDots.length; k++) {
      testimContent[k].classList.remove("active");
      testimContent[k].classList.remove("inactive");
      testimDots[k].classList.remove("active");
    }
    if (slide < 0) {
      slide = currentSlide = testimContent.length - 1;
    }
    if (slide > testimContent.length - 1) {
      slide = currentSlide = 0;
    }
    if (currentActive != currentSlide) {
      testimContent[currentActive].classList.add("inactive");
    }
    testimContent[slide].classList.add("active");
    testimDots[slide].classList.add("active");

    currentActive = currentSlide;

    clearTimeout(testimTimer);
    testimTimer = setTimeout(function () {
      playSlide(currentSlide += 1);
    }, testimSpeed)
  }
  testimleftArrow.addEventListener("click", function () {
    playSlide(currentSlide -= 1);
  })
  testimRightArrow.addEventListener("click", function () {
    playSlide(currentSlide += 1);
  })

  for (var l = 0; l < testimDots.length; l++) {
    testimDots[l].addEventListener("click", function () {
      playSlide(currentSlide = testimDots.indexOf(this));
    })
  }
  playSlide(currentSlide);

}


// contact form 

function sendMail() {

  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value
  }
  let Gname = params.name
  let Gemail = params.email
  let Gphone = params.phone
  let Gmessage = params.message

  const serviceID = "service_7fgmyep"
  const templateID = "template_vgvsf0p"
  if (Gname != ''
    && (Gemail != ''
      || Gphone != '')
    && Gmessage != '') {
    emailjs.send(serviceID, templateID, params)
      .then((res) => {

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("message").value = "";
        alert("Your message sent successfully")
        console.log(res);


      })
      .catch((error) => console.log(error));
  }
  else {
    alert("Please enter the required fields")
  }
}



