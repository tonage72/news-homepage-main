const hamburgerMenu = document.querySelector(".hamburger-menu");
const navigation = document.querySelector("nav");

hamburgerMenu.addEventListener("click", (e) => {
	hamburgerMenu.style.display = "none";
	navigation.style.display = "block";
});