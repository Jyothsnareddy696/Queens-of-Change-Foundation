// ==========================
// MOBILE MENU
// ==========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // close menu when clicking link
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
}

// ==========================
// SMOOTH SCROLL
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// ==========================
// NAVBAR SHADOW
// ==========================

window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.12)";
    } else {
        header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
    }
});

// ==========================
// SCROLL ANIMATION
// ==========================

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll(
".program-card, .impact-box, .intern-card, .contact-card, .about-image, .about-text, .stat-card"
).forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(60px)";
    el.style.transition = "all 0.9s ease";
    observer.observe(el);
});

// ==========================
// IMPACT COUNTER
// ==========================

const counters = document.querySelectorAll(".counter");
let counterStarted = false;

function startCounters(){
    counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        let count = 0;
        const increment = target / 150;

        const update = () => {
            count += increment;

            if (count < target) {
                counter.innerText = Math.ceil(count);
                setTimeout(update, 15);
            } else {
                counter.innerText = target >= 1000 ? (target/1000) + "K+" : target + "+";
            }
        };

        update();
    });
}

window.addEventListener("scroll", () => {
    const impact = document.querySelector(".impact");
    if (!impact) return;

    const top = impact.getBoundingClientRect().top;

    if (top < window.innerHeight - 100 && !counterStarted) {
        startCounters();
        counterStarted = true;
    }
});

// ==========================
// VOLUNTEER FORM
// ==========================

const form = document.querySelector(".volunteer-form");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you for joining Queens Of Change Foundation!");
        form.reset();
    });
}

// ==========================
// ACTIVE NAV LINK
// ==========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        if (pageYOffset >= section.offsetTop - 150) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {
        link.classList.remove("active-link");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active-link");
        }
    });
});