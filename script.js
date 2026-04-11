const navToggle = document.getElementById("nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
navToggle.addEventListener("click", () => {
navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach(link => {
link.addEventListener("click", () => {
navLinks.classList.remove("open");
});
});
}

// Scroll reveal animation
const observer = new IntersectionObserver(
entries => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add("visible");
observer.unobserve(entry.target);
}
});
},
{
threshold: 0.18
}
);

document.querySelectorAll(".fade-in").forEach(el => {
observer.observe(el);
});

// Add visible class style after JS so CSS can use it
const styleEl = document.createElement("style");
styleEl.innerHTML = .fade-in.visible { opacity: 1; transform: translateY(0); };
document.head.appendChild(styleEl);