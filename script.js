'use strict'

const button = document.getElementById("button")
const intervalInput = document.getElementById("interval_input")
const images = document.getElementsByClassName("img__image")
const tableButton = document.getElementById("tableButton")
const fromInput = document.getElementById("fromInput")
const toInput = document.getElementById("toInput")

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

function createTable(){
	let tableDiv = document.querySelector("#table")

	let table = document.createElement("table")
	table.border="3"


	for (let i = 0; i < 10; i++) {
		let tr = document.createElement('tr');
		
		for (let j = 0; j < 10; j++) {
			let td = document.createElement('td');
			td.innerText = getRandomIntInclusive(+fromInput.value, +toInput.value)
			if(j%2 === 0 && i%2 === 0){
				td.bgColor="black"
				td.style = "color: white"
			}
			if(j%2 !== 0 && i%2 !== 0){
				td.bgColor="black"
				td.style = "color: white"
			}
			tr.appendChild(td);
		}
		
		table.appendChild(tr);
		
	}

	tableDiv.appendChild(table)
}

tableButton.addEventListener('click',(e)=>{
	e.stopPropagation()
	e.preventDefault()

	createTable()
})

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min); 
}