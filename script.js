
// Modal Functions
function openSignIn() {
    document.getElementById("signin-modal").style.display = "block";
}

function closeSignIn() {
    document.getElementById("signin-modal").style.display = "none";
}
window.opemSignIn=openSignIn;

function openSignUp() {
    document.getElementById("signup-modal").style.display = "block";
    document.getElementById("signin-modal").style.display = "none";
}

function closeSignUp() {
    document.getElementById("signup-modal").style.display = "none";
}




function scrollToProducts() {
    document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
}
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.opacity = index === slideIndex ? "1" : "0";
    });

    slideIndex = (slideIndex + 1) % slides.length;
    setTimeout(showSlides, 4000); // Change every 4 seconds
}

showSlides();
function ScrollToContact(){
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}
//Discount pop up
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.getElementById("discountPopup").style.display = "block";
    }, 3000); // Show popup after 3 seconds
});

function closePopup() {
    document.getElementById("discountPopup").style.display = "none";
}
