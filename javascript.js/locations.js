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



 // map canada
 let mapCanada = L.map("map-canada").setView([43.6375565,-79.3994895,15], 12);
 L.tileLayer("https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=ElhiTY9XmHHwVWKj6niG", {
   attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
}).addTo(mapCanada);
let designoCanada = L.marker([43.6375565,-79.3994895]).addTo(mapCanada);


//map australia
let mapAustralia = L.map("map-australia").setView([-30.3293985,149.7860459,17], 12);
L.tileLayer("https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=ElhiTY9XmHHwVWKj6niG", {
  attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
}).addTo(mapAustralia);
let designoAustralia = L.marker([-30.3293985,149.7860459,17]).addTo(mapAustralia);

//map uk
let mapuk = L.map("map-uk").setView([53.7102658,-1.3439433,17], 12);
L.tileLayer("https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=ElhiTY9XmHHwVWKj6niG", {
  attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
}).addTo(mapuk);
let designouk = L.marker([53.7102658,-1.3439433,17]).addTo(mapuk);


// logo
const logo = document.querySelector(".logo-nav");
const logoFooter = document.querySelector(".logo-footer");

logo.addEventListener("click",()=> {
  location.href="index.html";
});
logoFooter.addEventListener("click",()=> {
  location.href="index.html";
});

//about button
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