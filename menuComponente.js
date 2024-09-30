import TableEstudents from "./alumnosComponente.js";
import ConstTeachers from "./maestroComponente.js";
import CostMateria from "./materiaComponente.js";
import CostCalificaciones from "./calificacionesComponente.js";

export default class Boton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.addEventListeners();
  }

  addEventListeners() {
    this.shadowRoot
      .getElementById("buttonAlumnos")
      .addEventListener("click", () => {
        // this.cargarVista("Alumnos");
        this.mostrarAlumo();
      });
    this.shadowRoot
      .getElementById("buttonMaestros")
      .addEventListener("click", () => {
        // this.cargarVista("Maestros");
        this.mostrarMaestro();
      });

    this.shadowRoot
      .getElementById("buttonMaterias")
      .addEventListener("click", () => {
        // this.cargarVista("Materias");
        this.mostrarMateria();
      });

    this.shadowRoot
      .getElementById("buttonCalificaciones")
      .addEventListener("click", () => {
        // this.cargarVista("Calificaciones");
        this.mostrarCalificaciones();
      });
  }

  cargarVista(pagina) {
    const contenidoDiv = this.shadowRoot.getElementById("contenido");

    const vistas = {
      //   Alumnos: "<h1>hola</h1>",
      //   Maestros:
      //     "<h1>Maestros</h1><p>Aquí hay información sobre nuestros maestros.</p>",
      //   Materias:
      //     "<h1>Materias</h1><p>Aquí hay información sobre las materias.</p>",
      //   Calificaciones:
      //     "<h1>Calificaciones</h1><p>Puedes ver tus calificaciones aquí.</p>",
    };

    if (vistas[pagina]) {
      contenidoDiv.innerHTML = vistas[pagina];
    } else {
      contenidoDiv.innerHTML = "<h1>Página no encontrada</h1>";
    }
  }

  mostrarAlumo() {
    const contenidoDiv = this.shadowRoot.getElementById("contenido");
    let contenido1 = new TableEstudents();
    contenidoDiv.innerHTML = "";
    contenidoDiv.appendChild(contenido1);
  }
  mostrarMaestro() {
    const contenidoDiv = this.shadowRoot.getElementById("contenido");
    let contenido2 = new ConstTeachers();
    contenidoDiv.innerHTML = "";
    contenidoDiv.appendChild(contenido2);
  }
  mostrarMateria() {
    const contenidoDiv = this.shadowRoot.getElementById("contenido");
    let contenido3 = new CostMateria();
    contenidoDiv.innerHTML = "";
    contenidoDiv.appendChild(contenido3);
  }
  mostrarCalificaciones() {
    const contenidoDiv = this.shadowRoot.getElementById("contenido");
    let contenido4 = new CostCalificaciones();
    contenidoDiv.innerHTML = "";
    contenidoDiv.appendChild(contenido4);
  }

  render() {
    this.shadowRoot.innerHTML = `


         <style>

                        .contenedor-prueba {
                        display: flex; /* Usar Flexbox para el contenedor principal */
                        justify-content: space-between; /* Espaciado entre los elementos */
                        width: 1700px; /* Usar el 100% del ancho disponible */
                        height: 1000px; /* Altura fija */
                        margin: 50px ; /* Margen superior e inferior */
                        padding: 25px; /* Padding interno */ 
                        background:#f8edeb;
                        }

                        nav {
                            display: flex;
                            flex-direction: column;
                        }
                        button {
                            background-color: #f8edeb;
                            padding: 15px;
                            border: 1;
                            text-align: center;
                            color: black;
                            cursor: pointer;
                            margin: 5px 0;
                            border-radius: 5px;
                        }
                        button:hover {
                            background-color: #f4f3ee;
                        }

                        #contenido {
                        flex-grow: 1; /* Ocupa el espacio restante */
                        padding: 20px; /* Espaciado interno para el contenido */
                        background-color: #f5f5f5; /* Color de fondo para el contenido */
                        border-radius: 5px; /* Bordes redondeados */
                        margin-left: 20px; /* Espacio entre botones y contenido */
                        display: center; 
                        }
                    </style>


            <div class="contenedor-prueba">
            <nav>
            <h1>--------</h1>
            <br>
                <button id="buttonAlumnos">Alumnos</button>
                <button id="buttonMaestros">Maestros</button>
                <button id="buttonMaterias">Materias</button>
                <button id="buttonCalificaciones">Calificaciones</button>
            </nav>
           
            <div id="contenido"></div> 
             </div>
        `;
  }
}
customElements.define("mi-boton", Boton);
