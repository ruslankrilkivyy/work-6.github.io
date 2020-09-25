document.addEventListener("DOMContentLoaded", () => {
    
    // Slider
    const slider = tns({
        container: '.types__slider',
        items: 1,
        slideBy: 'page',
        nav: false
    });

    // Nav Toggle
    const toggleNav = document.querySelector(".nav-toggle"),
          nav = document.querySelector(".nav"),
          header = document.querySelector("header");

    toggleNav.addEventListener("click", function(e) {
        e.preventDefault();

        toggleNav.classList.toggle("nav-toggle-active");
        nav.classList.toggle("active");
        header.classList.toggle("active");
    });

    // Header Fixed
    window.addEventListener('scroll', function() {
        const header = document.querySelector(".header");

        if (window.scrollY > 800) {
            header.classList.add("fixed");
        } else {
            header.classList.remove("fixed");
        }
    });

    // Smooth Scroll
    const links = document.querySelectorAll(".nav ul a");

    links.forEach(link => {
        link.addEventListener('click', clickHandler);
    });

    function clickHandler(e) {
        e.preventDefault();

        const href = this.getAttribute("data-scroll"),
              offsetTop = document.querySelector(href).offsetTop;

        scroll ({
            top: offsetTop,
            behavior: "smooth"
        })
    }

    links.forEach(link => {
        link.addEventListener('click', () => {
            links.forEach(link => link.classList.remove("active"));
            link.classList.add("active");
        });
    });
});