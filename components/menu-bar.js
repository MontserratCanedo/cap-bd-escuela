import calificacionesComponent from '../components/calificacionesComponent.js';
import materiasComponent from '../components/materiaComponent.js';
import alumnosComponent from '../components/EstudentComponent.js';
import maestrosComponent from '../components/TeacherComponent.js';

export default class menuBarElement extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
    this.tablas = ['calificaciones', 'materias', 'alumnos', 'maestros'];
  }

  connectedCallback() {
    this.styleMenuBar();
    this.createMenuBar();
    this.rellenarLista();
  }

  styleMenuBar() {
    let styleMenu = document.createElement('style');
    this.shadowRoot.appendChild(styleMenu);

    styleMenu.textContent = `
      nav {
        width: 210px;
      }
      ul{
        list-style: none;
        margin: 0;
        padding: 0;
        line-height: 20px;
      }
      li {
        background: #e7e7e5;
      }
      a:hover {
        background: #e0e0d1;
      }
      a:active {
        background: #333;
        color: #fff;
      }
      a {    
        display: block;
        text-decoration: none;
        color: black; 
        padding: 10px;
        padding-left: 20px;     
      }
      ul li:first-child {
        background: #ffc107;
      }
      ul li:first-child a{
        color: white;
      }
      ul li:first-child a:hover{
        color: black;
      }
      ul li:first-child a:active {
        color: white;
      }
    `;
  }

  createMenuBar() {
    let nav = document.createElement('nav');
    nav.id = "navContainer";

    this.shadowDOM.appendChild(nav)
  }

  rellenarLista() {
    let nav = this.shadowRoot.getElementById('navContainer');
    const divContainer = document.createElement('div');
    divContainer.id = "formContainer";
    this.shadowDOM.appendChild(divContainer);

    for (const ttabla of this.tablas) {
      let li = document.createElement('li');
      let tagA = document.createElement('a');

      if (!customElements.get('form-calificaciones')) {
        window.customElements.define('form-calificaciones', calificacionesComponent);
      }
      if (!customElements.get('form-materias')) {
        window.customElements.define('form-materias', materiasComponent);
      }
      if (!customElements.get('form-alumnos')) {
        window.customElements.define('form-alumnos', alumnosComponent);
      }
      if (!customElements.get('form-maestros')) {
        window.customElements.define('form-maestros', maestrosComponent);
      }

      tagA.addEventListener("click", () => {
        while (divContainer.firstChild) {
          divContainer.removeChild(divContainer.firstChild);
        }

        let component;
        switch (ttabla) {
          case "calificaciones":
            component = document.createElement('form-calificaciones');
            break;
          case "materias":
            component = document.createElement('form-materias');
            break;
          case "alumnos":
            component = document.createElement('form-alumnos');
            break;
          case "maestros":
            component = document.createElement('form-maestros');
            break;
          default:
            break;
        }

        if (component) {
          divContainer.append(component);
        }
      });

      tagA.innerText = ttabla;
      tagA.id = ttabla;
      li.appendChild(tagA);
      nav.appendChild(li);
    }
  }
}