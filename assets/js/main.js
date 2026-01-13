/* ===========================
   MAIN INTERACTIVITY SCRIPT
   =========================== */

/*
   This file intentionally stays clean and modular.
   As the course expands, lessons, quizzes, and
   interactive charts will be added here.
*/

document.addEventListener("DOMContentLoaded", () => {
    highlightActiveNav();
});

/* ===========================
   ACTIVE NAV LINK HIGHLIGHT
   =========================== */

function highlightActiveNav() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });
}

/* ===========================
   FUTURE EXPANSION PLACEHOLDERS
   =========================== */

/*
   Stage Three will add:
   - Expandable lesson modules
   - Pattern breakdowns with logic trees
   - Beginner mistakes callouts
   - Risk calculators
   - Progress tracking
*/
