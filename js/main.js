/*~~~~~~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~~~~~~*/ 
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav_link");
const closeIcon = document.getElementById("nav-close");

navLink.forEach((link) => (
    link.addEventListener("click", () => {
        navMenu.classList.add("hidden")
    })
))

closeIcon.addEventListener("click", () => {
    navMenu.classList.add("hidden")
})

hamburger.addEventListener("click", () => {
    navMenu.classList.remove("hidden")
})


/*~~~~~~~~~~~~~~~~~~~~ DARK LIGHT THEME ~~~~~~~~~~~~~~~~~~~~*/ 
const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-toggle");

if(localStorage.getItem("mode") == "dark") {
    darkMode();
} else {
    lightMode();
}

themeBtn.addEventListener("click", (e) => {
    if(localStorage.getItem("mode") == "light") {
        darkMode();
    } else {
        lightMode();
    }
})

function darkMode() {
    html.classList.add("dark");
    themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
    localStorage.setItem("mode", "dark");
}

function lightMode() {
    html.classList.remove("dark");
    themeBtn.classList.replace("ri-sun-line", "ri-moon-line");
    localStorage.setItem("mode", "light");
}


/*~~~~~~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~~~~~~*/ 
const scrollHeader = () => {
    const navbar = document.getElementById("navbar");
    const aTag = document.querySelectorAll("nav ul li a");
    const themeToggle = document.getElementById("theme-toggle");
    const hamburger = document.getElementById("hamburger");
    // const darkLogo = document.getElementById("dark-logo");
    // const whiteLogo = document.getElementById("white-logo");

    if (this.scrollY >= 200) {
        navbar.classList.add("bg-primaryColor");
        aTag.forEach((item) => {
            item.classList.add("text-whiteColor");
        });

        themeToggle.classList.add("text-whiteColor");
        hamburger.classList.add("text-whiteColor");
        // whiteLogo.classList.remove("hidden");
        // darkLogo.classList.add("hidden");
    } else {
        navbar.classList.remove("bg-primaryColor");
        aTag.forEach((item) => {
            item.classList.remove("text-whiteColor");
        })

        themeToggle.classList.remove("text-whiteColor");
        hamburger.classList.remove("text-whiteColor");
    }
};

window.addEventListener("scroll", scrollHeader);


/*~~~~~~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~~~~~~*/ 
const scrollUp = () => {
    const scrollUpBtn = document.getElementById("scroll-up");

    if (this.scrollY >= 250) {
        scrollUpBtn.classList.remove("-bottom-1/2");
        scrollUpBtn.classList.add("bottom-4");
    } else {
        scrollUpBtn.classList.add("-bottom-1/2");
        scrollUpBtn.classList.remove("bottom-4");
    }
};

window.addEventListener("scroll", scrollUp);

/*~~~~~~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~~~~~~*/ 
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400
});

sr.reveal(".hero__image");
sr.reveal(".hero__content", {origin: "bottom"});
sr.reveal(".hero__footer", {origin: "bottom", delay: 1200});

sr.reveal(".service__top", {origin: "bottom"});
sr.reveal(".service_item", {origin: "bottom", interval: 300});

sr.reveal(".exp__top", {origin: "top"});
sr.reveal(".exp__card", {origin: "left", interval: 300});

sr.reveal(".edu__top", {origin: "top"});
sr.reveal(".edu__card", {origin: "right", interval: 300});

sr.reveal(".contact__form", {origin: "left"});
sr.reveal(".contact__item", {origin: "bottom", interval: 300});