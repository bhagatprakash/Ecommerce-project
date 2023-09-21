let card = document.querySelector(".trend");
let card2 = document.getElementById("trendSecond");
let mainpag = document.querySelector(".main");
let blogs = document.querySelector(".trands");

function homes() {
  mainpag.style.display = "flex";
  card.style.display = "block";
  card2.style.display = "block";
  blogs.style.display = "block";

  document.getElementById("blog").style.color = " block";
  document.getElementById("home").style.color = " rgb(11, 163, 163)";
  document.getElementById("about").style.color = "black";
  document.getElementById("contact").style.color = "black";
}

function shop() {
  mainpag.style.display = "none";
  blogs.style.display = "none";

  document.getElementById("blog").style.color = "black";
  document.getElementById("shop").style.color = " rgb(11, 163, 163)";
  document.getElementById("home").style.color = "black";
  document.getElementById("about").style.color = "black";
  document.getElementById("contact").style.color = "black";
}

function blog() {
  mainpag.style.display = "none";
  card.style.display = "none";
  card2.style.display = "none";
  blogs.style.display = "block";

  document.getElementById("blog").style.color = " rgb(11, 163, 163)";
  document.getElementById("home").style.color = "black";
  document.getElementById("about").style.color = "black";
  document.getElementById("contact").style.color = "black";
}
