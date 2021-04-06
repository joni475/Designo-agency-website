//navigation 

const hamburger = document.querySelector(".hamburger");
const navClose = document.querySelector(".nav-close");
const navLinks = document.querySelector(".nav-links");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click",()=>{
  navLinks.classList.add("show");
  overlay.style.display ="block";
  navClose.classList.add("show");
  hamburger.style.visibility ="hidden";

});
navClose.addEventListener("click",()=>{
 navLinks.classList.remove("show");
 navClose.classList.remove("show");
 overlay.style.display = "none";
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

//  design project links
const headBtn = document.querySelector(".head-btn");
const web = document.querySelector(".web-design-project");
const app = document.querySelector(".app-design-project");
const graphic = document.querySelector(".graphic-design-project");

headBtn.addEventListener("click",()=>{
 location.href="web-design.html";
});
web.addEventListener("click",()=>{
  location.href="web-design.html";
});

app.addEventListener("click",()=>{
 location.href="app-design.html";
});

graphic.addEventListener("click",()=>{
   location.href="graphic-design.html";
});

//about button link
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