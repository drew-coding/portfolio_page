// Reveal sections on scroll
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  observer.observe(section);
});

// Scroll to Top Button functionality
const scrollToTopButton = document.getElementById("scroll-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  } });

  scrollToTopButton.addEventListener("click", () => { 
    window.scrollTo({ top: 0, behavior: "smooth" }); 
  });

// Dark Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Resume Download functionality
function downloadResume() {
  const resumeLink = "path/to/your-resume.pdf"; // Replace with actual resume file path
  window.open(resumeLink, "_blank");
}
