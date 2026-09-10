// ===============================
// Welcome Message
// ===============================

window.addEventListener("load", function () {

    console.log("Welcome to Ganesh Utsav Website 🙏");

});


// ===============================
// Gallery Image Click
// ===============================

const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(function (image) {

    image.addEventListener("click", function () {

        window.open(image.src, "_blank");

    });

});


// ===============================
// Navbar Scroll Effect
// ===============================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 100) {

        navbar.style.background = "#3b1708";

    } else {

        navbar.style.background = "rgba(80, 35, 10, 0.95)";

    }

});