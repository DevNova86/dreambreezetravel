// Navbar Slide Window //

const primaryNav = document.querySelector(".navbar");
const navToggle = document.querySelector(".mobile-nav-toggle");
let isNavVisible = true; // Initial state of navigation visibility

navToggle.addEventListener("click", () => {
    toggleNavVisibility();
});

// Function to toggle navigation visibility
function toggleNavVisibility() {
    if (isNavVisible) {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    } else {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    }
    isNavVisible = !isNavVisible;
}

// Event listener for window scroll
let prevScrollPosition = window.scrollY;
window.addEventListener("scroll", () => {
    if (isNavVisible) {
        // Hide navigation if it's currently visible
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
        isNavVisible = false;
    }
});


// Slide Show //
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
};


// Use the "loading" attribute to lazy load images
const images = document.querySelectorAll('img');
images.forEach(img => img.setAttribute('loading', 'lazy'));

// Load critical CSS asynchronously
const style = document.createElement('link');
style.rel = 'stylesheet';
style.href = 'critical.css';
style.media = 'print';
document.head.appendChild(style);

// Load other CSS asynchronously
const nonCriticalStyle = document.createElement('link');
nonCriticalStyle.rel = 'stylesheet';
nonCriticalStyle.href = 'styles.css';
document.head.appendChild(nonCriticalStyle);

// Load non-essential JavaScript at the end of the body
const script = document.createElement('script');
script.src = 'non-essential.js';
document.body.appendChild(script);

// Use font-display to control font loading behavior
const font = new FontFace('YourFont', 'url(font.woff2)');
font.load().then(() => {
  document.fonts.add(font);
  document.body.style.fontFamily = 'YourFont, sans-serif';
});
