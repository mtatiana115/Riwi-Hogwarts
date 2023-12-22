// const prueba = document.getElementById("prueba");
// console.log("🚀  prueba=>", prueba);

let hogwartsInitialFormData = {};
let formResponse = document.querySelector("#formResponse");

document.querySelector("#hogwartsForm").addEventListener("submit", (e) => {
	e.preventDefault();
	const data = Object.fromEntries(new FormData(e.target));
	hogwartsInitialFormData = data;
	asignarCasa(hogwartsInitialFormData);

	showMessage(hogwartsInitialFormData);
});

let clases = {
	transformaciones: "Profesor Kevin Slughorn",
	herbologia: "Profesor Maria Umbridge",
	pociones: "Profesor Liliana McGonagall",
	encantamientos: "Profesora Jackie",
	defensaContraLasArtesOscuras: "Profesor Robinson Snape ",
	animalesMagicos: "Profesor David Filch",
	historiaDeMagia: "Profesor Ronald Sprout",
};

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

function showMessage(studentForm) {
	formResponse.classList.add("--visible");
	formResponse.innerHTML = `
	<div>
		<p class="text-body--1">Avatar: ${studentForm.avatar}</p>
		<p class="text-body--1">Name: ${studentForm.name}</p>
		<p class="text-body--1">Age: ${studentForm.age}</p>
		<p class="text-body--1">Family: ${studentForm.family}</p>
		<p class="text-body--1">Lineage: ${studentForm.lineage}</p>
		<p class="text-body--1">Qualities: ${studentForm.qualities}</p>
		<p class="text-body--1">House: ${studentForm.house}</p>
	</div>`;
	setTimeout(() => {
		formResponse.classList.remove("--visible");
	}, 3000);
}

let cena = {
	cenaS: function () {
		estudianteHogwarts.casa = this.asignarCasa();
	},
};

// cena.asignarCasa();
// console.log("casa", estudianteHogwarts.casa);
// console.log(
// 	`${estudianteHogwarts.nombre} ha sido seleccionado para la casa de ${estudianteHogwarts.casa}.`
// );

// let claseTransformaciones = {
// 	profesor: clases.transformaciones,
// 	hora: "9 AM",
// 	boggartTransformado: null,

// 	realizarTransformacionRiddikulus: function () {
// 		if (this.boggartTransformado === null) {
// 			console.log("¡un Boggart aparecion en la clase de transformaciones¡¡ ");
// 		} else {
// 			console.log(
// 				"!Riddikulus¡ El boggart se transforma y da risa. Es ahora un ${this.boggartTransformado.formaTransformada}"
// 			);
// 		}
// 	},
// 	enfrentarBoggart: function (boggart) {
// 		console.log("!Un boggart ha aprecido en la clase de Transformaciones¡");
// 		console.log(` Forma original del boggart: ${boggart.formaOriginal}`);
// 		this.boggartTransformado = {
// 			formaOriginal: boggart.formaOriginal,
// 			formaTransformada: "Payaso gracioso",
// 		};

// 		this.realizarTransformacionRiddikulus;
// 	},
// };

// let boggartEjemplo = {
// 	formaOriginal: "Puerco araña",
// };

// // claseTransformaciones.enfrentarBoggart(boggartEjemplo);

// let defensaContraLasArtesOscuras = {
// 	profesor: clases.defensaContraLasArtesOscuras,
// 	hora: "10 AM",
// 	animalPatronus: [
// 		"Ciervo",
// 		"Aguila",
// 		"Dragon",
// 		"Fenix",
// 		"Tlacuache",
// 		"Libelula",
// 	],
// 	generarAnimalPatronus: function () {
// 		let indiceAleatorio = Math.floor(
// 			Math.random() * this.animalPatronus.length
// 		);
// 		return this.animalPatronus[indiceAleatorio];
// 	},
// };

// // // Llamada a la función sin argumentos
// // estudianteHogwarts.animalPatronus = defensaContraLasArtesOscuras.generarAnimalPatronus();
// // console.log("animal", estudianteHogwarts.animalPatronus);

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
