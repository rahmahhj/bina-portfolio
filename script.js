
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const navLinks = document.querySelectorAll(".nav-link");

// Mobile navigation
if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    });
  });

  document.addEventListener("click", (event) => {
    if (
      !mainNav.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

// Highlight the current navigation section
const sections = document.querySelectorAll("main section[id]");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${entry.target.id}`
            );
          });
        }
      });
    },
    { rootMargin: "-30% 0px -55% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
}

// Footer year
const currentYear = document.getElementById("currentYear");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

// Update these details before publishing
const architect = {
  name: "Bina Abdulwahid Said",
  email: "your.email@example.com",
  whatsapp: "",
  location: "Duhok, Iraq",
  instagram: ""
};

const footerName = document.getElementById("footerName");
const emailLink = document.getElementById("emailLink");
const whatsappLink = document.getElementById("whatsappLink");
const locationText = document.getElementById("locationText");
const instagramLink = document.getElementById("instagramLink");
const contactButton = document.querySelector(".contact-button");

if (footerName) {
  footerName.innerHTML = `${architect.name}<span>.</span>`;
}

document.title = `${architect.name} | Architectural Portfolio`;

if (emailLink && architect.email !== "your.email@example.com") {
  emailLink.href = `mailto:${architect.email}`;
  emailLink.textContent = `${architect.email} ↗`;
}

if (contactButton && architect.email !== "your.email@example.com") {
  contactButton.href = `mailto:${architect.email}`;
}

if (whatsappLink && architect.whatsapp.trim() !== "") {
  const phone = architect.whatsapp.replace(/\D/g, "");
  whatsappLink.href = `https://wa.me/${phone}`;
  whatsappLink.textContent = "CHAT ON WHATSAPP ↗";
  whatsappLink.target = "_blank";
  whatsappLink.rel = "noopener noreferrer";
} else if (whatsappLink) {
  whatsappLink.removeAttribute("href");
}

if (locationText) {
  locationText.textContent = architect.location;
}

if (instagramLink && architect.instagram.trim() !== "") {
  instagramLink.href = architect.instagram;
  instagramLink.target = "_blank";
  instagramLink.rel = "noopener noreferrer";
} else if (instagramLink) {
  instagramLink.removeAttribute("href");
}
