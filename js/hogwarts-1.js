// const prueba = document.getElementById("prueba");
// console.log("🚀  prueba=>", prueba);

let hogwartsForm = document.querySelector("#hogwartsForm");
let hogwartsInitialFormData = {};
let modalWindow = document.querySelector("#modalWindow");
let mainPage = document.querySelector("#mainPage");
let resultsPage = document.querySelector("#resultsPage");
let resultsContent = document.querySelector("#resultsContent");
let darkArtsClass = document.querySelector("#darkArtsClass");
let transfigurationClass = document.querySelector("#transfigurationClass");
let layer = document.querySelector("#layer");

function navigator() {
	if (location.hash.startsWith("#results")) {
		mainPage.classList.remove("--visible");
		resultsPage.classList.add("--visible");
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
	hogwartsInitialFormData = data;
	asignarCasa(hogwartsInitialFormData);
	goToResults(hogwartsInitialFormData);
});

function asignarCasa(student) {
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
}

function goToResults(studentFormResults) {
	location.hash = "#results";
	hogwartsForm = {};
	resultsContent.innerHTML = `
	<div class="__main-container">
		<div class="__image">
			<p class="text-body--1">Avatar: ${studentFormResults.avatar}</p>
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
}
function generateAnimalPatronus() {
	const animalPatronus = [
		"Ciervo",
		"Aguila",
		"Dragon",
		"Fenix",
		"Tlacuache",
		"Libelula",
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
	}, 3000);
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

// let clasePociones = {
// 	profesor: clases.pociones,
// 	horario: " 10 AM",
// 	ingredientes: {
// 		crisopos: 2,
// 		talloDescurainiaSophia: 1,
// 	},
// 	tiempoPreparacion: 5,
// 	pocionPreparada: false,
// 	prepararPocion: function () {
// 		if (
// 			this.ingredientes.crisopos === 2 &&
// 			this.ingredientes.talloDescurainiaSophia === 1 &&
// 			this.tiempoPreparacion === 5
// 		) {
// 			console.log("!Pocion Felix Felicis Preparada con exito¡");
// 			this.pocionPreparada = true;
// 		} else {
// 			console.log("No se pudo preparar la Pocion Felix Felicis");
// 			this.pocionPreparada = false;
// 		}
// 	},

// 	aplicarConsecuencias: function () {
// 		if (this.pocionPreparada) {
// 			console.log("La pocion ha tenido efecto");
// 			console.log("cambiar profesro de pociones por el de animales magicos. ");
// 			this.profesor = clases.animalesMagicos;
// 			clases.pociones = this.profesor;
// 			console.log(`profesor: ${this.profesor}`);
// 		} else {
// 			console.log("No se pueden aplicar consecuencias. ");
// 		}
// 	},
// };

// clasePociones.prepararPocion();
// clasePociones.aplicarConsecuencias();
