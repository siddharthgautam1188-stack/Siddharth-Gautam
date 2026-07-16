// =======================
// CURSOR
// =======================
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});


// =======================
// SMOOTH SCROLL
// =======================
document.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", (e) => {
    const href = a.getAttribute("href");

    if (href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: "smooth" });
    }
  });
});


// =======================
// SCROLL REVEAL
// =======================
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// =======================
// THEME TOGGLE (CLEAN FINAL)
// =======================
// =======================
// THEME TOGGLE
// =======================

const toggle = document.getElementById("themeToggle");
const icon = toggle.querySelector(".icon");
const themeText = toggle.querySelector(".theme-text");

// Apply Theme
function setTheme(isLight) {

    document.body.classList.toggle("light", isLight);

    // Icon animation
    icon.style.transform = "rotate(180deg) scale(0)";

    setTimeout(() => {

        if (isLight) {
            icon.textContent = "☀";
            themeText.textContent = "Change to Dark Mode";
        } else {
            icon.textContent = "☾";
            themeText.textContent = "Change to White Mode";
        }

        icon.style.transform = "rotate(0deg) scale(1)";

    }, 150);

    localStorage.setItem("theme", isLight ? "light" : "dark");
}

// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    setTheme(true);
} else {
    setTheme(false);
}

// Toggle theme
toggle.addEventListener("click", () => {

    const isLight = !document.body.classList.contains("light");

    setTheme(isLight);

    // Restart ripple animation
    toggle.classList.remove("play");
    void toggle.offsetWidth;
    toggle.classList.add("play");

});

const image = document.querySelector(".about-image");
const glow = document.querySelector(".mouse-glow");

image.addEventListener("mousemove", (e)=>{

  const rect = image.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  glow.style.left = x - 125 + "px";
  glow.style.top = y - 125 + "px";
});

const cards = document.querySelectorAll(".stat-card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const moveX = (x - rect.width/2) / 10;
const moveY = (y - rect.height/2) / 10;

card.style.transform =
`translate(${moveX}px,${moveY}px)`;
});

card.addEventListener("mouseleave",()=>{
card.style.transform="translate(0,0)";
});

});
const photo = document.querySelector(".about-image img");

document.addEventListener("mousemove",(e)=>{

let x =
(window.innerWidth/2 - e.clientX)/50;

let y =
(window.innerHeight/2 - e.clientY)/50;

photo.style.transform =
`translate(${x}px,${y}px)`;
});
const progress =
document.querySelector(".progress-bar");

window.addEventListener("scroll",()=>{

const total =
document.documentElement.scrollHeight
- window.innerHeight;

const percent =
(window.scrollY / total) * 100;

progress.style.width =
percent + "%";

});   
// ===========================
// EMAILJS
// ===========================

// Initialize EmailJS
emailjs.init({
    publicKey: "slkP040h12Ot_OLY-"
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.sendForm(

        "service_nfjdn8k",
        "template_zksv6dv",
        this

    ).then(() => {

        alert("✅ Message sent successfully!");

        form.reset();

    }).catch((error) => {

        console.error(error);

        alert("❌ Failed to send message.");

    });

});

// ===========================
// MOBILE NAVBAR
// ===========================

const menuBtn = document.getElementById("menuBtn");
const navRight = document.getElementById("navRight");
const navLinks = document.querySelectorAll(".nav-links a");

// Open / Close menu
menuBtn.addEventListener("click", () => {

    navRight.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navRight.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }

});

// Close menu when any nav link is clicked
navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navRight.classList.remove("active");

        const icon = menuBtn.querySelector("i");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");

    });

});

// Optional: Close menu when window is resized to desktop
window.addEventListener("resize", () => {

    if (window.innerWidth > 768) {

        navRight.classList.remove("active");

        const icon = menuBtn.querySelector("i");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");

    }

});
