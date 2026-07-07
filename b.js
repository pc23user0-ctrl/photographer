// PRELOADER

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    preloader.style.opacity = "0";

    setTimeout(() => {
        preloader.style.display = "none";
    }, 500);

});

// AOS ANIMATION

AOS.init({
    duration: 1000,
    once: true
});

// TYPING EFFECT

const typingText = document.querySelector(".typing");

const words = [
    "Travel Photographer",
    "Visual Storyteller",
    "Photo Editor",
    "Content Creator"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();


// COUNTER ANIMATION

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target =
            +counter.getAttribute("data-target");

        const updateCounter = () => {

            const current =
                +counter.innerText;

            const increment =
                Math.ceil(target / 100);

            if (current < target) {

                counter.innerText =
                    current + increment;

                setTimeout(updateCounter, 25);

            } else {

                counter.innerText = target + "+";

            }

        };

        updateCounter();

    });

};

const counterSection =
    document.querySelector(".counter-section");

let counterStarted = false;

window.addEventListener("scroll", () => {

    const sectionTop =
        counterSection.offsetTop - 500;

    if (
        window.scrollY > sectionTop &&
        !counterStarted
    ) {

        startCounter();

        counterStarted = true;

    }

});


// GALLERY FILTER

const filterButtons =
    document.querySelectorAll(
        ".gallery-filter button"
    );

const galleryItems =
    document.querySelectorAll(
        ".gallery-item"
    );

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const filter =
            button.getAttribute("data-filter");

        galleryItems.forEach(item => {

            if (
                filter === "all" ||
                item.classList.contains(filter)
            ) {

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        });

    });

});


// LIGHTBOX

const galleryImages =
    document.querySelectorAll(
        ".gallery-img"
    );

const lightbox =
    document.getElementById("lightbox");

const lightboxImg =
    document.getElementById("lightboxImg");

const closeLightbox =
    document.getElementById("closeLightbox");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImg.src = img.src;

    });

});

closeLightbox.addEventListener("click", () => {

    lightbox.style.display = "none";

});

lightbox.addEventListener("click", e => {

    if (e.target === lightbox) {

        lightbox.style.display = "none";

    }

});


// BACK TO TOP BUTTON

const topBtn =
    document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// NAVBAR SCROLL EFFECT

const navbar =
    document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(0,0,0,.9)";

        navbar.style.boxShadow =
            "0 5px 20px rgba(0,0,0,.4)";

    } else {

        navbar.style.background =
            "rgba(0,0,0,.5)";

        navbar.style.boxShadow =
            "none";

    }

});


// CONTACT FORM DEMO

const form =
    document.querySelector(".contact-form");

form.addEventListener("submit", e => {

    e.preventDefault();

    alert(
        "Thank you! Your message has been sent."
    );

    form.reset();

});