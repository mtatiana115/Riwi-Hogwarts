// const prueba = document.getElementById("prueba");
// console.log("🚀  prueba=>", prueba);

const hogwartsInitialFormData = {};

document.querySelector("#hogwartsForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  hogwartsInitialFormData = data;
  asignarCasa(hogwartsInitialFormData);
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

function asignarCasa(estudiante) {
  const cualidadesGryffindor = ["Valor", "Fuerza", "Audacia"];
  const cualidadesHufflepuff = ["Justicia", "Lealtad", "Paciencia"];
  const cualidadesRavenclaw = ["Creatividad", "Erudiccion", "Inteligencia"];
  const cualidadesSlytherin = ["Ambicion", "Determinacion", "Astucia"];

  // Determinar la casa según las cualidades y el linaje
  if (estudiante.cualidades.includes(cualidadesGryffindor)) {
    estudiante.casa = "Gryffindor";
  } else if (estudiante.cualidades.includes(cualidadesHufflepuff)) {
    estudiante.casa = "Hufflepuff";
  } else if (estudiante.cualidades.includes(cualidadesRavenclaw)) {
    estudiante.casa = "Ravenclaw";
  } else if (estudiante.cualidades.includes(cualidadesSlytherin)) {
    estudiante.casa = "Slytherin";
  } else {
    console.log(
      "No se puede determinar la casa. ¡El Sombrero Seleccionador está confundido!"
    );
  }
}

let cena = {
  cenaS: function () {
    estudianteHogwarts.casa = this.asignarCasa();
  },
};

cena.asignarCasa(estudianteHogwarts);
console.log("casa", estudianteHogwarts.casa);
console.log(
  `${estudianteHogwarts.nombre} ha sido seleccionado para la casa de ${estudianteHogwarts.casa}.`
);

let claseTransformaciones = {
  profesor: clases.transformaciones,
  hora: "9 AM",
  boggartTransformado: null,

  realizarTransformacionRiddikulus: function () {
    if (this.boggartTransformado === null) {
      console.log("¡un Boggart aparecion en la clase de transformaciones¡¡ ");
    } else {
      console.log(
        "!Riddikulus¡ El boggart se transforma y da risa. Es ahora un ${this.boggartTransformado.formaTransformada}"
      );
    }
  },
  enfrentarBoggart: function (boggart) {
    console.log("!Un boggart ha aprecido en la clase de Transformaciones¡");
    console.log(` Forma original del boggart: ${boggart.formaOriginal}`);
    this.boggartTransformado = {
      formaOriginal: boggart.formaOriginal,
      formaTransformada: "Payaso gracioso",
    };

    this.realizarTransformacionRiddikulus;
  },
};

let boggartEjemplo = {
  formaOriginal: "Puerco araña",
};

// claseTransformaciones.enfrentarBoggart(boggartEjemplo);

let defensaContraLasArtesOscuras = {
  profesor: clases.defensaContraLasArtesOscuras,
  hora: "10 AM",
  animalPatronus: [
    "Ciervo",
    "Aguila",
    "Dragon",
    "Fenix",
    "Tlacuache",
    "Libelula",
  ],
  generarAnimalPatronus: function () {
    let indiceAleatorio = Math.floor(
      Math.random() * this.animalPatronus.length
    );
    return this.animalPatronus[indiceAleatorio];
  },
};

// // Llamada a la función sin argumentos
// estudianteHogwarts.animalPatronus = defensaContraLasArtesOscuras.generarAnimalPatronus();
// console.log("animal", estudianteHogwarts.animalPatronus);

let clasePociones = {
  profesor: clases.pociones,
  horario: " 10 AM",
  ingredientes: {
    crisopos: 2,
    talloDescurainiaSophia: 1,
  },
  tiempoPreparacion: 5,
  pocionPreparada: false,
  prepararPocion: function () {
    if (
      this.ingredientes.crisopos === 2 &&
      this.ingredientes.talloDescurainiaSophia === 1 &&
      this.tiempoPreparacion === 5
    ) {
      console.log("!Pocion Felix Felicis Preparada con exito¡");
      this.pocionPreparada = true;
    } else {
      console.log("No se pudo preparar la Pocion Felix Felicis");
      this.pocionPreparada = false;
    }
  },

  aplicarConsecuencias: function () {
    if (this.pocionPreparada) {
      console.log("La pocion ha tenido efecto");
      console.log("cambiar profesro de pociones por el de animales magicos. ");
      this.profesor = clases.animalesMagicos;
      clases.pociones = this.profesor;
      console.log(`profesor: ${this.profesor}`);
    } else {
      console.log("No se pueden aplicar consecuencias. ");
    }
  },
};

// clasePociones.prepararPocion();
// clasePociones.aplicarConsecuencias();
