//navigation 

const hamburger = document.querySelector(".hamburger");
const navClose = document.querySelector(".nav-close");
const navLinks = document.querySelector(".nav-links");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click",()=>{
  navLinks.classList.add("show");
  overlay.classList.add("show");
  navClose.classList.add("show");
  hamburger.style.visibility ="hidden";

});
navClose.addEventListener("click",()=>{
 navLinks.classList.remove("show");
 navClose.classList.remove("show");
 overlay.classList.remove("show");
 hamburger.style.visibility ="visible";
});

// logo
const logo = document.querySelector(".logo-nav");
const logoFooter = document.querySelector(".logo-footer");

logo.addEventListener("click",()=> {
  location.href="index.html";
});
logoFooter.addEventListener("click",()=> {
  location.href="index.html";
});
const getInTouch = document.querySelector(".btn-article");

getInTouch.addEventListener("click",()=>{
 location.href="contact.html"
});

//social media links
const facebook = document.getElementById("fb");
const youtube = document.getElementById("you");
const twitter = document.getElementById("twit");
const pinterest = document.getElementById("pin");
const instagram = document.getElementById("inst");

facebook.addEventListener("click",()=>{
  location="https://www.facebook.com";
});
youtube.addEventListener("click",()=>{
  location="https://www.youtube.com";
});
twitter.addEventListener("click",()=>{
  location="https://www.twitter.com";
});
pinterest.addEventListener("click",()=>{
  location="https://www.pinterest.com";
});
instagram.addEventListener("click",()=>{
  location="https://www.instagram.com";
});


// location link
const canada = document.getElementById("can");
const australia = document.getElementById("aus");
const uk = document.getElementById("uk");

canada.addEventListener("click",()=>{
 location.href="locations.html";
});

australia.addEventListener("click",()=>{
  location.href="locations.html";
 });

 uk.addEventListener("click",()=>{
  location.href="locations.html";
 });

