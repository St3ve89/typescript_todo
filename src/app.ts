import { Todos } from './lib/Todos'

let todos = new Todos();


// Load all todos

function loadTodos() {
  todos.getTodos().then((todos) => {
    console.log(todos)
  })
}

loadTodos()