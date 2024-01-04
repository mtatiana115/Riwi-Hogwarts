let hogwartsForm = document.querySelector("#hogwartsForm");
let modalWindow = document.querySelector("#modalWindow");
let mainPage = document.querySelector("#mainPage");
let resultsPage = document.querySelector("#resultsPage");
let resultsContent = document.querySelector("#resultsContent");
let darkArtsClass = document.querySelector("#darkArtsClass");
let transfigurationClass = document.querySelector("#transfigurationClass");
let tryAgainButton = document.querySelector("#tryAgain");
let layer = document.querySelector("#layer");

function navigator() {
	if (location.hash.startsWith("#results")) {
		const hasForm = localStorage.getItem("hogwartsForm") ? true : false;
		if (hasForm) {
			mainPage.classList.remove("--visible");
			resultsPage.classList.add("--visible");
			goToResults();
		} else {
			location.hash = "";
		}
	} else {
		resultsPage.classList.remove("--visible");
		mainPage.classList.add("--visible");
	}
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

window.addEventListener("DOMContentLoaded", navigator, false);
window.addEventListener("hashchange", navigator, false);

hogwartsForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const data = Object.fromEntries(new FormData(e.target));
	assignHouse(data);
});

function assignHouse(student) {
	// Determinar la casa según las cualidades y el linaje
	if (student.qualities === "Courage, Strength, Boldness") {
		student.house = "Gryffindor";
	} else if (student.qualities === "Justice, Loyalty, Patience") {
		student.house = "Hufflepuff";
	} else if (student.qualities === "Creativity, Erudition, Intelligence") {
		student.house = "Ravenclaw";
	} else if (student.qualities === "Ambition, Determination, Cunning") {
		student.house = "Slytherin";
	} else {
		console.log(
			"No se puede determinar la casa. ¡El Sombrero Seleccionador está confundido!"
		);
	}
	const inputImage = document.querySelector("#avatar");
	const file = inputImage.files[0];

	if (file) {
		const lector = new FileReader();
		lector.onload = function (e) {
			const dataURL = e.target.result;
			const finalStudentForm = {
				...student,
				avatar: {
					name: file.name,
					size: file.size,
					type: file.type,
					dataURL: dataURL,
				},
			};
			localStorage.setItem("hogwartsForm", JSON.stringify(finalStudentForm));
			location.hash = "#results";
			goToResults();
		};
		lector.readAsDataURL(file);
	}
}

function goToResults() {
	const studentForm = localStorage.getItem("hogwartsForm");
	const studentFormResults = JSON.parse(studentForm);
	location.hash = "#results";
	resultsContent.innerHTML = `
	<div class="__main-container">
		<div class="__image">
			<img class="__preview" id="imagePreview">
		</div>
		<div class="__texts" id="texts"> 
			<p class="text-body--1">Name: ${studentFormResults.name}</p>
			<p class="text-body--1">Age: ${studentFormResults.age}</p>
			<p class="text-body--1">Family: ${studentFormResults.family}</p>
			<p class="text-body--1">Lineage: ${studentFormResults.lineage}</p>
			<p class="text-body--1">Qualities: ${studentFormResults.qualities}</p>
			<p class="text-body--1">House: ${studentFormResults.house}</p>
			<p class="text-body--1 __patronus" id="patronus"></p>
		</div>
	</div>`;
	darkArtsClass.addEventListener("click", generateAnimalPatronus, false);
	transfigurationClass.addEventListener(
		"click",
		goToTransfigurationClass,
		false
	);
	tryAgainButton.addEventListener("click", tryAgain, false);
	showImage();
}

function showImage() {
	const imagePreview = document.querySelector("#imagePreview");
	const studentForm = localStorage.getItem("hogwartsForm");
	const studentFormResults = JSON.parse(studentForm);

	const avatar = studentFormResults.avatar;

	if (avatar && avatar.dataURL) {
		imagePreview.src = avatar.dataURL;
	}
}

function generateAnimalPatronus() {
	const animalPatronus = [
		"Deer",
		"Eagle",
		"Dragon",
		"Phoenix",
		"Opossum",
		"Dragonfly",
	];
	let index = Math.floor(Math.random() * animalPatronus.length);
	let patronus = document.querySelector("#patronus");
	patronus.classList.add("--appear");
	patronus.innerText = `Your patronus is: ${animalPatronus[index]}`;
}

function goToTransfigurationClass() {
	const boggartAppering = `
		<p class="__text text-heading--2" id="modalMessage">"A Boggart appeared in the transfiguration class!"</p>
		<button class="__button" id="fightBoggart" type="button">
			<span class="text-body--1"> Fight Boggart </span>
		</button>
		`;
	showModal(boggartAppering);

	let fightBoggart = document.querySelector("#fightBoggart");
	fightBoggart.addEventListener("click", defeatBoggart, false);
}

function defeatBoggart() {
	let modalMessage = document.querySelector("#modalMessage");
	modalMessage.innerText =
		"Riddikulus! The Boggart transforms and becomes funny.";
	setTimeout(() => {
		removeModal();
	}, 2000);
}

function showModal(template) {
	modalWindow.classList.add("--visible");
	modalWindow.innerHTML = template;
	layer.classList.add("--visible");
	layer.addEventListener("click", removeModal, false);
}

function removeModal() {
	modalWindow.classList.remove("--visible");
	layer.classList.remove("--visible");
}

function tryAgain() {
	localStorage.removeItem("hogwartsForm");
	location.hash = "";
}
