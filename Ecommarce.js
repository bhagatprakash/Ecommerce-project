let card = document.querySelector(".trend");
let card2 = document.getElementById("trendSecond");
let mainpag = document.querySelector(".main");
let blogs = document.querySelector(".trands");

function setActiveMenuItem(menuItemId) {
  document.getElementById("home").classList.remove("active");
  document.getElementById("shop").classList.remove("active");
  document.getElementById("blog").classList.remove("active");
  document.getElementById("about").classList.remove("active");
  document.getElementById("contact").classList.remove("active");

  document.getElementById(menuItemId).classList.add("active");
}

let abouts = document.querySelector(".about");
let contacts = document.querySelector(".contect");

function showLetters() {
  letters.classList.remove("hide");
  footers.classList.remove("hide");
}

function hideLetters() {
  letters.classList.add("hide");
  footers.classList.add("hide");
}

function homes() {
  setActiveMenuItem("home");
  mainpag.style.display = "flex";
  card.style.display = "block";
  card2.style.display = "block";
  blogs.style.display = "block";
  abouts.style.display = "none";
  contacts.style.display = "none";
  showLetters();

  // document.getElementById("shop").style.color = "black";
  // document.getElementById("blog").style.color = " block";
  // document.getElementById("home").style.color = "rgb(11, 163, 163)";
  // // document.getElementById("about").style.color = "black";
  // document.getElementById("contact").style.color = "black";
}

function shop() {
  setActiveMenuItem("shop");
  mainpag.style.display = "none";
  blogs.style.display = "none";
  card.style.display = "block";
  card2.style.display = "block";
  abouts.style.display = "none";
  contacts.style.display = "none";
  hideLetters();

  // document.getElementById("blog").style.color = "black";
  // document.getElementById("shop").style.color = "rgb(11, 163, 163)";
  // document.getElementById("home").style.color = "black";
  // document.getElementById("contact").style.color = "black";
}

function blog() {
  setActiveMenuItem("blog");
  mainpag.style.display = "none";
  card.style.display = "none";
  card2.style.display = "none";
  blogs.style.display = "block";
  abouts.style.display = "none";
  contacts.style.display = "none";

  // document.getElementById("blog").style.color = "rgb(11, 163, 163)";
  // document.getElementById("shop").style.color = "black";
  // document.getElementById("home").style.color = "black";
  // document.getElementById("about").style.color = "black";
  // document.getElementById("contact").style.color = "black";
}

function about() {
  setActiveMenuItem("about");
  mainpag.style.display = "none";
  card.style.display = "none";
  card2.style.display = "none";
  blogs.style.display = "none";
  abouts.style.display = "block";
  contacts.style.display = "none";

  // document.getElementById("blog").style.color = "black";
  // document.getElementById("shop").style.color = "black";
  // document.getElementById("home").style.color = "black";
  // // document.getElementById("about").style.color = "black";
  // document.getElementById("contact").style.color = "black";
  // document.getElementById("abouts").style.color = "rgb(11, 163, 163)";
}

function contact() {
  setActiveMenuItem("contact");
  mainpag.style.display = "none";
  card.style.display = "none";
  card2.style.display = "none";
  blogs.style.display = "none";
  abouts.style.display = "none";
  contacts.style.display = "block";

  // document.getElementById("blog").style.color = "black";
  // document.getElementById("shop").style.color = "black";
  // document.getElementById("home").style.color = "black";
  // // document.getElementById("about").style.color = "black";
  // document.getElementById("contact").style.color = "black";
  // document.getElementById("abouts").style.color = "black";
  // document.getElementById("con").style.color = "rgb(11, 163, 163)";
}

/* add to cart  */

function show(img) {
  let newImgs = document.getElementById("newImg");
  console.log(img);
  newImgs.src = img.src;

  mainpag.style.display = "none";
  card.style.display = "none";
  card2.style.display = "none";
  blogs.style.display = "none";
  abouts.style.display = "none";
  contacts.style.display = "none";

  document.querySelector(".cart").style.display = "flex";
}

function addCart() {
  alert("Added To Cart");
  location.reload();
}
