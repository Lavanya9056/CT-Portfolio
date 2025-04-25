// script.js

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll to section
    const navLinks = document.querySelectorAll("nav a");
  
    navLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute("href"));
        section.scrollIntoView({ behavior: "smooth" });
      });
    });
  
    // Contact form submission (frontend only)
    const contactForm = document.getElementById("contact-form");
  
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thanks for reaching out! This is a frontend-only form.");
      contactForm.reset();
    });
  });
  