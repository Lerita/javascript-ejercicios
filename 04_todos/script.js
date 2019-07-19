/**
 - Crear una función agregarTodo que appendee al elemento con id todos-container
 el siguiente html:

    `<div class="card mb-3 bounceIn faster">
        <div class="card-header">
            Titulo Tarea
        </div>
        <div class="card-body">
            <p class="card-text">Descripcion tarea</p>
        </div>
    </div>`
 
    Donde "Titulo tarea" y "Descripcion tarea" son reemplazados por los valores
de los inputs correspondientes. Si alguno de los campos está vacío, no debe 
agregar el todo.
  
- Crear una función eliminarTodos que borre todos los todos del elemento todos-container
- Bindear las funciones con los botones correspondientes
 */



let agregarTodo = function() {
    let todoTitle = document.getElementById('todo-title');
    let tituloTarea = todoTitle.value;

    let todoDescription = document.getElementById('todo-description');
    let descripcion = todoDescription.value;

    let todosContainer = document.getElementById('todos-container');
    if (tituloTarea === "" || descripcion === "") {

    } else {
        todosContainer.innerHTML += `<div class="card mb-3 bounceIn faster">
 <div class="card-header">
     ${tituloTarea}
 </div>
 <div class="card-body">
     <p class="card-text">${descripcion}</p>
 </div>
</div>`;
    }
}

let eliminarTodos = function() {
    let todosContainer = document.getElementById('todos-container');
    todosContainer.innerHTML = "";
}

