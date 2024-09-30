export default class ConstTeachers extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.createForm1();
    }

    createForm1() {
        let form = document.createElement('form');
        form.id = 'formulario-maestro';

        let title = document.createElement('h2');
        title.textContent = 'Añadir Maestro';
//NOMBRE
        let nombreLabel = document.createElement('label');
        nombreLabel.setAttribute('for', 'nombre');
        nombreLabel.textContent = 'Nombre:';
        let nombreInput = document.createElement('input');
        nombreInput.type = 'text';
        nombreInput.id = 'nombre';
        nombreInput.name = 'nombre';
        nombreInput.required = true;
//APELLIDO
        let apellidoLabel = document.createElement('label');
        apellidoLabel.setAttribute('for', 'apellido');
        apellidoLabel.textContent = 'Apellidos:';
        let apellidoInput = document.createElement('input');
        apellidoInput.type = 'text';
        apellidoInput.id = 'apellido';
        apellidoInput.name = 'apellido';
        apellidoInput.required = true;
//CALIFICACIONES
        let calLabel = document.createElement('label');
        calLabel.setAttribute('for', 'cal');
        calLabel.textContent = 'id_alificaciones:';
        let calInput = document.createElement('input');
        calInput.type = 'text';
        calInput.id = 'cal';
        calInput.name = 'cal';
        calInput.required = true;
//MATERIAS
        let matLabel = document.createElement('label');
        matLabel.setAttribute('for', 'id_materia');
        matLabel.textContent = 'id_materia';
        let matInput = document.createElement('input');
        matInput.type = 'text';
        matInput.id = 'id_materia';
        matInput.name = 'id_materia';
        matInput.required = true;

        let addButton = document.createElement('button');
        addButton.type = 'submit';
        addButton.textContent = 'Añadir Alumno';

        let updateButton = document.createElement('button');
        updateButton.type = 'button';
        updateButton.textContent = 'Actualizar';

        let deleteButton = document.createElement('button');
        deleteButton.type = 'button';
        deleteButton.id = 'delete';
        deleteButton.textContent = 'Eliminar';

        
        form.appendChild(title);
        form.appendChild(nombreLabel);
        form.appendChild(nombreInput);
        form.appendChild(apellidoLabel);
        form.appendChild(apellidoInput);
        form.appendChild(calLabel);
        form.appendChild(calInput);
        form.appendChild(matLabel);
        form.appendChild(matInput);
        form.appendChild(addButton);
        form.appendChild(updateButton);
        form.appendChild(deleteButton);

        
        const style = document.createElement('style');
        style.textContent = `
           :root {
  --main-color: #fff;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: "Roboto", "sans-serif";
  overflow: hidden;
  background-color: #f0f8ff;
}

.main-header {
  background: #07349cb3;
  width: 100%;
  height: 50px;
}

nav {
  position: absolute;
  left: 0;
  top: 0;
  width: 200px;
  top: 50px;
  height: calc(100vh - 50px);
  background: #07349cb3;
  transform: translateX(-100%);
  transition: 0.4s ease;
}

.navigation li {
  list-style: none;
  width: 100%;
  border-bottom: 1px solid rgba(29, 88, 184, 0.727);
}

.navigation a {
  color: var(--main-color);
  display: block;
  line-height: 3.5;
  padding: 0 10px;
  text-decoration: none;
  transition: 0.4s ease;
}

.navigation a:hover {
  transform: translateX(10%);
}

#btn-nav {
  display: none;
}

#btn-nav:checked ~ nav {
  transform: translateX(0);
}

.btn-nav {
  color: var(--main-color);
  font-size: 30px;
  position: absolute;
  left: 0;
  top: 0;
  cursor: pointer;
  padding: 25px 15px;
  transition: 0.2s ease;
  background: rgba(1, 30, 83, 0.996);
}

.btn-nav:hover {
  background: rgba(13, 27, 135, 0.3);
}

h1,
h2 {
  text-align: center;

  color: #333;
}

form {
  width: 60%;

  margin: 0 auto 20px;

  padding: 15px;

  border: 1px solid #ddd;

  background-color: #f9f9f9;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

form label {
  display: block;

  margin-bottom: 5px;

  font-weight: bold;
}

form input,
form select {
  width: 100%;

  padding: 8px;

  margin-bottom: 15px;

  border: 1px solid #ccc;

  border-radius: 4px;
}

form button {
  width: auto;

  padding: 10px;

  background-color: #4caf50;

  color: white;

  border: none;

  border-radius: 4px;

  cursor: pointer;

  font-size: 16px;
}

form #delete {
    width: auto;
  
    padding: 10px;
  
    background-color: #a03f3f;
  
    color: white;
  
    border: none;
  
    border-radius: 4px;
  
    cursor: pointer;
  
    font-size: 16px;
  }
form button:hover {
  background-color: #45a049;
}

table {
  width: 90%;

  margin: 0 auto;

  border-collapse: collapse;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

th,
td {
  padding: 12px;

  text-align: center;

  font-size: 16px;

  border: 1px solid #ddd;
}

th {
  color: white;
}

.dni-col {
  background-color: #ff9999;
}

.nombre-col {
  background-color: #ffcc99;
}
        `;

        
        this.shadowDOM.appendChild(style);
        this.shadowDOM.appendChild(form);
    }
}

