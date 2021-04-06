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


// form

const form = document.getElementById("form");
const username = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("number");
const message = document.getElementById("message");



form.addEventListener("submit", (e)=> {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const usernameValue =username.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const messageValue = message.value.trim();
  
  if(usernameValue === "") {
    setErrorFor(username, "Can't be empty");
  } else {
    setSuccessFor(username);
  }
  if(emailValue === "") {
    setErrorFor(email, "Can't be empty");
  } else {
    setSuccessFor(email);
  }
  if(phoneValue === "") {
    setErrorFor(phone, "Can't be empty");
  } else {
    setSuccessFor(phone);
  }
  if(messageValue === "") {
    setErrorFor(message, "Can't be empty");
  } else {
    setSuccessFor(messege);
  }

};

function setErrorFor(input, message) {
  const formControl = input.parentElement;

  const small = formControl.querySelector("small");

  small.innerText = message;
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// logo
const logo = document.querySelector(".logo-nav");
const logoFooter = document.querySelector(".logo-footer");

logo.addEventListener("click",()=> {
  location.href="index.html";
});
logoFooter.addEventListener("click",()=> {
  location.href="index.html";
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