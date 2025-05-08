const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add('show');
      }
  });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-nav');
        } else {
            entry.target.classList.remove('show-nav');
        }
    });
});


const hiddenNav = document.querySelectorAll('.hidden-nav');

hiddenNav.forEach((el) => navObserver.observe(el));

var prevScrollpos = window.pageYOffset;
let navbar = document.querySelector(".navbar");
let navbarHeight = navbar.offsetHeight;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-" + navbarHeight + "px";
  }
  prevScrollpos = currentScrollPos;
}

const scrollDown = document.querySelector('.scroll-down');

scrollDown.addEventListener('click', () => {
  const windowHeight = window.innerHeight; // Get the height of the viewport
  window.scrollTo({
    top: windowHeight,
    behavior: "smooth", // Smooth scrolling
  });
});

// const themeToggle = document.getElementById('theme-toggle');
// const body = document.body;

// themeToggle.addEventListener('click', () => {
//   body.classList.toggle('dark-mode');

//   // Toggle between sun and moon icons
//   const icon = themeToggle.querySelector('i');
//   if (body.classList.contains('dark-mode')) {
//     icon.classList.remove('fa-sun');
//     icon.classList.add('fa-moon');
//   } else {
//     icon.classList.remove('fa-moon');
//     icon.classList.add('fa-sun');
//   }
// });

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme);
  updateIcon(savedTheme);
}

// Add event listener to toggle theme
themeToggle.addEventListener('click', () => {
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light-mode'); // Save light mode in localStorage
    updateIcon('light-mode');
  } else {
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark-mode'); // Save dark mode in localStorage
    updateIcon('dark-mode');
  }
});

// Function to update the icon based on the theme
function updateIcon(theme) {
  const icon = themeToggle.querySelector('i');
  if (theme === 'dark-mode') {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  } else {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }
}


