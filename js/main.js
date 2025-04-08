// Nav Bar Toggle
let toggleBtn = document.getElementById("toggle-btn");
let headerTitle = document.querySelector(".nav-title");
let body = document.getElementById("body");
let links = document.querySelectorAll(".side-bar-link");
let sideBar = document.getElementById("side-bar");

toggleBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
	toggleBtn.classList.toggle("toggled");

	if (
		sideBar.style.transform === "translateX(-200%)" ||
		sideBar.style.transform === ""
	) {
		headerTitle.style.color = "$dark-color";
		sideBar.style.transform = "translateX(0px)";
		body.style.overflowY = "hidden";
	} else {
		sideBar.style.transform = "translateX(-200%)";
		body.style.overflowY = "auto";
	}
}

links.forEach((link) =>
	link.addEventListener("click", () => {
		sideBar.style.transform = "translateX(-200%)";
		body.style.overflowY = "auto";
		toggleBtn.classList.toggle("toggled");
	})
);

// Accordion
document.addEventListener("DOMContentLoaded", () => {
	const accordions = document.querySelectorAll(".accordion-card");

	accordions.forEach((accordion) => {
		const header = accordion.querySelector(".accordion-header");
		const content = accordion.querySelector(".accordion-content");
		const toggle = accordion.querySelector(".accordion-toggle");

		header.addEventListener("click", () => {
			content.classList.toggle("active");
			toggle.classList.toggle("active");
		});
	});
});

// Fade In
const sections = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			entry.target.classList.toggle("show", entry.isIntersecting);
		});
	},
	{
		threshold: 0.1,
	}
);

// Observa cada elemento
sections.forEach((section) => {
	observer.observe(section);
});
