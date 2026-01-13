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
/* ===========================
   COURSE MODULE TOGGLES
   =========================== */

document.querySelectorAll(".lesson-toggle").forEach(button => {
    button.addEventListener("click", () => {
        const content = button.nextElementSibling;
        const isOpen = content.style.display === "block";

        document.querySelectorAll(".lesson-content").forEach(c => {
            c.style.display = "none";
        });

        content.style.display = isOpen ? "none" : "block";
    });
});
/* ===========================
   RISK CALCULATOR
   =========================== */

function calculateRisk() {
    const account = parseFloat(document.getElementById("accountSize").value);
    const riskPercent = parseFloat(document.getElementById("riskPercent").value);
    const entry = parseFloat(document.getElementById("entryPrice").value);
    const stop = parseFloat(document.getElementById("stopPrice").value);

    if (!account || !riskPercent || !entry || !stop) {
        document.getElementById("calcResult").innerText =
            "Please fill in all fields correctly.";
        return;
    }

    const riskAmount = account * (riskPercent / 100);
    const riskPerShare = Math.abs(entry - stop);
    const positionSize = Math.floor(riskAmount / riskPerShare);

    document.getElementById("calcResult").innerText =
        `Risk Amount: $${riskAmount.toFixed(2)}
Shares: ${positionSize}
Risk Per Share: $${riskPerShare.toFixed(2)}`;
}
