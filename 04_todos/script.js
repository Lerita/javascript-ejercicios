let agregarTodo = function () {
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

let eliminarTodos = function () {
    let todosContainer = document.getElementById('todos-container');
    todosContainer.innerHTML = "";
}

