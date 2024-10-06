var btnDropdownNavLink1 = document.getElementById("button1");
var dropdownMenu1 = document.getElementById("menu1");

var btnDropdownNavLink2 = document.getElementById("button2");
var dropdownMenu2 = document.getElementById("menu2");

var btnDropdownNavLink3 = document.getElementById("button3");
var dropdownMenu3 = document.getElementById("menu3");

var btnDropdownNavLink4 = document.getElementById("button4");
var dropdownMenu4 = document.getElementById("menu4");

var btnMenuBars = document.getElementById("btn-bars");
var NavbarNavMenu = document.getElementById("menu-bars");
var bars = document.querySelector(".fa-bars");
var xmark = document.querySelector(".fa-xmark");

var angelDown1 = document.getElementById("down1");
var angelRight1 = document.getElementById("right1");

var angelDown2 = document.getElementById("down2");
var angelRight2 = document.getElementById("right2");

var divider1 = document.getElementById("divider1");
var divider2 = document.getElementById("divider2");

btnMenuBars.addEventListener("click", function () {
  NavbarNavMenu.classList.toggle("active");

  if (bars.style.display === "none") {
    bars.style.display = "block";
    xmark.style.display = "none";
  } else {
    bars.style.display = "none";
    xmark.style.display = "block";
  }
});

btnDropdownNavLink1.addEventListener("click", function () {
  dropdownMenu1.classList.toggle("active");
  dropdownMenu2.classList.remove("active");
});

btnDropdownNavLink2.addEventListener("click", function () {
  dropdownMenu2.classList.toggle("active");
  dropdownMenu1.classList.remove("active");
});

btnDropdownNavLink3.addEventListener("click", function () {
  dropdownMenu3.classList.toggle("active");
  dropdownMenu4.classList.remove("active");
  divider1.classList.add("active");
  divider2.classList.add("active");

  angelRight1.classList.toggle("active");
  angelDown1.classList.toggle("active");
  angelRight2.classList.remove("active");
  angelDown2.classList.remove("active");
});

btnDropdownNavLink4.addEventListener("click", function () {
  dropdownMenu4.classList.toggle("active");
  dropdownMenu3.classList.remove("active");
  divider1.classList.add("active");
  divider2.classList.add("active");

  angelRight2.classList.toggle("active");
  angelDown2.classList.toggle("active");
  angelRight1.classList.remove("active");
  angelDown1.classList.remove("active");
});
