'use strict'

const button = document.getElementById("button")
const intervalInput = document.getElementById("interval_input")
const images = document.getElementsByClassName("img__image")

const getInterval = () => {
	return +intervalInput.value
}

const setTheme = () => {
const date = new Date()
	if(date.getHours() < 8 || date.getHours() > 21){
		document.getElementsByTagName("body")[0].style = "background: black"
		button.classList.add("dark_button")
		intervalInput.classList.add("dark_input")
	} else if(date.getHours() > 8 || date.getHours() < 21) {
		document.getElementsByTagName("body")[0].style = "background: white"
		button.classList.remove("dark_button")
		intervalInput.classList.remove("dark_input")
	}
	}

	setTheme()

button.addEventListener('click', (e) => {
	e.stopPropagation()
	e.preventDefault()
	const imgs = Array.from(images)
	if(getInterval() > 0){
		let i = 0;
			(function showImages() {
					if(i < imgs.length){
					imgs[i].classList.remove("hover")
					setTimeout(() => {
						imgs[i - 1].classList.add("hover")
						showImages()
					},getInterval())
					}
					i = i + 1
					
			})()
	} else {
		alert("Input the number type of interval")
	}
})