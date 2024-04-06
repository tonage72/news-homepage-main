const hamburgerMenu = document.querySelector(".hamburger-menu");
const navigation = document.querySelector("nav");
const hamburgerClose = document.querySelector(".hamburger-close");
const overlay = document.querySelector(".overlay");

overlay.style.zIndex = "1";
navigation.style.zIndex = "3";

hamburgerMenu.addEventListener("click", (e) => {
	overlay.style.display = "block";
	navigation.style.display = "block";
});

hamburgerClose.addEventListener("click", (e) =>{
	navigation.style.display = "none";
	overlay.style.display = "none";
});