class tableComponent extends HTMLElement{
   
    constructor(){
        super()
        this.shadowDOM = this.attachShadow({ mode: 'open' });
       
       
    }
    

   async editarMateria(id_Materia,Nombre_Materia) {
        const response = await fetch(`/materias/${id_Materia}`, {
            method: 'UPDATE',
        });

        if (response.ok) {
            alert('Materia editada');
            
            document.getElementById('cargarMaterias').click();
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "no se puede editar  !",
                footer: '<a href="#">intentalo mas tarde </a>'
              });
        }
    }
  
         async eliminarMateria(id_Materia) {
            const response = await fetch(`/materias/${id_Materia}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                Swal.fire({
                    title: "Materia eliminada !",
                    text: "materia eliminada satisfactoriamente !",
                    icon: "success"
                  });
                
              
                document.getElementById('cargarMaterias').click();
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "no se puede eliminar !",
                    footer: '<a href="#">intentalo mas tarde </a>'
                  });
            }
        }
    
    crearTabla() {
        let butoncargar = document.createElement('button');
        butoncargar.textContent = 'Cargar';
        butoncargar.id = 'cargarMaterias';

        butoncargar.addEventListener('click', async () => {
            const response = await fetch('/materias');
            const materias = await response.json();
            const tbody = this.shadowDOM.getElementById('materiasTableBody'); 
    
            tbody.innerHTML = ''; 
    
            materias.forEach((materia) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                  
                    <td>${materia.id_Materia}</td>
                    <td class="nombreMateria">${materia.Nombre_Materia}</td>
                    <td>
                        <button  data-id="${materia.id_Materia}" class="eliminar" ><i class="fa-solid fa-lemon">eliminar</i></button>
                        <button edit="${materia.id_Materia}" class="editar">Editar</button>
                    </td>
                `;
                tbody.appendChild(row);
               
            });
            this.shadowDOM.querySelectorAll('.eliminar').forEach((button) => {
                button.addEventListener('click', () => {
                    const idMateria = button.getAttribute('data-id');
                    this.eliminarMateria(idMateria);

                    

            
                });
            });
            this.shadowDOM.querySelectorAll('.editar').forEach((button) => {
                button.addEventListener('click', () => {
                    const idMateria = button.getAttribute('edit');
                    const row = button.closest('tr');
                    const nombreCelda = row.querySelector('.nombreMateria');
            
                    if (button.classList.contains('editar')) {
                      
                        nombreCelda.innerHTML = `
                            <input type="text" value="${nombreCelda.textContent}" class="editNombreInput">
                        `;
                        button.textContent = 'Guardar';
                        button.classList.remove('editar');
                        button.classList.add('guardar');
                    } else if (button.classList.contains('guardar')) {
                     
                        const nuevoNombre = nombreCelda.querySelector('.editNombreInput').value;
                        console.log('Actualizando materia:', idMateria, 'con nombre:', nuevoNombre);
            
                        fetch(`/materias/${idMateria}`, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ nombre_Materia: nuevoNombre })
                        })
                        .then(response => {
                            if (!response.ok) {
                                throw new Error(`Error en la solicitud: ${response.status}`);
                            }
                            return response.json();
                        })
                        .then(data => {
                            console.log('Respuesta del servidor:', data);
                          
                            nombreCelda.textContent = nuevoNombre;
            
                          
                            button.textContent = 'Editar';
                            button.classList.remove('guardar');
                            button.classList.add('editar');
            
                            Swal.fire({
                                title: 'Materia actualizada',
                                text: 'La materia ha sido actualizada correctamente',
                                icon: 'success'
                            });
                        })
                        .catch(error => {
                            console.error('Error al actualizar la materia:', error);
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'No se pudo actualizar la materia',
                            });
                        });
                    }
                });
            });
            ;
            
        });

     
        if (!this.shadowDOM.getElementById('materiasTable')) {
            let table = document.createElement('table');
            table.id = 'materiasTable';

            let thead = document.createElement('thead');
            thead.innerHTML = `
                <tr>
                    <th>ID Materia</th>
                    <th>Nombre Materia</th>
                    <th>Acciones</th>
                </tr>
            `;
            table.appendChild(thead);

            let tbody = document.createElement('tbody');
            tbody.id = 'materiasTableBody'; 
            table.appendChild(tbody);
         
            this.shadowDOM.appendChild(butoncargar);
            this.shadowDOM.appendChild(table);
        }
    }

    stylos() {
        let style = document.createElement('style');

        this.shadowDOM.appendChild(style);

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
            #materiasTable {
                font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
                font-size: 12px;
                margin: 45px;
                width: 580px;
                text-align: left;
                border-collapse: collapse;
            }
            th, td {
                padding: 8px;
                background: #e8edff;
                border-bottom: 1px solid #fff;
                color: #669;
                border-top: 1px solid transparent;
            }
            tr:hover td {
                background: #d0dafd;
                color: #339;
            }
            button{
            width:60px;
            heigh:30px;
            background-color:yellow;
            border-radius:30%;
            }
        `;
    }

    connectedCallback() {
        this.stylos();
        this.crearTabla();
      
    }
   
}

customElements.define('component-table', tableComponent);