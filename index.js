// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Animation for the header text
    // Animation for the header text
    anime.timeline({
        targets: ".name, .opacity-75, .btn-outline-light",
        easing: "easeInOutExpo",
    })
    .add({
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: (el, i) => 300 * i,
    })
    // Chain the works section animation after the header animation
    .add({
        targets: ".col-lg-4",
        translateX: [-50, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: function(el, i) {
            return i * 150; // Adjust the delay to control the gap between columns
        },
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navList = document.getElementById("nav-list");

    menuToggle.addEventListener("click", function () {
        navList.classList.toggle("active");
    });
});


//Slide effect in contact me
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
