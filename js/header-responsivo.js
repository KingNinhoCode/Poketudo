const menuDesktop = document.querySelector(".nav-desktop")
const btn = document.querySelector(".logo")
const menuMoblie = document.querySelector(".nav-mobile")
const overlay = document.querySelector(".overlay")

btn.addEventListener("click", (event) => {

	if (window.innerWidth < 680) {

		menuMoblie.classList.remove("off")
		menuMoblie.classList.add("on")

		overlay.classList.add("overlay-on")
	}
})

overlay.addEventListener("click", () => {

	menuMoblie.classList.add("off")
	overlay.classList.remove("overlay-on")
	menuMoblie.classList.remove("on")
})

