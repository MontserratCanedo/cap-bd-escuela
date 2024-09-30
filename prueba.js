// import {createMateria} from "./services/materiasService.js";
// import * as materiasService from './services/materiasService.js';

const formMateria = document.getElementById("formulario-materia");

formMateria.addEventListener("submit", (e) => {
  e.preventDefault();
});

function addMateria() {
  let nombreMateria = document.getElementById("nombreMateria").value;
  let idCalificacion = document.getElementById("idCalificacion").value;

  if (nombreMateria == "" || idCalificacion == "") {
    alert("campos requeridos");

  } else {
    console.log(nombreMateria, idCalificacion);
    createMateria(nombreMateria, idCalificacion );
  }
};
