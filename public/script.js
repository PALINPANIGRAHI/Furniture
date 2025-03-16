//Firebase Modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

//Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyAVj0IyZENuwuEzsyYMKzu87or1xwsYINg",
    authDomain: "furniture-843c4.firebaseapp.com",
    projectId: "furniture-843c4",
    storageBucket: "furniture-843c4.firebasestorage.app",
    messagingSenderId: "915353948882",
    appId: "1:915353948882:web:7b392678367a6ca200930b"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign-Up Function
document.getElementById("signup-button").addEventListener("click", function () {
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Sign-up successful! Please log in.");
            closeSignUp();
        })
        .catch((error) => {
            alert(error.message);
        });
});

// Sign-In Function
document.getElementById("signin-button").addEventListener("click", function () {
    let email = document.getElementById("signin-email").value;
    let password = document.getElementById("signin-password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Sign-in successful!");
            closeSignIn();
        })
        .catch((error) => {
            alert(error.message);
        });
});

// Logout Function
document.getElementById("logout-button").addEventListener("click", function () {
    signOut(auth).then(() => {
        alert("Logged out successfully!");
    }).catch((error) => {
        alert(error.message);
    });
});

//Function  to Check User Login State
onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById("logout-button").style.display = "block";
    } else {
        document.getElementById("logout-button").style.display = "none";
    }
});

// Modal Control Functions
function openSignIn() {
    document.getElementById("signup-modal").style.display="none";//hide sign up modal
    document.getElementById("signin-modal").style.display = "block";//display sign in modal

}

function closeSignIn() {
    document.getElementById("signin-modal").style.display = "none";
}
window.closeSignIn=closeSignIn;

function openSignUp() {
    document.getElementById("signup-modal").style.display = "block";
    document.getElementById("signin-modal").style.display = "none";
}

function closeSignUp() {
    document.getElementById("signup-modal").style.display = "none";
}
window.closeSignUp=closeSignUp;


window.openSignIn = openSignIn;
window.openSignUp = openSignUp;

//Function that will scroll to shop section
function scrollToProducts() {
    document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
}
window.scrollToProducts=scrollToProducts;
//Slideshow Function
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
//Function that wiil scroll to Contact Section
function ScrollToContact(){
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}
window.ScrollToContact=ScrollToContact;
//Discount pop up
function scrollToproducts(){
    document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
    
}
window.scrollToproducts= scrollToproducts;
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.getElementById("discountPopup").style.display = "block";
    }, 3000); // Show popup after 3 seconds
});

function closePopup() {
    document.getElementById("discountPopup").style.display = "none";
}
window.closePopup = closePopup;


